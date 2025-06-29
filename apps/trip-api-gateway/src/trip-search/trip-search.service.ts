import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SearchQueryDto } from '@app/contracts/trip-search/trip-search.dto';


@Injectable()
export class TripSearchService {
  constructor(
    @Inject('TRIP_SEARCH_CLIENT') private tripSearchClient: ClientProxy,
  ) {}
  search(query: SearchQueryDto) {
    return this.tripSearchClient.send('trip.search', query);
  }
}
