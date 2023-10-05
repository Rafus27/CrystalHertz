import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MusicSchema, MusicSchemaFactory } from 'src/schemas/music.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MusicSchema.name, schema: MusicSchemaFactory },
    ]),
  ],
  providers: [MusicService],
  controllers: [MusicController],
  exports: [MusicService],
})
export class MusicModule {}
