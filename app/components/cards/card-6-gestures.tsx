'use client';

import React from 'react';
import { HCButton } from '../hc-button';
import { HCField } from '../hc-field';
import cardContent from '../../data/card-6.json';
import { useHyperCard } from '../../lib/hypercard-context';

export function Card6Gestures() {
  const { dispatch } = useHyperCard();

  const handleNext = () => {
    dispatch({ type: 'NEXT_CARD' });
  };

  return (
    <div className="w-full h-full bg-white p-3 flex flex-col">
      <div className="text-center mb-2">
        <h1 className="text-lg font-bold mb-1">{cardContent.title}</h1>
        <div className="w-full h-px bg-black mb-2"></div>
      </div>
      <div className="flex-1 space-y-2">
        <HCField readonly className="text-center text-xs">
          {cardContent.intro}
        </HCField>
        <HCField readonly className="text-center text-xs">
          {cardContent.certificate}
        </HCField>
      </div>
      <div className="text-center mt-2">
        <HCButton onClick={handleNext} variant="shadow" className="px-4 py-1 text-sm">
          Continue →
        </HCButton>
      </div>
    </div>
  );
}
