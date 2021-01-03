import { Injectable } from '@nestjs/common';
import { MatsukazeObject, MatsukazeObjectTypes } from './model';

@Injectable()
export class DTOService {
  constructor() {}

  generateDTO(data: any, type?: MatsukazeObjectTypes): MatsukazeObject {
    var dto: any = {}
    var dtoType: MatsukazeObjectTypes = (type)? type : data["type"]

    if(data && dtoType) {
      if(dtoType == MatsukazeObjectTypes.story ||
        dtoType == MatsukazeObjectTypes.act ||
        dtoType == MatsukazeObjectTypes.scene ||
        dtoType == MatsukazeObjectTypes.beat ||
        dtoType == MatsukazeObjectTypes.dialogueLine
      ) {
        var tmp: any = JSON.parse(JSON.stringify(data));
        const tmpTypeData: any = tmp[dtoType.toLowerCase()]
        dto = {id: tmp.id, projectId: tmp.projectId, type: dtoType, position: tmp.position, parentId: tmp.parentId};
        for(var key in tmpTypeData) { if(key!="id") dto[key] = tmpTypeData[key]; }
      }
    } else {
      dto = null;
    }
    return dto;
  }
}
