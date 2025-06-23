import { Test, TestingModule } from '@nestjs/testing';
import { ClientProxy } from '@nestjs/microservices';
import { TripsService } from './trips.service';
import { UpdateTripDto } from './dto/update-trip.dto';

describe('TripSearchService', () => {
  let service: TripsService;
  let client: ClientProxy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TripsService,
        {
          provide: 'TRIPS_CLIENT',
          useValue: {
            send: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TripsService>(TripsService);
    client = module.get<ClientProxy>('TRIPS_CLIENT');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should forward create query to the microservice', () => {
    const mockCreateQuery = {
      origin: 'ATL',
      destination: 'AMS',
      cost: 7286,
      duration: 42,
      type: 'flight',
      display_name: 'from ATL to AMS by flight',
    };
    service.create(mockCreateQuery);
    expect(client.send).toHaveBeenCalledWith('trips.create', mockCreateQuery);
  });

  it('should forward findAll to microservice', () => {
    service.findAll();
    expect(client.send).toHaveBeenCalledWith('trips.findAll', {});
  });

  it('should forward findOne to microservice', () => {
    const id = 'abc123';
    service.findOne(id);
    expect(client.send).toHaveBeenCalledWith('trips.findOne', id);
  });

  it('should forward update to microservice', () => {
    const id = 'abc123';
    const dto: UpdateTripDto = { cost: 9000 };
    service.update(id, dto);
    expect(client.send).toHaveBeenCalledWith('trips.update', { id, ...dto });
  });

  it('should forward remove to microservice', () => {
    const id = 'abc123';
    service.remove(id);
    expect(client.send).toHaveBeenCalledWith('trips.remove', id);
  });
});
