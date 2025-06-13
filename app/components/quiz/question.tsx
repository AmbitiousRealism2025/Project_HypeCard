'use client';

import React from 'react';
import { HCField } from '../hc-field';

export type Question = {
  id: number;
  type: 'multiple-choice' | 'true-false' | 'text';
  question: string;
  options?: string[];
  answer: string | boolean;
  points: number;
};

interface Props {
  data: Question;
  value: string;
  onChange: (value: string) => void;
}

export function QuizQuestion({ data, value, onChange }: Props) {
  if (data.type === 'multiple-choice') {
    return (
      <div className="space-y-1">
        <HCField readonly className="p-2 bg-gray-100 text-xs">
          {data.question}
        </HCField>
        {data.options?.map((opt) => (
          <label key={opt} className="flex items-center space-x-1 text-xs">
            <input
              type="radio"
              name={`q-${data.id}`}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    );
  }

  if (data.type === 'true-false') {
    return (
      <div className="space-y-1">
        <HCField readonly className="p-2 bg-gray-100 text-xs">
          {data.question}
        </HCField>
        {['True', 'False'].map((opt) => (
          <label key={opt} className="flex items-center space-x-1 text-xs">
            <input
              type="radio"
              name={`q-${data.id}`}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    );
  }

  // text question
  return (
    <div className="space-y-1">
      <HCField readonly className="p-2 bg-gray-100 text-xs">
        {data.question}
      </HCField>
      <HCField
        value={value}
        onChange={onChange}
        placeholder="Your answer..."
        multiline
        className="min-h-[60px] text-xs"
      />
    </div>
  );
}
