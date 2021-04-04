import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import { UserRole } from 'src/models/user.role.model';
import { ModelService } from '../../services/model/model.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature([User, UserRole])],
  providers: [UserService, ModelService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
