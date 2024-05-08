import { Body, Controller, Post } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  async createList(@Body() createListDto: CreateListDto) {
    const newList = await this.listService.createList(createListDto);
    const influencers = await this.listService.findInfluencers(
      createListDto.criteria,
    );
    return {
      list: newList,
      influencers: influencers,
    };
  }
}
