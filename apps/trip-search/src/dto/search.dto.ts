export enum SortBy {
  FASTEST = 'fastest',
  CHEAPEST = 'cheapest',
}

export class SearchQueryDto {
  origin: string;
  destination: string;
  sort_by: SortBy;
}

export class TripDto {
    origin: string
    destination: string
    cost: number
    duration: number
    type: string
    id: string
    display_name: string
}