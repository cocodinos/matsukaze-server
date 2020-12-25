import { Controller, Request, Get, UseGuards, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/strategies/jwt/jwt-auth.guard';
import { SceneService } from './scene.service';


@Controller('api/0.1/scene')
export class SceneController {

  constructor(
    private readonly sceneService: SceneService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get("getScenes")
  async getScenes(@Query() query) {
    const scenes = this.sceneService.getActScenes(query?.actId);
    return scenes;
  }

}
