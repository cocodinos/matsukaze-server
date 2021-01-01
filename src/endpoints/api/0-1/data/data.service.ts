import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/models/user.model';

@Injectable()
export class DataService {
  constructor(private sequelize: Sequelize) {}

  create(params: any): Promise<any> {
    try {
      return params.model.create(params.values);
    } catch {
      return this.errorHandler()
    }
  }

  async findUser(email: string): Promise<any> {
    try {
      return User.findOne({where: {email: email}});
    } catch {

    }
  }

  async findOne(params: any): Promise<any> {
    try {
      return params.model.findOne({
        where: params.where,
        include: params?.include,
        order: params?.order,
        attributes: params?.attributes
      })
    } catch {
      return this.errorHandler()
    }
  }

  async findAll(params: any): Promise<any> {
    try {
      return params.model.findAll({
        where: params.where,
        include: params.include,
        order: params.order,
        attributes: params.attributes,
      });
    } catch {
      this.errorHandler()
    }
  }

  update(params: any): Promise<any> {
    try {
      return params.model.update(
        params.params,
        {where: params.where},
        {fields: params.fields}
      )
    } catch {
      return this.errorHandler()
    }
  }

  async move(params: any): Promise<any> {
    try {
      if(params.fromParentId!=params.toParentId) {
        // move element imported from another parent to end of list
        params.fromPosition = await this.getMaxPosition({model: params.model, where: {[params.parentKey]: params.toParentId}})+1;
        await this.update({
          model: params.model,
          where: {
            id: params.id
          },
          params: {
            position: params.fromPosition,
            [params.parentKey]: params.toParentId
          }
        })
      }
      const iterFrom: number = (params.fromPosition <= params.toPosition)?params.fromPosition:params.toPosition;
      const iterTo: number = (iterFrom === params.fromPosition)?params.toPosition:params.fromPosition;
      const positionChange: number = (params.fromPosition <= params.toPosition)?-1:1;
      return await this.findAll({
        model: params.model,
        where: {
          [params.parentKey]: params.toParentId,
          [Op.and] : [
            {position: {[Op.gte]: iterFrom}},
            {position: {[Op.lte]: iterTo}}
          ]
        }
      }).then(elements => {
        for(var element of elements) {
          if(element.id==params.id) {
            element.update({position: params.toPosition});
          } else {
            element.update({position: element.position + positionChange});
          }
        }
        return true;
      })
    } catch {
      return this.errorHandler()
    }
  }

  async updatePositions(params: any): Promise<any> {
    try {
      return this.findAll(params).then(records => {
        for(var positionCounter in records) { records[positionCounter].update({position: Number(positionCounter) + 1}); }
        return records;
      });
    } catch {
      return this.errorHandler()
    }
  }

  async delete(params: any): Promise<any> {
    try {
      return params.model.destroy({where: params.where});
    } catch {
      return this.errorHandler()
    }
  }

  async getMaxPosition(params: any): Promise<number> {
    return params.model.max('position', {where: params.where});
  }


  async errorHandler($error?: any): Promise<any> {
    console.log($error);
    throw new HttpException('Query error', HttpStatus.NOT_ACCEPTABLE);
  }

}
