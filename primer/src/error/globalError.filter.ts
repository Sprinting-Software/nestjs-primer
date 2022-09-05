import {ArgumentsHost, Catch, ExceptionFilter, Injectable} from '@nestjs/common';
import {AppConfigService} from '..//config/appconfig.service';
import {BaseError} from './error.base';

@Injectable()
@Catch()
export class GlobalErrorFilter implements ExceptionFilter {
  constructor(private readonly appConfig: AppConfigService) {}

  catch(exception: Error | BaseError<any>, host: ArgumentsHost) {
    //TODO
    console.log('CAUGHT ERROR!!!!!', exception);
  }
}
