import { Test, TestingModule } from '@nestjs/testing';
import { TripSearchService } from './trip-search.service';
import { ClientProxy } from '@nestjs/microservices';

describe('TripSearchService', () => {
  let service: TripSearchService;
  let client: ClientProxy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TripSearchService,
        {
          provide: 'TRIP_SEARCH_CLIENT',
          useValue: {
            send: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TripSearchService>(TripSearchService);
    client = module.get<ClientProxy>('TRIP_SEARCH_CLIENT');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should forward search query to the microservice', () => {
    const mockQuery = {
      origin: 'SYD',
      destination: 'GRU',
      sort_by: 'fastest',
    } as any;
    service.search(mockQuery);
    expect(client.send).toHaveBeenCalledWith('trip.search', mockQuery);
  });
});
