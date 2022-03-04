import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { findOneOrNotFound } from "../common/utils/find-one-or-not-found.util";
import { Repository } from "typeorm";
import { CreateFootballerDto } from "./dto/create-footballer.dto";
import { Footballer } from "./footballers.entity";

@Injectable()
export class FootballersService {
  constructor(
    @InjectRepository(Footballer)
    private readonly footballersRepository: Repository<Footballer>
  ) {}

  async create(dto: CreateFootballerDto): Promise<Footballer> {
    const footballer: Footballer = this.footballersRepository.create(dto);
    return this.footballersRepository.save(footballer);
  }

  async findAll(): Promise<Footballer[]> {
    return this.footballersRepository.find();
  }

  async remove(id: number): Promise<Footballer> {
    const footballer: Footballer =
      await findOneOrNotFound(this.footballersRepository, id);

    if (footballer.number === 10) {
      throw new ForbiddenException(
        'You cannot delete the footballer with number 10.'
      );
    }

    return this.footballersRepository.remove(footballer);
  }
}
