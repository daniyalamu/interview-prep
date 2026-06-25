export const htmlQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is the difference between HTML and HTML5?",
    answer: "HTML5 is the latest version of HTML with new semantic elements, multimedia support (audio/video), Canvas API, local storage, and improved form controls.",
    keyPoints: ["New semantic elements", "Audio/Video support", "Canvas and SVG", "Local/Session storage"]
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "What are semantic HTML elements?",
    answer: "Semantic elements clearly describe their meaning to both browser and developer. Examples include <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>.",
    keyPoints: ["Meaningful element names", "Better accessibility", "SEO benefits", "header, nav, main, footer"]
  },
  {
    id: 3,
    difficulty: "Medium",
    question: "What is the difference between localStorage and sessionStorage?",
    answer: "localStorage persists data with no expiration date (until explicitly cleared), while sessionStorage data is cleared when the browser tab is closed. Both store key-value pairs.",
    keyPoints: ["localStorage: persists forever", "sessionStorage: cleared on tab close", "Both: key-value pairs", "5-10MB storage limit"]
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "What is the purpose of the DOCTYPE declaration?",
    answer: "DOCTYPE tells the browser which version of HTML the page is using. In HTML5, <!DOCTYPE html> triggers standards mode rendering instead of quirks mode.",
    keyPoints: ["Defines HTML version", "Triggers standards mode", "<!DOCTYPE html> for HTML5", "Must be first line"]
  },
  {
    id: 5,
    difficulty: "Medium",
    question: "What are data attributes in HTML?",
    answer: "Data attributes (data-*) allow you to store custom data on HTML elements. They can be accessed via JavaScript using element.dataset and are useful for storing UI state.",
    keyPoints: ["Custom data storage", "data-* prefix", "Access via dataset API", "No visual effect"]
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "What is the difference between inline, block, and inline-block elements?",
    answer: "Block elements take full width and start on new line (div, p). Inline elements only take needed width and don't break line (span, a). Inline-block combines both behaviors.",
    keyPoints: ["Block: full width, new line", "Inline: content width, same line", "Inline-block: set dimensions, same line", "display property controls"]
  },
  {
    id: 7,
    difficulty: "Hard",
    question: "What is the Shadow DOM?",
    answer: "Shadow DOM is a web standard that provides encapsulation for DOM and CSS. It allows hidden DOM trees to be attached to elements, keeping styles and markup private from the main document.",
    keyPoints: ["DOM encapsulation", "Scoped styles", "Web Components foundation", "Prevents style leaking"]
  },
  {
    id: 8,
    difficulty: "Easy",
    question: "What is the purpose of the alt attribute in images?",
    answer: "The alt attribute provides alternative text for an image when it cannot be displayed. It's essential for accessibility (screen readers) and SEO.",
    keyPoints: ["Accessibility requirement", "Screen reader text", "Shown if image fails", "SEO benefits"]
  },
  {
    id: 9,
    difficulty: "Medium",
    question: "What are Web Workers?",
    answer: "Web Workers allow JavaScript to run in background threads separate from the main thread. They enable heavy computation without blocking the UI.",
    keyPoints: ["Background thread execution", "Non-blocking UI", "Message passing API", "No DOM access"]
  },
  {
    id: 10,
    difficulty: "Easy",
    question: "What is the difference between <div> and <span>?",
    answer: "<div> is a block-level container element used for grouping larger sections of content. <span> is an inline element used for styling small pieces of text or content within a line.",
    keyPoints: ["div: block-level", "span: inline", "div: sections/containers", "span: text styling"]
  }
];
