import { Module } from '@nestjs/common';
import { TripSearchService } from './trip-search.service';

@Module({
  providers: [TripSearchService]
})
export class TripSearchModule {}
