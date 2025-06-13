
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useHyperCard } from '../lib/hypercard-context';

const Card1Welcome = dynamic(() => import('./cards/card-1-welcome').then(m => m.Card1Welcome));
const Card2WhatIsAI = dynamic(() => import('./cards/card-2-what-is-ai').then(m => m.Card2WhatIsAI));
const Card3AITools = dynamic(() => import('./cards/card-3-ai-tools').then(m => m.Card3AITools));
const Card4Quiz = dynamic(() => import('./cards/card-4-quiz').then(m => m.Card4Quiz));

export function CardStack() {
  const { state } = useHyperCard();

  const cards = [
    <Card1Welcome key="card-1" />,
    <Card2WhatIsAI key="card-2" />,
    <Card3AITools key="card-3" />,
    <Card4Quiz key="card-4" />
  ];

  return (
    <div className="w-full h-full">
      {cards[state.currentCard - 1]}
    </div>
  );
}
