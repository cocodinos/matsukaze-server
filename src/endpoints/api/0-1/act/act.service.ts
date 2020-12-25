import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Act } from 'src/models/act.model';
import { Scene } from 'src/models/scene.model';

@Injectable()
export class ActService {

  constructor(
    @InjectModel(Act)private actModel: typeof Act,
  ) {}

  async getStoryActs(storyId:string): Promise<any> {
    var story = await this.findAllStoryActs({storyId: storyId});
    return story;
  }

  async findAllStoryActs(params: any): Promise<any> {
    console.log(params);
    try {
      return this.actModel.findAll({
        where: params,
        include: [
          {
            model: Scene,
            attributes: ['id']
          },
        ],
        order: [['position', 'ASC']],
        attributes: ['id', 'storyId', 'title', 'position', 'summary', 'notes'],
      });
    } catch {
      return null;
    }
  }
}
