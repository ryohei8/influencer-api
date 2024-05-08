import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Patch,
  ParseIntPipe,
  Delete,
  Query,
} from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { Influencer, Prisma } from '@prisma/client';

@Controller('influencer')
export class InfluencerController {
  constructor(private readonly influencerService: InfluencerService) {}
  @Get()
  findAll(
    @Query('name') name: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.influencerService.findAll(name, page, pageSize);
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
  deleteInfluencer(@Param('id', ParseIntPipe) id: number) {
    return this.influencerService.deleteInfluencer(id);
  }
}
