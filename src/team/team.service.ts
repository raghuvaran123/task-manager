import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { AddMemberDto } from './dto/add-member.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepo: MongoRepository<Team>,
  ) {}


  createTeam(data: CreateTeamDto) {
    const team = this.teamRepo.create({
      name: data.name,
      members: data.members ?? [],
    });
    return this.teamRepo.save(team);
  }

  async addMember(data: AddMemberDto) {
    const team = await this.teamRepo.findOneBy({
      _id: new ObjectId(data.teamId),
    });

    if (!team) {
      throw new Error('Team not found');
    }

    if (!team.members.includes(data.userId)) {
      team.members.push(data.userId);
    }

    return this.teamRepo.save(team);
  }

  getAllTeams() {
    return this.teamRepo.find();
  }

  getTeamById(id: string) {
    return this.teamRepo.findOneBy({ _id: new ObjectId(id) });
  }
}
