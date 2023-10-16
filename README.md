# Logging Library for React Native

This is a comprehensive logging solution for React Native applications. Not only does it offer versatile logging functionalities, but it also includes an ErrorBoundary component to catch and log component-level errors in React.

## Features

    Versatile Logging: Supports info, warn, and error log types.
    Customizable Tags: Add custom tags to your logs.
    Timestamps: Logs can include timestamps to make debugging easier.
    Error Boundary: A built-in React component to catch and report errors in your component tree.

## Installation

```bash

yarn add rn-logging --save

```

## Usage


### Logger

```javascript

import { Logger } from 'rn-logging';

Logger.info("This is an info log");
Logger.warn("This is a warning", { details: "Additional data here" });
Logger.error("An error occurred!", new Error("Dummy error"));

```

### ErrorBoundary

To catch and log errors from React components:

```javascript

import { ErrorBoundary } from 'your-logging-package-name';

function App() {
  return (
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>
  );
}
```


## API

## Logger

    Logger.log(type: LogType, message: string, data?: any, options?: LogOptions)
    Logger.info(message: string, data?: any, options?: LogOptions)
    Logger.warn(message: string, data?: any, options?: LogOptions)
    Logger.error(message: string, data?: any, options?: LogOptions)

## ErrorBoundary

A React component that uses the Logger to report component-level errors.


## Feedback & Contributions

Feel free to open issues on our GitHub repo if you find any bugs or have suggestions. Pull requests are also welcome!