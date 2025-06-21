import { Test, TestingModule } from '@nestjs/testing';
import { TripSearchController } from './trip-search.controller';

describe('TripSearchController', () => {
  let controller: TripSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripSearchController],
    }).compile();

    controller = module.get<TripSearchController>(TripSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
