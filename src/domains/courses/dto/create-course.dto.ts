import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  IsOptional,
  IsBoolean,
  IsDate,
  IsNumber,
} from "class-validator";

/**
 * @class Contains all data fields for a order and used to create a new one.
 */
export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public description: string;

  // @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  public applicationDeadline: Date;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  public tuitionCost: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  public availableFunding: number;
}
