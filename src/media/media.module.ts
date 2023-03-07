import { Module } from '@nestjs/common';
import { MediaController } from './controllers/media/media.controller';
import { MediaService } from './service/media/media.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from 'src/typeorm/entities/Media';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
