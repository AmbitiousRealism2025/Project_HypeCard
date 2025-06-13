'use client'
import { useCallback, useRef } from 'react'

export function useSound(enabled: boolean = true) {
  const ctxRef = useRef<AudioContext | null>(null)
  return useCallback(() => {
    if (!enabled || typeof window === 'undefined') return
    const ctx = ctxRef.current ?? new AudioContext()
    ctxRef.current = ctx
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = 880
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2)
    osc.stop(ctx.currentTime + 0.2)
  }, [enabled])
}
