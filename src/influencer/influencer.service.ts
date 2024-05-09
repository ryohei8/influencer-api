import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Influencer, Prisma } from '@prisma/client';

@Injectable()
export class InfluencerService {
  constructor(private prisma: PrismaService) {}

  async findAll(
    name?: string,
    page: number = 1,
    pageSize: number = 10,
  ): Promise<Influencer[]> {
    const skip = (page - 1) * pageSize;
    const where: Prisma.InfluencerWhereInput = {
      deletedAt: null,
      ...(name ? { name: { contains: name } } : {}),
    };

    return this.prisma.influencer.findMany({
      where,
      skip,
      take: pageSize,
    });
  }

  async findInfluencerById(id: number): Promise<Influencer | null> {
    return this.prisma.influencer.findUnique({
      where: { id },
    });
  }

  async createInfluencer(
    data: Prisma.InfluencerCreateInput,
  ): Promise<Influencer> {
    return this.prisma.influencer.create({
      data,
    });
  }

  async updateInfluencer(
    id: number,
    updateData: Prisma.InfluencerUpdateInput,
  ): Promise<Influencer> {
    return this.prisma.influencer.update({
      where: { id },
      data: updateData,
    });
  }

  async deleteInfluencer(id: number): Promise<Influencer> {
    return this.prisma.influencer.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
