import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Scene } from 'src/models/scene.model';
import { Beat } from 'src/models/beat.model';
import { ActService } from '../act/act.service';

@Injectable()
export class SceneService {

  attributes: any = ['id', 'actId', 'position', 'title', 'summary', 'notes'];
  order: any = [['position', 'ASC']];

  constructor(
    @InjectModel(Scene)private sceneModel: typeof Scene,
  ) {}

  async getActScenes(actId: string): Promise<any> {
    var story = await this.findAllActScenes({actId: actId});
    return story;
  }

  async createScene(params: any): Promise<Scene> {
    var scene = null;
    if(params?.actId) {
      var maxPosition = await this.getMaxPosition({actId: params?.actId})
      if(maxPosition) {
        params.position = maxPosition+1;
        scene = await this.sceneModel.create(params);
      }
    }
    return scene;
  }

  async deleteScene(params: any): Promise<Scene> {
    var scene = await this.findOne(params);
    scene?.destroy();
    return scene;
  }

  async findOne(params: any): Promise<any> {
    try {
      return this.sceneModel.findOne({
        where: params,
        include: [{model: Beat, attributes: ['id']}],
        order: this.order,
        attributes: this.attributes,
      });
    } catch {
      return null;
    }
  }

  async findAllActScenes(params: any): Promise<any> {
    try {
      return this.sceneModel.findAll({
        where: params,
        include: [{model: Beat, attributes: ['id']}],
        order: this.order,
        attributes: this.attributes,
      });
    } catch {
      return null;
    }
  }

  async updateScene(params: any): Promise<Scene> {
    try {
      var scene = await this.findOne({id: params?.id})
      if(scene) { scene.update(params, {fields: ['actId', 'position', 'title', 'summary', 'notes']}); }
      return scene;
    } catch {
      return null;
    }
  }

  async getMaxPosition(params: any): Promise<number> {
    return this.sceneModel.max('position', {where: params});
  }

}
