import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller("api/0.1/user")
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Post("register")
  async register(@Body() data) {
    if(data.email && data.password) {
      let user = await this.userService.register(data, null);
      return user;
    }
    return null;
  }

}
