import { reducer, TOAST_REMOVE_DELAY } from '../hooks/use-toast'

const baseToast = { id: '1', open: true, title: 'Hi', onOpenChange: () => {} }

describe('toast reducer', () => {
  it('adds a toast', () => {
    const state = { toasts: [] }
    const newState = reducer(state, { type: 'ADD_TOAST', toast: baseToast })
    expect(newState.toasts).toContainEqual(baseToast)
  })

  it('dismisses a toast and schedules removal', () => {
    jest.useFakeTimers()
    const spy = jest.spyOn(global, 'setTimeout')
    const state = { toasts: [baseToast] }
    const newState = reducer(state, { type: 'DISMISS_TOAST', toastId: '1' })
    expect(newState.toasts[0].open).toBe(false)
    expect(spy).toHaveBeenCalledWith(expect.any(Function), TOAST_REMOVE_DELAY)
    spy.mockRestore()
  })
})
