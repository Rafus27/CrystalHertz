import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { MailModule } from 'src/mail/mail.module';
import { ProfileModule } from 'src/profiles/profiles.module';

@Module({
  imports: [UsersModule, MailModule, ProfileModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
