import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaReact, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiHtml5, SiMysql, SiSpringboot } from 'react-icons/si';
import { GiAmmoBox } from 'react-icons/gi';

const topicIcons = {
  react: <FaReact />,
  javascript: <SiJavascript />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  java: <FaJava />,
  springboot: <SiSpringboot />,
  mysql: <SiMysql />,
  git: <FaGitAlt />
};

function TopicCard({ topic }) {
  const history = useHistory();
  const { darkMode } = useTheme();

  const icon = topicIcons[topic.id] || <GiAmmoBox />;

  return (
    <div
      className={`topic-card ${darkMode ? 'dark' : ''}`}
      onClick={() => history.push(`/topic/${topic.id}`)}
      style={{ borderLeft: `4px solid ${topic.color}` }}
    >
      <span className="topic-card__icon" style={{ color: topic.color }}>{icon}</span>
      <h3 className="topic-card__name">{topic.name}</h3>
      <p className="topic-card__count">{topic.questionCount} Rounds</p>
    </div>
  );
}

export default TopicCard;
