import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Act } from 'src/models/act.model';
import { Scene } from 'src/models/scene.model';

@Injectable()
export class ActService {

  attributes:any = ['id', 'storyId', 'title', 'position', 'summary', 'notes'];
  order:any = [['position', 'ASC']];

  constructor(
    @InjectModel(Act)private actModel: typeof Act,
  ) {}

  async getStoryActs(storyId:string): Promise<any> {
    var story = await this.findAllStoryActs({storyId: storyId});
    return story;
  }

  async findOne(params: any): Promise<Act> {
    try {
      return this.actModel.findOne({
        where: params,
        include: [
          {
            model: Scene,
            attributes: ['id']
          },
        ],
        order: this.order,
        attributes: this.attributes,
      });
    } catch {
      return null;
    }
  }

  async findAllStoryActs(params: any): Promise<Act[]> {
    try {
      return this.actModel.findAll({
        where: params,
        include: [
          {
            model: Scene,
            attributes: ['id']
          },
        ],
        order: this.order,
        attributes: this.attributes,
      });
    } catch {
      return null;
    }
  }

  async updateAct(params: any): Promise<Act> {
    try {
      var act: Act | PromiseLike<Act>;
      act = await this.findOne({id: params?.id})
      if(act) {
        act.update(params, {fields: ['storyId', 'title', 'position', 'summary', 'notes']});
      }
      return act;
    } catch {
      return null;
    }
  }

  async getMaxPosition(params: any): Promise<number> {
    return this.actModel.max('position', {where: params});
  }
}
