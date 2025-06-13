'use client'

import { useCallback } from 'react'

export function useSoundEffect() {
  return useCallback(() => {
    if (typeof window === 'undefined') return
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = ctx.createOscillator()
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(440, ctx.currentTime)
      oscillator.connect(ctx.destination)
      oscillator.start()
      oscillator.stop(ctx.currentTime + 0.1)
    } catch (e) {
      console.warn('Sound failed', e)
    }
  }, [])
}

