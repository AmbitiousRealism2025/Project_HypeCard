'use client'
import { useCallback, useRef, useEffect } from 'react'

export function useSound(enabled: boolean = true) {
  const ctxRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    return () => {
      ctxRef.current?.close().catch(() => {})
      ctxRef.current = null
    }
  }, [])

  return useCallback(() => {
    if (!enabled || typeof window === 'undefined') return
    const ctx = ctxRef.current ?? new AudioContext()
    ctxRef.current = ctx
    // some browsers suspend the AudioContext until user interaction
    ctx.resume().catch(() => {})
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = 880
    osc.connect(gain)
    gain.connect(ctx.destination)
    const now = ctx.currentTime
    osc.start(now)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2)
    osc.stop(now + 0.2)
    osc.onended = () => {
      osc.disconnect()
      gain.disconnect()
    }
  }, [enabled])
}
