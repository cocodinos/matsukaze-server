import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Model, Op } from 'sequelize';
import { ModelService } from 'src/endpoints/api/0-1/services/model/model.service'
import { I18nBundleService } from '../i18n-bundle/i18n-bundle.service';
import { MatsukazeObjectTypes } from '../../services/model/model';
import { StoryStructureElement } from 'src/models/story-structure-element.model';
import { Story } from 'src/models/story.model';
import { Act } from 'src/models/act.model';
import { SceneSequence } from 'src/models/scene-sequence.model';
import { Scene } from 'src/models/scene.model';
import { Beat } from 'src/models/beat.model';
import { MomentSequence } from 'src/models/moment-sequence.model';
import { Moment } from 'src/models/moment.model';
import { DialogueLine } from 'src/models/dialogue.line.model';

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
    SceneSequence: {
      key: "sceneSequence",
      model: this.sceneSequenceModel,
      attributes: ['id', 'title', 'summary', 'notes'],
      updateFields: ['title', 'summary', 'notes'],
    },
    Scene: {
      key: "scene",
      model: this.sceneModel,
      attributes: ['id', 'summary', 'notes'],
      updateFields: ['summary', 'notes'],
    },
    Beat: {
      key: "beat",
      model: this.beatModel,
      attributes: ['id', 'summary', 'notes'],
      updateFields: ['summary', 'notes'],
    },
    MomentSequence: {
      key: "momentSequence",
      model: this.momentSequenceModel,
      attributes: ['id', 'summary', 'notes'],
      updateFields: ['summary', 'notes'],
    },
    Moment: {
      key: "moment",
      model: this.momentModel,
      attributes: ['id', 'action', 'notes'],
      updateFields: ['action', 'notes'],
    },
    DialogueLine: {
      key: "dialogueLine",
      model: this.dialogueLineModel,
      attributes: ['id', 'source', 'type', "i18nBundleId"],
      updateFields: ['source', 'type'],
    }
  }

  constructor(
    @InjectModel(StoryStructureElement) private storyStructureElementModel: typeof StoryStructureElement,
    @InjectModel(Story) private storyModel: typeof Story,
    @InjectModel(Act) private actModel: typeof Act,
    @InjectModel(Scene) private sceneModel: typeof Scene,
    @InjectModel(SceneSequence) private sceneSequenceModel: typeof SceneSequence,
    @InjectModel(Beat) private beatModel: typeof Beat,
    @InjectModel(MomentSequence) private momentSequenceModel: typeof MomentSequence,
    @InjectModel(Moment) private momentModel: typeof Moment,
    @InjectModel(DialogueLine) private dialogueLineModel: typeof DialogueLine,
    private i18nBundleService: I18nBundleService,
    private modelService: ModelService
  ) {}

  async create(data: any): Promise<any> {
    try {
      const targetModel = this.ORMConfig[data.matsukazeObjectType].model;
      return this.storyStructureElementModel.max('position', {
        where: {[Op.and]:{parentId: data.parentId, matsukazeObjectType: data.matsukazeObjectType}}
      }).then(maxPosition => {
        if(!maxPosition) maxPosition = 0;
        const position = Number(maxPosition)+1;
        return this.storyStructureElementModel.create({
          position: position,
          matsukazeObjectType: data.matsukazeObjectType,
          projectId: data.projectId,
          parentId: data.parentId,
        })
      }).then(result => {
        data.storyStructureElementId = result.get("id");
        delete data.id;
        targetModel.create(data);
        return result.reload()
      }).then(result => {
        return this.generateDTO(result, data.matsukazeObjectType)
    })} catch {
      return null
    }
  }

  async get(data: any): Promise<any> {
    try {
      return this.storyStructureElementModel.findOne({
        attributes: ['id', 'matsukazeObjectType', 'projectId', 'position', 'parentId'],
        include: [
          {model: this.ORMConfig[data.matsukazeObjectType].model, attributes: this.ORMConfig[data.matsukazeObjectType].attributes}
        ],
        where: {[Op.and]:{id: data.id, matsukazeObjectType: data.matsukazeObjectType}}
      }).then(result => {
        return this.generateDTO(result, data.matsukazeObjectType);
      });
    } catch {
      // error handling tbd
      return null;
    }
  }

  async gets(data: any): Promise<any[]> {
    try {
      var queryResults = await this.storyStructureElementModel.findAll({
        attributes: ['id', 'matsukazeObjectType', 'projectId', 'position', 'parentId'],
        include: [
          {model: this.ORMConfig[data.matsukazeObjectType].model, attributes: this.ORMConfig[data.matsukazeObjectType].attributes}
        ],
        order: [['position', 'ASC']],
        where: {[Op.and]:{parentId: data.parentId, matsukazeObjectType: data.matsukazeObjectType}}
      })
      var outputJSONArray: any[] = []
      for(var result of queryResults) {
        outputJSONArray.push(await this.generateDTO(result, data.matsukazeObjectType));
      }
      return outputJSONArray;
    } catch {
      return null;
    }
  }

  async update(data: any): Promise<any> {
    return this.storyStructureElementModel.findOne({
      attributes: ['id', 'matsukazeObjectType', 'projectId', 'position', 'parentId'],
      include: [{model: this.ORMConfig[data.matsukazeObjectType].model, attributes: this.ORMConfig[data.matsukazeObjectType].attributes}],
      where: {[Op.and]:{id: data.id, matsukazeObjectType: data.matsukazeObjectType}}
    }).then(storyStructureElement => {
      console.log(storyStructureElement);
      delete data.id;
      const targetModel = this.ORMConfig[storyStructureElement.matsukazeObjectType].model;
      const targetElement: any = storyStructureElement.get(this.ORMConfig[data.matsukazeObjectType].key);
      const targetClassId = targetElement.get("id");
      return targetModel.update(
        data,
        {where: {id: Number(targetClassId)}},
        {fields: this.ORMConfig[storyStructureElement.matsukazeObjectType].updateFields}
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
          where: {
            [Op.and]: {
              parentId: data.toParentId,
              matsukazeObjectType: data.matsukazeObjectType
            }
          }
        }).then(maxPosition => {
          data.fromPosition = Number(maxPosition) + 1;
          return this.storyStructureElementModel.update(
            {position: data.fromPosition, parentId: data.toParentId},
            {where: { id: data.id }}
          ).then(result => {
            if(result) return this.updatePositionsAfterDelete(data.fromParentId);
          })
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
    try {
      return await this.storyStructureElementModel.destroy({where: data}).then(result => {
        return this.updatePositionsAfterDelete(data.parentId);
      })
      return true
    } catch {
      return false
    }
  }

  private async updatePositionsAfterDelete(parentId: number) {
    return this.storyStructureElementModel.findAll({
      attributes: ['id', 'position', 'parentId'],
      order: [['position', 'ASC']],
      where: {[Op.and]:{parentId: parentId}}
    }).then(results => {
      for(let i=0; i<results.length; i++) {
        <Model>results[i].set("position", i+1);
        results[i].save()
      }
      return true;
    })
  }

  private async generateDTO(obj: any, matsukazeObjectType: MatsukazeObjectTypes): Promise<any> {
    var dto = this.modelService.generateDTO(obj, matsukazeObjectType);
    if(matsukazeObjectType==MatsukazeObjectTypes.dialogueLine) {
      const bundleId: number = obj.get("dialogueLine")?.get("i18nBundleId");
      if(bundleId) { dto["i18nBundle"] = await this.i18nBundleService.get({id: bundleId}); }
    }
    return dto
  }

  async errorHandler($error?: any): Promise<any> {
    console.log($error);
    throw new HttpException('Query error', HttpStatus.NOT_ACCEPTABLE);
  }
}
