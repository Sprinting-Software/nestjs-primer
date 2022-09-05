import {Injectable} from '@nestjs/common';
import {AppConfigService} from './config/appconfig.service';

@Injectable()
export class AppService {
  constructor(private appConfigService: AppConfigService) {}

  getHello(): string {
    console.log(this.appConfigService.getConfig<number>('port'));
    return 'Hello World!';
  }
}
