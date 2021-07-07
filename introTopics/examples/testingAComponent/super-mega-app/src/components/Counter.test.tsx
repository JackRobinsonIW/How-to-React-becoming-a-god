import { render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';

describe('when rendering the Counter', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('should render a button', () => {
    expect(screen.queryByText('Count!')).toBeInTheDocument();
  });

  it('should a number counter starting at 0', () => {
    expect(screen.queryByText('0')).toBeInTheDocument();
  });
});

describe('when clicking on the Count! button', () => {
  beforeEach(() => {
    render(<Counter />);

    const buttonOnScreen = screen.getByText('Count!');

    fireEvent.click(buttonOnScreen);
  });

  it('should render a button', () => {
    expect(screen.queryByText('Count!')).toBeInTheDocument();
  });

  it('should a display a number incremented from 1', () => {
    expect(screen.queryByText('1')).toBeInTheDocument();
  });
});