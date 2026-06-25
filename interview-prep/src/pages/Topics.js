import React, { useState } from 'react';
import TopicCard from '../components/TopicCard';
import SearchBar from '../components/SearchBar';
import { topics } from '../data/topics';
import { useTheme } from '../context/ThemeContext';
import { GiAmmoBox } from 'react-icons/gi';
import '../styles/topics.css';

function Topics() {
  const [search, setSearch] = useState('');
  const { darkMode } = useTheme();

  const filteredTopics = topics.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`topics-page ${darkMode ? 'dark' : ''}`}>
      <div className="topics-page__header">
        <h1><GiAmmoBox /> ARSENAL</h1>
        <p>Choose your weapon. Each topic is a combat zone.</p>
      </div>

      <SearchBar value={search} onChange={setSearch} placeholder="Search weapons..." />

      <div className="topics-page__grid">
        {filteredTopics.map(topic => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <div className="topics-page__empty">
          <p>No weapons found matching "{search}"</p>
        </div>
      )}
    </div>
  );
}

export default Topics;
