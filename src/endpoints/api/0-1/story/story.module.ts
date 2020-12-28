import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Story } from 'src/models/story.model';
import { DataService } from 'src/services/data/data.service';
import { StoryController } from './story.controller';
import { StoryService } from './story.service';

@Global()
@Module({
  imports: [
    SequelizeModule.forFeature([Story])
  ],
  providers: [StoryService, DataService],
  controllers: [StoryController],
  exports: [StoryService]
})
export class StoryModule {}
