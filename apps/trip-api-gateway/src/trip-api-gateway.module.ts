import { Module } from '@nestjs/common';
import { TripSearchModule } from './trip-search/trip-search.module';

@Module({
  imports: [TripSearchModule],
  controllers: [],
  providers: [],
})
export class TripApiGatewayModule {}
