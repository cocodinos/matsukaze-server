import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from 'src/models/role.model';
import { User } from 'src/models/user.model';
import { UserRole } from 'src/models/user.role.model';
import * as bcrypt from 'bcrypt';
import { ModelService } from '../../services/model/model.service';
import { MatsukazeObjectTypes } from '../../services/model/model';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../../services/email/email.service';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class UserService {

  private _hostname: string = 'http://localhost:4200/'
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
        fail: "user.confirm.fail",
        invalidCode: "user.confirm.invalidCode"
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
    private readonly emailService: EmailService,
    private readonly i18n: I18nService
  ) {}

  login(user: any): any {
    user.token = this.jwtService.sign({ username: user.username, sub: user.id })
    return user
  }

  async register(params: any, roles: number[], lang:string): Promise<any> {
    try {
      if(params?.email && params?.password) {
        return this._findOne({email:params.email}).then((user) => {
          if(!user) return this._create(params.email, params.password, lang);
          if(!user.active) {
            return this._reissueActivationToken(params.email, params.password, lang);
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

  async requestReset(params: any): Promise<any> {
    try {
      if(params?.email) {
        return this._findOne({email:params.email}).then(async (user) => {
          if(user.active) {
            user.activationCode = this._generateActivationToken(32);
            user.save();
            const emailParams: any = {
              template: "reset",
              subject: await this.i18n.translate("i18n.email.reset.subject", {lang: params.lang, args: params}),
              context: {
                body: {
                  header: await this.i18n.translate("i18n.email.reset.context.body.header", {lang: params.lang, args: params}),
                  intro: await this.i18n.translate("i18n.email.reset.context.body.intro", {lang: params.lang, args: params}),
                  link: this._hostname + "auth/reset?code=" + user.activationCode + "&email=" + params.email,
                  button: await this.i18n.translate("i18n.email.reset.context.body.button", {lang: params.lang, args: params}),
                  thanks: await this.i18n.translate("i18n.email.reset.context.body.thanks", {lang: params.lang, args: params})
                }
              }
            }
            return this.emailService.sendEmail(params.email, emailParams);
          } else {
            return null;
          }
        });
      }
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
          let user = this.modelService.generateDTO(userData, MatsukazeObjectTypes.user);
          user["username"]=userData.email;
          user = this.login(user);
          return user;
        }
        return this.modelService.generateDTO({type:this._error.user.confirm.invalidCode}, MatsukazeObjectTypes.error);
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

  private async _reissueActivationToken(email: string, password: string, lang: string): Promise<any> {
    const activationCode:string = this._generateActivationToken(32);
    let userData:any = null;

    return this._hashPassword(password).then(hash => {
      return this._update({email: email}, {activationCode: activationCode, hash: hash})
    }).then(async user => {
      userData = user;
      if(user) {
        const emailParams: any = {
          template: "register",
          subject: await this.i18n.translate("i18n.email.register.subject", {lang: lang, args: null}),
          context: {
            body: {
              header: await this.i18n.translate("i18n.email.register.context.body.header", {lang: lang, args: null}),
              intro: await this.i18n.translate("i18n.email.register.context.body.intro", {lang: lang, args: null}),
              link: this._hostname + "auth/confirm?code=" + user.activationCode + "&email=" + email,
              button: await this.i18n.translate("i18n.email.register.context.body.button", {lang: lang, args: null}),
              thanks: await this.i18n.translate("i18n.email.register.context.body.thanks", {lang: lang, args: null})
            }
          }
        }
        return this.emailService.sendEmail(user.email, emailParams);
      } else {
        return null;
      }
    }).then(()=> {
      return userData;
    })
  }

  private _generateActivationToken(size: number = 32): string {
    return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
  }

  // BASE CRUD OPERATIONS
  private async _create(email: string, password: string, lang: string): Promise<User> {
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
    }).then(async user => {
      if(user) {
        userData = user;
        const emailParams: any = {
          template: "register",
          subject: await this.i18n.translate("i18n.email.register.subject", {lang: lang, args: null}),
          context: {
            body: {
              header: await this.i18n.translate("i18n.email.register.context.body.header", {lang: lang, args: null}),
              intro: await this.i18n.translate("i18n.email.register.context.body.intro", {lang: lang, args: null}),
              link: this._hostname + "auth/confirm?code=" + user.activationCode + "&email=" + email,
              button: await this.i18n.translate("i18n.email.register.context.body.button", {lang: lang, args: null}),
              thanks: await this.i18n.translate("i18n.email.register.context.body.thanks", {lang: lang, args: null})
            }
          }
        }
        return this.emailService.sendEmail(user.email, emailParams);
      } else {
        throw this._error.user.register.emailFail;
      }
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
