import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Project } from './project.model';
import { User } from './user.model';

@Table
export class ProjectUser extends Model<ProjectUser> {

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Project)
  @Column
  projectId: number;

}
