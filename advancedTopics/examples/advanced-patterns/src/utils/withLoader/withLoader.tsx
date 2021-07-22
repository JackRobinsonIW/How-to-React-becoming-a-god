import { ComponentType, FC } from "react";

import { LoadingSpinner } from "../../components/LoadingSpinner";

interface WithLoaderProps {
  loading: boolean;
}

export const withLoader =
  <WrappedProps extends object>(
    WrappedComponent: ComponentType<WrappedProps>
  ): FC<WrappedProps & WithLoaderProps> =>
  ({ loading, ...props }: WithLoaderProps) =>
    loading ? (
      <LoadingSpinner />
    ) : (
      <WrappedComponent {...(props as WrappedProps)} />
    );
