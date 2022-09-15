import * as convict from 'convict';
import * as dotenv from 'dotenv';
import path from 'path';

const envVariablesPath = process.env.NODE_ENV ? path.join(__dirname, `../../${process.env.NODE_ENV}.env`) : '.env';
dotenv.config({path: envVariablesPath});

const convictSchema = convict({
  port: {
    doc: 'Port to run the service on',
    env: 'PORT',
    format: 'port',
    default: 3000,
  },
  dbPassword: {
    doc: 'Postgres password',
    env: 'DB_PASSWORD',
    default: '',
  },
  dbUser: {
    doc: 'Postgres username',
    env: 'DB_USER',
    default: '',
  },
  dbName: {
    doc: 'Postgres database name',
    env: 'DB_NAME',
    default: '',
  },
  dbHost: {
    doc: 'Postgres host',
    env: 'DB_HOST',
    default: '',
  },
  dbPort: {
    doc: 'Postgres DB Port',
    env: 'DB_PORT',
    default: 0,
  },
});

convictSchema.validate({allowed: 'strict'});
export default convictSchema.getProperties();
