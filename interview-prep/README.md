# Interview Prep 📚

A personal interview preparation platform built with React and Create React App.

## Features

- 📂 **Topics** - React, JavaScript, HTML, CSS with 70+ questions
- 🎯 **Interview Mode** - Practice with random questions, reveal answers
- ⭐ **Favorites** - Save questions for later review
- 🌙 **Dark Mode** - Light and dark themes with persistence
- 🔍 **Global Search** - Search across all topics instantly
- 📊 **Progress Tracking** - Track viewed and completed questions
- 📱 **Responsive** - Works on desktop, tablet, and mobile

## Getting Started

### Prerequisites

- Node.js 12+ 
- npm 6+

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/interview-prep.git
cd interview-prep
npm install
```

### Development

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install gh-pages --save-dev
```

2. Add homepage to package.json:
```json
"homepage": "https://YOUR_USERNAME.github.io/interview-prep"
```

3. Deploy:
```bash
npm run deploy
```

## Adding New Questions

Edit the data files in `src/data/`:

1. Open the relevant file (e.g., `src/data/react.js`)
2. Add a new question object:

```javascript
{
  id: 31,
  difficulty: "Medium",
  question: "Your question here?",
  answer: "Your answer here.",
  keyPoints: ["Point 1", "Point 2", "Point 3"]
}
```

3. Commit and push to GitHub
4. The app will automatically display the new question

## Adding New Topics

1. Create a new file `src/data/newtopic.js`
2. Add it to `src/data/topics.js`
3. Import and register the questions

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Sidebar.js
│   ├── Header.js
│   ├── TopicCard.js
│   ├── QuestionCard.js
│   ├── QuestionDetails.js
│   ├── DifficultyBadge.js
│   └── SearchBar.js
├── pages/            # Page components
│   ├── Dashboard.js
│   ├── Topics.js
│   ├── TopicQuestions.js
│   ├── Favorites.js
│   ├── InterviewMode.js
│   └── Settings.js
├── context/          # React Context providers
│   ├── ThemeContext.js
│   ├── FavoritesContext.js
│   └── ProgressContext.js
├── data/             # Hardcoded question data
│   ├── react.js
│   ├── javascript.js
│   ├── html.js
│   ├── css.js
│   └── topics.js
├── hooks/            # Custom hooks
│   └── useLocalStorage.js
├── utils/            # Utility functions
│   ├── search.js
│   └── helpers.js
├── styles/           # CSS files
│   ├── sidebar.css
│   ├── header.css
│   ├── dashboard.css
│   ├── topics.css
│   ├── questions.css
│   └── interview.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## Technology Stack

- React 17
- React Router 5
- Context API
- LocalStorage
- CSS (no framework)
- Create React App 4

## License

MIT
