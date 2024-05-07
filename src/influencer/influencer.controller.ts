import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Patch,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
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
  getInfluencerById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Influencer | null> {
    return this.influencerService.findInfluencerById(id);
  }

  @Post()
  create(@Body() data: Prisma.InfluencerCreateInput) {
    return this.influencerService.createInfluencer(data);
  }

  @Patch(':id')
  updateInfluencer(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Prisma.InfluencerUpdateInput,
  ) {
    return this.influencerService.updateInfluencer(id, updateData);
  }

  @Delete(':id')
  async deleteInfluencer(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.influencerService.deleteInfluencer(id);
  }
}
