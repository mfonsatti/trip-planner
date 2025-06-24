import { ApiProperty } from "@nestjs/swagger";

export class TripDto {
  @ApiProperty()
  origin: string;

  @ApiProperty()
  destination: string;

  @ApiProperty()
  cost: number;
  
  @ApiProperty()
  duration: number;
  
  @ApiProperty()
  type: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  display_name: string;
}
