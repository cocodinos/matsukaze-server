import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Act } from 'src/models/act.model';
import { DataService } from 'src/services/data/data.service';
import { ActController } from './act.controller';
import { ActService } from './act.service';

@Global()
@Module({
  imports: [
    SequelizeModule.forFeature([Act]),
  ],
  providers: [ActService, DataService],
  controllers: [ActController],
  exports: [ActService]
})
export class ActModule {}
