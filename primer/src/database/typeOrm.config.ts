import {DataSource} from 'typeorm';
import config from '../config/configuration';

export default new DataSource({
  type: 'postgres',
  host: config.dbHost,
  port: config.dbPort,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: ['src/database/migrations/*{.ts, .js}'],
  synchronize: false,
});
