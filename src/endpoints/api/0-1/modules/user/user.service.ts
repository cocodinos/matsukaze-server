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
  private error: any = {
    user: {
      create: {
        exists: "user.create.exists",
        fail: "user.create.fail"
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
      if(params?.email && params?.password) {
        obj = await this._findOne({email:params.email}).then((user) => {
          if(!user) return this._hashPassword(params.password);
          throw this.error.user.create.exists;
        }).then(password => {
          if(password) return this.userModel.create({
            email: params.email,
            hash: password
          });
          throw this.error.user.create.fail;
        }).then(user => {
          if(user) return this.userRoleModel.create({
            userId: user.id,
            roleId: 3
          });
          throw this.error.role.create.fail;
        }).then(data => {
          if(data) return this._findOne({email: params.email});
          throw this.error.user.create.fail;
        }).then(user => {
          if(user) return this.modelService.generateDTO(user, MatsukazeObjectTypes.user);
          throw this.error.user.create.fail;
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
    const user = await this._findOne({email: email});
    if (user && await bcrypt.compare(password, user.hash)) {
      return this.modelService.generateDTO(user, MatsukazeObjectTypes.user)
    };
    return null;
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
}
