import { Injectable } from '@nestjs/common';
import { MatsukazeObject, MatsukazeObjectTypes } from './model';

@Injectable()
export class DTOService {
  constructor() {}

  generateDTO(data: any, type?: MatsukazeObjectTypes): MatsukazeObject {
    var dto: any = {}
    var dtoType: MatsukazeObjectTypes = (type)? type : data["matsukazeObjectType"]

    if(data && dtoType) {
      if(dtoType == MatsukazeObjectTypes.story ||
        dtoType == MatsukazeObjectTypes.act ||
        dtoType == MatsukazeObjectTypes.scene ||
        dtoType == MatsukazeObjectTypes.beat ||
        dtoType == MatsukazeObjectTypes.dialogueLine
      ) {
        var tmp: any = JSON.parse(JSON.stringify(data));
        var tmpTypeDataKey: string = String(dtoType)
        tmpTypeDataKey = tmpTypeDataKey.charAt(0).toLowerCase() + tmpTypeDataKey.slice(1);
        const tmpTypeData = tmp[tmpTypeDataKey];
        dto = {id: tmp.id, projectId: tmp.projectId, matsukazeObjectType: dtoType, position: tmp.position, parentId: tmp.parentId};
        for(var key in tmpTypeData) { if(key!="id") dto[key] = tmpTypeData[key]; }
      }
      if(dtoType == MatsukazeObjectTypes.dialogueLine) {console.log(tmp)}
    } else {
      dto = null;
    }
    return dto;
  }
}
