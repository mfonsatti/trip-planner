import { Inject, Injectable } from '@nestjs/common';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TripsService {
  constructor(@Inject('TRIPS_CLIENT') private tripsClient: ClientProxy) {}

  create(createTripDto: CreateTripDto) {
    return this.tripsClient.send('trips.create', createTripDto);
  }

  findAll() {
    return this.tripsClient.send('trips.findAll', {});
  }

  findOne(id: number) {
    return this.tripsClient.send('trips.findOne', id);
  }

  update(id: number, updateTripDto: UpdateTripDto) {
    return this.tripsClient.send('trips.update', { id, ...updateTripDto });
  }

  remove(id: number) {
    return this.tripsClient.send('trips.remove', id);
  }
}
