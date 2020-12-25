import { Table, Column, Model, AllowNull, ForeignKey } from 'sequelize-typescript';
import { Role } from './role.model';
import { User } from './user.model';

@Table
export class UserRole extends Model<UserRole> {

  @ForeignKey(() => Role)
  @Column
  roleId: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

}
