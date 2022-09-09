// Call the base logger with correct arguments, etc etc
import {BaseLogger} from '../logger/logger.base';

export class LoggerService {
  private logger;
  constructor() {
    // Read from config, initialize different logger transports
    this.logger = new BaseLogger({tags: []});
  }

  info(filename: string, message: string) {
    this.logger.log({filename, message, tags: []});
  }

  error(filename: string, message: string, error?: Error) {
    this.logger.log({filename, message, tags: [], error});
  }
}

export default new LoggerService();
