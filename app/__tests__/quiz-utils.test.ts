import { calculateScore, QuizQuestionDef } from '../lib/utils';

describe('calculateScore', () => {
  const questions: QuizQuestionDef[] = [
    { id: 1, type: 'multiple-choice', answer: 'A', points: 5 },
    { id: 2, type: 'true-false', answer: true, points: 5 },
  ];

  it('calculates total points for correct answers', () => {
    const answers = { 1: 'A', 2: 'true' };
    expect(calculateScore(questions, answers)).toBe(10);
  });

  it('gives zero for incorrect answers', () => {
    const answers = { 1: 'B', 2: 'false' };
    expect(calculateScore(questions, answers)).toBe(0);
  });
});
