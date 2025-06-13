
'use client';

import React from 'react';
import { useHyperCard } from '../../lib/hypercard-context';
import { HCButton } from '../hc-button';
import { HCField } from '../hc-field';
import { HCSprite } from '../hc-sprite';
import cardContent from '../../data/card-2.json';

export function Card2WhatIsAI() {
  const { dispatch } = useHyperCard();

  const handleContinue = () => {
    dispatch({ type: 'UPDATE_PROGRESS', payload: 'what-is-ai-completed' });
    dispatch({ type: 'NEXT_CARD' });
  };

  return (
    <div className="w-full h-full bg-white p-3 flex flex-col">
      {/* Header */}
      <div className="text-center mb-2">
        <h1 className="text-lg font-bold mb-1">{cardContent.title}</h1>
        <div className="w-full h-px bg-black mb-2"></div>
      </div>

      {/* Main content */}
      <div className="flex-1 space-y-2">
        <div className="flex items-start space-x-2">
          <HCSprite type="lightbulb" size="small" />
          <HCField readonly className="flex-1 text-xs">
            {cardContent.intro}
          </HCField>
        </div>

        <HCField readonly className="p-2 text-xs">
          <div className="space-y-1">
            <div><strong>Key Characteristics:</strong></div>
            {cardContent.characteristics.map((c) => (
              <div key={c}>• {c}</div>
            ))}
          </div>
        </HCField>

        <div className="flex items-center space-x-2">
          <HCSprite type="computer" size="small" />
          <HCField readonly className="flex-1 text-xs">
            {cardContent.explanation}
          </HCField>
        </div>
      </div>

      {/* Navigation */}
      <div className="text-center mt-2">
        <HCButton onClick={handleContinue} variant="shadow" className="px-4 py-1 text-sm">
          Continue →
        </HCButton>
      </div>
    </div>
  );
}
