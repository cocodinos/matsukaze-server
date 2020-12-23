import { Module } from '@nestjs/common';
import * as path from 'path';
import { I18nModule, I18nJsonParser, QueryResolver, HeaderResolver, AcceptLanguageResolver, CookieResolver } from 'nestjs-i18n';
import { SequelizeModule } from '@nestjs/sequelize';

import { RootController } from './endpoints/root/root.controller';
import { DataService } from './services/data/data.service';
import { User } from './endpoints/api/0-1/user/user.model';
import { UserModule } from './endpoints/api/0-1/user/user.module';
import { AuthModule } from './endpoints/api/0-1/auth/auth.module';
import { UserRole } from './endpoints/api/0-1/userRole/user.role.model';
import { Role } from './endpoints/api/0-1/role/role.model';

@Module({
  imports: [
    UserModule,
    AuthModule,
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'test.aethon.sg',
      port: 3306,
      username: 'root',
      password: 'w3WqrDNYDjmH',
      database: 'matsukaze',
      models: [User, Role, UserRole]
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
    AuthModule
  ],
  controllers: [RootController],
  providers: [DataService],
})
export class AppModule {}
