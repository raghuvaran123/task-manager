import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task-dto';
import { AssignTaskDto } from './dto/assign-task.dto';
import { UsersService } from '../users/users.service';
import { ObjectId } from 'mongodb';
import { TaskWithAssigneeDto } from './dto/task-with-assignee.dto';
import { User } from '../users/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,

    private readonly usersService: UsersService,
  ) {}

  async createTask(data: CreateTaskDto): Promise<Task> {
    const task = this.taskRepo.create({
      description: data.description,
      due_date: data.due_date,
      status: 'pending',
      assignee: null,
    });

    return await this.taskRepo.save(task);
  }

  async updateTask(id: string, data: UpdateTaskDto) {
    await this.taskRepo.update({ _id: new ObjectId(id) }, data);
    return this.getTaskById(id);
  }

  async assignTask(data: AssignTaskDto) {
    const task = await this.getTaskById(data.task_id);
    if (!task) throw new NotFoundException('Task not found');

    const user = await this.usersService.findById(data.user_id);
    if (!user) throw new NotFoundException('User not found');

    task.assignee = data.user_id;

    return this.taskRepo.save(task);
  }

  async getTaskById(id: string) {
    return await this.taskRepo.findOneBy({ _id: new ObjectId(id) });
  }

  async getAllTasksWithAssignee(): Promise<TaskWithAssigneeDto[]> {
    const tasks = await this.taskRepo.find();
    const results: TaskWithAssigneeDto[] = [];

    for (const task of tasks) {
      let assigneeUser: User | null = null;

      if (task.assignee) {
        assigneeUser = await this.usersService.findById(task.assignee);
      }

      const dto: TaskWithAssigneeDto = {
        id: task._id.toString(),
        description: task.description,
        due_date: task.due_date,
        status: task.status,
        assignee: task.assignee ?? null,

        assigneeDetails: assigneeUser
          ? {
              id: assigneeUser.id.toString(),
              name: assigneeUser.name,
              email: assigneeUser.email,
            }
          : null,
      };

      results.push(dto);
    }

    return results;
  }

  async getAllTasks() {
    return this.taskRepo.find();
  }
}
