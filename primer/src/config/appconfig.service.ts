import {Injectable} from '@nestjs/common';
import configuration from './configuration';

@Injectable()
export class AppConfigService {
  getConfig() {
    return configuration;
  }
}
