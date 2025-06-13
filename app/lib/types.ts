
export interface Card {
  id: number;
  title: string;
  content: React.ReactNode;
  background?: string;
}

export interface HyperCardState {
  currentCard: number;
  totalCards: number;
  userProgress: {
    visitedCards: number[];
    quizAnswers: Record<string, string>;
    completedSections: string[];
    quizScore?: number;
  };
}

export type NavigationAction =
  | { type: 'NEXT_CARD' }
  | { type: 'PREV_CARD' }
  | { type: 'GO_TO_CARD'; payload: number }
  | { type: 'UPDATE_PROGRESS'; payload: string }
  | { type: 'SAVE_QUIZ_ANSWER'; payload: { question: number; answer: string } }
  | { type: 'SAVE_QUIZ_RESULT'; payload: { score: number } };
