import { NestFactory } from '@nestjs/core';
import { TripSearchModule } from './trip-search.module';

async function bootstrap() {
  const app = await NestFactory.create(TripSearchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
