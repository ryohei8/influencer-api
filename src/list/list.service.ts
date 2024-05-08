import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateListDto } from './dto/create-list.dto';

@Injectable()
export class ListService {
  constructor(private prisma: PrismaService) {}

  async createList(createListDto: CreateListDto) {
    return this.prisma.influencerList.create({
      data: {
        name: createListDto.name,
        description: createListDto.description,
        criteria: createListDto.criteria,
      },
    });
  }

  async findInfluencers(criteria: any) {
    return this.prisma.influencer.findMany({
      where: {
        name: criteria.name,
        address: criteria.address,
        age: criteria.age,
        gender: criteria.gender,
      },
    });
  }
}
