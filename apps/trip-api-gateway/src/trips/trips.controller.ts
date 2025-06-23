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
import { TripDto } from './dto/trip.dto';
import { lastValueFrom } from 'rxjs';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post()
  async create(@Body() createTripDto: CreateTripDto) {
    const trip = await lastValueFrom(this.tripsService.create(createTripDto));
    const { _id, ...rest } = trip.toObject?.() ?? trip;
    return { id: _id, ...rest } as TripDto;
  }

  @Get()
  async findAll() {
    const trips = await lastValueFrom(this.tripsService.findAll());
    return trips.map((t) => {
      const { _id, ...rest } = t.toObject?.() ?? t;
      return { id: _id, ...rest } as TripDto;
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TripDto> {
    const trip = await lastValueFrom(this.tripsService.findOne(id));
    const { _id, ...rest } = trip.toObject?.() ?? trip;
    return { id: _id, ...rest } as TripDto;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTripDto: UpdateTripDto) {
    const updated = await lastValueFrom(this.tripsService.update(id, updateTripDto));
    const { _id, ...rest } = updated.toObject?.() ?? updated;
    return { id: _id, ...rest } as TripDto;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deleted = await lastValueFrom(this.tripsService.remove(id));
    const { _id, ...rest } = deleted.toObject?.() ?? deleted;
    return { id: _id, ...rest } as TripDto;
  }
}
