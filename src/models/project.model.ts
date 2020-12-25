import { Table, Column, Model, AllowNull, BelongsToMany, HasMany } from 'sequelize-typescript';
import { User } from './user.model';
import { ProjectUser } from './project.user.model';
import { Story } from './story.model';

@Table
export class Project extends Model<Project> {

  @AllowNull(false)
  @Column
  name: string;

  @BelongsToMany(() => User, () => ProjectUser)
  users: User[];

  @HasMany(() => Story, "projectId")
  stories: Story[]

}
