import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Scene } from 'src/models/scene.model';
import { DataService } from 'src/services/data/data.service';
import { SceneController } from './scene.controller';
import { SceneService } from './scene.service';

@Global()
@Module({
  imports: [
    SequelizeModule.forFeature([Scene]),
  ],
  controllers: [SceneController],
  providers: [SceneService, DataService],
  exports: [SceneService]
})
export class SceneModule {}
