import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class Team {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  // List of user IDs (string format)
  @Column()
  members: string[];
}