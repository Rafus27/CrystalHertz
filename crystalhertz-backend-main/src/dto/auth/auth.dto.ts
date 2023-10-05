import { ApiProperty } from '@nestjs/swagger';

import { Auth } from 'src/types';

export class AuthDto implements Auth {
  @ApiProperty({
    example: 'myuserlogin',
    description: 'User login for authorization to account',
  })
  login: string;

  @ApiProperty({
    example: 'mypassword::not_hash',
    description: 'User password for authorization to account',
  })
  password: string;

  constructor({ login, password }: Readonly<AuthDto>) {
    this.login = login;
    this.password = password;
  }
}
