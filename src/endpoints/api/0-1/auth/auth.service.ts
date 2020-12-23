import { Injectable } from '@nestjs/common';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async verifyUser(email: string, password: string): Promise<User> {
    var user: User = null;
    const tmpUser: User = await this.userService.findOne(email);
    if (tmpUser && await bcrypt.compare(password, tmpUser.hash)) user = tmpUser;
    return user;
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.genSalt(10).then(salt => {
      return bcrypt.hash(password, salt);
    });
  }

}
