import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as sassMiddleware from 'node-sass-middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.use(
    sassMiddleware({
      src: join(__dirname, '..', 'scss'),
      dest: join(__dirname, '..', 'public', 'css'),
      debug: true,
      outputStyle: 'compressed'
    })
  );

  await app.listen(3000);
}
bootstrap();
