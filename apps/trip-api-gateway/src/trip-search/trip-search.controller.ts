import { Controller, Get } from '@nestjs/common';
import { TripSearchService } from './trip-search.service';

@Controller('trip-search')
export class TripSearchController {
  constructor(private tripSearchService: TripSearchService) {}

  @Get()
  search() {
    return this.tripSearchService.search();
  }
}
