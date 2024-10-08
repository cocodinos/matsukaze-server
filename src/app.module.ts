import { Module } from '@nestjs/common';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { I18nModule, I18nJsonParser, QueryResolver, HeaderResolver, AcceptLanguageResolver, CookieResolver } from 'nestjs-i18n';
import { SequelizeModule } from '@nestjs/sequelize';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { environment } from './../env/environment.test';

// Sequelize data models
import { User } from './models/user.model';
import { Role } from './models/role.model';
import { UserRole } from './models/user.role.model';
import { Project } from './models/project.model';
import { ProjectUser } from './models/project.user.model';
import { Story } from './models/story.model';
import { Act } from './models/act.model';
import { SceneSequence } from './models/scene-sequence.model';
import { Scene } from './models/scene.model';
import { Beat } from './models/beat.model';
import { MomentSequence } from './models/moment-sequence.model';
import { Moment } from './models/moment.model';
import { Language } from './models/language.model';
import { Page } from './models/page.model';
import { Publication } from './models/publication.model';
import { DialogueLine } from './models/dialogue.line.model';
import { I18nBundle } from './models/i18n.bundle.model';
import { I18nBundleElement } from './models/i18n.bundle.element.model';
import { PublicationPage } from './models/publication.page.model';
import { StoryStructureElement } from './models/story-structure-element.model';

// Enpoint modules
import { UserModule } from './endpoints/api/0-1/modules/user/user.module';
import { AuthModule } from './endpoints/api/0-1/modules/auth/auth.module';
import { StoryStructureElementModule } from './endpoints/api/0-1/modules/story-structure-element/story-structure-element.module';
import { I18nBundleModule } from './endpoints/api/0-1/modules/i18n-bundle/i18n-bundle.module';
import { ModelService } from './endpoints/api/0-1/services/model/model.service';
import { StoryModule } from './endpoints/api/0-1/modules/story/story.module';
import { EmailService } from './endpoints/api/0-1/services/email/email.service';


@Module({
  imports: [
    AuthModule,
    UserModule,
    AuthModule,
    StoryStructureElementModule,
    StoryModule,
    I18nBundleModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: environment.sequelize.host,
      port: environment.sequelize.port,
      username: environment.sequelize.username,
      password: environment.sequelize.password,
      database: environment.sequelize.name,
      models: [
        User,
        Role,
        UserRole,
        Project,
        ProjectUser,
        StoryStructureElement,
        Story,
        Act,
        SceneSequence,
        Scene,
        Beat,
        MomentSequence,
        Moment,
        Language,
        Page,
        Publication,
        DialogueLine,
        I18nBundle,
        I18nBundleElement,
        PublicationPage
      ],
      logging: environment.sequelize.logging
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, "..", '/public/client/'),
    }),
    I18nModule.forRoot({
      fallbackLanguage: "en",
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, '..', '/i18n/'),
        watch: environment.i18n.watch
      },
      resolvers: [
        { use: QueryResolver, options: ['lang', 'locale', 'l'] },
        new HeaderResolver(['x-custom-lang']),
        AcceptLanguageResolver,
        new CookieResolver(['lang', 'locale', 'l']),
      ],
    }),
    MailerModule.forRoot({
      transport: {
        host: environment.mail.host,
        port: environment.mail.port,
        secure: environment.mail.secure,
        auth: {
          user: environment.mail.user,
          pass: environment.mail.password
        }
      },
      defaults: {
        from: environment.mail.name,
      },
      template: {
        dir: process.cwd() + '/emails/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        },
      },
    })
  ],
  controllers: [],
  providers: [ModelService, EmailService],
})
export class AppModule {}
