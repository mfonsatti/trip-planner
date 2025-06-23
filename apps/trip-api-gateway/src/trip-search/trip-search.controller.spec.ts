import { Test, TestingModule } from '@nestjs/testing';
import { TripSearchController } from './trip-search.controller';
import { TripSearchService } from './trip-search.service';

describe('TripSearchController', () => {
  let controller: TripSearchController;
  let service: TripSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripSearchController],
      providers: [
        {
          provide: TripSearchService,
          useValue: { search: jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<TripSearchController>(TripSearchController);
    service = module.get<TripSearchService>(TripSearchService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service.search with query parameters', () => {
    const mockQuery = {
      origin: 'SYD',
      destination: 'GRU',
      sort_by: 'cheapest',
    } as any;
    controller.search(mockQuery);
    expect(service.search).toHaveBeenCalledWith(mockQuery);
  });
});
