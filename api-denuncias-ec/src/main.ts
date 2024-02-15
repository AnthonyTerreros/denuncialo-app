import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('/api');
  const configService = app.get(ConfigService);
  const env_mode = configService.get<string>('ENV');
  if (env_mode === 'development') {
    const config = new DocumentBuilder()
      .setTitle('Denuncialo EC API')
      .setDescription(
        'La API de denuncias para consultar todos los reportes de problemas sociales y morales del Ecuador.',
      )
      .setVersion('1.0')
      .addTag('denuncias')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/document', app, document);
  }
  let port = Number(configService.get<string>('PORT'));
  await app.listen(port);
}
bootstrap();
