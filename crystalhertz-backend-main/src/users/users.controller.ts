import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { UserDocument } from 'src/schemas/user.schema';
import { UsersService } from './users.service';
import { UserDto } from 'src/dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({
    type: [UserDto],
    status: 201,
    description: 'Get all users from database is successfully',
  })
  async findAll(): Promise<UserDocument[]> {
    return this.usersService.find_all();
  }

  @Get(':id')
  async findById(@Param() id: string): Promise<UserDocument> {
    return this.usersService.find_by_id(id);
  }

  @Post('change_login/:id')
  async changeLogin(@Param() id: string, @Body() name: string) {
    return this.usersService.change_login(id, name);
  }
}
