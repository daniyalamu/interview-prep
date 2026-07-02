import { reactQuestions } from './react';
import { javascriptQuestions } from './javascript';
import { htmlQuestions } from './html';
import { cssQuestions } from './css';
import { javaQuestions } from './java';
import { springBootQuestions } from './springboot';
import { mysqlQuestions } from './mysql';
import { gitQuestions } from './git';

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
  },
  {
    id: "java",
    name: "Core Java",
    color: "#F89820",
    description: "OOPs, collections, multithreading, exceptions, Java 8+ features",
    questionCount: javaQuestions.length
  },
  {
    id: "springboot",
    name: "Spring Boot",
    color: "#6DB33F",
    description: "Spring, Spring Boot, Hibernate, REST APIs, Security & JWT",
    questionCount: springBootQuestions.length
  },
  {
    id: "mysql",
    name: "MySQL",
    color: "#4479A1",
    description: "Tables, keys, indexes, joins, and query design",
    questionCount: mysqlQuestions.length
  },
  {
    id: "git",
    name: "Git",
    color: "#F05032",
    description: "Version control basics, cloning, branching",
    questionCount: gitQuestions.length
  }
];

export const getAllQuestions = () => {
  return [
    ...reactQuestions.map(q => ({ ...q, topicId: 'react', topicName: 'React' })),
    ...javascriptQuestions.map(q => ({ ...q, topicId: 'javascript', topicName: 'JavaScript' })),
    ...htmlQuestions.map(q => ({ ...q, topicId: 'html', topicName: 'HTML' })),
    ...cssQuestions.map(q => ({ ...q, topicId: 'css', topicName: 'CSS' })),
    ...javaQuestions.map(q => ({ ...q, topicId: 'java', topicName: 'Core Java' })),
    ...springBootQuestions.map(q => ({ ...q, topicId: 'springboot', topicName: 'Spring Boot' })),
    ...mysqlQuestions.map(q => ({ ...q, topicId: 'mysql', topicName: 'MySQL' })),
    ...gitQuestions.map(q => ({ ...q, topicId: 'git', topicName: 'Git' }))
  ];
};

export const getQuestionsByTopic = (topicId) => {
  switch (topicId) {
    case 'react': return reactQuestions;
    case 'javascript': return javascriptQuestions;
    case 'html': return htmlQuestions;
    case 'css': return cssQuestions;
    case 'java': return javaQuestions;
    case 'springboot': return springBootQuestions;
    case 'mysql': return mysqlQuestions;
    case 'git': return gitQuestions;
    default: return [];
  }
};
