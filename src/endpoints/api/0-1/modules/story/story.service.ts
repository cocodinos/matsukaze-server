import { Injectable } from '@nestjs/common';
import { ModelService } from 'src/endpoints/api/0-1/services/model/model.service'
import { MatsukazeObjectTypes, Story } from '../../services/model/model';
import { StoryStructureElement } from 'src/models/story-structure-element.model';
import { StoryStructureElementService } from '../story-structure-element/story-structure-element.service';

@Injectable()
export class StoryService {


  constructor(
    private modelService: ModelService,
    private storyStructureElementService: StoryStructureElementService
  ) {}

  async pull(data: any): Promise<any> {
    var story: Story = await this.storyStructureElementService.get({id: data.id, matsukazeObjectType: MatsukazeObjectTypes.story});
    story.children = await this.storyStructureElementService.gets({parentId: story.id, matsukazeObjectType: MatsukazeObjectTypes.act});
    if(!story.children) story.children = [];
    for(let act of story.children) {
      act.children = await this.storyStructureElementService.gets({parentId: act.id, matsukazeObjectType: MatsukazeObjectTypes.sceneSequence});
      if(!act.children) act.children = [];
      for(let sceneSequence of act.children) {
        sceneSequence.children = await this.storyStructureElementService.gets({parentId: sceneSequence.id, matsukazeObjectType: MatsukazeObjectTypes.scene});
        if(!sceneSequence.children) sceneSequence.children = [];
        for(let scene of sceneSequence.children) {
          scene.children = await this.storyStructureElementService.gets({parentId: scene.id, matsukazeObjectType: MatsukazeObjectTypes.beat});
          if(!scene.children) scene.children = [];
          for(let beat of scene.children) {
            beat.children = await this.storyStructureElementService.gets({parentId: beat.id, matsukazeObjectType: MatsukazeObjectTypes.momentSequence});
            if(!beat.children) beat.children = [];
            for(let momentSequence of beat.children) {
               momentSequence.children = await this.storyStructureElementService.gets({parentId: momentSequence.id, matsukazeObjectType: MatsukazeObjectTypes.moment});
               if(!momentSequence.children) momentSequence.children = [];
               for(let moment of momentSequence.children) {
                 moment.children = await this.storyStructureElementService.gets({parentId: moment.id, matsukazeObjectType: MatsukazeObjectTypes.dialogueLine});
                 if(!moment.children) moment.children = [];
               }
            }
          }
        }
      }
    }
    return story;
  }

}
