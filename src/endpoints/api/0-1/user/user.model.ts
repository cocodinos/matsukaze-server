import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  freezeTableName: true,
  modelName: 'user'
})
export class User extends Model<User> {
  @Column
  email: string;

  @Column
  password: string;
}
