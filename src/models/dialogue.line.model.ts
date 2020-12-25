import { Table, Column, Model, AllowNull, BelongsTo } from 'sequelize-typescript';
import { Beat } from './beat.model';
import { I18nBundle } from './i18n.bundle.model';

@Table
export class DialogueLine extends Model<DialogueLine> {

  @AllowNull(false)
  @Column
  position: number;

  @Column
  source: string;

  @Column
  type: string;

  @BelongsTo(() => Beat, "beatId")
  beat: Beat;

  @BelongsTo(() => I18nBundle, "i18nBundleId")
  text: I18nBundle;
}
