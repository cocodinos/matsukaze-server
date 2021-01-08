import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { I18nBundleElement } from 'src/models/i18n.bundle.element.model';
import { I18nBundle } from 'src/models/i18n.bundle.model';
import { ModelService } from '../../services/model/model.service';
import { I18nBundleController } from './i18n-bundle.controller';
import { I18nBundleService } from './i18n-bundle.service';

@Global()
@Module({
  imports: [
    SequelizeModule.forFeature([
      I18nBundle,
      I18nBundleElement
    ])
  ],
  providers: [I18nBundleService, ModelService],
  controllers: [I18nBundleController],
  exports: [I18nBundleService]
})
export class I18nBundleModule {}
