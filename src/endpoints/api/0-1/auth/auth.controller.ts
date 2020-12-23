import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { User } from '../user/user.model';
import { AuthService } from './auth.service';

@Controller('api/0.1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() params): Promise<User> {
    var user: Promise<User>;
    if(params?.email && params?.password) { user = this.authService.verifyUser(params.email, params.password); }
    if(await user) { return user; }
    else { throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);}
  }

  @Post("register")
  async register(): Promise<User> {
    return null;
  }

  @Post("logout")
  async logout(): Promise<boolean> {
    return true;
  }

  @Get("test")
  async test(): Promise<User> {
    return this.authService.verifyUser("konstantinos.dimitriou@aethon.sg", "test");
  }

}
