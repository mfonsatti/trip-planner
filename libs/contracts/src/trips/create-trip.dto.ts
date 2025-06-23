import { IsNumber, IsString } from "class-validator";

export class CreateTripDto {
  @IsString()
  origin: string;

  @IsString()
  destination: string;

  @IsNumber()
  cost: number;

  @IsNumber()
  duration: number;

  @IsString()
  display_name: string;
}
