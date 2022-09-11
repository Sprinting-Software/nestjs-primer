import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import config from '../config/configuration';

const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'demo',
  password: config.dbPassword,
  database: 'demo',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: ['../modules/**/migrations/.ts'],
  synchronize: false,
};

export default dbConfig;
