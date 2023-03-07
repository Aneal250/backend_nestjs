import { UpdateMedia } from './../../../utils/types';
import { MediaService } from './../../service/media/media.service';
import { CreateMediaDto } from './../../dtos/CreateMedia.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('media')
export class MediaController {
  constructor(private MediaService: MediaService) {}
  @Get()
  getMedia() {
    return this.MediaService.fetchMedia();
  }

  @Get(':id')
  async getMediaById(@Param('id', ParseIntPipe) id: number) {
    return this.MediaService.fetchMediaById(id);
  }

  @Post()
  createMedia(@Body() createMediaDto: CreateMediaDto) {
    this.MediaService.createMedia(createMediaDto);
  }

  @Patch(':id')
  async UpdateMediaById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMedia: CreateMediaDto,
  ) {
    await this.MediaService.updateMedia(id, updateMedia);
  }

  @Delete('id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.MediaService.deleteMedia(id);
  }
}
