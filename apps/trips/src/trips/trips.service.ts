import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trip } from './schemas/trip.schema';
import { CreateTripDto } from '@app/contracts/trips/create-trip.dto';
import { UpdateTripDto } from '@app/contracts/trips/update-trip.dto';

@Injectable()
export class TripsService {
  constructor(@InjectModel(Trip.name) private tripModel: Model<Trip>) {}

  create(createTripDto: CreateTripDto) {
    return this.tripModel.create(createTripDto);
  }

  findAll() {
    return this.tripModel.find().exec();
  }

  findOne(id: string) {
    return this.tripModel.findById(id).exec();
  }

  async update(id: string, updateTripDto: UpdateTripDto) {
    const updated = await this.tripModel.findByIdAndUpdate(id, updateTripDto, { new: true });
    if (!updated) throw new NotFoundException('Trip not found');
    return updated;
  }

  async remove(id: string) {
    const deleted = await this.tripModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Trip not found');
    return deleted;
  }
}
