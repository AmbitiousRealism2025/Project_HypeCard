
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useHyperCard } from '../lib/hypercard-context';
import { AnimatePresence, motion } from 'framer-motion';
import { LoadingIndicator } from './loading-indicator';

const Card1Welcome = dynamic(() => import('./cards/card-1-welcome').then(m => m.Card1Welcome), { loading: () => <LoadingIndicator /> });
const Card2WhatIsAI = dynamic(() => import('./cards/card-2-what-is-ai').then(m => m.Card2WhatIsAI), { loading: () => <LoadingIndicator /> });
const Card3AITools = dynamic(() => import('./cards/card-3-ai-tools').then(m => m.Card3AITools), { loading: () => <LoadingIndicator /> });
const Card4Quiz = dynamic(() => import('./cards/card-4-quiz').then(m => m.Card4Quiz), { loading: () => <LoadingIndicator /> });
const Card5AdvancedQuiz = dynamic(() => import('./cards/card-5-advanced-quiz').then(m => m.default), { loading: () => <LoadingIndicator /> });

export function CardStack() {
  const { state } = useHyperCard();

  const cards = [
    <Card1Welcome key="card-1" />,
    <Card2WhatIsAI key="card-2" />,
    <Card3AITools key="card-3" />,
    <Card4Quiz key="card-4" />,
    <Card5AdvancedQuiz key="card-5" />
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        data-testid="card-motion"
        key={state.currentCard}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full"
      >
        {cards[state.currentCard - 1]}
      </motion.div>
    </AnimatePresence>
  );
}
