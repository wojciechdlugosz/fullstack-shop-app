import {
  IsNotEmpty,
  IsString,
  IsInt,
  Min,
  ArrayNotEmpty,
} from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  userEmail: string;

  @IsNotEmpty()
  @IsString()
  userAddress: string;

  @IsString()
  comment: string;

  @ArrayNotEmpty()
  @IsString({ each: true })
  productIds: string[];

  @IsNotEmpty()
  @IsString()
  delivery: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  priceProducts: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  priceTotal: number;
}