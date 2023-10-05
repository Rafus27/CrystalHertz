import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { ProfileService } from './profiles.service';

@ApiTags('profiles')
@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('new')
  newProfile() {
    return 'new profile';
  }

  @Get(':id')
  getProfileById(@Param() id: string) {
    return this.profileService.getProfileById(id);
  }
}
