import { UpdateMedia } from './../../../utils/types';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from '../../../typeorm/entities/Media';
import { CreateMedia } from 'src/utils/types';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media) private mediaRepository: Repository<Media>,
  ) {}

  fetchMedia() {
    return this.mediaRepository.find();
  }

  fetchMediaById(id: number) {
    return this.mediaRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async fetchMediaPagination(page: number, pageSize: number) {
    const [result, total] = await this.mediaRepository.findAndCount({
      order: {
        createdAt: 'DESC',
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    return result;
  }

  createMedia(mediaDetails: CreateMedia) {
    const newMedia = this.mediaRepository.create({
      ...mediaDetails,
      createdAt: new Date(),
      updatedAt: new Date(),
      deleteAt: new Date(),
    });
    return this.mediaRepository.save(newMedia);
  }

  updateMedia(id: number, updateMedia: UpdateMedia) {
    return this.mediaRepository.update({ id }, { ...updateMedia });
  }

  deleteMedia(id: number) {
    return this.mediaRepository.delete({ id });
  }
}
