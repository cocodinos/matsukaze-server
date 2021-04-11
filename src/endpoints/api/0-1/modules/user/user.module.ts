import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import { UserRole } from 'src/models/user.role.model';
import { ModelService } from '../../services/model/model.service';
import { jwtConstants } from '../auth/secrets/jwt.secrets';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    SequelizeModule.forFeature([User, UserRole]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    })
  ],
  providers: [UserService, ModelService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
