import {HttpArgumentsHost} from '@nestjs/common/interfaces';
import {BaseError} from './error.base';

export default function formatError(error: BaseError<any>, ctx: HttpArgumentsHost): string {
  const request = ctx.getRequest();

  return `name: ${error.name}, message: ${error.message}, errorData: ${JSON.stringify(
    error.data,
  )} requestBody: ${JSON.stringify(request.body)}, requestHeaders: ${JSON.stringify(request.headers)}`;
}
