import { Table, Model, HasMany } from 'sequelize-typescript';
import { I18nBundleElement } from './i18n.bundle.element.model';

@Table
export class I18nBundle extends Model<I18nBundle> {

  @HasMany(()=> I18nBundleElement, "i18nBundleId")
  i18nBundleElements: I18nBundleElement[];

}
