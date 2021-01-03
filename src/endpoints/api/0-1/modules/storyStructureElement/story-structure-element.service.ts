import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Act } from 'src/models/act.model';
import { Beat } from 'src/models/beat.model';
import { DialogueLine } from 'src/models/dialogue.line.model';
import { Scene } from 'src/models/scene.model';
import { StoryStructureElement } from 'src/models/story-structure-element.model';
import { Story } from 'src/models/story.model';
import { DTOService } from 'src/endpoints/api/0-1/services/data/dto.service'

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
    private dtoService: DTOService
  ) {}

  async create(data: any): Promise<any> {
    try {
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
        return this.dtoService.generateDTO(result)
    })} catch {
      return null
    }
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
        return this.dtoService.generateDTO(result);
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
        order: [['position', 'ASC']],
        where: {[Op.and]:{parentId: data.parentId, type: data.type}}
      }).then(results => {
        var outputJSONArray: any[] = []
        for(var result of results) { outputJSONArray.push(this.dtoService.generateDTO(result)); }
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

  async move(data: any): Promise<any> {
    try {
      var positionChange, iterFrom, iterTo;
      // first if element is imported from another parent, move
      // it to end of new parent's list
      if(data.fromParentId!=data.toParentId) {
        await this.storyStructureElementModel.max('position', {
          where: {[Op.and]:{
            parentId: data.parentId,
            type: data.type
        }}}).then(maxPosition => {
          data.fromPosition = Number(maxPosition) + 1;
          return this.storyStructureElementModel.update(
            {position: data.fromPosition, parentId: data.toParentId},
            {where: { id: data.id }}
          )
        });
      }
      iterFrom = (data.fromPosition <= data.toPosition)?data.fromPosition:data.toPosition;
      iterTo = (iterFrom === data.fromPosition)?data.toPosition:data.fromPosition;
      positionChange = (data.fromPosition <= data.toPosition)?-1:1;
      return this.storyStructureElementModel.findAll({
        where: {
          parentId: data.toParentId,
          [Op.and] : [
            {position: {[Op.gte]: iterFrom}},
            {position: {[Op.lte]: iterTo}}
          ]
        }
      }).then(elements => {
        for(var element of elements) {
          if(element.id==data.id) {
            element.update({position: data.toPosition});
          } else {
            element.update({position: element.position + positionChange});
          }
        }
        return true;
      })
    } catch {
      return false
    }
  }

  async delete(data: any): Promise<any> {
    return this.storyStructureElementModel.destroy({where: data})
  }

  async errorHandler($error?: any): Promise<any> {
    console.log($error);
    throw new HttpException('Query error', HttpStatus.NOT_ACCEPTABLE);
  }
}
