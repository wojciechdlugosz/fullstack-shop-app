import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsInt()
  @Min(0)
  volume: Prisma.Decimal;

  @IsInt()
  @Min(0)
  weight: Prisma.Decimal;

  @IsInt()
  @Min(0)
  height: Prisma.Decimal;

  @IsNotEmpty()
  @IsString()
  description_first_paragraph: string;

  @IsNotEmpty()
  @IsString()
  description_second_paragraph: string;

  @IsNotEmpty()
  @IsString()
  description_subtitle: string;

  @IsNotEmpty()
  @IsString()
  description_title: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  gallery: string;

  @IsNotEmpty()
  @IsString()
  main_img: string;

  @IsInt()
  @Min(0)
  length: Prisma.Decimal;

  @IsInt()
  @Min(0)
  width: Prisma.Decimal;
}