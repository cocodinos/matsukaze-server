import { Injectable } from '@nestjs/common';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private jwtService: JwtService) {}

  async verifyUser(email: string, password: string): Promise<any> {
    var pojo: any = null;
    const user: User = await this.userService.findOne(email);
    if (user && await bcrypt.compare(password, user.hash)) {
      pojo = { id: user.id, email: user.email, roles: user.roles }
    };
    return pojo;
  }

  async login(user: any) {
    return {
      access_token: this.jwtService.sign({ username: user.username, sub: user.id }),
      user: user
    };
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.genSalt(10).then(salt => {
      return bcrypt.hash(password, salt);
    });
  }

}
