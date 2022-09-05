import {BaseError} from './error.base';

type EntityNotFoundArgs = {name: string; id: any};
export class EntityNotFoundError extends BaseError<EntityNotFoundArgs> {
  constructor(message = `Missing entity`, missingEntity: EntityNotFoundArgs, status = 404) {
    super(message, status, missingEntity);
  }
}

type ValidationErrorArgs = Record<string, Array<string>>;
export class ValidationError extends BaseError<ValidationErrorArgs> {
  constructor(missingEntity: ValidationErrorArgs, message = `Validation errors`, status = 400) {
    super(message, status, missingEntity);
  }
}
