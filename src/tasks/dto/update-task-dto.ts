import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  due_date?: string;

  @IsOptional()
  @IsString()
  status?: string;
}
