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
  parentKey: string = "storyId"

  constructor(
    @InjectModel(Act)private model: typeof Act,
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

  async move(params: any): Promise<any> {
    return await this.dataService.move({
      model: this.model,
      parentKey: this.parentKey,
      id: params.id,
      fromParentId: params.fromParentId,
      toParentId: params.toParentId,
      fromPosition: params.fromPosition,
      toPosition: params.toPosition
    });
  }

  async delete(params: any): Promise<any> {
    var act = await this.get(params);
    return await this.dataService.delete({
      model: this.model,
      where: params
    }).then( data => {
      if(data) {
        this.dataService.updatePositions({
          model: this.model,
          where: {
            [this.parentKey]: act.storyId
          }
        });
        return true
      }
      else {
        return false;
      }
    })
  }
}
