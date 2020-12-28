import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class DataService {
  constructor(private sequelize: Sequelize) {}

  create(params: any): Promise<any> {
    try {
      return params.model.create(params.values);
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
      this.errorHandler()
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
      this.errorHandler()
    }
  }

  findAll(params: any): Promise<any> {
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

  delete(params: any): Promise<any> {
    try {
      return params.model.destroy({where: params.where});
    } catch {
      this.errorHandler()
    }
  }

  async getMaxPosition(params: any): Promise<number> {
    return params.model.max('position', {where: params.where});
  }

  stub(params: any): Promise<any> {
    try {
      return params.model.findOne({
        where: params.where,
        include: params.include,
        order: params.order,
        attributes: params.attributes,
      });
    } catch {
      this.errorHandler()
    }
  }

  private errorHandler() {
    throw new HttpException('Query error', HttpStatus.NOT_ACCEPTABLE);
  }

}
