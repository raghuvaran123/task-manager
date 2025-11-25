import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task-dto';
import { AssignTaskDto } from './dto/assign-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard) // ALL TASK ROUTES PROTECTED
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() dto: CreateTaskDto) {
    return this.tasksService.createTask(dto);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.tasksService.updateTask(id, dto);
  }

  @Post('assign')
  assignTask(@Body() dto: AssignTaskDto) {
    return this.tasksService.assignTask(dto);
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get('with-assignee')
  getAllTasksWithAssignee() {
    return this.tasksService.getAllTasksWithAssignee();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }
}
