import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { MusicService } from './music.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Music } from 'src/types';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('audio'))
  async uploadAudio(
    @Body('name') name: string,
    @UploadedFile() file,
  ): Promise<Music> {
    const filePath = file.path;
    return this.musicService.createAudio(name, filePath);
  }

  @Get()
  async getAllAudio(): Promise<Music[]> {
    return this.musicService.findAll();
  }
}
