import { ObjectId } from 'mongoose';

export interface Profile {
  name: string;
  surname: string;
  avatarUrl: string;
  albums: string[]; // fix
  playlists: string[]; // fix
  tracks: string[]; // fix
  friends: string[]; // fix
  subscribe: SubscribeType; // later...
  user: ObjectId; // _id
  isActive: boolean;
}

export type SubscribeType = 'PRO' | 'DEFAULT' | 'NONE';
