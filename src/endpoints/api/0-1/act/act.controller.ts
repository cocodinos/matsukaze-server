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
  async get(@Query() query) { return this.actService.get({id: query?.id}); }

  @UseGuards(JwtAuthGuard)
  @Get("gets")
  async gets(@Query() query) { return this.actService.gets({storyId: query?.storyId}); }

  @UseGuards(JwtAuthGuard)
  @Post("update")
  async update(@Body() data) { return this.actService.update(data); }

  @UseGuards(JwtAuthGuard)
  @Post("create")
  async create(@Body() data) { return this.actService.create(data); }

  @UseGuards(JwtAuthGuard)
  @Post("delete")
  async delete(@Body() data) { return this.actService.delete(data); }
}
