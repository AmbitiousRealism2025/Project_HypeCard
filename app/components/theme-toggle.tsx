'use client'

import { useTheme } from 'next-themes'
import { HCButton } from './hc-button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return (
    <HCButton onClick={toggle} className="px-2 py-1 text-xs">
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </HCButton>
  )
}
