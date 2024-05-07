import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Influencer, Prisma } from '@prisma/client';

@Injectable()
export class InfluencerService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Influencer[]> {
    return this.prisma.influencer.findMany();
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

  async deleteInfluencer(id: number): Promise<void> {
    await this.prisma.influencer.delete({
      where: { id },
    });
  }
}
