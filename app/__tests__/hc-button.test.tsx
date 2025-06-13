import { render, screen, fireEvent } from '@testing-library/react';
import { HCButton } from '../components/hc-button';

describe('HCButton', () => {
  it('renders children', () => {
    render(<HCButton>Click me</HCButton>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<HCButton onClick={handleClick}>Press</HCButton>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
