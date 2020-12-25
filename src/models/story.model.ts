import { Table, Column, Model, AllowNull, BelongsTo, HasMany } from 'sequelize-typescript';
import { Project } from './project.model';
import { Act } from './act.model';

@Table
export class Story extends Model<Story> {

  @Column
  title: string;

  @AllowNull(false)
  @Column
  position: number;

  @BelongsTo(() => Project, "projectId")
  project: Project;

  @HasMany(() => Act, "storyId")
  acts: Act[];

}
