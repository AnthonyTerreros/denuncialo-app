import { Users } from 'src/auth/schemas/Users.schema';

export class UpdateDenunciaDto {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image_urls: string;
  readonly user: Users;
  readonly address: string;
  readonly city: string;
}
