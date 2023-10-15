import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Logger } from './Logger';

interface State {
  hasError: boolean;
}

interface Props {
  children: ReactNode;
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.logErrorToMyService(error, errorInfo);
  }

  logErrorToMyService(error: Error, errorInfo: ErrorInfo) {
    Logger.error("An error occurred: " + error.toString(), errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.centeredContent}>
          <Text style={styles.errorText}>Something went wrong.</Text>
        </View>
      );
    }
  
    return this.props.children;
  }
}

export default ErrorBoundary;
