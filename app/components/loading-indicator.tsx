'use client'
import { motion } from 'framer-motion'

export function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center w-full h-full" aria-label="Loading">
      <motion.div
        className="w-6 h-6 border-2 border-current border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
    </div>
  )
}
