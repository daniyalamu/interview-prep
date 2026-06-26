import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Topics from './pages/Topics';
import TopicQuestions from './pages/TopicQuestions';
import Favorites from './pages/Favorites';
import InterviewMode from './pages/InterviewMode';
import Settings from './pages/Settings';
import Notes from './pages/Notes';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ProgressProvider } from './context/ProgressContext';
import './App.css';

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { darkMode } = useTheme();

  return (
    <div className={`app ${darkMode ? 'app--dark' : ''}`}>
      <div className="battle-bg-overlay" />
      <div className="battle-particles">
        <div className="battle-particle" />
        <div className="battle-particle" />
        <div className="battle-particle" />
        <div className="battle-particle" />
        <div className="battle-particle" />
        <div className="battle-particle" />
        <div className="battle-particle" />
        <div className="battle-particle" />
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="app__main">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="app__content">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/topics" exact component={Topics} />
            <Route path="/topic/:id" component={TopicQuestions} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/interview" component={InterviewMode} />
            <Route path="/notes" component={Notes} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <ProgressProvider>
          <Router basename="/interview-prep">
            <AppContent />
          </Router>
        </ProgressProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
