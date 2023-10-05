import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { ObjectId as _objectId } from 'mongodb';

import { Profile } from 'src/types';

import { ProfileDocument, ProfileSchema } from 'src/schemas/profile.schema';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(ProfileSchema.name)
    private readonly profileModel: Model<ProfileDocument>,
  ) {}

  async createRandomProfile(id: ObjectId): Promise<void> {
    const data: Readonly<Partial<Profile>> = {
      name: uuidv4().replace(/-/g, ''),
      surname: uuidv4().replace(/-/g, ''),
      avatarUrl:
        'https://w7.pngwing.com/pngs/799/987/png-transparent-computer-icons-avatar-social-media-blog-font-awesome-avatar-heroes-computer-wallpaper-social-media.png',
      subscribe: 'NONE',
      user: id,
      isActive: true,
    };

    const res = await this.profileModel.create(data);

    return res._id;
  }

  async getProfileById(id: string) {
    const changeId = new _objectId(id);

    const res = await this.profileModel.findOne({ _id: changeId }).exec();

    return res;
  }
}
