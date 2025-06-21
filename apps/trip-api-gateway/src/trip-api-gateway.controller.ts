import { Controller, Get } from '@nestjs/common';
import { TripApiGatewayService } from './trip-api-gateway.service';

@Controller()
export class TripApiGatewayController {
  constructor(private readonly tripApiGatewayService: TripApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.tripApiGatewayService.getHello();
  }
}
