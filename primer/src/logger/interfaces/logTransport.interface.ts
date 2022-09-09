import {LogData} from './logdata.interface';

export interface LogTransport {
  log: (logData: LogData) => void;
}
