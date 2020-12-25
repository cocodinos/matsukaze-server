import { Table, Model, HasMany } from 'sequelize-typescript';
import { I18nBundleText } from './i18n.bundle.text.model';

@Table
export class I18nBundle extends Model<I18nBundle> {

  @HasMany(()=> I18nBundleText, "i18nBundleId")
  i18n: I18nBundleText;
}
