import { Module } from '@nestjs/common';
import { InfluencerModule } from './influencer/influencer.module';

@Module({
  imports: [InfluencerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
