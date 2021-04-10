import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from 'src/models/role.model';
import { User } from 'src/models/user.model';
import { UserRole } from 'src/models/user.role.model';
import * as bcrypt from 'bcrypt';
import { ModelService } from '../../services/model/model.service';
import { MatsukazeObjectTypes } from '../../services/model/model';

@Injectable()
export class UserService {
  private _error: any = {
    user: {
      create: {
        exists: "user.create.exists",
        fail: "user.create.fail"
      },
      login: {
        fail: "user.login.fail"
      }
    },
    role: {
      create: {
        fail: "role.create.fail"
      }
    }
  }

  constructor(
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(UserRole) private userRoleModel: typeof UserRole,
    private modelService: ModelService
  ) {}

  async create(params: any, roles: number[]): Promise<any> {
    try {
      let obj: any = null;
      let activationCode: string = null;
      if(params?.email && params?.password) {
        obj = await this._findOne({email:params.email, active: true}).then((user) => {
          if(!user) return this._hashPassword(params.password);
          throw this._error.user.create.exists;
        }).then(password => {
          if(password) {
            activationCode = this._generateActivationToken(32);
            return this.userModel.create({
              email: params.email,
              hash: password,
              active: false,
              activationCode: activationCode
            });
          }
          throw this._error.user.create.fail;
        }).then(user => {
          if(user) return this.userRoleModel.create({
            userId: user.id,
            roleId: 3
          });
          throw this._error.role.create.fail;
        }).then(data => {
          if(data) return this._findOne({email: params.email});
          throw this._error.user.create.fail;
        }).then(user => {
          if(user) return this.modelService.generateDTO(user, MatsukazeObjectTypes.user);
          throw this._error.user.create.fail;
        }).catch(error => {
          return this.modelService.generateDTO({type:error}, MatsukazeObjectTypes.error);
        });
      }
      return obj;
    } catch {
      return null;
    }
  }

  async verify(email: string, password: string): Promise<any> {
    const user = await this._findOne({email: email, active: true});
    if (user && await bcrypt.compare(password, user.hash)) {
      return this.modelService.generateDTO(user, MatsukazeObjectTypes.user)
    };
    return null;
  }

  private async _sendConfirmationEmail(activationCode: string): Promise<boolean> {
    return true;
  }

  private async _findOne(params: any): Promise<any> {
    const user = await this.userModel.findOne({
      attributes: ['id', 'email', 'hash'],
      where: params,
      include: [{model: Role, attributes: ['id', 'name'], through: {attributes: []}}]
    });
    return user;
  }

  private async _hashPassword(password: string): Promise<string> {
    return bcrypt.genSalt(10).then(salt => {
      return bcrypt.hash(password, salt);
    });
  }

  private _generateActivationToken(size: number): string {
    return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
  }
}
