import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TripsModule } from './trips/trips.module';
import { Trip, TripSchema } from './trips/schemas/trip.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/tripdb'),
    MongooseModule.forFeature([{ name: Trip.name, schema: TripSchema }]),
    TripsModule,
  ],
})
export class TripCrudModule {}
