import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Act } from 'src/models/act.model';
import { Beat } from 'src/models/beat.model';
import { DialogueLine } from 'src/models/dialogue.line.model';
import { I18nBundle } from 'src/models/i18n.bundle.model';
import { Scene } from 'src/models/scene.model';
import { StoryStructureElement } from 'src/models/story-structure-element.model';
import { Story } from 'src/models/story.model';
import { ModelService } from '../../services/model/model.service';
import { I18nBundleModule } from '../i18n-bundle/i18n-bundle.module';
import { ActController } from './story-structure-element.controller';
import { StoryStructureElementService } from './story-structure-element.service';

@Global()
@Module({
  imports: [
    I18nBundleModule,
    SequelizeModule.forFeature([
      StoryStructureElement,
      Story,
      Act,
      Scene,
      Beat,
      DialogueLine,
      I18nBundle
    ])
  ],
  providers: [StoryStructureElementService, ModelService],
  controllers: [ActController],
  exports: [StoryStructureElementService]
})
export class StoryStructureElementModule {}
