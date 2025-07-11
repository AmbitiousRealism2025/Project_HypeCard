
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
  };
}

export interface NavigationAction {
  type: 'NEXT_CARD' | 'PREV_CARD' | 'GO_TO_CARD' | 'UPDATE_PROGRESS' | 'SAVE_QUIZ_ANSWER';
  payload?: any;
}
