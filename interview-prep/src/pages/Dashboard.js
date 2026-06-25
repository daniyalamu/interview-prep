import React from 'react';
import { useHistory } from 'react-router-dom';
import TopicCard from '../components/TopicCard';
import { topics, getAllQuestions } from '../data/topics';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { GiMilitaryFort, GiAmmoBox, GiTrophy, GiCrosshair } from 'react-icons/gi';
import { RiSwordFill } from 'react-icons/ri';
import { FiTarget, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';
import '../styles/dashboard.css';

function Dashboard() {
  const { recentlyViewed, viewedQuestions } = useProgress();
  const { darkMode } = useTheme();
  const history = useHistory();
  const allQuestions = getAllQuestions();
  const totalQuestions = allQuestions.length;

  return (
    <div className={`dashboard ${darkMode ? 'dark' : ''}`}>
      <div className="dashboard__welcome">
        <h1><GiCrosshair /> READY FOR BATTLE</h1>
        <p>Pick your weapon. Dominate the interview arena.</p>
      </div>

      <div className="dashboard__stats">
        <div className="dashboard__stat-card">
          <GiAmmoBox className="dashboard__stat-icon" />
          <span className="dashboard__stat-number">{topics.length}</span>
          <span className="dashboard__stat-label">ZONES</span>
        </div>
        <div className="dashboard__stat-card">
          <FiTarget className="dashboard__stat-icon" />
          <span className="dashboard__stat-number">{totalQuestions}</span>
          <span className="dashboard__stat-label">TARGETS</span>
        </div>
        <div className="dashboard__stat-card">
          <FiCheckCircle className="dashboard__stat-icon" />
          <span className="dashboard__stat-number">{viewedQuestions.length}</span>
          <span className="dashboard__stat-label">ELIMINATED</span>
        </div>
        <div className="dashboard__stat-card">
          <FiTrendingUp className="dashboard__stat-icon" />
          <span className="dashboard__stat-number">
            {totalQuestions > 0 ? Math.round((viewedQuestions.length / totalQuestions) * 100) : 0}%
          </span>
          <span className="dashboard__stat-label">SURVIVAL</span>
        </div>
      </div>

      <section className="dashboard__section">
        <h2 className="dashboard__section-title"><GiAmmoBox /> Weapon Arsenal</h2>
        <div className="dashboard__topics-grid">
          {topics.map(topic => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>

      {recentlyViewed.length > 0 && (
        <section className="dashboard__section">
          <h2 className="dashboard__section-title"><GiMilitaryFort /> Recent Engagements</h2>
          <div className="dashboard__recent-list">
            {recentlyViewed.slice(0, 5).map((q, idx) => (
              <div
                key={idx}
                className="dashboard__recent-item"
                onClick={() => history.push(`/topic/${q.topicId}?q=${q.id}`)}
              >
                <span className="dashboard__recent-topic">{q.topicName}</span>
                <span className="dashboard__recent-question">{q.question}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="dashboard__section">
        <h2 className="dashboard__section-title"><RiSwordFill /> Deploy</h2>
        <div className="dashboard__actions">
          <button className="dashboard__action-btn" onClick={() => history.push('/interview')}>
            <RiSwordFill /> Enter Battle Mode
          </button>
          <button className="dashboard__action-btn" onClick={() => history.push('/topics')}>
            <GiAmmoBox /> Open Arsenal
          </button>
          <button className="dashboard__action-btn" onClick={() => history.push('/favorites')}>
            <GiTrophy /> Check Loot
          </button>
        </div>
      </section>

      <div className="dashboard__quote">
        <GiCrosshair className="dashboard__quote-mark" />
        <p className="dashboard__quote-text">"The zone is closing. Prepare or perish."</p>
      </div>
    </div>
  );
}

export default Dashboard;
