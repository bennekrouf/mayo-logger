"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const LOG_LEVELS = {
    'info': 1,
    'warn': 2,
    'error': 3,
};
let defaultAppName = "APP"; // fallback default
let defaultTimestamp = true; // default timestamp setting
class Logger {
    static configure(options) {
        if (options.tag) {
            defaultAppName = options.tag;
        }
        if (typeof options.timestamp === "boolean") {
            defaultTimestamp = options.timestamp;
        }
    }
    static setLogLevel(logLevel) {
        Logger.logLevel = logLevel;
    }
    static log(type, message, data, options) {
        const defaultOptions = {
            tag: defaultAppName,
            timestamp: defaultTimestamp
        };
        const finalOptions = Object.assign(Object.assign({}, defaultOptions), options);
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
    static info(message, data, options) {
        this.log('info', message, data, options);
    }
    static warn(message, data, options) {
        this.log('warn', message, data, options);
    }
    static error(message, data, options) {
        this.log('error', message, data, options);
    }
}
exports.Logger = Logger;
Logger.logLevel = 'info';
