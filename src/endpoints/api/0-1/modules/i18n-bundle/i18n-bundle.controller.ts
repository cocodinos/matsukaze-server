import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt/jwt-auth.guard';
import { I18nBundleService } from './i18n-bundle.service';

@Controller('api/0.1/storyStructureElement/i18n-bundle')
export class I18nBundleController {

  constructor(
    private readonly i18nBundleService: I18nBundleService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get("get")
  async get(@Query() query) {
    return null;
  }

}
