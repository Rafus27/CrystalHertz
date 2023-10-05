import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';
import type { User } from 'src/types';

export type UserDocument = UserSchema & Document;

@Schema({ collection: 'users', timestamps: true })
export class UserSchema extends Document implements User {
  @Prop({ required: true, unique: true })
  login: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  role: string;

  @Prop({ type: Types.ObjectId, required: false, ref: 'profiles' })
  profile: ObjectId;
}

export const UserSchemaFactory = SchemaFactory.createForClass(UserSchema);
