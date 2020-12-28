import { Controller, Request, Get, UseGuards, Query, Body, Post } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt/jwt-auth.guard';
import { StoryService } from './story.service';


@Controller('api/0.1/story')
export class StoryController {

  constructor(
    private readonly service: StoryService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post("create")
  async create(@Body() data) { return this.service.create(data); }

  @UseGuards(JwtAuthGuard)
  @Get("get")
  async get(@Query() query) { return this.service.get({id: query?.id}); }

  @UseGuards(JwtAuthGuard)
  @Get("gets")
  async gets(@Query() query) { return this.service.gets({projectId: query?.parentId}); }

  @UseGuards(JwtAuthGuard)
  @Post("update")
  async update(@Body() data) { return this.service.update(data); }

  @UseGuards(JwtAuthGuard)
  @Post("delete")
  async delete(@Body() data) { return this.service.delete(data); }

}
