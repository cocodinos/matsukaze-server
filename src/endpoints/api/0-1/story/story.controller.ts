import { Controller, Request, Get, UseGuards, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt/jwt-auth.guard';
import { StoryService } from './story.service';


@Controller('api/0.1/story')
export class StoryController {

  constructor(
    private readonly storyService: StoryService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get("")
  async get(@Query() query) {
    const story = this.storyService.getStory(query?.id);
    return story;
  }

}
