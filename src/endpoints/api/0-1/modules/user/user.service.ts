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
  constructor(
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(UserRole) private userRoleModel: typeof UserRole,
    private modelService: ModelService
  ) {}

  async create(params: any, roles: number[]): Promise<any> {
    try {
      let user: any = null;
      if(params?.email && params?.password) {
        // MAKE SURE NO TWO ACCOUNTS WITH THE SAME EMAIL
        user = this.userModel.create({
          email: params.email,
          hash: await this._hashPassword(params.password)
        }).then(data => {
          const userId = data.id;
          console.log(userId)
          return this.userRoleModel.create({
            userId: userId,
            roleId: 3
          });
        }).then(data => {
          return this.findOne(params.email);
        });
      }
      return user;
    } catch {
      return null;
    }
  }

  async verify(email: string, password: string): Promise<any> {
    var dto: any = null;
    const user: any = await this.findOne(email);
    if (user && await bcrypt.compare(password, user.hash)) {
      dto = this.modelService.generateDTO(user, MatsukazeObjectTypes.user);
    };
    return dto;
  }

  async findAll(): Promise<any[]> {
    return this.userModel.findAll();
  }

  async findOne(email: string): Promise<any> {
    const user = await this.userModel.findOne({
      attributes: ['id', 'email', 'hash'],
      where: {email},
      include: [{model: Role, attributes: ['id', 'name'], through: {attributes: []}}]
    });
    const dto = this.modelService.generateDTO(user, MatsukazeObjectTypes.user)
    return dto;
  }

  async delete(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  private async _hashPassword(password: string): Promise<string> {
    return bcrypt.genSalt(10).then(salt => {
      return bcrypt.hash(password, salt);
    });
  }
}
