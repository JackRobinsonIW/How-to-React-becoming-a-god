import { render, screen } from '@testing-library/react';
import NumberDisplay from './NumberDisplay';

const scenarios: Array<number> = [
  -1,
  0,
  100,
]

describe.each(scenarios)('When rendering number display with a count of %p', (count) => {
  beforeEach(() => {
    render(<NumberDisplay count={count}/>);
  })

  it(`should display the ${count}`, () => {
    expect(screen.queryByText(count)).toBeInTheDocument();
  })
})