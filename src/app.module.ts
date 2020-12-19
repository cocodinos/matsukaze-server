import { Module } from '@nestjs/common';
import * as path from 'path';
import { I18nModule, I18nJsonParser, QueryResolver, HeaderResolver, AcceptLanguageResolver, CookieResolver } from 'nestjs-i18n';
import { HomeController } from './controllers/home/home.controller';
import { DataService } from './services/data/data.service';
import { RootController } from './controllers/root/root.controller';


@Module({
  imports: [
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
    })
  ],
  controllers: [HomeController, RootController],
  providers: [DataService],
})
export class AppModule {}
