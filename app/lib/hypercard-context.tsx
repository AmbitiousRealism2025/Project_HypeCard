
'use client';

import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { HyperCardState, NavigationAction } from './types';

const initialState: HyperCardState = {
  currentCard: 1,
  totalCards: 5,
  userProgress: {
    visitedCards: [1],
    quizAnswers: {},
    completedSections: [],
    quizScore: 0
  }
};

function hypercardReducer(state: HyperCardState, action: NavigationAction): HyperCardState {
  switch (action.type) {
    case 'NEXT_CARD':
      const nextCard = Math.min(state.currentCard + 1, state.totalCards);
      const nextVisitedCards = state.userProgress.visitedCards.includes(nextCard) 
        ? state.userProgress.visitedCards 
        : [...state.userProgress.visitedCards, nextCard];
      return {
        ...state,
        currentCard: nextCard,
        userProgress: {
          ...state.userProgress,
          visitedCards: nextVisitedCards
        }
      };
    
    case 'PREV_CARD':
      const prevCard = Math.max(state.currentCard - 1, 1);
      const prevVisitedCards = state.userProgress.visitedCards.includes(prevCard) 
        ? state.userProgress.visitedCards 
        : [...state.userProgress.visitedCards, prevCard];
      return {
        ...state,
        currentCard: prevCard,
        userProgress: {
          ...state.userProgress,
          visitedCards: prevVisitedCards
        }
      };
    
    case 'GO_TO_CARD':
      const targetCard = Math.max(1, Math.min(action.payload, state.totalCards));
      const targetVisitedCards = state.userProgress.visitedCards.includes(targetCard) 
        ? state.userProgress.visitedCards 
        : [...state.userProgress.visitedCards, targetCard];
      return {
        ...state,
        currentCard: targetCard,
        userProgress: {
          ...state.userProgress,
          visitedCards: targetVisitedCards
        }
      };
    
    case 'SAVE_QUIZ_ANSWER':
      return {
        ...state,
        userProgress: {
          ...state.userProgress,
          quizAnswers: {
            ...state.userProgress.quizAnswers,
            [action.payload.question]: action.payload.answer
          }
        }
      };

    case 'SAVE_QUIZ_RESULT':
      return {
        ...state,
        userProgress: {
          ...state.userProgress,
          quizScore: action.payload.score
        }
      };
    
    case 'UPDATE_PROGRESS':
      const updatedSections = state.userProgress.completedSections.includes(action.payload) 
        ? state.userProgress.completedSections 
        : [...state.userProgress.completedSections, action.payload];
      return {
        ...state,
        userProgress: {
          ...state.userProgress,
          completedSections: updatedSections
        }
      };
    
    default:
      return state;
  }
}

const HyperCardContext = createContext<{
  state: HyperCardState;
  dispatch: React.Dispatch<NavigationAction>;
} | null>(null);

function initState(): HyperCardState {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('hypercard-ai-primer-state');
    if (saved) {
      try {
        return { ...initialState, ...JSON.parse(saved) };
      } catch (e) {
        console.warn('Failed to load saved state:', e);
      }
    }
  }
  return initialState;
}

export function HyperCardProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(hypercardReducer, initialState, initState);
  const [sessionId] = useState(() => {
    if (typeof window !== 'undefined') {
      const existing = localStorage.getItem('hypercard-session-id');
      if (existing) return existing;
      const id = crypto.randomUUID();
      localStorage.setItem('hypercard-session-id', id);
      return id;
    }
    return '';
  });

  // Save to localStorage and server on state changes
  useEffect(() => {
    localStorage.setItem('hypercard-ai-primer-state', JSON.stringify(state));
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, state })
    }).catch((e) => console.warn('Failed to save progress', e));
  }, [state, sessionId]);

  return (
    <HyperCardContext.Provider value={{ state, dispatch }}>
      {children}
    </HyperCardContext.Provider>
  );
}

export function useHyperCard() {
  const context = useContext(HyperCardContext);
  if (!context) {
    throw new Error('useHyperCard must be used within a HyperCardProvider');
  }
  return context;
}
