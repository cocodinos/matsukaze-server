import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from 'src/models/role.model';
import { User } from 'src/models/user.model';
import { UserRole } from 'src/models/user.role.model';
import * as bcrypt from 'bcrypt';
import { ModelService } from '../../services/model/model.service';
import { MatsukazeObjectTypes } from '../../services/model/model';
import { MailerService } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  private _endpoint: string = 'http://localhost:4200/auth/confirm?code='
  private _error: any = {
    user: {
      register: {
        exists: "user.register.exists",
        fail: "user.register.fail",
        emailFail: "user.register.emailFail",
        credentials: "user.register.credentials",
      },
      login: {
        fail: "user.login.fail"
      },
      confirm: {
        fail: "user.confirm.fail"
      }
    },
    role: {
      create: {
        fail: "role.create.fail"
      }
    }
  }

  constructor(
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(UserRole) private userRoleModel: typeof UserRole,
    private jwtService: JwtService,
    private readonly modelService: ModelService,
    private readonly mailerService: MailerService
  ) {}

  async login(user: any) {
    user.token = this.jwtService.sign({ username: user.username, sub: user.id })
    return user
  }

  async register(params: any, roles: number[], test?:boolean): Promise<any> {
    try {
      if(params?.email && params?.password) {
        return this._findOne({email:params.email}).then((user) => {
          if(!user) return this._create(params.email, params.password, test);
          if(!user.active) {
            return this._reissueActivationToken(params.email, params.password, test);
          } else {
            throw this._error.user.register.exists;
          }
        }).then(user => {
          // CHECK IF THIS IS A USER/ NEED ERROR THROWS
          if(user) return this.modelService.generateDTO(user, MatsukazeObjectTypes.user);
          throw this._error.user.register.fail;
        }).catch(error => {
          return this.modelService.generateDTO({type:error}, MatsukazeObjectTypes.error);
        });
      }
      return this.modelService.generateDTO({type:this._error.user.register.credentials}, MatsukazeObjectTypes.error);
    } catch(error) {
      return this.modelService.generateDTO({type:error}, MatsukazeObjectTypes.error);
    }
  }

  async confirm(params: any): Promise<any> {
    if(params?.activationCode && params?.email) {
      return this._findOne({email: params.email, activationCode: params.activationCode}).then(userData => {
        if(userData) {
          userData.activationCode = null;
          userData.active = true;
          userData.save();
          userData["username"]=userData.email;
          this.login(userData);
          let user = this.modelService.generateDTO(userData, MatsukazeObjectTypes.user);
          return user;
        }
        return this.modelService.generateDTO({type:this._error.user.confirm.fail}, MatsukazeObjectTypes.error);
      })
    }
    return null;
  }

  async verify(email: string, password: string): Promise<any> {
    const user = await this._findOne({email: email, active: true});
    if (user && await bcrypt.compare(password, user.hash)) {
      return this.modelService.generateDTO(user, MatsukazeObjectTypes.user)
    };
    return null;
  }

  private async _hashPassword(password: string): Promise<string> {
    return bcrypt.genSalt(10).then(salt => {
      return bcrypt.hash(password, salt);
    });
  }

  private async _reissueActivationToken(email: string, password: string, test?: boolean): Promise<any> {
    const activationCode:string = this._generateActivationToken(32);
    let userData:any = null;

    return this._hashPassword(password).then(hash => {
      return this._update({email: email}, {activationCode: activationCode, hash: hash})
    }).then(user => {
      userData = user;
      if(user) return this._sendConfirmationEmail(email, activationCode);
    }).then(()=> {
      return userData;
    })
  }

  private async _sendConfirmationEmail(email: string, activationCode: string): Promise<any> {
    const link: string = this._endpoint + activationCode + '&email=' + email
    return await this.mailerService.sendMail({
        to: email,
        from: 'contact@aethon.sg',
        subject: 'Activate your Aethon Publishing account',
        text: 'Click on ' + link,
        html: '<p>Thank you for registering with Aethon publishing!</p><p>Click on <a href="' + link + '">' + link + '</a> to activate your account</p>'
      })
      .then(() => { return true; })
      .catch((error) => { console.log(error)} );
  }

  private _generateActivationToken(size: number): string {
    return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
  }

  // BASE CRUD OPERATIONS
  private async _create(email: string, password: string, test?: boolean): Promise<User> {
    const activationCode:string = this._generateActivationToken(32);
    const hash: string = await this._hashPassword(password);
    let userData: any = null;

    return this.userModel.create({
      email: email,
      hash: hash,
      active: false,
      activationCode: activationCode
    }).then(userData => {
      return this.userRoleModel.create({
        userId: userData.id,
        roleId: 3
      })
    }).then(roleData => {
      if(roleData) return this._findOne({email: email});
      throw this._error.user.register.createFail;
    }).then(user => {
      userData = user;
      if(user) return this._sendConfirmationEmail(user.email, activationCode);
      throw this._error.user.register.emailFail;
    }).then(() => {
      return userData;
    })
  }

  private async _findOne(params: any): Promise<any> {
    const user = await this.userModel.findOne({
      attributes: ['id', 'email', 'hash', 'active', 'activationCode'],
      where: params,
      include: [{model: Role, attributes: ['id', 'name'], through: {attributes: []}}]
    });
    return user;
  }

  private async _update(where: any, data: any): Promise<any> {
    return await this.userModel.update(
      data,
      {where: where}).then(users => {
      if(users) return this._findOne(where); else throw this._error.user.register.createFail;
    })
  }

}
