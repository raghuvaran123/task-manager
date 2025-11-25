export class CreateTeamDto {
  name: string;
  members: string[]; // array of userIds
}
