# Logging Library for React Native

This is a comprehensive logging solution for React Native applications. Not only does it offer versatile logging functionalities, but it also includes an ErrorBoundary component to catch and log component-level errors in React.

## Features

    Versatile Logging: Choose from info, warn, and error log types.
    Customizable Tags: Enrich your logs with custom tags.
    Timestamps: Embed timestamps in your logs to trace events chronologically.
    Error Boundary: A specialized React component to capture and log errors throughout your component hierarchy.

## Installation

```bash

yarn add rn-logging --save

```

## Configuration

Before you start logging events, you can configure the logger to customize its default behavior.

```Javascript
import { Logger } from 'rn-logging';

Logger.configure({
    appName: "YourAppName", // Set your app's name used for the tags
    timestamp: true // Default is true. Set to false if you don't want timestamps.
});

```

Place the configuration code early in your application's lifecycle, preferably in the main entry file (__App.ts__ or __index.ts__), to ensure your desired settings apply to all logs.

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

import { ErrorBoundary } from 'rn-logging';

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