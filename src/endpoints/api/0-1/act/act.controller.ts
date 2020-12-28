import { Controller, Request, Get, UseGuards, Query, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt/jwt-auth.guard';
import { ActService } from './act.service';


@Controller('api/0.1/act')
export class ActController {

  constructor(
    private readonly service: ActService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post("create")
  async create(@Body() data) { console.log(data); return this.service.create(data); }

  @UseGuards(JwtAuthGuard)
  @Get("get")
  async get(@Query() query) { return this.service.get({id: query?.id}); }

  @UseGuards(JwtAuthGuard)
  @Get("gets")
  async gets(@Query() query) { return this.service.gets({storyId: query?.parentId}); }

  @UseGuards(JwtAuthGuard)
  @Post("update")
  async update(@Body() data) { return this.service.update(data); }

  @UseGuards(JwtAuthGuard)
  @Post("delete")
  async delete(@Body() data) { return this.service.delete(data); }
}
