
'use client';

import React from 'react';
import { HyperCardProvider } from '../lib/hypercard-context';
import { CardViewport } from '../components/card-viewport';
import { CardStack } from '../components/card-stack';

export default function HomePage() {
  return (
    <HyperCardProvider>
      <div className="min-h-screen bg-gray-400">
        <CardViewport>
          <CardStack />
        </CardViewport>
      </div>
    </HyperCardProvider>
  );
}
