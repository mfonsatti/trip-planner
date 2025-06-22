import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TripSearchService {
  constructor(
    @Inject('TRIP_SEARCH_CLIENT') private tripSearchClient: ClientProxy,
  ) {}
  search() {
    //return 'mock search response from the gateway';
    return this.tripSearchClient.send('trip.search', {});
  }
}
