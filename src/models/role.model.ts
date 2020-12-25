import { Table, Column, Model, AllowNull, BelongsToMany, Unique } from 'sequelize-typescript';
import { User } from './user.model';
import { UserRole } from './user.role.model';

@Table
export class Role extends Model<Role> {

  @Unique
  @AllowNull(false)
  @Column
  name: string;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];

}
