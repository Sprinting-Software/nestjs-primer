import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import config from '../config/configuration';

const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: config.dbHost,
  port: config.dbPort,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: ['../modules/**/migrations/.ts'],
  synchronize: false,
};

export default dbConfig;
