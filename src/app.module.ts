import { Module } from '@nestjs/common';
import * as path from 'path';
import { I18nModule, I18nJsonParser, QueryResolver, HeaderResolver, AcceptLanguageResolver, CookieResolver } from 'nestjs-i18n';
import { SequelizeModule } from '@nestjs/sequelize';

// Enpoint models
import { RootController } from './endpoints/root/root.controller';
import { DataService } from './services/data/data.service';
import { UserModule } from './endpoints/api/0-1/modules/user/user.module';
import { AuthModule } from './endpoints/api/0-1/modules/auth/auth.module';
import { StoryModule } from './endpoints/api/0-1/modules/story/story.module';
import { ActModule } from './endpoints/api/0-1/modules/act/act.module';
import { SceneModule } from './endpoints/api/0-1/modules/scene/scene.module';
import { BeatModule } from './endpoints/api/0-1/modules/beat/beat.module';

// Sequelize data models
import { User } from './models/user.model';
import { Role } from './models/role.model';
import { UserRole } from './models/user.role.model';
import { Project } from './models/project.model';
import { ProjectUser } from './models/project.user.model';
import { Story } from './models/story.model';
import { Act } from './models/act.model';
import { Scene } from './models/scene.model';
import { Beat } from './models/beat.model';
import { Language } from './models/language.model';
import { Page } from './models/page.model';
import { Publication } from './models/publication.model';
import { DialogueLine } from './models/dialogue.line.model';
import { I18nBundle } from './models/i18n.bundle.model';
import { I18nBundleText } from './models/i18n.bundle.text.model';
import { PublicationPage } from './models/publication.page.model';



@Module({
  imports: [
    UserModule,
    AuthModule,
    StoryModule,
    ActModule,
    SceneModule,
    BeatModule,
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'test.aethon.sg',
      port: 3306,
      username: 'root',
      password: 'w3WqrDNYDjmH',
      database: 'matsukaze',
      models: [ User, Role, UserRole, Project, ProjectUser, Story, Act, Scene, Beat, Language, Page, Publication, DialogueLine, I18nBundle, I18nBundleText, PublicationPage ],
      // logging: false
    }),
    I18nModule.forRoot({
      fallbackLanguage: "en",
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, '..', '/i18n/'),
        watch: true // to remove this in deployment for speed
      },
      resolvers: [
        { use: QueryResolver, options: ['lang', 'locale', 'l'] },
        new HeaderResolver(['x-custom-lang']),
        AcceptLanguageResolver,
        new CookieResolver(['lang', 'locale', 'l']),
      ],
    }),
    AuthModule,
  ],
  controllers: [RootController],
  providers: [DataService],
})
export class AppModule {}
