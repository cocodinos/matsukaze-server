import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Beat } from 'src/models/beat.model';
import { DataService } from 'src/services/data/data.service';
import { BeatController } from './beat.controller';
import { BeatService } from './beat.service';


@Global()
@Module({
  imports: [
    SequelizeModule.forFeature([Beat]),
  ],
  controllers: [BeatController],
  providers: [BeatService, DataService],
  exports: [BeatService]
})
export class BeatModule {}
