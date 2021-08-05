import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly limit?: number;

  @IsOptional()
  @IsNumber()
  readonly offset?: number;
}
