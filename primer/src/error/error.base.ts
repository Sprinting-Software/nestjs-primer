export class BaseError<T> extends Error {
  name: string;
  status: number;
  data?: T;
  innerError?: Error;

  constructor(data?: T, innerError?: Error, name = 'InternalError', status = 500) {
    super(name);
    this.name = name;
    this.status = status;
    this.data = data;
    this.innerError = innerError;
  }
}
