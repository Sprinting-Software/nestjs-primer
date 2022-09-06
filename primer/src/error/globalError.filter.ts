import {ArgumentsHost, Catch, ExceptionFilter, Injectable} from '@nestjs/common';
import {AppConfigService} from '..//config/appconfig.service';
import {logger} from '../logger/mylogger';
import {BaseError} from './error.base';
import formatException from './formatException';

@Injectable()
@Catch()
export class GlobalErrorFilter implements ExceptionFilter {
  constructor(private readonly appConfig: AppConfigService) {}

  catch(exception: Error | BaseError<any>, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception instanceof BaseError) {
      logger.error(__filename, `Caught Error: ${formatException(exception, ctx)} `);
      // TODO: add event

      response.status(exception.status).send({
        message: exception.message,
      });
    } else if (exception instanceof Error) {
      // Code shouldn't normally come here. All errors should be captured on the edge of the system and transformed
      // into classes derived from BaseError. When this code is entered it means the error needs tobe captured and transformed.
      logger.error(__filename, `Caught unhandled exception ${exception.toString()}`);
      response.status(500).send({message: exception.toString()});
    } else {
      // Code should never come here. It means there is an unhandled exception which needs to be captured and parsed
      // In other words every time this path is executed it signifies a bug in the codebase
      logger.error(__filename, `Caught unhandled exception ${JSON.stringify(exception)}`);
      response.status(500).send({message: 'Internal Error'});
    }
  }
}
