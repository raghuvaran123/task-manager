import { IsString, IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  description: string;

  @IsDateString()
  due_date: string;
}
