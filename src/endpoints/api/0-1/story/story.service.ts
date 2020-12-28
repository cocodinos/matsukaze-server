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
  parentKey: string = "projectId"

  constructor(
    @InjectModel(Story)private model: typeof Story,
    private dataService: DataService
  ) {}

  async create(params: any): Promise<any> {
    var maxPosition = await this.dataService.getMaxPosition({model: this.model, where: {[this.parentKey]: params[this.parentKey]}})
    if(!maxPosition) maxPosition = 0;
    params.position = maxPosition+1;
    return await this.dataService.create({
      model: this.model,
      values: params
    })
  }

  async get(params: any): Promise<any> {
    return await this.dataService.findOne({
      model: this.model,
      where: params,
      attributes: this.attributes
    })
  }

  async gets(params: any): Promise<any[]> {
    return await this.dataService.findAll({
      model: this.model,
      where: params,
      order: this.order,
      attributes: this.attributes
    })
  }

  async update(params: any): Promise<any> {
    return await this.dataService.update({
      model: this.model,
      where: {id: params.id},
      params: params,
      fields: this.updateFields
    });
  }

  async delete(params: any): Promise<any> {
    return await this.dataService.delete({
      model: this.model,
      where: params
    });
  }
}
