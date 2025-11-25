import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTeamDto } from './dto/create-team.dto';
import { AddMemberDto } from './dto/add-member.dto';

@Controller('team')
@UseGuards(JwtAuthGuard)
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  createTeam(@Body() body: CreateTeamDto) {
    return this.teamService.createTeam(body);
  }

  @Post('add-member')
  addMember(@Body() body: AddMemberDto) {
    return this.teamService.addMember(body);
  }

  @Get()
  getAll() {
    return this.teamService.getAllTeams();
  }
}
