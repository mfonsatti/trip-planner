import { NestFactory, Reflector } from '@nestjs/core';
import { TripApiGatewayModule } from './trip-api-gateway.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(TripApiGatewayModule);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(process.env.port ?? 3000);
}
bootstrap();