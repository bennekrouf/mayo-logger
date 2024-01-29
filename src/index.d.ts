declare module 'mayo-logger' {
    // LogType and LogOptions
    type LogType = 'info' | 'warn' | 'error';
    
    interface LogOptions {
      tag?: string;
      timestamp?: boolean;
    }
  
    // Logger class
    export class Logger {
      static log(type: LogType, message: string, data?: any, options?: LogOptions): void;
      static info(message: string, data?: any, options?: LogOptions): void;
      static warn(message: string, data?: any, options?: LogOptions): void;
      static error(message: string, data?: any, options?: LogOptions): void;
    }
  
    import { Component, ErrorInfo, ReactNode } from 'react';
  }
  