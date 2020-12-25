import { Table, Column, Model, AllowNull, BelongsTo, ForeignKey, HasMany, HasOne } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { Scene } from './scene.model';
import { Page } from './page.model';
import { DialogueLine } from './dialogue.line.model';

@Table
export class Beat extends Model<Beat> {

  @AllowNull(false)
  @Column
  position: number;

  @Column(DataType.TEXT)
  action: string;

  @Column(DataType.TEXT)
  notes: string;

  @BelongsTo(() => Scene, "sceneId")
  scene: Scene;

  @ForeignKey(() => Page)
  @Column
  pageId: number;

  @BelongsTo(() => Page)
  page: Page;

  @HasMany(() => DialogueLine, "beatId")
  dialogueLines: DialogueLine[];

}
