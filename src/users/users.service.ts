// src/users/users.service.ts
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { ObjectId } from 'mongodb';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: MongoRepository<User>,
  ) {}

async create(dto: CreateUserDto) {
  const existing = await this.userRepo.findOne({
    where: { email: dto.email }
  });

  if (existing) {
    throw new BadRequestException('Email already exists');
  }
  
  const hashed = await bcrypt.hash(dto.password, 10);

  const user = this.userRepo.create({
    ...dto,
    password: hashed,
    role: dto.role || 'member',
  });

  return this.userRepo.save(user);
}



  findAll() {
    return this.userRepo.find();
  }

  findById(id: string) {
    return this.userRepo.findOneBy({ _id: new ObjectId(id) });
  }

  findByEmail(email: string) {
    console.log("email:",email)
    return this.userRepo.findOneBy({ email });
  }

 async deleteById(id: string) {
  const result = await this.userRepo.delete(id);

  if (result.affected === 0) {
    throw new NotFoundException('User not found');
  }

  return { message: 'User deleted successfully' };
}

}
