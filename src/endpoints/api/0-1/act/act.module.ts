import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Act } from 'src/models/act.model';
import { ActService } from './act.service';

@Global()
@Module({
  imports: [
    SequelizeModule.forFeature([Act]),
  ],
  providers: [ActService],
  exports: [ActService]
})
export class ActModule {}
