import { Controller, Get, Query } from '@nestjs/common';
import { TripSearchService } from './trip-search.service';
import { SearchQueryDto } from '@app/contracts/trip-search/trip-search.dto';

@Controller('trip-search')
export class TripSearchController {
  constructor(private tripSearchService: TripSearchService) {}

  @Get()
  search(@Query() query: SearchQueryDto) {
    return this.tripSearchService.search(query);
  }
}
