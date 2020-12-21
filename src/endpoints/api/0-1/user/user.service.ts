import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User)private userModel: typeof User) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({where: {email}});
  }

  async create(email: string, password: string) {
    
  }

  async delete(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
