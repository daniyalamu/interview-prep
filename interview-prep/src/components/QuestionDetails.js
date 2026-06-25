import React, { useState } from 'react';
import DifficultyBadge from './DifficultyBadge';
import { useFavorites } from '../context/FavoritesContext';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { GiCrosshair, GiTrophy } from 'react-icons/gi';
import { FiChevronLeft, FiChevronRight, FiHeart } from 'react-icons/fi';
import { RiSwordFill } from 'react-icons/ri';

function QuestionDetails({ question, onPrevious, onNext, hasPrevious, hasNext }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const { markViewed } = useProgress();
  const { darkMode } = useTheme();

  React.useEffect(() => {
    if (question) {
      markViewed(question);
      setShowAnswer(false);
    }
    // eslint-disable-next-line
  }, [question]);

  if (!question) {
    return (
      <div className={`question-details question-details--empty ${darkMode ? 'dark' : ''}`}>
        <div className="question-details__placeholder">
          <GiCrosshair className="question-details__placeholder-icon" />
          <p>Select a target to engage</p>
        </div>
      </div>
    );
  }

  const favorite = isFavorite(question);

  const handleFavoriteToggle = () => {
    if (favorite) {
      removeFavorite(question);
    } else {
      addFavorite(question);
    }
  };

  return (
    <div className={`question-details ${darkMode ? 'dark' : ''}`}>
      <div className="question-details__header">
        <h2 className="question-details__title">{question.question}</h2>
        <button
          className={`question-details__fav-btn ${favorite ? 'question-details__fav-btn--active' : ''}`}
          onClick={handleFavoriteToggle}
          aria-label={favorite ? 'Remove from loot' : 'Add to loot'}
        >
          <FiHeart style={{ fill: favorite ? '#f59e0b' : 'none' }} />
        </button>
      </div>

      <div className="question-details__meta">
        <DifficultyBadge difficulty={question.difficulty} />
        <button className="question-details__mark-fav" onClick={handleFavoriteToggle}>
          <GiTrophy /> {favorite ? 'Looted' : 'Add to Loot'}
        </button>
      </div>

      <div className="question-details__section">
        <h3 className="question-details__section-title">
          <GiCrosshair /> INTEL
        </h3>
        <p className="question-details__text">{question.question}</p>
      </div>

      {!showAnswer ? (
        <button className="question-details__reveal-btn" onClick={() => setShowAnswer(true)}>
          <RiSwordFill /> REVEAL ANSWER
        </button>
      ) : (
        <>
          <div className="question-details__section">
            <h3 className="question-details__section-title question-details__section-title--answer">
              <RiSwordFill /> DECODED
            </h3>
            <p className="question-details__text">{question.answer}</p>
          </div>

          {question.keyPoints && question.keyPoints.length > 0 && (
            <div className="question-details__section question-details__key-points">
              <h3 className="question-details__section-title question-details__section-title--key">
                <GiTrophy /> KEY LOOT
              </h3>
              <ul className="question-details__points-list">
                {question.keyPoints.map((point, idx) => (
                  <li key={idx} className="question-details__point">{point}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      <div className="question-details__nav">
        <button
          className="question-details__nav-btn question-details__nav-btn--prev"
          onClick={onPrevious}
          disabled={!hasPrevious}
        >
          <FiChevronLeft /> Previous
        </button>
        <button
          className="question-details__nav-btn question-details__nav-btn--next"
          onClick={onNext}
          disabled={!hasNext}
        >
          Next <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default QuestionDetails;
