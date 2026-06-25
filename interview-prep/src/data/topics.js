import { reactQuestions } from './react';
import { javascriptQuestions } from './javascript';
import { htmlQuestions } from './html';
import { cssQuestions } from './css';

export const topics = [
  {
    id: "react",
    name: "React",
    color: "#61DAFB",
    description: "React library concepts, hooks, and patterns",
    questionCount: reactQuestions.length
  },
  {
    id: "javascript",
    name: "JavaScript",
    color: "#F7DF1E",
    description: "Core JavaScript concepts and ES6+ features",
    questionCount: javascriptQuestions.length
  },
  {
    id: "html",
    name: "HTML",
    color: "#E34F26",
    description: "HTML5 elements, semantics, and web APIs",
    questionCount: htmlQuestions.length
  },
  {
    id: "css",
    name: "CSS",
    color: "#1572B6",
    description: "CSS layouts, styling, and responsive design",
    questionCount: cssQuestions.length
  }
];

export const getAllQuestions = () => {
  return [
    ...reactQuestions.map(q => ({ ...q, topicId: 'react', topicName: 'React' })),
    ...javascriptQuestions.map(q => ({ ...q, topicId: 'javascript', topicName: 'JavaScript' })),
    ...htmlQuestions.map(q => ({ ...q, topicId: 'html', topicName: 'HTML' })),
    ...cssQuestions.map(q => ({ ...q, topicId: 'css', topicName: 'CSS' }))
  ];
};

export const getQuestionsByTopic = (topicId) => {
  switch (topicId) {
    case 'react': return reactQuestions;
    case 'javascript': return javascriptQuestions;
    case 'html': return htmlQuestions;
    case 'css': return cssQuestions;
    default: return [];
  }
};
