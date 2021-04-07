import { Injectable } from '@nestjs/common';
import { Act, Beat, DialogueLine, I18nBundle, I18nBundleElement, MatsukazeError, MatsukazeObject, MatsukazeObjectTypes, Moment, MomentSequence, Scene, SceneSequence, Story, User } from './model';

@Injectable()
export class ModelService {
  constructor(
    // @InjectModel(I18nBundleElement) private i18nBundleElement: typeof I18nBundleElement
  ) {}

  generateDTO(data: any, type?: MatsukazeObjectTypes): MatsukazeObject {
    var type: MatsukazeObjectTypes = (type)? type : data["matsukazeObjectType"];
    var dto = null;

    if(data) {
      switch(type) {
        case MatsukazeObjectTypes.story: {
          dto = new Story(this.packageStoryStructureElementJson(data, type));
          return dto;
        }
        case MatsukazeObjectTypes.act: {
          dto = new Act(this.packageStoryStructureElementJson(data, type));
          return dto;
        }
        case MatsukazeObjectTypes.sceneSequence: {
          dto = new SceneSequence(this.packageStoryStructureElementJson(data, type));
          return dto;
        }
        case MatsukazeObjectTypes.scene: {
          dto = new Scene(this.packageStoryStructureElementJson(data, type));
          return dto;
        }
        case MatsukazeObjectTypes.beat: {
          dto = new Beat(this.packageStoryStructureElementJson(data, type));
          return dto;
        }
        case MatsukazeObjectTypes.momentSequence: {
          dto = new MomentSequence(this.packageStoryStructureElementJson(data, type));
          return dto;
        }
        case MatsukazeObjectTypes.moment: {
          dto = new Moment(this.packageStoryStructureElementJson(data, type));
          return dto;
        }
        case MatsukazeObjectTypes.dialogueLine: {
          dto = new DialogueLine(this.packageStoryStructureElementJson(data, type));
          return dto;
        }
        case MatsukazeObjectTypes.i18nBundle: {
          dto = new I18nBundle(this.packageI18nBundleJson(data));
          var elements = data.get("i18nBundleElements")
          for(var element of elements) {
            dto.i18nBundleElements[String(element.get("languageId"))] = this.generateDTO(element, MatsukazeObjectTypes.i18nBundleElement);
          }
          return dto;
        }
        case MatsukazeObjectTypes.i18nBundleElement: {
          dto = new I18nBundleElement(this.packageI18nBundleElementJson(data));
          return dto;
        }
        case MatsukazeObjectTypes.user: {
          dto = new User(data);
          return dto;
        }
        case MatsukazeObjectTypes.error: {
          dto = new MatsukazeError(data);
          return dto;
        }
      }
    }
    return dto;
  }

  private packageStoryStructureElementJson(data: any, type?: MatsukazeObjectTypes): any {
    var dto: any = {}
    var tmp: any = JSON.parse(JSON.stringify(data));
    var tmpTypeDataKey: string = String(type)
    tmpTypeDataKey = tmpTypeDataKey.charAt(0).toLowerCase() + tmpTypeDataKey.slice(1);
    const tmpTypeData = tmp[tmpTypeDataKey];
    dto = {id: tmp.id, projectId: tmp.projectId, position: tmp.position, parentId: tmp.parentId};
    for(var key in tmpTypeData) { if(key!="id") dto[key] = tmpTypeData[key]; }
    return dto;
  }

  private packageI18nBundleJson(data: any): any {
    const tmp: any = JSON.parse(JSON.stringify(data));
    return {id: tmp.id, i18nBundleElements: {}};
  }

  // ISSUE WITH MODEL HERE: WE SHOULD BE RESOLVING THE LANGUAGE
  private packageI18nBundleElementJson(data: any): any {
    const tmp: any = JSON.parse(JSON.stringify(data));
    return {
      id: tmp.id,
      language: tmp.languageId,
      text: tmp.text
    };
  }
}
