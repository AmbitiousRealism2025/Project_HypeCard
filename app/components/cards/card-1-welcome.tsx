
'use client';

import React from 'react';
import { useHyperCard } from '../../lib/hypercard-context';
import { HCButton } from '../hc-button';
import { HCField } from '../hc-field';
import { HCSprite } from '../hc-sprite';

export function Card1Welcome() {
  const { dispatch } = useHyperCard();

  const handleStart = () => {
    dispatch({ type: 'UPDATE_PROGRESS', payload: 'welcome-completed' });
    dispatch({ type: 'NEXT_CARD' });
  };

  return (
    <div className="w-full h-full bg-white p-3 flex flex-col">
      {/* Header */}
      <div className="text-center mb-3">
        <h1 className="text-lg font-bold mb-1">Welcome to AI Primer</h1>
        <div className="w-full h-px bg-black mb-2"></div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-3">
        <HCSprite type="brain" size="medium" />
        
        <HCField readonly className="text-center max-w-xs text-xs">
          Learn the fundamentals of Artificial Intelligence through this interactive HyperCard experience, 
          recreated for the modern web with authentic 1987 styling.
        </HCField>

        <HCField readonly className="text-center max-w-xs text-xs">
          Navigate using the buttons below, arrow keys (← →), or the Home key. 
          Your progress will be automatically saved.
        </HCField>

        <HCButton onClick={handleStart} style="shadow" className="px-4 py-1 text-sm">
          Start Learning
        </HCButton>
      </div>

      {/* Footer */}
      <div className="text-center text-xs mt-2">
        <HCField readonly className="text-center text-xs">
          HyperCard AI Primer • Card 1 of 4
        </HCField>
      </div>
    </div>
  );
}
