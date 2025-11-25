// src/users/user.entity.ts
import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  teamId?: string; // can store team _id as string

  @Column({ default: 'member' })
  role: string; // 'member' | 'admin' etc.
}
