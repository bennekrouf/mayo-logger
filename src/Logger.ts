type LogType = 'info' | 'warn' | 'error';

interface LogOptions {
  tag?: string;
  timestamp?: boolean;
}

const LOG_LEVELS: Record<LogType, number> = {
  'info': 1,
  'warn': 2,
  'error': 3,
};

let defaultAppName = "APP"; // fallback default
let defaultTimestamp = true; // default timestamp setting

export class Logger {
  static logLevel: LogType = 'info';
  static configure(options: LogOptions) {
    if (options.tag) {
        defaultAppName = options.tag;
    }
    if (typeof options.timestamp === "boolean") {
        defaultTimestamp = options.timestamp;
    }
  }

  static setLogLevel(logLevel: LogType) {
    Logger.logLevel = logLevel;
  }

  static log(type: LogType, message: string, data?: any, options?: LogOptions) {
    const defaultOptions: LogOptions = { 
      tag: defaultAppName, 
      timestamp: defaultTimestamp 
    };
    const finalOptions = { ...defaultOptions, ...options };

    const timestamp = finalOptions.timestamp ? new Date().toISOString() : '';
    const tag = finalOptions.tag ? `[${finalOptions.tag}]` : '';
    
    const logMessage = `${type.toUpperCase()} ${timestamp} ${tag} - ${message}`;
    
    if (LOG_LEVELS[type] <= LOG_LEVELS[Logger.logLevel]) {
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
