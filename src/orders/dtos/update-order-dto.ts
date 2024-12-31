import { IsNotEmpty, IsString, IsUUID, IsInt, Min } from 'class-validator';

export class UpdateOrderDTO {
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

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

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