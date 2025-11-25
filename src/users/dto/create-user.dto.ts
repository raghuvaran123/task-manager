export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  teamId?: string;
  role?: string;
}
