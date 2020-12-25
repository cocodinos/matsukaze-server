import { Table, Column, Model, AllowNull, BelongsToMany } from 'sequelize-typescript';
import { Role } from './role.model';
import { UserRole } from './user.role.model';
import { Project } from './project.model';
import { ProjectUser } from './project.user.model';

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

  @BelongsToMany(() => Project, () => ProjectUser)
  projects: Project[];
}
