import { Table, Model, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Project } from './project.model';
import { Page } from './page.model';
import { I18nBundle } from './i18n.bundle.model';
import { PublicationPage } from './publication.page.model';

@Table
export class Publication extends Model<Publication> {

  @BelongsTo(() => I18nBundle, "titlei18nBundleId")
  title: I18nBundle;

  @BelongsTo(() => Project, "projectId")
  project: Project;

  @BelongsToMany(()=> Page, () => PublicationPage)
  pages: Page[];

}
