import { Module } from '@nestjs/common';
import { TripSearchService } from './trip-search.service';
import { TripSearchController } from './trip-search.controller';

@Module({
  providers: [TripSearchService],
  controllers: [TripSearchController]
})
export class TripSearchModule {}
