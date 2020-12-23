import { Table, Column, Model, AllowNull, BelongsToMany } from 'sequelize-typescript';
import { Role } from '../role/role.model';
import { UserRole } from '../userRole/user.role.model';

@Table
export class User extends Model<User> {

  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  hash: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}
