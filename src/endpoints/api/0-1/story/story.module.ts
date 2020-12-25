import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Story } from 'src/models/story.model';
import { ActModule } from '../act/act.module';
import { StoryController } from './story.controller';
import { StoryService } from './story.service';

@Global()
@Module({
  imports: [
    SequelizeModule.forFeature([Story]),
    ActModule
  ],
  providers: [StoryService],
  controllers: [StoryController],
  exports: [StoryService]
})
export class StoryModule {}
