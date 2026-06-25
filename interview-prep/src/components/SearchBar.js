import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ value, onChange, placeholder }) {
  const { darkMode } = useTheme();

  return (
    <div className={`search-bar ${darkMode ? 'dark' : ''}`}>
      <FiSearch className="search-bar__icon" />
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder || 'Search targets...'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
