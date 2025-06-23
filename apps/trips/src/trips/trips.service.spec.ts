import { Test, TestingModule } from '@nestjs/testing';
import { TripsService } from './trips.service';
import { getModelToken } from '@nestjs/mongoose';
import { Trip } from './schemas/trip.schema';
import { Model } from 'mongoose';

describe('TripsService', () => {
  let service: TripsService;
  let model: Model<Trip>;

  const mockTrip = {
    _id: 'abc123',
    origin: 'MXP',
    destination: 'JFK',
    cost: 900,
    duration: 10,
    display_name: 'from MXP to JFK by flight',
    toObject: function () {
      return { ...this };
    },
  };

  const mockTripModel = {
    create: jest.fn().mockResolvedValue(mockTrip),
    find: jest
      .fn()
      .mockReturnValue({ exec: jest.fn().mockResolvedValue([mockTrip]) }),
    findByIdAndUpdate: jest.fn().mockResolvedValue(mockTrip),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TripsService,
        {
          provide: getModelToken(Trip.name),
          useValue: mockTripModel,
        },
      ],
    }).compile();

    service = module.get<TripsService>(TripsService);
    model = module.get<Model<Trip>>(getModelToken(Trip.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a trip', async () => {
    const dto = {
      origin: 'MXP',
      destination: 'JFK',
      cost: 900,
      duration: 10,
      display_name: 'from MXP to JFK by flight',
    };
    const result = await service.create(dto);
    expect(model.create).toHaveBeenCalledWith(dto);
    expect(result).toEqual(mockTrip);
  });

  it('should return all trips', async () => {
    const result = await service.findAll();
    expect(model.find).toHaveBeenCalled();
    expect(result).toEqual([mockTrip]);
  });

  it('should update a trip', async () => {
    const dto = { id: 'abc123', cost: 950 };
    const result = await service.update(dto.id, dto);
    expect(model.findByIdAndUpdate).toHaveBeenCalledWith('abc123', dto, {
      new: true,
    });
    expect(result).toEqual(mockTrip);
  });
});
