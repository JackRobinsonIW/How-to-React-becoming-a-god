import { ComponentType, Component } from "react";

import { LoadingSpinner } from "../../components/LoadingSpinner";

interface WithLoaderProps {
  loading: boolean;
}

export const withLoader =
  <T extends object>(
    WrappedComponent: React.ComponentType<T>
  ): React.FC<T & WithLoaderProps> =>
  ({ loading, ...props }: WithLoaderProps) =>
    loading ? <LoadingSpinner /> : <WrappedComponent {...(props as T)} />;
