'use client';

import React from 'react';
import { AdvancedQuiz } from '../quiz/advanced-quiz';

export default function Card5AdvancedQuiz() {
  return (
    <div className="w-full h-full bg-white p-3 flex flex-col">
      <div className="text-center mb-2">
        <h1 className="text-lg font-bold mb-1">Advanced Quiz</h1>
        <div className="w-full h-px bg-black mb-2"></div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <AdvancedQuiz />
      </div>
    </div>
  );
}
