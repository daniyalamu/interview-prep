import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { dsaTopics } from '../data/dsa';
import { GiBookmark, GiCheckMark } from 'react-icons/gi';
import { FiChevronDown, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { useLocalStorage } from '../hooks/useLocalStorage';
import '../styles/notes.css';

function Notes() {
  const { darkMode } = useTheme();
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [completedProblems, setCompletedProblems] = useLocalStorage('interview-prep-dsa-completed', []);

  const toggleTopic = (id) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  const toggleProblem = (topicId, problemIndex) => {
    const key = `${topicId}-${problemIndex}`;
    if (completedProblems.includes(key)) {
      setCompletedProblems(completedProblems.filter(p => p !== key));
    } else {
      setCompletedProblems([...completedProblems, key]);
    }
  };

  const isProblemCompleted = (topicId, problemIndex) => {
    return completedProblems.includes(`${topicId}-${problemIndex}`);
  };

  const getTopicProgress = (topic) => {
    const completed = topic.problems.filter((_, idx) =>
      isProblemCompleted(topic.id, idx)
    ).length;
    return { completed, total: topic.problems.length };
  };

  const totalCompleted = completedProblems.length;
  const totalProblems = dsaTopics.reduce((acc, t) => acc + t.problems.length, 0);

  const getLeetCodeUrl = (problem) => {
    const slug = problem
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');
    return `https://leetcode.com/problems/${slug}`;
  };

  return (
    <div className={`notes-page ${darkMode ? 'dark' : ''}`}>
      <div className="notes-page__header">
        <h1><GiBookmark /> DSA NOTES</h1>
        <p>Topic-Wise DSA Interview Problem Set — {totalCompleted}/{totalProblems} completed</p>
      </div>

      <div className="notes-page__progress-bar">
        <div
          className="notes-page__progress-fill"
          style={{ width: `${(totalCompleted / totalProblems) * 100}%` }}
        />
      </div>

      <div className="notes-page__topics">
        {dsaTopics.map((topic, topicIdx) => {
          const progress = getTopicProgress(topic);
          const isExpanded = expandedTopic === topic.id;

          return (
            <div key={topic.id} className="notes-topic">
              <div
                className="notes-topic__header"
                onClick={() => toggleTopic(topic.id)}
                style={{ borderLeft: `4px solid ${topic.color}` }}
              >
                <div className="notes-topic__info">
                  <span className="notes-topic__number">{topicIdx + 1}</span>
                  <h3 className="notes-topic__name">{topic.name}</h3>
                </div>
                <div className="notes-topic__meta">
                  <span className="notes-topic__progress">
                    {progress.completed}/{progress.total}
                  </span>
                  {isExpanded ? <FiChevronDown /> : <FiChevronRight />}
                </div>
              </div>

              {isExpanded && (
                <div className="notes-topic__problems">
                  {topic.problems.map((problem, idx) => {
                    const completed = isProblemCompleted(topic.id, idx);
                    return (
                      <div
                        key={idx}
                        className={`notes-problem ${completed ? 'notes-problem--completed' : ''}`}
                      >
                        <button
                          className="notes-problem__check"
                          onClick={() => toggleProblem(topic.id, idx)}
                          aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
                        >
                          {completed ? <GiCheckMark /> : <span className="notes-problem__circle" />}
                        </button>
                        <span className="notes-problem__index">{idx + 1}.</span>
                        <span className={`notes-problem__name ${completed ? 'notes-problem__name--done' : ''}`}>
                          {problem}
                        </span>
                        <a
                          href={getLeetCodeUrl(problem)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="notes-problem__link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
