import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/user.model';
import { DataService } from '../../data/data.service';

@Injectable()
export class AuthService {
  constructor(private readonly dataService: DataService, private jwtService: JwtService) {}

  async verifyUser(email: string, password: string): Promise<any> {
    var pojo: any = null;
    const user: User = await this.dataService.findUser(email);
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
