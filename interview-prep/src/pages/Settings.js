import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';
import { useProgress } from '../context/ProgressContext';
import { GiSettingsKnobs, GiNuclearBomb } from 'react-icons/gi';
import { FiMoon, FiTrash2, FiInfo } from 'react-icons/fi';
import '../styles/dashboard.css';

function Settings() {
  const { darkMode, toggleTheme } = useTheme();
  const { clearFavorites, favorites } = useFavorites();
  const { resetProgress, viewedQuestions } = useProgress();

  const handleResetProgress = () => {
    if (window.confirm('Nuke all progress? This operation is irreversible, soldier.')) {
      resetProgress();
    }
  };

  const handleClearFavorites = () => {
    if (window.confirm('Drop all loot? You will lose your favorites.')) {
      clearFavorites();
    }
  };

  return (
    <div className={`settings-page ${darkMode ? 'dark' : ''}`}>
      <h1><GiSettingsKnobs /> SETTINGS</h1>

      <div className="settings-page__section">
        <h2><FiMoon /> APPEARANCE</h2>
        <div className="settings-page__option">
          <div>
            <h3>Dark Mode</h3>
            <p>Toggle between day and night ops</p>
          </div>
          <button
            className={`settings-page__toggle ${darkMode ? 'settings-page__toggle--active' : ''}`}
            onClick={toggleTheme}
          >
            <div className="settings-page__toggle-dot" />
          </button>
        </div>
      </div>

      <div className="settings-page__section">
        <h2><GiNuclearBomb /> DANGER ZONE</h2>
        <div className="settings-page__option">
          <div>
            <h3>Reset Progress</h3>
            <p>Wipe all battle records ({viewedQuestions.length} eliminations)</p>
          </div>
          <button className="settings-page__btn settings-page__btn--danger" onClick={handleResetProgress}>
            <FiTrash2 /> Nuke
          </button>
        </div>
        <div className="settings-page__option">
          <div>
            <h3>Clear Loot</h3>
            <p>Drop all favorite items ({favorites.length} items)</p>
          </div>
          <button className="settings-page__btn settings-page__btn--danger" onClick={handleClearFavorites}>
            <FiTrash2 /> Drop
          </button>
        </div>
      </div>

      <div className="settings-page__section">
        <h2><FiInfo /> INTEL</h2>
        <div className="settings-page__about">
          <p><strong>INTERVIEW PREP</strong> v1.0.0</p>
          <p>Your personal combat training ground. Add new questions by editing data files in <code>src/data/</code> and redeploying.</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
