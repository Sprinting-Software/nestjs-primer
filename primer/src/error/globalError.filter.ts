import {ArgumentsHost, Catch, ExceptionFilter, Injectable} from '@nestjs/common';
import {AppConfigService} from '..//config/appconfig.service';
import logger from '../logger/logger.service';
import {BaseError} from './error.base';
import formatError from './formatError';

@Injectable()
@Catch()
export class GlobalErrorFilter implements ExceptionFilter {
  constructor(private readonly appConfig: AppConfigService) {}

  catch(error: Error | BaseError<any>, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (error instanceof BaseError) {
      logger.error(__filename, `Caught Error: ${formatError(error, ctx)} `);
      // TODO: add event

      response.status(error.status).send({
        message: error.message,
      });
    } else if (error instanceof Error) {
      // Code shouldn't normally come here. All errors should be captured on the edge of the system and transformed
      // into classes derived from BaseError. When this code is entered it means the error needs tobe captured and transformed.
      logger.error(__filename, `Caught unhandled exception ${error.toString()}`);
      response.status(500).send({message: error.toString()});
    } else {
      // Code should never come here. It means there is an unhandled exception which needs to be captured and parsed
      // In other words every time this path is executed it signifies a bug in the codebase
      logger.error(__filename, `Caught unhandled exception ${JSON.stringify(error)}`);
      response.status(500).send({message: 'Internal Error'});
    }
  }
}
