
'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { useSoundEffect } from '../hooks/useSoundEffect'

interface HCButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: 'default' | 'round' | 'shadow';
  disabled?: boolean;
  className?: string;
}

export function HCButton({ 
  children, 
  onClick, 
  style = 'default', 
  disabled = false,
  className = ''
}: HCButtonProps) {
  const baseClasses = 'hc-button font-mono text-sm select-none'
  const playSound = useSoundEffect()
  
  const styleClasses = {
    default: 'rounded-none',
    round: 'rounded-lg',
    shadow: 'rounded-none shadow-lg'
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
      playSound()
    }
  };

  return (
    <motion.button
      className={`${baseClasses} ${styleClasses[style]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
