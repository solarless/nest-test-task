import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFootballerDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly number: number;
}
