
'use client';

import React, { useState } from 'react';
import { useHyperCard } from '../../lib/hypercard-context';
import { HCButton } from '../hc-button';
import { HCField } from '../hc-field';
import { HCSprite } from '../hc-sprite';
import cardContent from '../../data/card-3.json';

export function Card3AITools() {
  const { dispatch } = useHyperCard();
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools = cardContent.tools;

  const handleToolClick = (toolName: string) => {
    setSelectedTool(selectedTool === toolName ? null : toolName);
  };

  const handleContinue = () => {
    dispatch({ type: 'UPDATE_PROGRESS', payload: 'ai-tools-completed' });
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
      <div className="flex-1 space-y-1">
        <HCField readonly className="text-center text-xs">
          {cardContent.intro}
        </HCField>

        {tools.map((tool, index) => (
          <div key={tool.name} className="space-y-1">
            <div className="flex items-center space-x-2">
              <HCSprite type={tool.icon} size="small" />
              <HCButton
                onClick={() => handleToolClick(tool.name)}
                className="flex-1 text-left text-xs px-2 py-1"
                variant={selectedTool === tool.name ? "shadow" : "default"}
              >
                {index + 1}. {tool.name}
              </HCButton>
            </div>
            
            {selectedTool === tool.name && (
              <HCField readonly className="ml-6 text-xs bg-gray-100 p-1">
                {tool.description}
              </HCField>
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="text-center mt-2">
        <HCButton onClick={handleContinue} variant="shadow" className="px-4 py-1 text-sm">
          Take Quiz →
        </HCButton>
      </div>
    </div>
  );
}
