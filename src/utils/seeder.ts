import { Media } from '../typeorm/entities/Media';
import { seeder } from 'nestjs-seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaSeeder } from './media.seeder';

seeder({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'aneal250',
      database: 'backend_task',
      entities: [Media],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Media]),
  ],
}).run([MediaSeeder]);
