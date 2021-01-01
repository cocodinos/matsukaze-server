import { Table, Column, Model, ForeignKey, HasMany, BelongsToMany } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { Beat } from './beat.model';
import { Publication } from './publication.model';
import { PublicationPage } from './publication.page.model';

@Table
export class Page extends Model<Page> {

  @Column(DataType.TEXT)
  summary: string;

  @Column(DataType.TEXT)
  notes: string;

  @BelongsToMany(()=> Publication, () => PublicationPage)
  pages: Page[];

}
