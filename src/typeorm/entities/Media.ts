import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Factory } from 'nestjs-seeder';
@Entity({ name: 'media' })
export class Media {
  @PrimaryGeneratedColumn()
  @Factory((faker) => faker.datatype.uuid())
  id: string;

  @Factory((faker) => faker.helpers.arrayElement(['movie', 'audio']))
  @Column()
  type: string;

  @Factory((faker) => faker.lorem.words(10))
  @Column()
  description: string;

  @Factory((faker) => faker.image.imageUrl())
  @Column()
  url: string;

  @Factory((faker) => faker.helpers.arrayElement(['active', 'inactive']))
  @Column()
  status: string;

  @Factory((faker) => faker.date.past())
  @Column()
  createdAt: Date;

  @Factory((faker) => faker.date.past())
  @Column()
  updatedAt: Date;

  @Factory((faker) => faker.date.past())
  @Column()
  deleteAt: Date;
}
