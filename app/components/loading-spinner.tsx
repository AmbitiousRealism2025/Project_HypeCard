'use client'

import { motion } from 'framer-motion'
import React from 'react'

export function LoadingSpinner() {
  return (
    <motion.div
      data-testid="loading-spinner"
      className="w-8 h-8 border-2 border-black border-t-transparent rounded-full m-auto"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
      role="status"
    />
  )
}

