import * as convict from 'convict';
import * as dotenv from 'dotenv';

dotenv.config();

const convictSchema = convict({
  port: {
    doc: 'Port to run the service on',
    env: 'PORT',
    format: 'port',
    default: 3000,
  },
});

convictSchema.validate({allowed: 'strict'});
export default convictSchema.getProperties();
