import { Module } from '@nestjs/common';
import { TripApiGatewayController } from './trip-api-gateway.controller';
import { TripApiGatewayService } from './trip-api-gateway.service';
import { TripSearchModule } from './trip-search/trip-search.module';

@Module({
  imports: [TripSearchModule],
  controllers: [TripApiGatewayController],
  providers: [TripApiGatewayService],
})
export class TripApiGatewayModule {}
