declare module 'rn-logging' {
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
  
    // ErrorBoundary component
    import { Component, ErrorInfo, ReactNode } from 'react';
  
    interface ErrorBoundaryProps {
      children: ReactNode;
    }
  
    interface ErrorBoundaryState {
      hasError: boolean;
    }
  
    export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
      static getDerivedStateFromError(_: Error): ErrorBoundaryState;
      componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    }
  }
  