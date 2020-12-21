import { Injectable } from '@nestjs/common';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async verifyUser(email: string, password: string): Promise<User> {
    return this.userService.findOne(email).then( user => {
      if (user && bcrypt.compare(password, user.hash)) return user; else return null;
    });
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.genSalt(10).then(salt => {
      return bcrypt.hash(password, salt);
    });
  }

}
