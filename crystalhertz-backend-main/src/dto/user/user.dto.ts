import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class UserDto {
  @ApiProperty({
    example: 'userlogin',
    description: 'User login field',
    minimum: 4,
    maximum: 16,
  })
  login: string;

  @ApiProperty({
    example: 'userpassword::hash',
    description: 'User password hash field',
    minimum: 8,
    maximum: 64,
  })
  password: string;

  @ApiProperty({
    example: 'useremail@e.com',
    description: 'User email field',
    minimum: 8,
    maximum: 32,
  })
  email: string;

  @ApiProperty({
    example: 'Listener',
    description: 'User role field',
    required: false,
  })
  role: string;

  @ApiProperty({
    example: 'id: _123125123...',
    description: 'User ref to profile _id',
    required: false,
  })
  profile: ObjectId;

  constructor({ login, password, email, role, profile }: UserDto) {
    this.login = login;
    this.password = password;
    this.email = email;
    this.role = role;
    this.profile = profile;
  }
}
