import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateDenunciaDto } from 'src/denuncias/dtos/create-denuncia.dto';
import { UpdateDenunciaDto } from 'src/denuncias/dtos/update-denuncia.dto';
import { DenunciasService } from 'src/denuncias/services/denuncias/denuncias.service';

@ApiTags('denuncias')
@Controller('denuncias')
@UseGuards(JwtAuthGuard)
export class DenunciasController {
  constructor(private readonly denunciasService: DenunciasService) {}

  @Get('')
  async getDenuncias(
    @Query('page', ParseIntPipe) page: number,
    @Query('page_size', ParseIntPipe) page_size: number,
  ) {
    return await this.denunciasService.getDenuncias(page, page_size);
  }

  @Get(':id')
  async getOneDenuncia(@Param('id') id: string) {
    return await this.denunciasService.getOne(id);
  }

  @Post('')
  @HttpCode(201)
  async registerDenuncia(@Body() createDenunciaDto: CreateDenunciaDto) {
    return await this.denunciasService.create(createDenunciaDto);
  }

  @Put(':id')
  async editDenuncia(
    @Param('id') id: string,
    @Body() updateDenunciaDto: UpdateDenunciaDto,
  ) {
    return await this.denunciasService.update(id, updateDenunciaDto);
  }

  @Delete(':id')
  async removeDenuncia(@Param('id') id: string) {
    return await this.denunciasService.delete(id);
  }
}
