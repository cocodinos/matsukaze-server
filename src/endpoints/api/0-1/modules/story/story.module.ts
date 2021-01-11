import { Global, Module } from '@nestjs/common';
import { ModelService } from '../../services/model/model.service';
import { StoryStructureElementModule } from '../story-structure-element/story-structure-element.module';
import { StoryController } from './story.controller';
import { StoryService } from './story.service';

@Global()
@Module({
  imports: [StoryStructureElementModule],
  providers: [StoryService, ModelService],
  controllers: [StoryController],
  exports: [StoryService]
})
export class StoryModule {}
