import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TripsModule } from './trips/trips.module';
import { Trip, TripSchema } from './trips/schemas/trip.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tripdb'),
    TripsModule,
  ],
})
export class TripsAppModule {}
