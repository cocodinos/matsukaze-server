import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';
import { Publication } from './publication.model';
import { Page } from './page.model';


@Table
export class PublicationPage extends Model<PublicationPage> {

  @ForeignKey(() => Publication)
  @Column
  publicationId: number;

  @ForeignKey(() => Page)
  @Column
  pageId: number;

  @Column
  position: number;
}
