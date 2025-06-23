import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { SearchQueryDto, SortBy, TripDto } from '@app/contracts/trip-search/trip-search.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TripSearchService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async search(query: SearchQueryDto): Promise<TripDto[]> {
    const baseUrl = this.configService.get<string>('API_BASE_URL');
    const apiKey = this.configService.get<string>('X_API_KEY');

    if (!baseUrl || !apiKey) {
      throw new Error(
        'Missing API_BASE_URL or X_API_KEY in environment variables',
      );
    }

    const { origin, destination, sort_by } = query;

    const response = await this.httpService.axiosRef.get<TripDto[]>(baseUrl, {
      headers: {
        'x-api-key': apiKey,
      },
      params: {
        origin,
        destination,
        sort_by
      },
    });

    const trips = response.data;
    
    return trips.sort((a, b) => {
      if (sort_by === SortBy.CHEAPEST) return a.cost - b.cost;
      if (sort_by === SortBy.FASTEST) return a.duration - b.duration;
      return 0;
    });
  }
}
