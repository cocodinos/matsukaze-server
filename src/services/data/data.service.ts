import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class DataService {
  constructor(private sequelize: Sequelize) {}
}
