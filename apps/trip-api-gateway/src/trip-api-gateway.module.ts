import { Module } from '@nestjs/common';
import { TripApiGatewayController } from './trip-api-gateway.controller';
import { TripApiGatewayService } from './trip-api-gateway.service';

@Module({
  imports: [],
  controllers: [TripApiGatewayController],
  providers: [TripApiGatewayService],
})
export class TripApiGatewayModule {}
