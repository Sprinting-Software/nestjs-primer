import {Injectable} from '@nestjs/common';
import {AppConfigService} from './config/appconfig.service';
import {LoggerService} from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(private appConfigService: AppConfigService, private logger: LoggerService) {}

  getHello(): string {
    this.logger.info(__filename, `${this.appConfigService.getConfig('port')}`);
    return 'Hello World!';
  }
}
