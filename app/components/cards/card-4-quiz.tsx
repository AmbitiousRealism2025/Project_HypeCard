
'use client';

import React, { useState } from 'react';
import { useHyperCard } from '../../lib/hypercard-context';
import { HCButton } from '../hc-button';
import { HCField } from '../hc-field';
import { HCSprite } from '../hc-sprite';

export function Card4Quiz() {
  const { state, dispatch } = useHyperCard();
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showResult, setShowResult] = useState(false);

  const question = "What are the five key characteristics of AI mentioned in this primer?";
  const correctKeywords = ['learning', 'reasoning', 'problem-solving', 'perception', 'language'];

  const handleCheck = () => {
    const userAnswer = answer.toLowerCase();
    const foundKeywords = correctKeywords.filter(keyword => 
      userAnswer.includes(keyword) || userAnswer.includes(keyword.replace('-', ' '))
    );

    dispatch({ 
      type: 'SAVE_QUIZ_ANSWER', 
      payload: { question, answer } 
    });

    if (foundKeywords.length >= 3) {
      setFeedback(`Excellent! You mentioned ${foundKeywords.length} out of 5 key characteristics. You understand the fundamentals of AI!`);
    } else if (foundKeywords.length >= 1) {
      setFeedback(`Good start! You mentioned ${foundKeywords.length} characteristic(s). The five key characteristics are: Learning, Reasoning, Problem-solving, Perception, and Language.`);
    } else {
      setFeedback(`The five key characteristics of AI are: Learning, Reasoning, Problem-solving, Perception, and Language. Try to remember these!`);
    }

    setShowResult(true);
    dispatch({ type: 'UPDATE_PROGRESS', payload: 'quiz-completed' });
  };

  const handleRestart = () => {
    dispatch({ type: 'GO_TO_CARD', payload: 1 });
  };

  return (
    <div className="w-full h-full bg-white p-3 flex flex-col">
      {/* Header */}
      <div className="text-center mb-2">
        <h1 className="text-lg font-bold mb-1">Mini-Quiz</h1>
        <div className="w-full h-px bg-black mb-2"></div>
      </div>

      {/* Main content */}
      <div className="flex-1 space-y-2">
        <div className="flex items-start space-x-2">
          <HCSprite type="brain" size="small" />
          <HCField readonly className="flex-1 text-xs">
            Test your knowledge from the AI Primer:
          </HCField>
        </div>

        <HCField readonly className="p-2 bg-gray-100 text-xs">
          <strong>Question:</strong><br />
          {question}
        </HCField>

        <div className="space-y-1">
          <div className="text-xs font-bold">Your Answer:</div>
          <HCField
            value={answer}
            onChange={setAnswer}
            placeholder="Type your answer here..."
            multiline
            className="min-h-[60px] text-xs"
          />
        </div>

        {!showResult ? (
          <div className="text-center">
            <HCButton 
              onClick={handleCheck} 
              style="shadow" 
              className="px-4 py-1 text-sm"
              disabled={!answer.trim()}
            >
              Check Answer
            </HCButton>
          </div>
        ) : (
          <div className="space-y-2">
            <HCField readonly className="p-2 bg-blue-50 text-xs">
              <strong>Feedback:</strong><br />
              {feedback}
            </HCField>

            <div className="flex justify-center space-x-2">
              <HCButton onClick={handleRestart} style="shadow" className="px-3 py-1 text-xs">
                Start Over
              </HCButton>
              <HCButton 
                onClick={() => dispatch({ type: 'GO_TO_CARD', payload: 1 })} 
                className="px-3 py-1 text-xs"
              >
                Home
              </HCButton>
            </div>
          </div>
        )}
      </div>

      {/* Progress indicator */}
      <div className="text-center mt-2">
        <HCField readonly className="text-center text-xs">
          Cards visited: {state.userProgress.visitedCards.length} of {state.totalCards} • 
          Sections completed: {state.userProgress.completedSections.length}
        </HCField>
      </div>
    </div>
  );
}
