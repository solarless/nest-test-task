import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FootballersController } from "./footballers.controller";
import { Footballer } from "./footballers.entity";
import { FootballersService } from "./footballers.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Footballer])
  ],
  controllers: [FootballersController],
  providers: [FootballersService]
})
export class FootballersModule {}
