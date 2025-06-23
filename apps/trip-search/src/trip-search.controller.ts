import { Controller, Get } from '@nestjs/common';
import { TripSearchService } from './trip-search.service';
import { MessagePattern } from '@nestjs/microservices';
import { SearchQueryDto, TripDto } from './dto/search.dto';

@Controller()
export class TripSearchController {
  constructor(private readonly tripSearchService: TripSearchService) {}

  @MessagePattern("trip.search")
  search(query: SearchQueryDto): Promise<TripDto[]> {
    return this.tripSearchService.search(query);
  }
}
