import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';

@Controller()
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @MessagePattern('trip.create')
  create(@Payload() createTripDto: CreateTripDto) {
    return this.tripsService.create(createTripDto);
  }

  @MessagePattern('trip.findAll')
  findAll() {
    return this.tripsService.findAll();
  }

  @MessagePattern('trip.findOne')
  findOne(@Payload() id: number) {
    return this.tripsService.findOne(id);
  }

  @MessagePattern('trip.update')
  update(@Payload() updateTripDto: UpdateTripDto) {
    return this.tripsService.update(updateTripDto.id, updateTripDto);
  }

  @MessagePattern('trip.remove')
  remove(@Payload() id: number) {
    return this.tripsService.remove(id);
  }
}
