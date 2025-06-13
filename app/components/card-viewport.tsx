
'use client';

import React, { useEffect } from 'react';
import { useHyperCard } from '../lib/hypercard-context';
import { NavigationControls } from './navigation-controls';

interface CardViewportProps {
  children: React.ReactNode;
}

export function CardViewport({ children }: CardViewportProps) {
  const { state, dispatch } = useHyperCard();

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        dispatch({ type: 'PREV_CARD' });
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        dispatch({ type: 'NEXT_CARD' });
      } else if (e.key === 'Home') {
        e.preventDefault();
        dispatch({ type: 'GO_TO_CARD', payload: 1 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400 p-4">
      {/* Card container */}
      <div className="card-viewport">
        <div className="card-content">
          {children}
        </div>
      </div>
      
      {/* Navigation controls below the card */}
      <div className="mt-6">
        <NavigationControls />
      </div>
    </div>
  );
}
