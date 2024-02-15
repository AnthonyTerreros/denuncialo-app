import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  constructor() {}

  async genereateSalt(saltRounds: number): Promise<number> {
    const salt = await bcrypt.genSalt(saltRounds);
    return parseInt(salt);
  }

  async encrypt(password: string) {
    let salt = await this.genereateSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  }

  async comparePassword(password: string, passwordHashed: string) {
    const compareResult = await bcrypt.compare(password, passwordHashed);
    return compareResult;
  }
}
