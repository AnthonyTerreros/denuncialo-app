import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Users } from 'src/auth/schemas/Users.schema';

export type DenunciasDocument = HydratedDocument<Denuncias>;

@Schema()
export class Denuncias {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ unique: true })
  image_urls: string[];

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users' })
  owner: Users;
}

export const DenunciasSchema = SchemaFactory.createForClass(Denuncias);
