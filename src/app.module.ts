import { Module } from '@nestjs/common';
import { InfluencerModule } from './influencer/influencer.module';
import { ListModule } from './list/list.module';

@Module({
  imports: [InfluencerModule, ListModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
