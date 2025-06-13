
'use client';

import React from 'react';
import { HyperCardProvider } from '../lib/hypercard-context';
import { CardViewport } from '../components/card-viewport';
import { CardStack } from '../components/card-stack';
import { ErrorBoundary } from '../components/error-boundary';

export default function HomePage() {
  return (
    <HyperCardProvider>
      <div className="min-h-screen bg-gray-400">
        <ErrorBoundary>
          <CardViewport>
            <CardStack />
          </CardViewport>
        </ErrorBoundary>
      </div>
    </HyperCardProvider>
  );
}
