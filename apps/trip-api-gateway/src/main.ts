import { NestFactory } from '@nestjs/core';
import { TripApiGatewayModule } from './trip-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(TripApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
