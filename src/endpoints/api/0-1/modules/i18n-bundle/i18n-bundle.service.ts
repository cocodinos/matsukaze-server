import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { I18nBundleElement } from 'src/models/i18n.bundle.element.model';
import { I18nBundle } from 'src/models/i18n.bundle.model';
import { MatsukazeObjectTypes } from '../../services/model/model';
import { ModelService } from '../../services/model/model.service';

@Injectable()
export class I18nBundleService {

  constructor(
    @InjectModel(I18nBundle) private i18nBundleModel: typeof I18nBundle,
    @InjectModel(I18nBundleElement) private i18nBundleElementModel: typeof I18nBundleElement,
    private modelService: ModelService
  ) {}

  async get(data: any): Promise<any> {
    try {
      return this.i18nBundleModel.findOne({
        attributes: ['id'],
        include: [
          {model: this.i18nBundleElementModel, attributes: ['id', 'languageId', 'text']}
        ],
        where: {id: data.id}
      }).then(result => {
        return this.modelService.generateDTO(result, MatsukazeObjectTypes.i18nBundle);
      });
    } catch {
      // error handling tbd
      return null;
    }
  }


}
