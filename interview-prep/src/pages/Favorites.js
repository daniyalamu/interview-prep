import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import DifficultyBadge from '../components/DifficultyBadge';
import { useTheme } from '../context/ThemeContext';
import { GiTrophy, GiAmmoBox } from 'react-icons/gi';
import { FiX } from 'react-icons/fi';
import '../styles/questions.css';

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();
  const { darkMode } = useTheme();
  const history = useHistory();

  if (favorites.length === 0) {
    return (
      <div className={`favorites-page ${darkMode ? 'dark' : ''}`}>
        <h1><GiTrophy /> LOOT DROP</h1>
        <div className="favorites-page__empty">
          <GiTrophy className="favorites-page__empty-icon" />
          <h2>No loot collected yet</h2>
          <p>Mark questions as favorites to build your loot crate</p>
          <button className="favorites-page__browse-btn" onClick={() => history.push('/topics')}>
            <GiAmmoBox /> Open Arsenal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`favorites-page ${darkMode ? 'dark' : ''}`}>
      <div className="favorites-page__header">
        <h1><GiTrophy /> LOOT DROP</h1>
        <span className="favorites-page__count">{favorites.length} items</span>
      </div>

      <div className="favorites-page__list">
        {favorites.map((q) => (
          <div key={q.key} className={`favorites-page__item ${darkMode ? 'dark' : ''}`}>
            <div className="favorites-page__item-content" onClick={() => history.push(`/topic/${q.topicId}?q=${q.id}`)}>
              <div className="favorites-page__item-header">
                <span className="favorites-page__item-topic">{q.topicName}</span>
                <DifficultyBadge difficulty={q.difficulty} />
              </div>
              <p className="favorites-page__item-question">{q.question}</p>
            </div>
            <button
              className="favorites-page__remove-btn"
              onClick={() => removeFavorite(q)}
              aria-label="Remove from loot"
            >
              <FiX />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
