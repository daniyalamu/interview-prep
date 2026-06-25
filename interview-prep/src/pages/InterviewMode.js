import React, { useState, useEffect } from 'react';
import DifficultyBadge from '../components/DifficultyBadge';
import { getAllQuestions } from '../data/topics';
import { shuffleArray } from '../utils/helpers';
import { useTheme } from '../context/ThemeContext';
import { RiSwordFill } from 'react-icons/ri';
import { GiCrosshair, GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { FiChevronLeft, FiChevronRight, FiEye } from 'react-icons/fi';
import '../styles/interview.css';

function InterviewMode() {
  const { darkMode } = useTheme();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [difficulty, setDifficulty] = useState('All');
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    startInterview();
    // eslint-disable-next-line
  }, [difficulty]);

  const startInterview = () => {
    let allQuestions = getAllQuestions();
    if (difficulty !== 'All') {
      allQuestions = allQuestions.filter(q => q.difficulty === difficulty);
    }
    setQuestions(shuffleArray(allQuestions));
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsStarted(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  const handleShuffle = () => {
    setQuestions(shuffleArray(questions));
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  if (!isStarted || questions.length === 0) {
    return (
      <div className={`interview-mode ${darkMode ? 'dark' : ''}`}>
        <div className="interview-mode__start">
          <RiSwordFill className="interview-mode__start-icon" />
          <h1>BATTLE MODE</h1>
          <p>Random questions. No safety net. Think fast or die.</p>
          <div className="interview-mode__options">
            <select
              className="interview-mode__select"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="All">All Zones</option>
              <option value="Easy">Green Zone (Easy)</option>
              <option value="Medium">Yellow Zone (Medium)</option>
              <option value="Hard">Red Zone (Hard)</option>
            </select>
          </div>
          <button className="interview-mode__start-btn" onClick={startInterview}>
            <GiCrosshair /> DROP IN
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className={`interview-mode ${darkMode ? 'dark' : ''}`}>
      <div className="interview-mode__header">
        <h1><RiSwordFill /> BATTLE MODE</h1>
        <div className="interview-mode__controls">
          <select
            className="interview-mode__select"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="All">All Zones</option>
            <option value="Easy">Green Zone</option>
            <option value="Medium">Yellow Zone</option>
            <option value="Hard">Red Zone</option>
          </select>
          <button className="interview-mode__shuffle-btn" onClick={handleShuffle}>
            <GiPerspectiveDiceSixFacesRandom /> Shuffle
          </button>
        </div>
      </div>

      <div className="interview-mode__progress">
        <div className="interview-mode__progress-bar">
          <div
            className="interview-mode__progress-fill"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
        <span className="interview-mode__progress-text">
          Target {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <div className="interview-mode__card">
        <div className="interview-mode__card-header">
          <span className="interview-mode__topic">{currentQuestion.topicName}</span>
          <DifficultyBadge difficulty={currentQuestion.difficulty} />
        </div>

        <h2 className="interview-mode__question">{currentQuestion.question}</h2>

        {!showAnswer ? (
          <button className="interview-mode__reveal-btn" onClick={() => setShowAnswer(true)}>
            <FiEye /> REVEAL INTEL
          </button>
        ) : (
          <div className="interview-mode__answer">
            <h3><RiSwordFill /> DECODED:</h3>
            <p>{currentQuestion.answer}</p>
            {currentQuestion.keyPoints && (
              <div className="interview-mode__key-points">
                <h4><GiCrosshair /> Key Loot:</h4>
                <ul>
                  {currentQuestion.keyPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="interview-mode__nav">
        <button
          className="interview-mode__nav-btn"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <FiChevronLeft /> Previous
        </button>
        <button
          className="interview-mode__nav-btn interview-mode__nav-btn--next"
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
        >
          Next <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default InterviewMode;
