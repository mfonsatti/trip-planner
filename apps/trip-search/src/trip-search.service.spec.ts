import { Test, TestingModule } from '@nestjs/testing';
import { TripSearchService } from './trip-search.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { SortBy, TripDto } from '@app/contracts/trip-search/trip-search.dto';
import { AxiosRequestHeaders, AxiosResponse } from 'axios';

describe('TripSearchService', () => {
  let service: TripSearchService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TripSearchService,
        {
          provide: HttpService,
          useValue: {
            axiosRef: {
              get: jest.fn(),
            },
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: (key: string) => {
              if (key === 'API_BASE_URL') return 'https://example.com/trips';
              if (key === 'X_API_KEY') return 'test-key';
            },
          },
        },
      ],
    }).compile();

    service = module.get<TripSearchService>(TripSearchService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should fetch, filter and sort trips by cost when sort_by=cheapest', async () => {
    const mockTrips: TripDto[] = [
      {
        id: '2',
        origin: 'SYD',
        destination: 'GRU',
        duration: 20,
        cost: 300,
        display_name: 'b',
        type: 'flight',
      },
      {
        id: '4',
        origin: 'SYD',
        destination: 'GRU',
        duration: 40,
        cost: 500,
        display_name: 'd',
        type: 'flight',
      },
      {
        id: '3',
        origin: 'SYD',
        destination: 'GRU',
        duration: 30,
        cost: 200,
        display_name: 'c',
        type: 'flight',
      },
    ];

    const axiosResponse: AxiosResponse<TripDto[]> = {
      data: mockTrips,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        headers: {} as AxiosRequestHeaders,
      },
    };

    (httpService.axiosRef.get as jest.Mock).mockResolvedValue(axiosResponse);

    const result = await service.search({
      origin: 'SYD',
      destination: 'GRU',
      sort_by: SortBy.CHEAPEST,
    });

    expect(httpService.axiosRef.get).toHaveBeenCalledWith(
      'https://example.com/trips',
      {
        headers: {
          'x-api-key': 'test-key',
        },
        params: {
          origin: 'SYD',
          destination: 'GRU',
          sort_by: 'cheapest',
        },
      },
    );

    expect(result).toEqual([
      {
        id: '3',
        origin: 'SYD',
        destination: 'GRU',
        duration: 30,
        cost: 200,
        display_name: 'c',
        type: 'flight',
      },
      {
        id: '2',
        origin: 'SYD',
        destination: 'GRU',
        duration: 20,
        cost: 300,
        display_name: 'b',
        type: 'flight',
      },
      {
        id: '4',
        origin: 'SYD',
        destination: 'GRU',
        duration: 40,
        cost: 500,
        display_name: 'd',
        type: 'flight',
      },
    ]);
  });

  it('should fetch, filter and sort trips by cost when sort_by=fastest', async () => {
    const mockTrips: TripDto[] = [
      {
        id: '2',
        origin: 'SYD',
        destination: 'GRU',
        duration: 20,
        cost: 300,
        display_name: 'b',
        type: 'flight',
      },
      {
        id: '4',
        origin: 'SYD',
        destination: 'GRU',
        duration: 40,
        cost: 500,
        display_name: 'd',
        type: 'flight',
      },
      {
        id: '3',
        origin: 'SYD',
        destination: 'GRU',
        duration: 30,
        cost: 200,
        display_name: 'c',
        type: 'flight',
      },
    ];

    const axiosResponse: AxiosResponse<TripDto[]> = {
      data: mockTrips,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        headers: {} as AxiosRequestHeaders,
      },
    };

    (httpService.axiosRef.get as jest.Mock).mockResolvedValue(axiosResponse);

    const result = await service.search({
      origin: 'SYD',
      destination: 'GRU',
      sort_by: SortBy.FASTEST,
    });

    expect(httpService.axiosRef.get).toHaveBeenCalledWith(
      'https://example.com/trips',
      {
        headers: {
          'x-api-key': 'test-key',
        },
        params: {
          origin: 'SYD',
          destination: 'GRU',
          sort_by: 'fastest',
        },
      },
    );

    expect(result).toEqual([
      {
        id: '2',
        origin: 'SYD',
        destination: 'GRU',
        duration: 20,
        cost: 300,
        display_name: 'b',
        type: 'flight',
      },
      {
        id: '3',
        origin: 'SYD',
        destination: 'GRU',
        duration: 30,
        cost: 200,
        display_name: 'c',
        type: 'flight',
      },
      {
        id: '4',
        origin: 'SYD',
        destination: 'GRU',
        duration: 40,
        cost: 500,
        display_name: 'd',
        type: 'flight',
      },
    ]);
  });
});
