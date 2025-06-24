import { PartialType } from '@nestjs/mapped-types';
import { CreateTripDto } from './create-trip.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTripDto extends PartialType(CreateTripDto) {
  @ApiProperty()
  id: string;
}
