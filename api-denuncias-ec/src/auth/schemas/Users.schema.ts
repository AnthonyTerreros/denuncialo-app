import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop()
  names: string;

  @Prop()
  lastnames: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ default: 'User' })
  rol: string;

  @Prop({})
  access_token: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
