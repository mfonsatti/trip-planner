import { Test, TestingModule } from '@nestjs/testing';
import { TripSearchService } from './trip-search.service';

describe('TripSearchService', () => {
  let service: TripSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripSearchService],
    }).compile();

    service = module.get<TripSearchService>(TripSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
