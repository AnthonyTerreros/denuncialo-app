import { Module } from '@nestjs/common';
import FilesController from './files.controllers';

@Module({
  controllers: [FilesController],
})
export class FilesModule {}
