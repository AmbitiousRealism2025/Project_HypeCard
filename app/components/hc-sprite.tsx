
'use client';

import React from 'react';

interface HCSpriteProps {
  type: 'brain' | 'robot' | 'computer' | 'lightbulb' | 'gear';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function HCSprite({ type, size = 'medium', className = '' }: HCSpriteProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  // Simple ASCII-style sprites using CSS and Unicode
  const sprites = {
    brain: (
      <div className={`${sizeClasses[size]} ${className} flex items-center justify-center text-black font-mono text-lg border-2 border-black bg-white`}>
        🧠
      </div>
    ),
    robot: (
      <div className={`${sizeClasses[size]} ${className} flex items-center justify-center text-black font-mono text-lg border-2 border-black bg-white`}>
        🤖
      </div>
    ),
    computer: (
      <div className={`${sizeClasses[size]} ${className} flex items-center justify-center text-black font-mono text-lg border-2 border-black bg-white`}>
        💻
      </div>
    ),
    lightbulb: (
      <div className={`${sizeClasses[size]} ${className} flex items-center justify-center text-black font-mono text-lg border-2 border-black bg-white`}>
        💡
      </div>
    ),
    gear: (
      <div className={`${sizeClasses[size]} ${className} flex items-center justify-center text-black font-mono text-lg border-2 border-black bg-white`}>
        ⚙️
      </div>
    )
  };

  return sprites[type];
}
