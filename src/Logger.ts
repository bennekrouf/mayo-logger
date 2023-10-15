type LogType = 'info' | 'warn' | 'error';

interface LogOptions {
  tag?: string;
  timestamp?: boolean;
}

export class Logger {
  static log(type: LogType, message: string, data?: any, options?: LogOptions) {
    const defaultOptions: LogOptions = { tag: 'APP', timestamp: true };
    const finalOptions = { ...defaultOptions, ...options };

    const timestamp = finalOptions.timestamp ? new Date().toISOString() : '';
    const tag = finalOptions.tag ? `[${finalOptions.tag}]` : '';
    
    const logMessage = `${type.toUpperCase()} ${timestamp} ${tag} - ${message}`;
    
    switch (type) {
      case 'info':
        console.info(logMessage, data);
        break;
      case 'warn':
        console.warn(logMessage, data);
        break;
      case 'error':
        console.error(logMessage, data);
        break;
      default:
        console.log(logMessage, data);
        break;
    }
  }

  static info(message: string, data?: any, options?: LogOptions) {
    this.log('info', message, data, options);
  }

  static warn(message: string, data?: any, options?: LogOptions) {
    this.log('warn', message, data, options);
  }

  static error(message: string, data?: any, options?: LogOptions) {
    this.log('error', message, data, options);
  }
}
