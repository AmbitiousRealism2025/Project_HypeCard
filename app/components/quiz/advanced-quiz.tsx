'use client';

import React, { useState } from 'react';
import questionsData from '../../data/advanced-quiz.json';
import { QuizQuestion, Question } from './question';
import { HCButton } from '../hc-button';
import { HCField } from '../hc-field';
import { useHyperCard } from '@/lib/hypercard-context';

export function AdvancedQuiz() {
  const { dispatch } = useHyperCard();
  const questions = questionsData as Question[];
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState<number | null>(null);

  const question = questions[current];

  const handleChange = (val: string) => {
    setAnswers((a) => ({ ...a, [question.id]: val }));
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      finish();
    }
  };

  const finish = () => {
    let total = 0;
    questions.forEach((q) => {
      const user = answers[q.id];
      if (user === undefined) return;
      const correct = typeof q.answer === 'boolean' ? String(q.answer) : String(q.answer).toLowerCase();
      const provided = typeof q.answer === 'boolean' ? user : user.toLowerCase();
      if (provided === correct) total += q.points;
    });
    setScore(total);
    dispatch({ type: 'SAVE_QUIZ_RESULT', payload: { answers, score: total } });
    const sessionId =
      typeof window !== 'undefined'
        ? localStorage.getItem('hypercard-session-id') || ''
        : '';
    fetch('/api/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, result: answers, score: total }),
    }).catch((e) => console.warn('Failed to save quiz', e));
  };

  if (score !== null) {
    return (
      <div className="space-y-2">
        <HCField readonly className="p-2 bg-blue-50 text-xs">
          Your score: {score}
        </HCField>
        {score >= 20 && (
          <div id="certificate" className="p-2 border text-xs">
            <strong>Certificate of Completion</strong>
            <div>You passed the AI Primer Quiz!</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <QuizQuestion
        data={question}
        value={answers[question.id] || ''}
        onChange={handleChange}
      />
      <div className="text-center">
        <HCButton onClick={next} className="px-4 py-1 text-xs">
          {current < questions.length - 1 ? 'Next' : 'Finish'}
        </HCButton>
      </div>
    </div>
  );
}
