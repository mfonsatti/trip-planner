import { NestFactory } from '@nestjs/core';
import { TripSearchModule } from './trip-search.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TripSearchModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001
      }
    }
  );
  await app.listen();
}
bootstrap();
