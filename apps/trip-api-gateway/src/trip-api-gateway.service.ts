import { Injectable } from '@nestjs/common';

@Injectable()
export class TripApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
