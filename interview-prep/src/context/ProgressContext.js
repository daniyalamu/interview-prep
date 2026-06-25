import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [viewedQuestions, setViewedQuestions] = useLocalStorage('interview-prep-viewed', []);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage('interview-prep-recent', []);

  const markViewed = (question) => {
    const key = `${question.topicId}-${question.id}`;
    if (!viewedQuestions.includes(key)) {
      setViewedQuestions([...viewedQuestions, key]);
    }
    // Update recently viewed (keep last 10)
    const updated = [question, ...recentlyViewed.filter(q => 
      !(q.topicId === question.topicId && q.id === question.id)
    )].slice(0, 10);
    setRecentlyViewed(updated);
  };

  const isViewed = (question) => {
    const key = `${question.topicId}-${question.id}`;
    return viewedQuestions.includes(key);
  };

  const resetProgress = () => {
    setViewedQuestions([]);
    setRecentlyViewed([]);
  };

  const getProgress = () => {
    return {
      total: viewedQuestions.length,
      recent: recentlyViewed
    };
  };

  return (
    <ProgressContext.Provider value={{ viewedQuestions, recentlyViewed, markViewed, isViewed, resetProgress, getProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
