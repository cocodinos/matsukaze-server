import { Table, Column, Model, BelongsTo, DataType } from 'sequelize-typescript';
import { StoryStructureElement } from './story-structure-element.model';

@Table
export class Story extends Model<Story> {

  @Column
  title: string;

  @Column(DataType.TEXT)
  summary: string;

  @Column(DataType.TEXT)
  notes: string;

  @BelongsTo(() => StoryStructureElement, "storyStructureElementId")
  storyStructureElement: StoryStructureElement;

}
