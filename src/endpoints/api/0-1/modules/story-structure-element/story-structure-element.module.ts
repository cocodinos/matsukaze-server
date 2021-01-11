import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Act } from 'src/models/act.model';
import { Beat } from 'src/models/beat.model';
import { DialogueLine } from 'src/models/dialogue.line.model';
import { I18nBundle } from 'src/models/i18n.bundle.model';
import { MomentSequence } from 'src/models/moment-sequence.model';
import { Moment } from 'src/models/moment.model';
import { SceneSequence } from 'src/models/scene-sequence.model';
import { Scene } from 'src/models/scene.model';
import { StoryStructureElement } from 'src/models/story-structure-element.model';
import { Story } from 'src/models/story.model';
import { ModelService } from '../../services/model/model.service';
import { I18nBundleModule } from '../i18n-bundle/i18n-bundle.module';
import { StoryStructureElementController } from './story-structure-element.controller';
import { StoryStructureElementService } from './story-structure-element.service';

@Global()
@Module({
  imports: [
    I18nBundleModule,
    SequelizeModule.forFeature([
      StoryStructureElement,
      Story,
      Act,
      SceneSequence,
      Scene,
      Beat,
      MomentSequence,
      Moment,
      DialogueLine,
      I18nBundle
    ])
  ],
  providers: [StoryStructureElementService, ModelService],
  controllers: [StoryStructureElementController],
  exports: [StoryStructureElementService]
})
export class StoryStructureElementModule {}
