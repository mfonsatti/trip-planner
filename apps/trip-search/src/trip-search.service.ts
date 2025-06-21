import { Injectable } from '@nestjs/common';

@Injectable()
export class TripSearchService {
  search(): string {
    return 'Hello from search method of TripSearch service!';
  }
}
