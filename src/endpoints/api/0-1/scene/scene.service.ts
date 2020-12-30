import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Scene } from 'src/models/scene.model';
import { Beat } from 'src/models/beat.model';
import { DataService } from 'src/services/data/data.service';

@Injectable()
export class SceneService {

  attributes: any = ['id', 'actId', 'position', 'title', 'summary', 'notes'];
  order: any = [['position', 'ASC']];
  include: any = [{model: Beat, attributes: ['id']}];
  updateFields: any = ['actId', 'position', 'title', 'summary', 'notes'];
  parentKey: string = "actId"

  constructor(
    @InjectModel(Scene)private model: typeof Scene,
    private dataService: DataService
  ) {}

  async create(params: any): Promise<any> {
    var maxPosition = await this.dataService.getMaxPosition({model: this.model, where: {[this.parentKey]: params[this.parentKey]}})
    if(!maxPosition) maxPosition = 0;
    params.position = maxPosition+1;
    console.log(params);
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
    var scene = await this.get(params);
    return await this.dataService.delete({
      model: this.model,
      where: params
    }).then( data => {
      if(data) {
        this.dataService.updatePositions({
          model: this.model,
          where: {
            [this.parentKey]: scene.actId
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
