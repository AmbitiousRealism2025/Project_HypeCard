
'use client';

import React from 'react';
import { useHyperCard } from '../../lib/hypercard-context';
import { HCButton } from '../hc-button';
import { HCField } from '../hc-field';
import { HCSprite } from '../hc-sprite';

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
        <h1 className="text-lg font-bold mb-1">What is AI?</h1>
        <div className="w-full h-px bg-black mb-2"></div>
      </div>

      {/* Main content */}
      <div className="flex-1 space-y-2">
        <div className="flex items-start space-x-2">
          <HCSprite type="lightbulb" size="small" />
          <HCField readonly className="flex-1 text-xs">
            <strong>Artificial Intelligence (AI)</strong> is the simulation of human intelligence 
            in machines that are programmed to think and learn like humans.
          </HCField>
        </div>

        <HCField readonly className="p-2 text-xs">
          <div className="space-y-1">
            <div><strong>Key Characteristics:</strong></div>
            <div>• <strong>Learning:</strong> Acquiring new information and skills</div>
            <div>• <strong>Reasoning:</strong> Using logic to reach conclusions</div>
            <div>• <strong>Problem-solving:</strong> Finding solutions to complex challenges</div>
            <div>• <strong>Perception:</strong> Interpreting sensory data</div>
            <div>• <strong>Language:</strong> Understanding and generating human language</div>
          </div>
        </HCField>

        <div className="flex items-center space-x-2">
          <HCSprite type="computer" size="small" />
          <HCField readonly className="flex-1 text-xs">
            AI systems can perform tasks that typically require human intelligence, 
            from recognizing speech to making decisions.
          </HCField>
        </div>
      </div>

      {/* Navigation */}
      <div className="text-center mt-2">
        <HCButton onClick={handleContinue} style="shadow" className="px-4 py-1 text-sm">
          Continue →
        </HCButton>
      </div>
    </div>
  );
}
