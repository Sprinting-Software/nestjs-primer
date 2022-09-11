import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AppConfigService} from './config/appconfig.service';
import dbConfig from './database/dbConfig';
import {LoggerService} from './logger/logger.service';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig)],
  controllers: [AppController],
  providers: [AppService, AppConfigService, LoggerService],
})
export class AppModule {}
