import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage('interview-prep-favorites', []);

  const addFavorite = (question) => {
    const key = `${question.topicId}-${question.id}`;
    if (!favorites.find(f => f.key === key)) {
      setFavorites([...favorites, { ...question, key }]);
    }
  };

  const removeFavorite = (question) => {
    const key = `${question.topicId}-${question.id}`;
    setFavorites(favorites.filter(f => f.key !== key));
  };

  const isFavorite = (question) => {
    const key = `${question.topicId}-${question.id}`;
    return favorites.some(f => f.key === key);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
