import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { Influencer, Prisma } from '@prisma/client';

@Controller('influencer')
export class InfluencerController {
  constructor(private readonly influencerService: InfluencerService) {}
  @Get()
  findMany(): Promise<Influencer[]> {
    return this.influencerService.findAll();
  }

  @Get(':id')
  getInfluencerById(@Param('id') id: number): Promise<Influencer | null> {
    return this.influencerService.findInfluencerById(id);
  }

  @Post()
  create(@Body() data: Prisma.InfluencerCreateInput) {
    return this.influencerService.createInfluencer(data);
  }
}
