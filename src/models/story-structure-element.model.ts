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

  @BelongsTo(() => StoryStructureElement, "parentId")
  parent: StoryStructureElement;

  @HasMany(()=> StoryStructureElement, "parentId")
  children: StoryStructureElement[];

  @HasOne(() => Story, "storyStructureElementId")
  story: Story;

  @HasOne(() => Act, "storyStructureElementId")
  act: Act;

  @HasOne(() => Scene, "storyStructureElementId")
  scene: Scene;

  @HasOne(() => Beat, "storyStructureElementId")
  beat: Beat;

  @HasOne(() => DialogueLine, "storyStructureElementId")
  dialogueLine: DialogueLine;

}
