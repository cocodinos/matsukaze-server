import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/0.1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login() {
    return this.authService.verifyUser("konstantinos.dimitriou@aethon.sg", "karagkouna123");
  }

  @Post("logout")
  async logout() { return("Logout"); }

  @Post("register")
  async register() { return("Register"); }

  @Get("test")
  async test() {
    return this.authService.verifyUser("konstantinos.dimitriou@aethon.sg", "karagkouna123");
  }

}
