"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static log(type, message, data, options) {
        const defaultOptions = { tag: 'APP', timestamp: true };
        const finalOptions = Object.assign(Object.assign({}, defaultOptions), options);
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
