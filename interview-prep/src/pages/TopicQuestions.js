import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';
import QuestionDetails from '../components/QuestionDetails';
import SearchBar from '../components/SearchBar';
import { topics, getQuestionsByTopic } from '../data/topics';
import { searchQuestions, filterByDifficulty } from '../utils/search';
import { useTheme } from '../context/ThemeContext';
import '../styles/questions.css';

function TopicQuestions() {
  const { id } = useParams();
  const location = useLocation();
  const { darkMode } = useTheme();
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState('All');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const topic = topics.find(t => t.id === id);
  const rawQuestions = getQuestionsByTopic(id).map(q => ({ ...q, topicId: id, topicName: topic?.name }));
  const filteredQuestions = filterByDifficulty(searchQuestions(rawQuestions, search), difficulty);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const qId = params.get('q');
    if (qId) {
      const q = rawQuestions.find(q => q.id === parseInt(qId));
      if (q) {
        setSelectedQuestion(q);
        setSelectedIndex(rawQuestions.indexOf(q));
      }
    }
    // eslint-disable-next-line
  }, [location.search, id]);

  const handleSelectQuestion = (question) => {
    setSelectedQuestion(question);
    setSelectedIndex(filteredQuestions.indexOf(question));
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      const prev = filteredQuestions[selectedIndex - 1];
      setSelectedQuestion(prev);
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex < filteredQuestions.length - 1) {
      const next = filteredQuestions[selectedIndex + 1];
      setSelectedQuestion(next);
      setSelectedIndex(selectedIndex + 1);
    }
  };

  if (!topic) {
    return <div className="topic-questions__not-found">Topic not found</div>;
  }

  return (
    <div className={`topic-questions ${darkMode ? 'dark' : ''}`}>
      <div className="topic-questions__list-panel">
        <div className="topic-questions__header">
          <h1>{topic.name} Questions</h1>
          <span className="topic-questions__count">{filteredQuestions.length}</span>
        </div>

        <div className="topic-questions__filters">
          <SearchBar value={search} onChange={setSearch} placeholder={`Search ${topic.name} questions...`} />
          <select
            className={`topic-questions__difficulty-select ${darkMode ? 'dark' : ''}`}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="All">All Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="topic-questions__list">
          {filteredQuestions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={idx + 1}
              isActive={selectedQuestion && selectedQuestion.id === q.id}
              onClick={handleSelectQuestion}
            />
          ))}
          {filteredQuestions.length === 0 && (
            <div className="topic-questions__empty">
              <p>No questions match your filters</p>
            </div>
          )}
        </div>
      </div>

      <div className="topic-questions__details-panel">
        <QuestionDetails
          question={selectedQuestion}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={selectedIndex > 0}
          hasNext={selectedIndex < filteredQuestions.length - 1}
        />
      </div>
    </div>
  );
}

export default TopicQuestions;
