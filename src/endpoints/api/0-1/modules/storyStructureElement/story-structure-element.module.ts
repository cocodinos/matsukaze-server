import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Act } from 'src/models/act.model';
import { Beat } from 'src/models/beat.model';
import { DialogueLine } from 'src/models/dialogue.line.model';
import { Scene } from 'src/models/scene.model';
import { StoryStructureElement } from 'src/models/story-structure-element.model';
import { Story } from 'src/models/story.model';
import { DataService } from '../../data/data.service';
import { ActController } from './story-structure-element.controller';
import { StoryStructureElementService } from './story-structure-element.service';

@Global()
@Module({
  imports: [
    SequelizeModule.forFeature([StoryStructureElement]),
    SequelizeModule.forFeature([Story]),
    SequelizeModule.forFeature([Act]),
    SequelizeModule.forFeature([Scene]),
    SequelizeModule.forFeature([Beat]),
    SequelizeModule.forFeature([DialogueLine]),
  ],
  providers: [StoryStructureElementService, DataService],
  controllers: [ActController],
  exports: [StoryStructureElementService]
})
export class StoryStructureElementModule {}
