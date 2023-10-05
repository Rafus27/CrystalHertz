import { BadRequestException, Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

import { Auth, User } from 'src/types';

import { MailService } from 'src/mail/mail.service';
import { UsersService } from 'src/users/users.service';
import { ProfileService } from 'src/profiles/profiles.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly mailService: MailService,
    private readonly profileService: ProfileService,
  ) {}

  async sign_up(user: User) {
    const userExists = await this.usersService.find_by_login(user.login);

    if (userExists)
      throw new BadRequestException(
        'Кажется данный логин/почта уже занят(-ы), попробуйте другой(-ую).',
      );

    const hashPassword = await hash(user.password, 10);

    const newUser = await this.usersService.create({
      ...user,
      role: 'LISTENER',
      password: hashPassword,
    });

    newUser.save();

    const createProfile = await this.profileService.createRandomProfile(
      newUser._id,
    );

    await newUser.updateOne({ profile: createProfile });

    this.mailService.sendMail(
      {
        login: newUser.login,
        to: newUser.email,
        subject: 'Успешная регистрация на Crystal Hertz!',
        link: 'http://localhost:5173/',
      },
      'welcome',
    );

    return newUser._id;
  }

  async sign_in(authUser: Auth) {
    const user = await this.usersService.find_by_login(authUser.login);

    if (!user) throw new BadRequestException('Логин и/или пароль неверный.');

    const unhashPasswordMatch = await compare(authUser.password, user.password);

    if (!unhashPasswordMatch)
      throw new BadRequestException('Логин и/или пароль неверный.');

    return {
      message: 'С возвращением!',
      token: user._id as string,
    };
  }
}
