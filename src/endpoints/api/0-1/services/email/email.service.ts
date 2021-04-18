import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {

  constructor(
    private readonly mailerService: MailerService,
  ) {}

  async sendEmail(email: string, params: any): Promise<any> {
    return await this.mailerService.sendMail({
        to: email,
        from: 'contact@aethon.sg',
        subject: params.subject,
        template: params.template,
        context: params.context
      })
      .then(() => { return true; })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

}
