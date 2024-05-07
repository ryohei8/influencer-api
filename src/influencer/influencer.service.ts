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
}
