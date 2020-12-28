import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Act } from 'src/models/act.model';
import { Scene } from 'src/models/scene.model';
import { DataService } from 'src/services/data/data.service';

@Injectable()
export class ActService {

  attributes: any = ['id', 'storyId', 'title', 'position', 'summary', 'notes'];
  order: any = [['position', 'ASC']];
  include: any = [{model: Scene, attributes: ['id']}];
  updateFields: any = ['storyId', 'title', 'position', 'summary', 'notes'];

  constructor(
    @InjectModel(Act)private model: typeof Act,
    private dataService: DataService
  ) {}

  async create(params: any): Promise<Act> {
    var maxPosition = await this.dataService.getMaxPosition({model: this.model, where: {storyId: params?.storyId}})
    params.position = maxPosition+1;
    return await this.dataService.create({
      model: this.model,
      values: params
    })
  }

  async get(params: any): Promise<Act> {
    return await this.dataService.findOne({
      model: this.model,
      where: params,
      include: this.include,
      attributes: this.attributes
    })
  }

  async gets(params: any): Promise<Act[]> {
    return await this.dataService.findAll({
      model: this.model,
      where: params,
      order: this.order,
      include: this.include,
      attributes: this.attributes
    })
  }

  async update(params: any): Promise<Act> {
    return await this.dataService.update({
      model: this.model,
      where: {id: params.id},
      params: params,
      fields: this.updateFields
    });
  }

  async delete(params: any): Promise<Act> {
    return await this.dataService.delete({
      model: this.model,
      where: params
    });
  }
}
