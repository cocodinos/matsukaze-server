import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './strategies/jwt/jwt-auth.guard';
import { LocalAuthGuard } from './strategies/local/local-auth.guard';


@Controller('api/0.1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post("register")
  async register() {
    return null;
  }

  @Post("logout")
  async logout() {
    return true;
  }

  @UseGuards(JwtAuthGuard)
  @Get("test")
  async test() {
    return this.authService.verifyUser("konstantinos.dimitriou@aethon.sg", "test");
  }

}
