import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateInfluencerListDto } from './dto/create-influencer-list.dto';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  async createInfluencerList(@Body() dto: CreateInfluencerListDto) {
    return this.listService.createInfluencerList(dto);
  }

  @Delete(':id')
  deleteInfluencerList(@Param('id', ParseIntPipe) id: number) {
    return this.listService.deleteInfluencerList(id);
  }
}
