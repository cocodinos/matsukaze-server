import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

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

  async findOne(params: any): Promise<any> {
    try {
      return params.model.findOne({
        where: params.where,
        include: params.include,
        order: params.order,
        attributes: params.attributes,
      });
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

  async delete(params: any): Promise<any> {
    try {
      return params.model.destroy({where: params.where});
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

  async getMaxPosition(params: any): Promise<number> {
    return params.model.max('position', {where: params.where});
  }

  async errorHandler($error?: any): Promise<any> {
    throw new HttpException('Query error', HttpStatus.NOT_ACCEPTABLE);
  }

}
