import { Controller, Get, Query } from '@nestjs/common';
import { TripSearchService } from './trip-search.service';
import { SearchQueryDto } from 'apps/trip-search/src/dto/search.dto';

@Controller('trip-search')
export class TripSearchController {
  constructor(private tripSearchService: TripSearchService) {}

  @Get()
  search(@Query() query: SearchQueryDto) {
    return this.tripSearchService.search(query);
  }
}
