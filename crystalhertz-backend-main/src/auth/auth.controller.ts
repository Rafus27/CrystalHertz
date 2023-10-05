import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto, UserDto } from 'src/dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Registration post request
   * @param createUserDto
   * @returns {string} as _id new user
   * @version 0.1
   */
  @Post('signup')
  async signup(@Body() createUserDto: UserDto): Promise<string> {
    return this.authService.sign_up(createUserDto);
  }

  @Post('signin')
  async signin(@Body() authUserDto: AuthDto) {
    return this.authService.sign_in(authUserDto);
  }
}
