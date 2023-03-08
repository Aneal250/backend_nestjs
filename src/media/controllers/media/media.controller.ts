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
  Query,
  Res,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('media')
export class MediaController {
  constructor(private MediaService: MediaService) {}
  //   @Get()
  //   async getMedia(@Res() res: Response) {
  //     const allMedia = await this.MediaService.fetchMedia();
  //     return res.status(HttpStatus.OK).json({
  //       status: 'success',
  //       message: 'All Media created',
  //       data: allMedia,
  //     });
  //   }

  @Get()
  async fetchMediaPageByPagination(
    @Query('page') page: number,
    @Query('perPage') perPage: number,
    @Res() res: Response,
  ) {
    const result = await this.MediaService.fetchMediaPagination(
      page || 1,
      perPage || 12,
    );
    try {
      return res.status(HttpStatus.OK).json({
        status: 'success',
        message: 'Showing 12 Media list per Page',
        data: result,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: 'failed',
        message: error,
      });
    }
  }
  @Get('search')
  async getMediaByTitle(@Query('query') query: string, @Res() res: Response) {
    console.log(query);

    const result = await this.MediaService.fetchMediaByTitle(query);
    return res.status(HttpStatus.OK).json({
      status: 'success',
      message: `Showing Result search of ${query}`,
      data: result,
    });
  }

  @Get(':id')
  async getMediaById(@Param('id') id: string, @Res() res: Response) {
    const result = await this.MediaService.fetchMediaById(id);
    return res.status(HttpStatus.OK).json({
      status: 'success',
      message: `Showing results of media By ${id}`,
      data: result,
    });
  }

  @Post()
  async createMedia(
    @Body() createMediaDto: CreateMediaDto,
    @Res() res: Response,
  ) {
    try {
      const result = await this.MediaService.createMedia(createMediaDto);
      return res.status(HttpStatus.OK).json({
        status: 'success',
        message: 'Media Succefully added',
        data: result,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: 'failed',
        message: error,
      });
    }
  }

  @Patch(':id')
  async UpdateMediaById(
    @Param('id') id: string,
    @Body() updateMedia: CreateMediaDto,
    @Res() res: Response,
  ) {
    const result = await this.MediaService.updateMedia(id, updateMedia);
    console.log(result);
    return res.status(HttpStatus.OK).json({
      status: 'success',
      message: 'Media Succefully Updated',
    });
  }

  @Delete('id')
  async deleteUserById(@Param('id') id: string, @Res() res: Response) {
    const result = await this.MediaService.deleteMedia(id);
    return res.status(HttpStatus.OK).json({
      status: 'success',
      message: 'Media Succefully Deleted',
    });
  }
}
