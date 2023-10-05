import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { UserDocument, UserSchema } from 'src/schemas/user.schema';
import { Profile, User } from 'src/types';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserSchema.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  /**
   * Get all users from database
   * @returns {Promise<UserDocumnet[]>}
   */
  async find_all(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async generate_profile(userId: string, newData: Partial<Profile>) {
    const changeId = new ObjectId(userId);

    return await this.userModel
      .findOneAndUpdate({ _id: changeId }, newData, { upsert: true })
      .populate('profile')
      .exec();
  }

  /**
   * Find user by _id
   * @param id as string
   * @returns {Promise<UserDocument>}
   */
  async find_by_id(id: string): Promise<UserDocument> {
    const changeId = new ObjectId(id);

    const obj = await this.userModel.findOne({ _id: changeId }).exec();

    return obj;
  }

  /**
   *
   * @param login
   * @returns
   */
  async find_by_login(login: string) {
    return this.userModel.findOne({ login }).exec();
  }

  async create(user: User): Promise<UserDocument> {
    const newUser = new this.userModel(user);

    return newUser;
  }

  /**
   * Update user data on the database
   * @param id as string
   */
  async update(id: string, updateUserDto) {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  async change_login(id: string, name: string) {
    const user = this.find_by_id(id);

    console.log(user);

    return { user, name };
  }
}
