import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { SearchQueryDto, TripDto } from './dto/search.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TripSearchService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async search(query: SearchQueryDto): Promise<TripDto[]> {
    const baseUrl = this.configService.get<string>("API_BASE_URL");
    const apiKey = this.configService.get<string>("X_API_KEY");

    if (!baseUrl || !apiKey) {
      throw new Error(
        'Missing API_BASE_URL or X_API_KEY in environment variables',
      );
    }

    const { origin, destination } = query;

    const response = await this.httpService.axiosRef.get<TripDto[]>(baseUrl, {
      headers: {
        'x-api-key': apiKey,
      },
      params: {
        origin,
        destination,
      },
    });

    return response.data;
  }
}
