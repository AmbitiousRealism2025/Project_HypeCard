import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { HCButton } from '../components/hc-button'
import * as soundHook from '../hooks/use-sound'

describe('HCButton sound', () => {
  afterEach(() => {
    jest.restoreAllMocks()
    cleanup()
  })

  it('plays sound on click when enabled', () => {
    const play = jest.fn()
    jest.spyOn(soundHook, 'useSound').mockReturnValue(play)
    render(<HCButton>Press</HCButton>)
    fireEvent.click(screen.getByRole('button'))
    expect(play).toHaveBeenCalled()
  })

  it('does not play sound when sound prop is false', () => {
    const play = jest.fn()
    jest.spyOn(soundHook, 'useSound').mockReturnValue(play)
    render(<HCButton sound={false}>Press</HCButton>)
    fireEvent.click(screen.getByRole('button'))
    expect(play).not.toHaveBeenCalled()
  })

  it('closes AudioContext on unmount', () => {
    const close = jest.fn()
    class MockAudioContext {
      currentTime = 0
      destination = {}
      resume = jest.fn()
      close = close
      createOscillator() {
        return {
          type: 'sine',
          frequency: { value: 0 },
          connect: jest.fn(),
          start: jest.fn(),
          stop: jest.fn(),
          disconnect: jest.fn(),
          onended: null as any
        }
      }
      createGain() {
        return {
          connect: jest.fn(),
          disconnect: jest.fn(),
          gain: { exponentialRampToValueAtTime: jest.fn() }
        }
      }
    }
    ;(global as any).AudioContext = MockAudioContext

    render(<HCButton>Press</HCButton>)
    fireEvent.click(screen.getByRole('button'))
    cleanup()
    expect(close).toHaveBeenCalled()
  })
})
