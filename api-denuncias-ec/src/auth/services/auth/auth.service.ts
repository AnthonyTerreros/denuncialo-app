import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { BcryptService } from '../bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/auth/dtos/create-user.dto';
import { AuthDto } from 'src/auth/dtos/auth.dto';
import { LogoutDto } from 'src/auth/dtos/logout.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private bcryptService: BcryptService,
    private jwtService: JwtService,
  ) {}

  async registerNewUser(createUserDto: CreateUserDto) {
    try {
      const password = await this.bcryptService.encrypt(createUserDto.password);
      const data = { ...createUserDto, password };
      const user = await this.usersService.create(data);
      return user;
    } catch (error) {
      throw new HttpException('Error creating user', HttpStatus.BAD_REQUEST);
    }
  }

  async loginUser(authDto: AuthDto) {
    try {
      const user = await this.usersService.getByEmail(authDto.email);
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      const comparePassword = await this.bcryptService.comparePassword(
        authDto.password,
        user.password,
      );
      if (!comparePassword) {
        throw new HttpException('Wrong crendentials', HttpStatus.UNAUTHORIZED);
      }

      const payload = { id: user._id, email: user.email, role: user.rol };
      const acess_token = await this.jwtService.sign(payload);
      await this.usersService.setTokenById(user._id.toString(), acess_token);
      return { user, acess_token, message: 'Login Successfully' };
    } catch (error) {
      throw new HttpException('Error creating user', HttpStatus.BAD_REQUEST);
    }
  }

  async logoutUser(logoutDto: LogoutDto) {
    const user = await this.usersService.getById(logoutDto.id);
    if (!user) {
      throw new HttpException('Wrong crendentials', HttpStatus.NOT_FOUND);
    }
    const verifyToken = await this.jwtService.verify(logoutDto.access_token);
    if (!verifyToken) {
      throw new HttpException('Wrong crendentials', HttpStatus.UNAUTHORIZED);
    }

    await this.usersService.setTokenById(logoutDto.id, null);

    return { message: 'Logout Successfully' };
  }

  async validateUser(authDto: AuthDto) {
    const user = await this.usersService.getByEmail(authDto.email);
    const compareHash = await this.bcryptService.comparePassword(
      authDto.password,
      user.password,
    );
    if (!(user && compareHash)) {
      throw new HttpException('Error not founded user', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
