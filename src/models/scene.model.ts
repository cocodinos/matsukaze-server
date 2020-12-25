import { Table, Column, Model, AllowNull, BelongsTo, HasMany } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { Act } from './act.model';
import { Beat } from './beat.model';

@Table
export class Scene extends Model<Scene> {

  @AllowNull(false)
  @Column
  position: number;

  @Column(DataType.TEXT)
  summary: string;

  @Column(DataType.TEXT)
  notes: string;

  @BelongsTo(() => Act, "actiId")
  act: Act;

  @HasMany(()=> Beat, "beatId")
  beats: Beat[];
}
