import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '../role/role.model';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User)private userModel: typeof User) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(email: string): Promise<User> {
    const user = await this.userModel.findOne({
      attributes: ['id', 'email', 'hash'],
      where: {email},
      include: [{
        model: Role,
        attributes: ['id', 'name'],
        through: {
          attributes: []
        }
      }]
    });
    return user;
  }

  async create(email: string, password: string, roles: number[]): Promise<User> {
    return null;
  }

  async delete(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
