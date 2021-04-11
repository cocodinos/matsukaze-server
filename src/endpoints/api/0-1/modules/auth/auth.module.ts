import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local/local.strategy';
import { JwtStrategy } from './strategies/jwt/jwt.strategy';
import { UserModule } from '../user/user.module';

@Global()
@Module({
  imports: [
    UserModule
  ],
  providers: [LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
