import { Component } from "react";

type ErrorBoundaryProps = {
  errorMessage: string;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch allows us to
  componentDidCatch(error, errorInfo) {
    // Here we could post this out to an API or Observability Service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Here we could render an error page
      return <h1>{this.props.errorMessage}</h1>;
    }

    return this.props.children;
  }
}
