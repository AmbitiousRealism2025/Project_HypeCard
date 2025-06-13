
'use client';

import React from 'react';
import { useHyperCard } from '../lib/hypercard-context';
import { Card1Welcome } from './cards/card-1-welcome';
import { Card2WhatIsAI } from './cards/card-2-what-is-ai';
import { Card3AITools } from './cards/card-3-ai-tools';
import { Card4Quiz } from './cards/card-4-quiz';

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
