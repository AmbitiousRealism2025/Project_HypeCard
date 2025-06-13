
'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { HyperCardProvider, useHyperCard } from '../../../lib/hypercard-context';
import { CardViewport } from '../../../components/card-viewport';
import { CardStack } from '../../../components/card-stack';

function CardPageContent() {
  const params = useParams();
  const router = useRouter();
  const { state, dispatch } = useHyperCard();

  useEffect(() => {
    const cardId = parseInt(params.id as string);
    if (isNaN(cardId) || cardId < 1 || cardId > 4) {
      router.push('/');
      return;
    }
    if (state.currentCard !== cardId) {
      dispatch({ type: 'GO_TO_CARD', payload: cardId });
    }
  }, [params.id, dispatch, router, state.currentCard]);

  return (
    <div className="min-h-screen bg-gray-400">
      <CardViewport>
        <CardStack />
      </CardViewport>
    </div>
  );
}

export default function CardPage() {
  return (
    <HyperCardProvider>
      <CardPageContent />
    </HyperCardProvider>
  );
}
