export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case 'Easy': return '#00e676';
    case 'Medium': return '#f5a623';
    case 'Hard': return '#ff3d3d';
    default: return '#8892a4';
  }
}

export function getDifficultyBg(difficulty) {
  switch (difficulty) {
    case 'Easy': return 'rgba(0, 230, 118, 0.1)';
    case 'Medium': return 'rgba(245, 166, 35, 0.1)';
    case 'Hard': return 'rgba(255, 61, 61, 0.1)';
    default: return 'rgba(136, 146, 164, 0.1)';
  }
}
