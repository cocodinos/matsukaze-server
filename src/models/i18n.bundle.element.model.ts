import { Table, Model, BelongsTo, Column, DataType } from 'sequelize-typescript';
import { Language } from './language.model';
import { I18nBundle } from './i18n.bundle.model';

@Table
export class I18nBundleElement extends Model<I18nBundleElement> {

  @BelongsTo(() => I18nBundle, "i18nBundleId")
  I18nBundle: I18nBundle;

  @BelongsTo(() => Language, "languageId")
  language: Language;

  @Column(DataType.TEXT)
  text: string;

}
