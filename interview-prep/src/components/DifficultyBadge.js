import React from 'react';
import { GiRank1, GiRank2, GiRank3 } from 'react-icons/gi';
import { getDifficultyColor, getDifficultyBg } from '../utils/helpers';

function DifficultyBadge({ difficulty }) {
  const icon = difficulty === 'Easy' ? <GiRank1 /> : difficulty === 'Medium' ? <GiRank2 /> : <GiRank3 />;

  return (
    <span
      className="difficulty-badge"
      style={{
        color: getDifficultyColor(difficulty),
        backgroundColor: getDifficultyBg(difficulty),
        padding: '3px 10px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        border: `1px solid ${getDifficultyColor(difficulty)}20`
      }}
    >
      {icon} {difficulty}
    </span>
  );
}

export default DifficultyBadge;
