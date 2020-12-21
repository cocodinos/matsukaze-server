import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  freezeTableName: true,
  modelName: 'User'
})
export class User extends Model<User> {
  @Column
  email: string;

  @Column
  hash: string;
}
