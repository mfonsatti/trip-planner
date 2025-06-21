import { Controller, Get } from '@nestjs/common';
import { TripSearchService } from './trip-search.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TripSearchController {
  constructor(private readonly tripSearchService: TripSearchService) {}

  @MessagePattern("trip.search")
  search(): string {
    return this.tripSearchService.search();
  }
}
