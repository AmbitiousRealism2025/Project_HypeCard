
'use client';

import React from 'react';
import { useHyperCard } from '../lib/hypercard-context';
import { HCButton } from './hc-button';
import { ThemeToggle } from './theme-toggle';

export function NavigationControls() {
  const { state, dispatch } = useHyperCard();

  return (
    <div className="nav-controls-external">
      {/* Row 1: Prev - Counter - Next */}
      <div className="flex items-center justify-center gap-8 mb-3">
        <HCButton 
          onClick={() => dispatch({ type: 'PREV_CARD' })}
          disabled={state.currentCard <= 1}
          className="text-sm px-3 py-2"
        >
          ← Prev
        </HCButton>
        
        <div className="hc-field px-3 py-2 text-center text-sm min-w-[80px]">
          {state.currentCard} of {state.totalCards}
        </div>
        
        <HCButton 
          onClick={() => dispatch({ type: 'NEXT_CARD' })}
          disabled={state.currentCard >= state.totalCards}
          className="text-sm px-3 py-2"
        >
          Next →
        </HCButton>
      </div>
      
      {/* Row 2: Home button and theme toggle */}
      <div className="flex justify-center gap-4 items-center">
        <HCButton
          onClick={() => dispatch({ type: 'GO_TO_CARD', payload: 1 })}
          style="shadow"
          className="text-sm px-4 py-2"
        >
          🏠 Home
        </HCButton>
        <ThemeToggle />
      </div>
    </div>
  );
}
