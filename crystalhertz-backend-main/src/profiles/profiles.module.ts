import { Module } from '@nestjs/common';
import { ProfileService } from './profiles.service';
import { ProfileController } from './profiles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProfileSchema,
  ProfileSchemaFactory,
} from 'src/schemas/profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProfileSchema.name, schema: ProfileSchemaFactory },
    ]),
  ],
  providers: [ProfileService],
  controllers: [ProfileController],
  exports: [ProfileService],
})
export class ProfileModule {}
