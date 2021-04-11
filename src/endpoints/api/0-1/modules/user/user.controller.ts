import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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

  @Get("confirm")
  async confirm(@Query() data) {
    let user = this.userService.confirm(data);
    return user;
  }

}
