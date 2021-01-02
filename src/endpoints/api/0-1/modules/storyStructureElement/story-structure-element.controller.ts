import { Controller, Request, Get, UseGuards, Query, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt/jwt-auth.guard';
import { StoryStructureElementService } from './story-structure-element.service';


@Controller('api/0.1/storyStructureElement')
export class ActController {

  constructor(
    private readonly storyStructureElementService: StoryStructureElementService
  ) {}

  // @UseGuards(JwtAuthGuard)
  // @Post("create")
  // async create(@Body() data) {
  //   return this.storyStructureElementService.create(data);
  // }
  //
  @UseGuards(JwtAuthGuard)
  @Get("get")
  async get(@Query() query) {
    return this.storyStructureElementService.get(query);
  }

  @UseGuards(JwtAuthGuard)
  @Get("gets")
  async gets(@Query() query) {
    return this.storyStructureElementService.gets(query);
  }

  @UseGuards(JwtAuthGuard)
  @Post("update")
  async update(@Body() data) {
    return this.storyStructureElementService.update(data);
  }
  
  // @UseGuards(JwtAuthGuard)
  // @Post("move")
  // async move(@Body() data) {
  //   return this.storyStructureElementService.move(data);
  // }
  //
  // @UseGuards(JwtAuthGuard)
  // @Post("delete")
  // async delete(@Body() data) {
  //   return this.storyStructureElementService.delete(data);
  // }
}
