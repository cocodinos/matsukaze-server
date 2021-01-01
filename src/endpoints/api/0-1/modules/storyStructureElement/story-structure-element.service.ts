import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Model } from 'sequelize-typescript';
import { Act } from 'src/models/act.model';
import { Beat } from 'src/models/beat.model';
import { DialogueLine } from 'src/models/dialogue.line.model';
import { Scene } from 'src/models/scene.model';
import { StoryStructureElement } from 'src/models/story-structure-element.model';
import { Story } from 'src/models/story.model';
import { DataService } from '../../data/data.service';

@Injectable()
export class StoryStructureElementService {

  ORMConfig:any = {
    Story: {
      model: this.storyModel,
      attributes: ['title', 'summary', 'notes'],
      updateFields: ['title', 'summary', 'notes'],
    },
    Act: {
      model: this.actModel,
      attributes: ['title', 'summary', 'notes'],
      updateFields: ['title', 'summary', 'notes'],
    },
    Scene: {
      model: this.sceneModel,
      attributes: ['title', 'summary', 'notes'],
      updateFields: ['title', 'summary', 'notes'],
    },
    Beat: {
      model: this.beatModel,
      attributes: ['action', 'notes'],
      updateFields: ['action', 'notes'],
    },
    DialogueLine: {
      model: this.dialogueLineModel,
      attributes: ['source', 'type'],
      updateFields: ['source', 'type'],
    }
  }

  constructor(
    @InjectModel(StoryStructureElement) private storyStructureElementModel: typeof StoryStructureElement,
    @InjectModel(Story) private storyModel: typeof Story,
    @InjectModel(Act) private actModel: typeof Act,
    @InjectModel(Scene) private sceneModel: typeof Scene,
    @InjectModel(Beat) private beatModel: typeof Beat,
    @InjectModel(DialogueLine) private dialogueLineModel: typeof DialogueLine,
    private dataService: DataService
  ) {}

  private async intercept(data: any): Promise<any>{
    if(data?.id) {
    } else return null;
  }

  // async create(params: any): Promise<any> {
  //   var maxPosition = await this.dataService.getMaxPosition({model: this.model, where: {[this.parentKey]: params[this.parentKey]}})
  //   if(!maxPosition) maxPosition = 0;
  //   params.position = maxPosition+1;
  //   return await this.dataService.create({
  //     model: this.model,
  //     values: params
  //   })
  // }

  async get(data: any): Promise<any> {
    try {
      return this.dataService.findOne({
        model: this.storyStructureElementModel,
        attributes: ['id', 'type', 'projectId', 'position', 'parentId'],
        include: [
          {model: this.ORMConfig.Story.model, attributes: this.ORMConfig.Story.attributes},
          {model: this.ORMConfig.Act.model, attributes: this.ORMConfig.Act.attributes},
          {model: this.ORMConfig.Scene.model, attributes: this.ORMConfig.Scene.attributes},
          {model: this.ORMConfig.Beat.model, attributes: this.ORMConfig.Beat.attributes},
          {model: this.ORMConfig.DialogueLine.model, attributes: this.ORMConfig.DialogueLine.attributes},
        ],
        where: {id: data.id}
      }).then(result => {
        return this.DTOFactory(result);
      });
    } catch {
      // error handling tbd
    }
  }

  async gets(data: any): Promise<any[]> {
    try {
      return this.dataService.findAll({
        model: this.storyStructureElementModel,
        attributes: ['id', 'type', 'projectId', 'position', 'parentId'],
        include: [
          {model: this.ORMConfig.Story.model, attributes: this.ORMConfig.Story.attributes},
          {model: this.ORMConfig.Act.model, attributes: this.ORMConfig.Act.attributes},
          {model: this.ORMConfig.Scene.model, attributes: this.ORMConfig.Scene.attributes},
          {model: this.ORMConfig.Beat.model, attributes: this.ORMConfig.Beat.attributes},
          {model: this.ORMConfig.DialogueLine.model, attributes: this.ORMConfig.DialogueLine.attributes},
        ],
        where: {parentId: data.parentId}
      }).then(results => {
        var outputJSONArray: any[] = []
        for(var result of results) { outputJSONArray.push(this.DTOFactory(result)); }
        return outputJSONArray;
      });
    } catch {
      // error handling tbd
    }
  }

  // async update(params: any): Promise<any> {
  //   return await this.dataService.update({
  //     model: this.model,
  //     where: {id: params.id},
  //     params: params,
  //     fields: this.updateFields
  //   });
  // }
  //
  // async move(params: any): Promise<any> {
  //   return await this.dataService.move({
  //     model: this.model,
  //     parentKey: this.parentKey,
  //     id: params.id,
  //     fromParentId: params.fromParentId,
  //     toParentId: params.toParentId,
  //     fromPosition: params.fromPosition,
  //     toPosition: params.toPosition
  //   });
  // }
  //
  // async delete(params: any): Promise<any> {
  //   var act = await this.get(params);
  //   return await this.dataService.delete({
  //     model: this.model,
  //     where: params
  //   }).then( data => {
  //     if(data) {
  //       this.dataService.updatePositions({
  //         model: this.model,
  //         where: {
  //           [this.parentKey]: act.storyId
  //         }
  //       });
  //       return true
  //     }
  //     else {
  //       return false;
  //     }
  //   })
  // }

  private DTOFactory(sequelizeModel: Model): any {
    const tmp: any = sequelizeModel.toJSON()
    const tmpTypeData: any = tmp[tmp.type.toLowerCase()]
    var DTO = {id: tmp.id, projectId: tmp.projectId, type: tmp.type, position: tmp.position, parentId: tmp.parentId};
    for(var key in tmpTypeData) { DTO[key] = tmpTypeData[key]; }
    return DTO;
  }
}
