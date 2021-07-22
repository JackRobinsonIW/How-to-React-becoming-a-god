import { ComponentType, FC, useState } from "react";

export interface InjectedCounterProps {
  value: number;
}

type AsCounter<T> = Omit<T, keyof InjectedCounterProps>;

export const asCounter =
  <WrappedProps extends InjectedCounterProps>(
    WrappedComponent: ComponentType<WrappedProps>
  ): FC<AsCounter<WrappedProps>> =>
  ({ ...props }: AsCounter<WrappedProps>) => {
    const [currentValue, setCurrentValue] = useState(0);

    const add = () => {
      setCurrentValue(currentValue + 1);
    };

    const subtract = () => {
      setCurrentValue(currentValue - 1);
    };

    return (
      <>
        <button onClick={add}>Add</button>
        <WrappedComponent {...(props as WrappedProps)} value={currentValue} />
        <button onClick={subtract}>Subtract</button>
      </>
    );
  };
