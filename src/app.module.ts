import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './media/media.module';
import { Media } from './typeorm/entities/Media';

@Module({
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

    MediaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
