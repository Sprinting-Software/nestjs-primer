import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {AppConfigService} from './config/appconfig.service';
import {GlobalErrorFilter} from './error/globalError.filter';
import * as Logger from './logger/mylogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(AppConfigService);
  app.useGlobalFilters(new GlobalErrorFilter(configService));
  Logger.initLogger(configService);
  Logger.logger.log(__filename, 'Logger initialized.');

  await app.listen(3000);
}
bootstrap();
