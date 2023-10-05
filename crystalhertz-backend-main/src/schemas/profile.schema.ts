import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';
import { Profile, SubscribeType } from 'src/types';

export type ProfileDocument = ProfileSchema & Document;

@Schema({ collection: 'profiles', timestamps: true })
export class ProfileSchema extends Document implements Profile {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: string;

  @Prop({ required: true })
  avatarUrl: string;

  @Prop({ required: false })
  albums: string[];

  @Prop({ required: false })
  playlists: string[];

  @Prop({ required: false })
  tracks: string[];

  @Prop({ required: false })
  friends: string[];

  @Prop({ required: false })
  subscribe: SubscribeType;

  @Prop({ type: Types.ObjectId, required: true, ref: 'users' })
  user: ObjectId;

  @Prop({ required: true, default: true })
  isActive: boolean;
}

export const ProfileSchemaFactory = SchemaFactory.createForClass(ProfileSchema);
