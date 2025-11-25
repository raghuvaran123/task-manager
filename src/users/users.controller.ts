// src/users/users.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteById(id);
  }

}
