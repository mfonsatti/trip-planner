import { Injectable } from '@nestjs/common';

@Injectable()
export class TripSearchService {
  getHello(): string {
    return 'Hello World!';
  }
}
