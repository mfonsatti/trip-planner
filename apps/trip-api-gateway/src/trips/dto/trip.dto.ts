import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TripDto {
  @ApiProperty()
  @Expose() id: string;

  @ApiProperty()
  @Expose() origin: string;

  @ApiProperty()
  @Expose() destination: string;

  @ApiProperty()
  @Expose() cost: number;

  @ApiProperty()
  @Expose() duration: number;

  @ApiProperty()
  @Expose() type: string;

  @ApiProperty()
  @Expose() display_name: string;
}
