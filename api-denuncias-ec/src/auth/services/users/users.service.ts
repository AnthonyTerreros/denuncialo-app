import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/auth/dtos/create-user.dto';
import { Users } from 'src/auth/schemas/Users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

  async create(createUserDto: CreateUserDto) {
    return await this.usersModel.create(createUserDto);
  }

  async getById(id: string) {
    return await this.usersModel.findById(id);
  }

  async getByEmail(email: string) {
    return await this.usersModel.findOne({ where: { email } });
  }

  async setTokenById(id: string, token: string) {
    await this.usersModel.updateOne({ where: { _id: id } }, { token });
  }
}
