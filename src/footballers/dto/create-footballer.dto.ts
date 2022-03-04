import { IsNumber, IsString } from "class-validator";

export class CreateFootballerDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly number: number;
}
