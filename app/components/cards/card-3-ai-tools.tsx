
'use client';

import React, { useState } from 'react';
import { useHyperCard } from '../../lib/hypercard-context';
import { HCButton } from '../hc-button';
import { HCField } from '../hc-field';
import { HCSprite } from '../hc-sprite';

export function Card3AITools() {
  const { dispatch } = useHyperCard();
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools = [
    {
      name: "Search Engines",
      description: "Google and Bing use AI to understand your queries and rank results intelligently.",
      icon: "computer" as const
    },
    {
      name: "Voice Assistants", 
      description: "Siri, Alexa, and Google Assistant use AI to understand speech and respond naturally.",
      icon: "robot" as const
    },
    {
      name: "Recommendation Systems",
      description: "Netflix, Spotify, and Amazon use AI to suggest content you might like.",
      icon: "lightbulb" as const
    },
    {
      name: "Navigation Apps",
      description: "Google Maps and Waze use AI to find optimal routes and predict traffic.",
      icon: "gear" as const
    },
    {
      name: "Photo Recognition",
      description: "Your phone's camera can identify objects, faces, and text using AI.",
      icon: "brain" as const
    }
  ];

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
        <h1 className="text-lg font-bold mb-1">Five Everyday AI Tools</h1>
        <div className="w-full h-px bg-black mb-2"></div>
      </div>

      {/* Main content */}
      <div className="flex-1 space-y-1">
        <HCField readonly className="text-center text-xs">
          Click on any tool below to learn more about how AI powers it:
        </HCField>

        {tools.map((tool, index) => (
          <div key={tool.name} className="space-y-1">
            <div className="flex items-center space-x-2">
              <HCSprite type={tool.icon} size="small" />
              <HCButton 
                onClick={() => handleToolClick(tool.name)}
                className="flex-1 text-left text-xs px-2 py-1"
                style={selectedTool === tool.name ? "shadow" : "default"}
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
        <HCButton onClick={handleContinue} style="shadow" className="px-4 py-1 text-sm">
          Take Quiz →
        </HCButton>
      </div>
    </div>
  );
}
