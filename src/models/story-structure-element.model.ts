import { Table, Column, Model, AllowNull, BelongsTo, HasMany, HasOne } from 'sequelize-typescript';
import { Project } from './project.model';
import { Story } from './story.model';
import { Act } from './act.model';
import { Scene } from './scene.model';
import { Beat } from './beat.model';
import { DialogueLine } from './dialogue.line.model';

@Table
export class StoryStructureElement extends Model<StoryStructureElement> {

  @AllowNull(false)
  @Column
  position: number;

  @AllowNull(false)
  @Column
  type: string;

  @BelongsTo(() => Project, "projectId")
  project: Project;

  @BelongsTo(() => StoryStructureElement, {
    foreignKey: "parentId",
    onDelete: "CASCADE",
    hooks: true
  })
  parent: StoryStructureElement;

  @HasMany(()=> StoryStructureElement, {
    foreignKey: "parentId",
    onDelete: "CASCADE",
    hooks: true
  })
  children: StoryStructureElement[];

  @HasOne(() => Story, {
    foreignKey:"storyStructureElementId",
    onDelete: "CASCADE",
    hooks: true
  })
  story: Story;

  @HasOne(() => Act, {
    foreignKey:"storyStructureElementId",
    onDelete: "CASCADE",
    hooks: true
  })
  act: Act;

  @HasOne(() => Scene, {
    foreignKey:"storyStructureElementId",
    onDelete: "CASCADE",
    hooks: true
  })
  scene: Scene;

  @HasOne(() => Beat, {
    foreignKey:"storyStructureElementId",
    onDelete: "CASCADE",
    hooks: true
  })
  beat: Beat;

  @HasOne(() => DialogueLine, {
    foreignKey:"storyStructureElementId",
    onDelete: "CASCADE",
    hooks: true
  })
  dialogueLine: DialogueLine;

}
