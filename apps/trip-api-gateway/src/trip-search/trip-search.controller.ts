import { Controller, Get, Query } from '@nestjs/common';
import { TripSearchService } from './trip-search.service';
import {
  SearchQueryDto,
  TripDto,
} from '@app/contracts/trip-search/trip-search.dto';
import { ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';

@Controller('trip-search')
export class TripSearchController {
  constructor(private tripSearchService: TripSearchService) {}

  @Get()
  @ApiOperation({
    summary: 'Fetch a list of Trip given ORIGIN, DESCRIPTION and SORT_BY',
  })
  @ApiOkResponse({
    description: 'List of Trips fetches successfully ',
    type: TripDto,
    isArray: true,
  })
  search(@Query() query: SearchQueryDto) {
    return this.tripSearchService.search(query);
  }
}
