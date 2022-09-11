import {Injectable} from '@nestjs/common';
import {AppConfigService} from './config/appconfig.service';
import {LoggerService} from './logger/logger.service';
import {TenantService} from './modules/tenant/tenant.service';

@Injectable()
export class AppService {
  constructor(
    private appConfigService: AppConfigService,
    private logger: LoggerService,
    private tenantService: TenantService,
  ) {}

  async getHello(): Promise<string> {
    this.logger.info(__filename, `${this.appConfigService.getConfig().port}`);
    await this.tenantService.findOne(123);
    return Promise.resolve('Hello World!');
  }
}
