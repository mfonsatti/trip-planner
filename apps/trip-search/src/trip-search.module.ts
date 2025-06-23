import { Module } from '@nestjs/common';
import { TripSearchController } from './trip-search.controller';
import { TripSearchService } from './trip-search.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.resolve(process.cwd(), 'apps/trip-search/.env'),
    }),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        const baseURL = config.get<string>('API_BASE_URL');
        const apiKey = config.get<string>('X_API_KEY');

        return {
          baseURL,
          headers: {
            'x-api-key': apiKey,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [TripSearchController],
  providers: [TripSearchService],
})
export class TripSearchModule {}
