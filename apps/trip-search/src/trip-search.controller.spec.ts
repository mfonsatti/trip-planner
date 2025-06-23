import { Test, TestingModule } from '@nestjs/testing';
import { TripSearchController } from './trip-search.controller';
import { TripSearchService } from './trip-search.service';
import { SortBy, SearchQueryDto, TripDto } from '@app/contracts/trip-search/trip-search.dto';

describe('TripSearchController', () => {
  let controller: TripSearchController;
  let service: TripSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripSearchController],
      providers: [
        {
          provide: TripSearchService,
          useValue: {
            search: jest
              .fn()
              .mockResolvedValue([
                {
                  origin: 'ATL',
                  destination: 'PEK',
                  cost: 1,
                  duration: 2,
                  type: 't',
                  display_name: 'd',
                  id: 'z',
                } as TripDto,
              ]),
          },
        },
      ],
    }).compile();

    controller = module.get<TripSearchController>(TripSearchController);
    service = module.get<TripSearchService>(TripSearchService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service.search and return its value', async () => {
    const query: SearchQueryDto = {
      origin: 'ATL',
      destination: 'PEK',
      sort_by: SortBy.CHEAPEST,
    };
    const result = await controller.search(query);
    expect(service.search).toHaveBeenCalledWith(query);
    expect(result).toEqual([
      {
        origin: 'ATL',
        destination: 'PEK',
        cost: 1,
        duration: 2,
        type: 't',
        display_name: 'd',
        id: 'z',
      },
    ]);
  });
});
