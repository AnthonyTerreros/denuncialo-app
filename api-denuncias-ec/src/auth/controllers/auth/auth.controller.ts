import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from 'src/auth/dtos/auth.dto';
import { CreateUserDto } from 'src/auth/dtos/create-user.dto';
import { LogoutDto } from 'src/auth/dtos/logout.dto';
import { AuthService } from 'src/auth/services/auth/auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authDto: AuthDto) {
    return await this.authService.loginUser(authDto);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.registerNewUser(createUserDto);
  }

  @HttpCode(200)
  @Post('/logout')
  async logout(@Body() logoutDto: LogoutDto) {
    return await this.authService.logoutUser(logoutDto);
  }
}
