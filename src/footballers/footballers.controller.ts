import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post
} from "@nestjs/common";
import { CreateFootballerDto } from "./dto";
import { Footballer } from "./footballers.entity";
import { FootballersService } from "./footballers.service";

@Controller('footballers')
export class FootballersController {
  constructor(
    private readonly footballersService: FootballersService
  ) {}

  @Post()
  create(@Body() dto: CreateFootballerDto): Promise<Footballer> {
    return this.footballersService.create(dto);
  }

  @Get()
  findAll(): Promise<Footballer[]> {
    return this.footballersService.findAll();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number): Promise<Footballer> {
    return this.footballersService.remove(id);
  }
}
