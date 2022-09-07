import {EventEmitter} from 'events';
import {LogData} from './interfaces/logdata.interface';
import {LoggerOptions, Tag} from './interfaces/loggerOptions.interface';
import {LogTransport} from './interfaces/logTransport.interface';
import ConsoleTransport from './transports/console.transport';
import {LogLevelTag} from './types/logleveltag.type';
import {formatFileNameWithBrackets} from './utils';

export const EmergencyLevelTag: Tag = {
  tagGroup: 'level',
  name: 'emergency',
  order: 0,
};

export const AlertLevelTag: Tag = {
  tagGroup: 'level',
  name: 'alert',
  order: 1,
};

export const CriticalLevelTag: Tag = {
  tagGroup: 'level',
  name: 'critical',
  order: 2,
};

export const ErrorLevelTag: Tag = {
  tagGroup: 'level',
  name: 'error',
  order: 3,
};

export const WarningLevelTag: Tag = {
  tagGroup: 'level',
  name: 'warning',
  order: 4,
};

export const NoticeLevelTag: Tag = {
  tagGroup: 'level',
  name: 'notice',
  order: 5,
};

export const InfoLevelTag: Tag = {
  tagGroup: 'level',
  name: 'info',
  order: 6,
};

export const DebugLevelTag: Tag = {
  tagGroup: 'level',
  name: 'debug',
  order: 7,
};

export const TraceLevelTag: Tag = {
  tagGroup: 'level',
  name: 'trace',
  order: 8,
};

export const DefaultTags: Tag[] = [
  EmergencyLevelTag,
  AlertLevelTag,
  CriticalLevelTag,
  ErrorLevelTag,
  WarningLevelTag,
  NoticeLevelTag,
  InfoLevelTag,
  DebugLevelTag,
  TraceLevelTag,
];

export class BaseLogger {
  private eventEmitter!: EventEmitter;
  public tags!: LogLevelTag[];
  public logTransports!: LogTransport[];

  constructor(options: LoggerOptions) {
    this.eventEmitter = new EventEmitter();
    this.tags = options.tags;
    this.logTransports = [new ConsoleTransport()];
  }

  public addBeforeLogListener = (listener: (logData: LogData) => void): this => {
    this.eventEmitter.addListener('before', listener);
    return this;
  };

  public addAfterLogListener = (listener: (logData: LogData) => void): this => {
    this.eventEmitter.addListener('after', listener);
    return this;
  };

  public log(logData: LogData) {
    this.logToOutputs(logData);
  }

  private logToOutputs(logData: LogData) {
    logData.filename = formatFileNameWithBrackets(logData.filename);
    this.eventEmitter.emit('before', logData);
    this.logTransports.forEach((x) => x.log(logData));
    this.eventEmitter.emit('after', logData);
  }
}
