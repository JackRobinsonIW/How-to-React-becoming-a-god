import { render, screen, fireEvent} from '@testing-library/react';
import CounterButton from './CounterButton';

const mockClickHandler = jest.fn();

describe('when rendering the CounterButton', () => {
  beforeEach(() => {
    render(<CounterButton onClick={mockClickHandler}/>);
  });

  it('should render a button', () => {
    expect(screen.queryByText('Count!')).toBeInTheDocument();
  });
});

describe('when clicking on the CounterButton', () => {
  beforeEach(() => {
    render(<CounterButton onClick={mockClickHandler}/>);
    const buttonOnScreen = screen.getByText('Count!');

    fireEvent.click(buttonOnScreen);
  });

  it('should use the provided onClickHandler', () => {
    expect(mockClickHandler).toHaveBeenCalled();
  });

  it('should only invoke the onClickHandler once', () => {
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});