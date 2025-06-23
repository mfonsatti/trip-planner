import { Expose } from 'class-transformer';

export class TripDto {
  @Expose() id: string;

  @Expose() origin: string;

  @Expose() destination: string;

  @Expose() cost: number;

  @Expose() duration: number;

  @Expose() type: string;

  @Expose() display_name: string;
}
