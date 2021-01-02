import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
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
      key: "story",
      model: this.storyModel,
      attributes: ['id', 'title', 'summary', 'notes'],
      updateFields: ['title', 'summary', 'notes'],
    },
    Act: {
      key: "act",
      model: this.actModel,
      attributes: ['id', 'title', 'summary', 'notes'],
      updateFields: ['title', 'summary', 'notes'],
    },
    Scene: {
      key: "scene",
      model: this.sceneModel,
      attributes: ['id', 'title', 'summary', 'notes'],
      updateFields: ['title', 'summary', 'notes'],
    },
    Beat: {
      key: "beat",
      model: this.beatModel,
      attributes: ['id', 'action', 'notes'],
      updateFields: ['action', 'notes'],
    },
    DialogueLine: {
      key: "dialogueLine",
      model: this.dialogueLineModel,
      attributes: ['id', 'source', 'type'],
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

  async create(data: any): Promise<any> {
    const targetModel = this.ORMConfig[data.type].model;

    return this.storyStructureElementModel.max('position', {
      where: {[Op.and]:{parentId: data.parentId, type: data.type}}
    }).then(maxPosition => {
      if(!maxPosition) maxPosition = 0;
      const position = Number(maxPosition)+1;
      return this.storyStructureElementModel.create({
        position: position,
        type: data.type,
        projectId: data.projectId,
        parentId: data.parentId,
      })
    }).then(result => {
      data.storyStructureElementId = result.get("id");
      delete data.id;
      targetModel.create(data);
      return result.reload()
    }).then(result => {
      return this.DTOFactory(result)
    })
  }

  async get(data: any): Promise<any> {
    try {
      return this.storyStructureElementModel.findOne({
        attributes: ['id', 'type', 'projectId', 'position', 'parentId'],
        include: [
          {model: this.ORMConfig[data.type].model, attributes: this.ORMConfig[data.type].attributes}
        ],
        where: {[Op.and]:{id: data.id, type: data.type}}
      }).then(result => {
        return this.DTOFactory(result);
      });
    } catch {
      // error handling tbd
      return null;
    }
  }

  async gets(data: any): Promise<any[]> {
    try {
      return this.storyStructureElementModel.findAll({
        attributes: ['id', 'type', 'projectId', 'position', 'parentId'],
        include: [
          {model: this.ORMConfig[data.type].model, attributes: this.ORMConfig[data.type].attributes}
        ],
        where: {[Op.and]:{parentId: data.parentId, type: data.type}}
      }).then(results => {
        var outputJSONArray: any[] = []
        for(var result of results) { outputJSONArray.push(this.DTOFactory(result)); }
        return outputJSONArray;
      });
    } catch {
      return null;
    }
  }

  async update(data: any): Promise<any> {
    return this.storyStructureElementModel.findOne({
      attributes: ['id', 'type', 'projectId', 'position', 'parentId'],
      include: [{model: this.ORMConfig[data.type].model, attributes: this.ORMConfig[data.type].attributes}],
      where: {[Op.and]:{id: data.id, type: data.type}}
    }).then(storyStructureElement => {
      delete data.id;
      const targetModel = this.ORMConfig[storyStructureElement.type].model;
      const childElement: any = storyStructureElement.get(storyStructureElement.type.toLowerCase());
      const targetClassId = childElement.get("id");
      return targetModel.update(
        data,
        {where: {id: Number(targetClassId)}},
        {fields: this.ORMConfig[storyStructureElement.type].updateFields}
      );
    })

  }
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
    var DTO: any = {}
    if(sequelizeModel) {
      const tmp: any = sequelizeModel.toJSON()
      const tmpTypeData: any = tmp[tmp.type.toLowerCase()]
      DTO = {id: tmp.id, projectId: tmp.projectId, type: tmp.type, position: tmp.position, parentId: tmp.parentId};
      for(var key in tmpTypeData) { if(key!="id") DTO[key] = tmpTypeData[key]; }
    }
    return DTO;
  }
}
