import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Music } from 'src/types';

export type MusicDocument = MusicSchema & Document;

@Schema({ collection: 'musics', timestamps: true })
export class MusicSchema extends Document implements Music {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  filePath: string;
}

export const MusicSchemaFactory = SchemaFactory.createForClass(MusicSchema);
