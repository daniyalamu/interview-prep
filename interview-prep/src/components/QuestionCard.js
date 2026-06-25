import React from 'react';
import DifficultyBadge from './DifficultyBadge';
import { useTheme } from '../context/ThemeContext';
import { FiChevronRight } from 'react-icons/fi';

function QuestionCard({ question, index, isActive, onClick }) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`question-card ${isActive ? 'question-card--active' : ''} ${darkMode ? 'dark' : ''}`}
      onClick={() => onClick(question)}
    >
      <span className="question-card__index">{index}</span>
      <span className="question-card__text">{question.question}</span>
      <DifficultyBadge difficulty={question.difficulty} />
      <FiChevronRight className="question-card__arrow" />
    </div>
  );
}

export default QuestionCard;
