import { Controller, Get } from '@nestjs/common';
import { TripSearchService } from './trip-search.service';

@Controller()
export class TripSearchController {
  constructor(private readonly tripSearchService: TripSearchService) {}

  @Get()
  getHello(): string {
    return this.tripSearchService.getHello();
  }
}
