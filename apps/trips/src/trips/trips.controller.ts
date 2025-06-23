import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @MessagePattern("trips.create")
  create(@Payload() createTripDto: CreateTripDto) {
    return this.tripsService.create(createTripDto);
  }

  @MessagePattern("trips.findAll")
  findAll() {
    return this.tripsService.findAll();
  }

  @MessagePattern("trips.findOne")
  findOne(@Payload() id: string) {
    return this.tripsService.findOne(id);
  }

  @MessagePattern("trips.update")
  update(@Payload() updateTripDto: UpdateTripDto) {
    return this.tripsService.update(updateTripDto.id, updateTripDto);
  }

  @MessagePattern("trips.remove")
  remove(@Payload() id: string) {
    return this.tripsService.remove(id);
  }
}
