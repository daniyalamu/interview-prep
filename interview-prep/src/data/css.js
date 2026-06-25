export const cssQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is the Box Model?",
    answer: "The CSS Box Model is a rectangular layout paradigm for HTML elements consisting of content, padding, border, and margin. Every element is rendered as a box with these four areas.",
    keyPoints: ["Content + Padding + Border + Margin", "box-sizing controls calculation", "border-box includes padding/border", "content-box is default"]
  },
  {
    id: 2,
    difficulty: "Medium",
    question: "What is Flexbox?",
    answer: "Flexbox is a one-dimensional CSS layout method for arranging items in rows or columns. It provides powerful alignment and distribution capabilities for responsive layouts.",
    keyPoints: ["One-dimensional layout", "Main axis and cross axis", "justify-content, align-items", "flex-grow, flex-shrink, flex-basis"]
  },
  {
    id: 3,
    difficulty: "Medium",
    question: "What is CSS Grid?",
    answer: "CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns simultaneously. It's ideal for page-level layouts.",
    keyPoints: ["Two-dimensional layout", "Rows and columns", "grid-template-areas", "Implicit and explicit grids"]
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "What is the difference between margin and padding?",
    answer: "Margin is the space outside an element's border that separates it from other elements. Padding is the space between the content and the border, inside the element.",
    keyPoints: ["Margin: outside border", "Padding: inside border", "Margin can be negative", "Padding cannot be negative"]
  },
  {
    id: 5,
    difficulty: "Medium",
    question: "What is CSS specificity?",
    answer: "Specificity determines which CSS rule is applied when multiple rules target the same element. It's calculated based on the types of selectors used: inline > ID > class > element.",
    keyPoints: ["Inline: 1000", "ID: 100", "Class/attribute: 10", "Element: 1"]
  },
  {
    id: 6,
    difficulty: "Hard",
    question: "What are CSS Custom Properties (Variables)?",
    answer: "CSS Custom Properties (--variable-name) are entities defined by CSS authors that contain specific values to be reused throughout a document. They cascade and inherit like other properties.",
    keyPoints: ["--name: value syntax", "var(--name) to use", "Cascade and inherit", "Scoped to selectors"]
  },
  {
    id: 7,
    difficulty: "Easy",
    question: "What is the position property?",
    answer: "The position property specifies how an element is positioned in the document. Values include static (default), relative, absolute, fixed, and sticky.",
    keyPoints: ["static: normal flow", "relative: offset from normal", "absolute: removed from flow", "fixed: relative to viewport"]
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "What are CSS Media Queries?",
    answer: "Media queries allow you to apply CSS styles based on device characteristics like screen width, height, orientation, and resolution. They're fundamental for responsive design.",
    keyPoints: ["@media rule", "Breakpoint-based styling", "Responsive design foundation", "Can query width, height, orientation"]
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "What is BEM methodology?",
    answer: "BEM (Block, Element, Modifier) is a naming convention for CSS classes that creates reusable, maintainable code. Block is standalone entity, Element is part of block, Modifier is a variation.",
    keyPoints: ["Block: standalone component", "Element: block__element", "Modifier: block--modifier", "Improves maintainability"]
  },
  {
    id: 10,
    difficulty: "Medium",
    question: "What is the z-index property?",
    answer: "z-index controls the stacking order of positioned elements (elements with position other than static). Higher values appear in front of lower values within the same stacking context.",
    keyPoints: ["Controls stack order", "Only works on positioned elements", "Stacking context matters", "Higher value = in front"]
  }
];
