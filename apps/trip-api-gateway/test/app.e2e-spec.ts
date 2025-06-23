import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { TripApiGatewayModule } from './../src/trip-api-gateway.module';

describe('TripApiGatewayController (e2e)', () => {
  let app: INestApplication;
  let createdTripId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TripApiGatewayModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  it('/trip-search (GET)', async () => {
    const res = await request(app.getHttpServer())
      .get('/trip-search')
      .query({ origin: 'MXP', destination: 'JFK' })
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
  });

  it('/trips (POST)', async () => {
    const res = await request(app.getHttpServer())
      .post('/trips')
      .send({
        origin: 'MXP',
        destination: 'JFK',
        cost: 1000,
        duration: 9,
        type: 'flight',
        display_name: 'from MXP to JFK by flight',
      })
      .expect(201);

    expect(res.body).toHaveProperty('id');
    createdTripId = res.body.id;
  });

  it('/trips (GET all)', async () => {
    const res = await request(app.getHttpServer()).get('/trips').expect(200);

    expect(Array.isArray(res.body)).toBe(true);
  });

  it('/trips/:id (GET one)', async () => {
    const res = await request(app.getHttpServer())
      .get(`/trips/${createdTripId}`)
      .expect(200);

    expect(res.body).toHaveProperty('id', createdTripId);
  });

  it('/trips/:id (PUT)', async () => {
    const res = await request(app.getHttpServer())
      .put(`/trips/${createdTripId}`)
      .send({ cost: 1200 })
      .expect(200);

    expect(res.body.cost).toBe(1200);
  });

  it('/trips/:id (DELETE)', async () => {
    await request(app.getHttpServer())
      .delete(`/trips/${createdTripId}`)
      .expect(200);
  });
});
