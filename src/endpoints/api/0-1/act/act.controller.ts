import { Controller, Request, Get, UseGuards, Query, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt/jwt-auth.guard';
import { ActService } from './act.service';


@Controller('api/0.1/act')
export class ActController {

  constructor(
    private readonly actService: ActService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get("getActs")
  async getActs(@Query() query) {
    const acts = this.actService.getStoryActs(query?.storyId);
    return acts;
  }

  @UseGuards(JwtAuthGuard)
  @Post("updateAct")
  async updateAct(@Body() data) {
    const scene = this.actService.updateAct(data);
    return scene;
  }

}
