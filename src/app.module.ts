import { Module } from '@nestjs/common';
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
  ]
})
export class AppModule {}
