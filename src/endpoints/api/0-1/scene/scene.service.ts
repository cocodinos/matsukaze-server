import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Scene } from 'src/models/scene.model';
import { Beat } from 'src/models/beat.model';

@Injectable()
export class SceneService {

  constructor(
    @InjectModel(Scene)private sceneModel: typeof Scene,
  ) {}

  async getActScenes(actId:string): Promise<any> {
    var story = await this.findAllActScenes({actId: actId});
    return story;
  }

  async findAllActScenes(params: any): Promise<any> {
    try {
      return this.sceneModel.findAll({
        where: params,
        include: [
          {
            model: Beat,
            attributes: ['id']
          },
        ],
        order: [['position', 'ASC']],
        attributes: ['id', 'actId', 'position', 'title', 'summary', 'notes'],
      });
    } catch {
      return null;
    }
  }

  async updateScene(params: any): Promise<Scene> {
    try {
      var scene;
      scene = await this.findOneScene({id: params?.id})
      if(scene) {
        scene.update(params, {fields: ['actId', 'position', 'title', 'summary', 'notes']});
      }
      return scene;
    } catch {
      return null;
    }
  }

  async findOneScene(params: any): Promise<any> {
    try {
      return this.sceneModel.findOne({
        where: params,
        include: [
          {
            model: Beat,
            attributes: ['id']
          },
        ],
        order: [['position', 'ASC']],
        attributes: ['id', 'actId', 'position', 'title', 'summary', 'notes'],
      });
    } catch {
      return null;
    }
  }
}
