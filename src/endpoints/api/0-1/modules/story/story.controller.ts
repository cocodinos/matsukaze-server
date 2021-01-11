import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt/jwt-auth.guard';
import { StoryService } from './story.service';

@Controller('api/0.1/story')
export class StoryController {

  constructor(private readonly storyService: StoryService) {}

  @UseGuards(JwtAuthGuard)
  @Get("pull")
  async pull(@Query() query) {
    return this.storyService.pull(query);
  }

}
