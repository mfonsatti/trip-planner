import { Injectable } from '@nestjs/common';

@Injectable()
export class TripSearchService {
  search() {
    return 'mock search response';
  }
}
