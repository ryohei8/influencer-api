import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { InfluencerController } from './influencer.controller';
import { InfluencerService } from './influencer.service';

@Module({
  controllers: [InfluencerController],
  providers: [InfluencerService, PrismaService],
})
export class InfluencerModule {}
