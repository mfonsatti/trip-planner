import { Module } from '@nestjs/common';
import { TripSearchModule } from './trip-search/trip-search.module';
import { TripsModule } from './trips/trips.module';

@Module({
  imports: [TripSearchModule, TripsModule],
  controllers: [],
  providers: [],
})
export class TripApiGatewayModule {}
