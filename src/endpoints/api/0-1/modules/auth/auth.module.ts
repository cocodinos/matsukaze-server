import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './secrets/jwt.secrets';
import { JwtStrategy } from './strategies/jwt/jwt.strategy';
import { DataService } from '../../data/data.service';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, DataService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
