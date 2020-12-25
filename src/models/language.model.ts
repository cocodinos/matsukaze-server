import { Table, Column, Model } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';


@Table
export class Language extends Model<Language> {

  @Column(DataType.CHAR(5))
  locale: string;

  @Column
  name: string;

}
