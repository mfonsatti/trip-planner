import { Test, TestingModule } from '@nestjs/testing';
import { TripApiGatewayController } from './trip-api-gateway.controller';
import { TripApiGatewayService } from './trip-api-gateway.service';

describe('TripApiGatewayController', () => {
  let tripApiGatewayController: TripApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TripApiGatewayController],
      providers: [TripApiGatewayService],
    }).compile();

    tripApiGatewayController = app.get<TripApiGatewayController>(TripApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tripApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
