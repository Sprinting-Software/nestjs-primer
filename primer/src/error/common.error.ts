import {BaseError} from './error.base';

type EntityNotFoundArgs = {name: string; id: any};
export class EntityNotFoundError extends BaseError<EntityNotFoundArgs> {
  constructor(data?: EntityNotFoundArgs, innerError?: Error, name = 'EntityNotFoundError', status = 400) {
    super(data, innerError, name, status);
  }
}

type ValidationErrorArgs = Record<string, Array<string>>;
export class ValidationError extends BaseError<ValidationErrorArgs> {
  constructor(data?: ValidationErrorArgs, innerError?: Error, name = `ValidationError`, status = 400) {
    super(data, innerError, name, status);
  }
}
