import { Module } from '@nestjs/common';
import * as path from 'path';
import { I18nModule, I18nJsonParser, QueryResolver, HeaderResolver, AcceptLanguageResolver, CookieResolver } from 'nestjs-i18n';
import { SequelizeModule } from '@nestjs/sequelize';

// Enpoint models
import { RootController } from './endpoints/root/root.controller';

import { UserModule } from './endpoints/api/0-1/modules/user/user.module';
import { AuthModule } from './endpoints/api/0-1/modules/auth/auth.module';
import { StoryStructureElementModule } from './endpoints/api/0-1/modules/story-structure-element/story-structure-element.module';
import { DTOService } from './endpoints/api/0-1/services/data/dto.service';

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
import { I18nBundleElement } from './models/i18n.bundle.element.model';
import { PublicationPage } from './models/publication.page.model';
import { StoryStructureElement } from './models/story-structure-element.model';

@Module({
  imports: [
    UserModule,
    AuthModule,
    StoryStructureElementModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'NuckyThompson123',
      database: 'matsukaze',
      models: [
        User,
        Role,
        UserRole,
        Project,
        ProjectUser,
        StoryStructureElement,
        Story,
        Act,
        Scene,
        Beat,
        Language,
        Page,
        Publication,
        DialogueLine,
        I18nBundle,
        I18nBundleElement,
        PublicationPage
      ],
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
  providers: [DTOService],
})
export class AppModule {}
