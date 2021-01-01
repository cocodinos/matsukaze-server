import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller("api/0.1/user")
export class UserController {

  constructor(private readonly userService: UserService) {

  }

  @Get(":id")
  async root(@Param() params) {
    if(params.id) {
      // this.userService.findOne(params.id)
      return(await this.userService.findOne(params.id));
    }
    return null;
  }

}
