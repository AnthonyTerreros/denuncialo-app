import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDenunciaDto } from 'src/denuncias/dtos/create-denuncia.dto';
import { UpdateDenunciaDto } from 'src/denuncias/dtos/update-denuncia.dto';
import { Denuncias } from 'src/denuncias/schemas/denuncias.schema';

@Injectable()
export class DenunciasService {
  constructor(
    @InjectModel(Denuncias.name) private denunciasModel: Model<Denuncias>,
  ) {}

  async getOne(id: string) {
    try {
      let denuncia = await this.denunciasModel.findById(id);
      if (!denuncia) {
        return new HttpException('Not founded denuncia', HttpStatus.NOT_FOUND);
      }
      return denuncia;
    } catch (error) {
      return new HttpException('Wrong Request Body', HttpStatus.BAD_REQUEST);
    }
  }

  async getDenuncias(page: number, page_size: number) {
    try {
      let pageSkip = page ? 0 : page;
      const denuncias = await this.denunciasModel.find(
        {},
        {},
        {
          skip: pageSkip,
          limit: page_size,
        },
      );
      return denuncias;
    } catch (error) {
      return new HttpException(
        'Wrong Request Body. Note: Send Page and PageSize with numbers values.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async create(createDenunciaDto: CreateDenunciaDto) {
    try {
      await this.denunciasModel.create(createDenunciaDto);
      return { message: 'Denuncia Created' };
    } catch (error) {
      return new HttpException('Wrong Request Body', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateDenunciaDto: UpdateDenunciaDto) {
    try {
      await this.denunciasModel.updateOne({
        where: { _id: id },
        updateDenunciaDto,
      });
    } catch (error) {
      return new HttpException('Wrong Request Body', HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string) {
    try {
      await this.denunciasModel.deleteOne({ where: { _id: id } });
      return { message: 'Denuncia deleted.' };
    } catch (error) {
      return new HttpException('Wrong Request Body', HttpStatus.BAD_REQUEST);
    }
  }
}
