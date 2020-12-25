import { Table, Column, Model, AllowNull, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import { Story } from './story.model';
import { DataType } from 'sequelize-typescript';
import { Scene } from './scene.model';

@Table
export class Act extends Model<Act> {

  @Column
  title: string;

  @AllowNull(false)
  @Column
  position: number;

  @Column(DataType.TEXT)
  summary: string;

  @Column(DataType.TEXT)
  notes: string;

  @BelongsTo(() => Story, "storyId")
  story: Story;

  @HasMany(() => Scene, "actId")
  scenes: Scene[];
}
