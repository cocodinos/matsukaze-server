import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Beat } from 'src/models/beat.model';
import { DialogueLine } from 'src/models/dialogue.line.model';
import { DataService } from 'src/services/data/data.service';

@Injectable()
export class BeatService {

  attributes: any = ['id', 'sceneId', 'position', 'action', 'notes'];
  order: any = [['position', 'ASC']];
  include: any = [{model: DialogueLine, attributes: ['id']}];
  updateFields: any = ['actId', 'position', 'title', 'summary', 'notes'];
  parentKey: string = "sceneId"

  constructor(
    @InjectModel(Beat)private model: typeof Beat,
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
