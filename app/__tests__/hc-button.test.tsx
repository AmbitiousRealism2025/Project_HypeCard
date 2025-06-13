import { render, screen, fireEvent } from '@testing-library/react'
import { HCButton } from '../components/hc-button'
import { useSoundEffect } from '../hooks/useSoundEffect'

jest.mock('../hooks/useSoundEffect')

describe('HCButton', () => {
  it('renders children', () => {
    render(<HCButton>Click me</HCButton>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    (useSoundEffect as jest.Mock).mockReturnValue(jest.fn());
    render(<HCButton onClick={handleClick}>Press</HCButton>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('plays sound when clicked', () => {
    const play = jest.fn();
    (useSoundEffect as jest.Mock).mockReturnValue(play);
    render(<HCButton>Noise</HCButton>);
    fireEvent.click(screen.getByRole('button'));
    expect(play).toHaveBeenCalled();
  });
});
