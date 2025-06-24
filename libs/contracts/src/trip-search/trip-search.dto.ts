import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsIn, IsOptional, IsString } from 'class-validator';

export enum SortBy {
  FASTEST = 'fastest',
  CHEAPEST = 'cheapest',
}

export const SupportedIATA = [
  'ATL',
  'PEK',
  'LAX',
  'DXB',
  'HND',
  'ORD',
  'LHR',
  'PVG',
  'CDG',
  'DFW',
  'AMS',
  'FRA',
  'IST',
  'CAN',
  'JFK',
  'SIN',
  'DEN',
  'ICN',
  'BKK',
  'SFO',
  'LAS',
  'CLT',
  'MIA',
  'KUL',
  'SEA',
  'MUC',
  'EWR',
  'MAD',
  'HKG',
  'MCO',
  'PHX',
  'IAH',
  'SYD',
  'MEL',
  'GRU',
  'YYZ',
  'LGW',
  'BCN',
  'MAN',
  'BOM',
  'DEL',
  'ZRH',
  'SVO',
  'DME',
  'JNB',
  'ARN',
  'OSL',
  'CPH',
  'HEL',
  'VIE',
] as const;

export type IATACode = (typeof SupportedIATA)[number];

export class SearchQueryDto {
  @ApiProperty({
    enum: SupportedIATA
  })
  @IsString()
  @IsIn(SupportedIATA)
  origin: IATACode;

  @ApiProperty({
    enum: SupportedIATA
  })
  @IsString()
  @IsIn(SupportedIATA)
  destination: IATACode;

  @ApiProperty({
    enum: SortBy
  })
  @IsOptional()
  @IsEnum(SortBy)
  sort_by?: SortBy;
}

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
