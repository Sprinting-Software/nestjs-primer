export interface LogData {
  message: string;
  data?: any;
  tags: [];
  filename: string;
  error?: Error;
  event?: any;
}
