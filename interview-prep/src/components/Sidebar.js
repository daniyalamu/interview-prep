import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { GiCrosshair, GiTrophy, GiMilitaryFort, GiAmmoBox, GiSettingsKnobs, GiBookmark } from 'react-icons/gi';
import { RiSwordFill } from 'react-icons/ri';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import '../styles/sidebar.css';

function Sidebar({ isOpen, onClose }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''} ${darkMode ? 'dark' : ''}`}>
        <div className="sidebar__header">
          <div className="sidebar__logo">
            <GiCrosshair className="sidebar__logo-icon" />
            <div>
              <h1 className="sidebar__title">INTERVIEW PREP</h1>
              <p className="sidebar__subtitle">WINNER WINNER CHICKEN DINNER</p>
            </div>
          </div>
        </div>

        <nav className="sidebar__nav">
          <NavLink to="/" exact className="sidebar__link" activeClassName="sidebar__link--active" onClick={onClose}>
            <GiMilitaryFort className="sidebar__link-icon" />
            <span>Base Camp</span>
          </NavLink>
          <NavLink to="/topics" className="sidebar__link" activeClassName="sidebar__link--active" onClick={onClose}>
            <GiAmmoBox className="sidebar__link-icon" />
            <span>Arsenal</span>
          </NavLink>
          <NavLink to="/favorites" className="sidebar__link" activeClassName="sidebar__link--active" onClick={onClose}>
            <GiTrophy className="sidebar__link-icon" />
            <span>Loot Drop</span>
          </NavLink>
          <NavLink to="/interview" className="sidebar__link" activeClassName="sidebar__link--active" onClick={onClose}>
            <RiSwordFill className="sidebar__link-icon" />
            <span>Battle Mode</span>
          </NavLink>
          <NavLink to="/notes" className="sidebar__link" activeClassName="sidebar__link--active" onClick={onClose}>
            <GiBookmark className="sidebar__link-icon" />
            <span>DSA Notes</span>
          </NavLink>
          <NavLink to="/settings" className="sidebar__link" activeClassName="sidebar__link--active" onClick={onClose}>
            <GiSettingsKnobs className="sidebar__link-icon" />
            <span>Settings</span>
          </NavLink>
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar__theme-toggle" onClick={toggleTheme}>
            {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            <div className={`toggle ${darkMode ? 'toggle--active' : ''}`}>
              <div className="toggle__dot" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
