import { IsString } from 'class-validator';

export class AssignTaskDto {
  @IsString()
  task_id: string;

  @IsString()
  user_id: string;
}
