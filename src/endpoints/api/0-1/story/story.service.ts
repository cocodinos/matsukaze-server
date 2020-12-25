import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Act } from 'src/models/act.model';
import { Story } from 'src/models/story.model';

@Injectable()
export class StoryService {

  constructor(
    @InjectModel(Story)private storyModel: typeof Story,
  ) {}

  async getStory(storyId:string): Promise<any> {
    var story = await this.findOneStory({id: storyId});
    return story;
  }

  async findOneStory(params: any): Promise<any> {
    try {
      return this.storyModel.findOne({
        where: params,
        include: [
          {
            model: Act,
            attributes: ['id']
          },
        ],
        order: [['position', 'ASC']],
        attributes: ['id', 'title', 'position'],
      }).then(data => {return data.toJSON()});
    } catch {
      return null;
    }
  }

  async findAllStories(params: any): Promise<any> {
    try {
      return this.storyModel.findAll({
        where: params,
        include: [
          {
            model: Act,
            attributes: ['id']
          },
        ],
        order: [['position', 'ASC']],
        attributes: ['id', 'title', 'position'],
      });
    } catch {
      return null;
    }
  }
}
