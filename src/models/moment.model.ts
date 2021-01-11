import { Table, Column, Model, BelongsTo, DataType } from 'sequelize-typescript';
import { StoryStructureElement } from './story-structure-element.model';

@Table
export class Moment extends Model<Moment> {

  @Column(DataType.TEXT)
  action: string;

  @Column(DataType.TEXT)
  notes: string;

  @BelongsTo(() => StoryStructureElement, "storyStructureElementId")
  storyStructureElement: StoryStructureElement;

}
