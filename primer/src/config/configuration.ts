import * as convict from 'convict';
import * as dotenv from 'dotenv';

const path = process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : '.env';
dotenv.config({path});

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
});

convictSchema.validate({allowed: 'strict'});
export default convictSchema.getProperties();
