import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AppConfigService} from './config/appconfig.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppConfigService],
})
export class AppModule {}
