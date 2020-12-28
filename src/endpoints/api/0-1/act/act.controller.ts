import { Controller, Request, Get, UseGuards, Query, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt/jwt-auth.guard';
import { ActService } from './act.service';


@Controller('api/0.1/act')
export class ActController {

  constructor(
    private readonly actService: ActService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get("get")
  async getAct(@Query() query) { return this.actService.get({id: query?.id}); }

  @UseGuards(JwtAuthGuard)
  @Get("gets")
  async getActs(@Query() query) { return this.actService.gets({storyId: query?.storyId}); }

  @UseGuards(JwtAuthGuard)
  @Post("update")
  async updateAct(@Body() data) { return this.actService.update(data); }

  @UseGuards(JwtAuthGuard)
  @Post("create")
  async createAct(@Body() data) { return this.actService.create(data); }

  @UseGuards(JwtAuthGuard)
  @Post("delete")
  async deleteAct(@Body() data) { return this.actService.delete(data); }
}
