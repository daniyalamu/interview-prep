import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { getAllQuestions } from '../data/topics';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { GiCrosshair } from 'react-icons/gi';
import '../styles/header.css';

function Header({ onMenuToggle }) {
  const { darkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const history = useHistory();

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim().length > 1) {
      const allQuestions = getAllQuestions();
      const results = allQuestions.filter(q =>
        q.question.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleResultClick = (question) => {
    setShowResults(false);
    setSearchQuery('');
    history.push(`/topic/${question.topicId}?q=${question.id}`);
  };

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <button className="header__menu-btn" onClick={onMenuToggle} aria-label="Toggle menu">
        <FiMenu />
      </button>

      <div className="header__search-wrapper">
        <FiSearch className="header__search-icon" />
        <input
          type="text"
          className="header__search"
          placeholder="Search targets..."
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => searchQuery.length > 1 && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />
        {showResults && searchResults.length > 0 && (
          <div className="header__search-results">
            {searchResults.map((q, idx) => (
              <div key={idx} className="header__search-result" onClick={() => handleResultClick(q)}>
                <span className="header__search-result-topic">{q.topicName}</span>
                <span className="header__search-result-text">{q.question}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="header__profile">
        <div className="header__avatar">
          <img
            src={process.env.PUBLIC_URL + '/profile.png'}
            alt="Profile"
            className="header__avatar-img"
          />
          <GiCrosshair className="header__avatar-scope" />
        </div>
      </div>
    </header>
  );
}

export default Header;
