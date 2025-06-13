
'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { useSound } from '../hooks/use-sound';

interface HCButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'round' | 'shadow';
  disabled?: boolean;
  className?: string;
  sound?: boolean;
}

export function HCButton({
  children,
  onClick,
  variant = 'default',
  disabled = false,
  className = '',
  sound = true
}: HCButtonProps) {
  const baseClasses = 'hc-button font-mono text-sm select-none';

  const playSound = useSound(sound && !disabled);
  
  const variantClasses = {
    default: 'rounded-none',
    round: 'rounded-lg',
    shadow: 'rounded-none shadow-lg'
  };

  const handleClick = () => {
    if (disabled) return;
    if (sound) playSound();
    onClick?.();
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
    >
      {children}
    </motion.button>
  );
}
