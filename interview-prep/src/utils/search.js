export function searchQuestions(questions, query) {
  if (!query || query.trim() === '') return questions;
  const lowerQuery = query.toLowerCase().trim();
  return questions.filter(q =>
    q.question.toLowerCase().includes(lowerQuery) ||
    q.answer.toLowerCase().includes(lowerQuery) ||
    (q.topicName && q.topicName.toLowerCase().includes(lowerQuery))
  );
}

export function filterByDifficulty(questions, difficulty) {
  if (!difficulty || difficulty === 'All') return questions;
  return questions.filter(q => q.difficulty === difficulty);
}
