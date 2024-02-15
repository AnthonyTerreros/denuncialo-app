import { Module } from '@nestjs/common';
import { FilesModule } from './files/files.module';
import { DenunciasModule } from './denuncias/denuncias.module';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    FilesModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '3600s' },
    }),
    DenunciasModule,
    MulterModule.register({ dest: '/storage' }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
