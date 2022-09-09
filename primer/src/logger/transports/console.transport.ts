// Implement the  transport interface
import {LogData} from '../interfaces/logdata.interface';

export default class ConsoleTransport {
  log(logData: LogData) {
    console.log(formatLogMessage(logData));
  }
}

const formatLogMessage = (logData: LogData): string => {
  let logString = `${logData.filename}[${logData.message}]`;

  if (logData.error) {
    logString += `[${logData.error.toString()}]`;
  }

  return logString;
};
