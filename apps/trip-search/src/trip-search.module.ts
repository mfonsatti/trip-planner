import { Module } from '@nestjs/common';
import { TripSearchController } from './trip-search.controller';
import { TripSearchService } from './trip-search.service';

@Module({
  imports: [],
  controllers: [TripSearchController],
  providers: [TripSearchService],
})
export class TripSearchModule {}
