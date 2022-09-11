import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AppConfigService} from './config/appconfig.service';
import dbConfig from './database/dbConfig';
import {LoggerService} from './logger/logger.service';
import {TenantModule} from './modules/tenant/tenant.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), TenantModule],
  controllers: [AppController],
  providers: [AppService, AppConfigService, LoggerService],
})
export class AppModule {}
