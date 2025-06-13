
'use client';

import React from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { useHyperCard } from '../lib/hypercard-context'
import { LoadingSpinner } from './loading-spinner'

const Card1Welcome = dynamic(
  () => import('./cards/card-1-welcome').then((m) => m.Card1Welcome),
  { loading: () => <LoadingSpinner /> }
)
const Card2WhatIsAI = dynamic(
  () => import('./cards/card-2-what-is-ai').then((m) => m.Card2WhatIsAI),
  { loading: () => <LoadingSpinner /> }
)
const Card3AITools = dynamic(
  () => import('./cards/card-3-ai-tools').then((m) => m.Card3AITools),
  { loading: () => <LoadingSpinner /> }
)
const Card4Quiz = dynamic(
  () => import('./cards/card-4-quiz').then((m) => m.Card4Quiz),
  { loading: () => <LoadingSpinner /> }
)

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
      <AnimatePresence mode="wait">
        <motion.div
          key={state.currentCard}
          data-testid="animated-card"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.25 }}
        >
          {cards[state.currentCard - 1]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
