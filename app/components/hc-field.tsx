
'use client';

import React from 'react';

interface HCFieldProps {
  children?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
  readonly?: boolean;
  className?: string;
}

export function HCField({ 
  children, 
  value, 
  onChange, 
  placeholder, 
  multiline = false, 
  readonly = false,
  className = ''
}: HCFieldProps) {
  const baseClasses = 'hc-field font-mono text-sm w-full';

  if (readonly || children) {
    return (
      <div className={`${baseClasses} ${className}`}>
        {children || value}
      </div>
    );
  }

  if (multiline) {
    return (
      <textarea
        className={`${baseClasses} resize-none ${className}`}
        value={value || ''}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        rows={4}
      />
    );
  }

  return (
    <input
      type="text"
      className={`${baseClasses} ${className}`}
      value={value || ''}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
    />
  );
}
