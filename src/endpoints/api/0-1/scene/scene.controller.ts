import { Controller, Request, Get, UseGuards, Query, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt/jwt-auth.guard';
import { SceneService } from './scene.service';


@Controller('api/0.1/scene')
export class SceneController {

  constructor(
    private readonly sceneService: SceneService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get("get")
  async get(@Query() query) { return this.sceneService.get({id: query?.id}); }

  @UseGuards(JwtAuthGuard)
  @Get("gets")
  async gets(@Query() query) { return this.sceneService.gets({actId: query?.actId}); }

  @UseGuards(JwtAuthGuard)
  @Post("update")
  async update(@Body() data) { return this.sceneService.update(data); }

  @UseGuards(JwtAuthGuard)
  @Post("create")
  async create(@Body() data) { return this.sceneService.create(data); }

  @UseGuards(JwtAuthGuard)
  @Post("delete")
  async delete(@Body() data) { return this.sceneService.delete(data); }

}
