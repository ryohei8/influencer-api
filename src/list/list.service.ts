import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateInfluencerListDto } from './dto/create-influencer-list.dto';
import { InfluencerList } from '@prisma/client';

@Injectable()
export class ListService {
  constructor(private prisma: PrismaService) {}

  async createInfluencerList(
    dto: CreateInfluencerListDto,
  ): Promise<InfluencerList> {
    return this.prisma.influencerList.create({
      data: {
        name: dto.name,
        description: dto.description,
        influencers: {
          connect: dto.influencerIds.map((id) => ({ id })),
        },
      },
    });
  }

  async deleteInfluencerList(id: number): Promise<InfluencerList> {
    return this.prisma.influencerList.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
