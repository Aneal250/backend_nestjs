import { Media } from '../typeorm/entities/Media';
import { DataFactory, Seeder } from 'nestjs-seeder';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class MediaSeeder implements Seeder {
  constructor(
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,
  ) {}

  drop(): Promise<any> {
    return this.mediaRepository.delete({});
  }

  seed(): Promise<any> {
    const MediaList = DataFactory.createForClass(Media).generate(20);

    return this.mediaRepository.insert(MediaList);
  }
}
