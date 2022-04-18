import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FootballersModule } from './footballers/footballers.module';

@Module({
  imports: [
    FootballersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/db.sqlite',
      autoLoadEntities: true,
      synchronize: true
    })
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ]
})
export class AppModule {}
