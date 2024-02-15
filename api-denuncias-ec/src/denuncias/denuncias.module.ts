import { Module } from '@nestjs/common';
import { DenunciasController } from './controllers/denuncias/denuncias.controller';
import { DenunciasService } from './services/denuncias/denuncias.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Denuncias, DenunciasSchema } from './schemas/denuncias.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Denuncias.name, schema: DenunciasSchema },
    ]),
  ],
  controllers: [DenunciasController],
  providers: [DenunciasService],
})
export class DenunciasModule {}
