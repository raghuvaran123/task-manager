import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity('tasks')
export class Task {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  description: string;

  @Column()
  due_date: Date;

  @Column()
  status: string;

  @Column({ nullable: true })
  assignee: string | null;
}
