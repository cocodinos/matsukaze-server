import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LocalAuthGuard } from './strategies/local/local-auth.guard';


@Controller('api/0.1/auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Request() req) {
    return this.userService.login(req.user);
  }

  @Post("logout")
  async logout() { return true; }

}
