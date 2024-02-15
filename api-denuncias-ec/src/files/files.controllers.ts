import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { createReadStream, readFileSync } from 'fs';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@ApiTags('files-uploads')
@Controller('files')
export default class FilesController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './storage',
        filename: (req, file, cb) => {
          let uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const name_file = file.originalname.split('.').at(0);
          const filename = `${name_file}-${uniqueSuffix}${ext}`;
          cb(null, filename);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return { message: 'File Uploaded' };
  }

  @Get(':name_file')
  getFile(@Param('name_file') name_file: string, @Res() response: Response) {
    const file = readFileSync(join(process.cwd(), `storage/${name_file}`));
    // return new StreamableFile(file);
    return response.send(file);
  }
}
