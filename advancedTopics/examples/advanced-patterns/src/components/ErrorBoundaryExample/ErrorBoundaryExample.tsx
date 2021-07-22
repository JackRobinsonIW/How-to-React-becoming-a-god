import { ErrorBoundary } from "../ErrorBoundary";
import { ErrorGenerator } from "../ErrorGenerator";

export const ErrorBoundaryExample = () => (
  <ErrorBoundary errorMessage={"Boundary 1 Error"}>
    <ErrorGenerator message={"Top Level Error"} id={1} />

    <ErrorBoundary errorMessage={"Nested Boundary Error"}>
      <ErrorGenerator message={"Nested error"} id={2} />
    </ErrorBoundary>

    <div>
      <div>
        <div>
          <div>
            <ErrorGenerator message={"Some Deeply Nested Error"} id={3} />
          </div>
        </div>
      </div>
    </div>
  </ErrorBoundary>
);
