import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
  @IsEmpty({ message: 'You cannot provider the id.' })
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  author: string;
}