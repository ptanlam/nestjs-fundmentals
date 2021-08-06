import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of coffee.' })
  @IsString()
  readonly name?: string;

  @ApiProperty()
  @IsNumber()
  readonly price?: number;

  @ApiProperty()
  @IsString({ each: true })
  readonly flavors?: string[];
}
