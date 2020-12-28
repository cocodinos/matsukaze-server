import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Act } from 'src/models/act.model';
import { Story } from 'src/models/story.model';
import { DataService } from 'src/services/data/data.service';

@Injectable()
export class StoryService {

  attributes: any = ['id', 'title', 'position'];
  order: any = [['position', 'ASC']];
  include: any = [{model: Act, attributes: ['id']}];
  updateFields: any = ['projectId', 'position', 'title'];

  constructor(
    @InjectModel(Story)private model: typeof Story,
    private dataService: DataService
  ) {}

  async create(params: any): Promise<Story> {
    var maxPosition = await this.dataService.getMaxPosition({model: this.model, where: {projectId: params?.projectId}})
    params.position = maxPosition+1;
    return await this.dataService.create({
      model: this.model,
      values: params
    })
  }

  async get(params: any): Promise<Story> {
    return await this.dataService.findOne({
      model: this.model,
      where: params,
      include: this.include,
      attributes: this.attributes
    })
  }

  async gets(params: any): Promise<Story[]> {
    return await this.dataService.findAll({
      model: this.model,
      where: params,
      order: this.order,
      include: this.include,
      attributes: this.attributes
    })
  }

  async update(params: any): Promise<Story> {
    return await this.dataService.update({
      model: this.model,
      where: {id: params.id},
      params: params,
      fields: this.updateFields
    });
  }

  async delete(params: any): Promise<Story> {
    return await this.dataService.delete({
      model: this.model,
      where: params
    });
  }
}
