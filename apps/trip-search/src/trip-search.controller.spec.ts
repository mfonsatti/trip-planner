import { Test, TestingModule } from '@nestjs/testing';
import { TripSearchController } from './trip-search.controller';
import { TripSearchService } from './trip-search.service';

describe('TripSearchController', () => {
  let tripSearchController: TripSearchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TripSearchController],
      providers: [TripSearchService],
    }).compile();

    tripSearchController = app.get<TripSearchController>(TripSearchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tripSearchController.getHello()).toBe('Hello World!');
    });
  });
});
