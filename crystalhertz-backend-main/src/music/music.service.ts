import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MusicDocument, MusicSchema } from 'src/schemas/music.schema';
import { Music } from 'src/types';

@Injectable()
export class MusicService {
  constructor(
    @InjectModel(MusicSchema.name)
    private readonly musicModel: Model<MusicDocument>,
  ) {}

  async createAudio(name: string, filePath: string): Promise<Music> {
    const audio = new this.musicModel({ name, filePath });
    return await audio.save();
  }

  async findAll(): Promise<Music[]> {
    return await this.musicModel.find().exec();
  }
}
