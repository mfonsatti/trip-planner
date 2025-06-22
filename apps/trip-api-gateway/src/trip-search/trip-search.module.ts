import { Module } from '@nestjs/common';
import { TripSearchService } from './trip-search.service';
import { TripSearchController } from './trip-search.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TRIP_SEARCH_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3001,
        },
      },
    ]),
  ],
  providers: [TripSearchService],
  controllers: [TripSearchController],
})
export class TripSearchModule {}
