
'use client';

import React from 'react';

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
  const baseClasses = 'hc-button font-mono text-sm select-none';
  
  const styleClasses = {
    default: 'rounded-none',
    round: 'rounded-lg',
    shadow: 'rounded-none shadow-lg'
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${baseClasses} ${styleClasses[style]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
    >
      {children}
    </button>
  );
}
