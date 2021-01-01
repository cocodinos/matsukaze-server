import { Table, Column, Model, BelongsTo, DataType } from 'sequelize-typescript';
import { StoryStructureElement } from './story-structure-element.model';
import { I18nBundle } from './i18n.bundle.model';

@Table
export class DialogueLine extends Model<DialogueLine> {

  @Column
  source: string;

  @Column
  type: string;

  @BelongsTo(() => StoryStructureElement, "storyStructureElementId")
  storyStructureElement: StoryStructureElement;

  @BelongsTo(() => I18nBundle, "i18nBundleId")
  i18nBundle: I18nBundle;

}
