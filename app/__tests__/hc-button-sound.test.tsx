import { render, screen, fireEvent } from '@testing-library/react'
import { HCButton } from '../components/hc-button'
import * as soundHook from '../hooks/use-sound'

jest.mock('../hooks/use-sound')

describe('HCButton sound', () => {
  it('plays sound on click when enabled', () => {
    const play = jest.fn()
    ;(soundHook.useSound as jest.Mock).mockReturnValue(play)
    render(<HCButton>Press</HCButton>)
    fireEvent.click(screen.getByRole('button'))
    expect(play).toHaveBeenCalled()
  })

  it('does not play sound when sound prop is false', () => {
    const play = jest.fn()
    ;(soundHook.useSound as jest.Mock).mockReturnValue(play)
    render(<HCButton sound={false}>Press</HCButton>)
    fireEvent.click(screen.getByRole('button'))
    expect(play).not.toHaveBeenCalled()
  })
})
