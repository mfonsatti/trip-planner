import { NestFactory } from '@nestjs/core';
import { TripCrudModule } from './trip-crud.module';

async function bootstrap() {
  const app = await NestFactory.create(TripCrudModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
