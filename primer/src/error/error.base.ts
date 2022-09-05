export class BaseError<T> extends Error {
  message: string;
  status: number;
  data?: T;
  innerError?: Error;

  constructor(message: string, status: number, data?: T, innerError?: Error) {
    super(message);
    this.message = message;
    this.status = status;
    this.data = data;
    this.innerError = innerError;
  }
}
