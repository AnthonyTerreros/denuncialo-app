import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './schemas/Users.schema';
import { UsersService } from './services/users/users.service';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { LocalStrategy } from './config/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { BcryptService } from './services/bcrypt.service';

@Module({
  imports: [
    PassportModule,
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  providers: [
    UsersService,
    AuthService,
    LocalStrategy,
    JwtModule,
    BcryptService,
    JwtService,
  ],
  exports: [],
  controllers: [AuthController],
})
export class AuthModule {}
