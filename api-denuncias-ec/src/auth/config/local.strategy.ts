import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth/auth.service';
import { AuthDto } from '../dtos/auth.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(authDto: AuthDto) {
    try {
      const user = await this.authService.validateUser(authDto);
      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      return null;
    }
  }

  
}
