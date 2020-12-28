import { Controller, Request, Get, UseGuards, Query, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt/jwt-auth.guard';
import { SceneService } from './scene.service';


@Controller('api/0.1/scene')
export class SceneController {

  constructor(
    private readonly service: SceneService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get("get")
  async get(@Query() query) { return this.service.get({id: query?.id}); }

  @UseGuards(JwtAuthGuard)
  @Get("gets")
  async gets(@Query() query) { return this.service.gets({actId: query?.actId}); }

  @UseGuards(JwtAuthGuard)
  @Post("update")
  async update(@Body() data) { return this.service.update(data); }

  @UseGuards(JwtAuthGuard)
  @Post("create")
  async create(@Body() data) { return this.service.create(data); }

  @UseGuards(JwtAuthGuard)
  @Post("delete")
  async delete(@Body() data) { return this.service.delete(data); }

}
