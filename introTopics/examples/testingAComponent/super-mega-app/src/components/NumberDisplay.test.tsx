import { render, screen } from '@testing-library/react';
import NumberDisplay from './NumberDisplay';


describe('When rendering number display with a count of 1', () => {
  beforeEach(() => {
    render(<NumberDisplay count={1}/>);
  })

  it('should display 1 as the count', () => {
    expect(screen.queryByText(1)).toBeInTheDocument();
  })
})