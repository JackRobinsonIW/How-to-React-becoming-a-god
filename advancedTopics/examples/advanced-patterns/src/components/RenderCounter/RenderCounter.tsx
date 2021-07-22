import { memo, useRef } from "react";

export const RenderCounter = () => {
  const renderCount = useRef(0);
  return (
    <div>
      <p>Rendered: {renderCount.current++} time(s)</p>
    </div>
  );
};

export const MemoizedRenderCounter = memo(RenderCounter);

type ControlledRenderCounterProps = {
  count: number;
};
export const ControlledRenderCounter = ({
  count,
}: ControlledRenderCounterProps) => (
  <div>
    <p>Rendered: {count} time(s)</p>
  </div>
);
