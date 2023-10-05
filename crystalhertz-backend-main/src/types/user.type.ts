import { ObjectId } from 'mongoose';

export interface User {
  login: string;
  password: string;
  email: string;
  role: string; // fix
  profile: ObjectId;
}
