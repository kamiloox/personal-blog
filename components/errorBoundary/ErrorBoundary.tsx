import { Component, ErrorInfo, ReactNode } from 'react';
import { Error } from '../shared/components/error/Error';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Error message="Przepraszam, coś poszło nie tak. Strona nie działa, spróbuj ponownie poźniej 😕" />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
