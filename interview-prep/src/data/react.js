export const reactQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components and efficiently update the DOM using a virtual representation.",
    keyPoints: ["Component-based architecture", "Virtual DOM for performance", "Declarative UI", "Maintained by Meta (Facebook)"]
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It gets transpiled to React.createElement() calls by Babel.",
    keyPoints: ["Syntax extension for JS", "Transpiled by Babel", "Combines markup and logic", "Not required but recommended"]
  },
  {
    id: 3,
    difficulty: "Medium",
    question: "What is Virtual DOM in React?",
    answer: "The Virtual DOM is a lightweight JavaScript representation of the real DOM. React creates a virtual DOM tree, and when state changes occur, it creates a new virtual tree, diffs it with the previous one, and only updates the changed parts in the real DOM.",
    keyPoints: ["Improves performance", "Minimizes direct DOM manipulation", "Uses diffing algorithm", "Updates only changed elements"]
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "What are React Hooks?",
    answer: "Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to eliminate the need for class components in most cases.",
    keyPoints: ["useState for state management", "useEffect for side effects", "Custom hooks for reusability", "Cannot be used in class components"]
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "What is useState hook?",
    answer: "useState is a Hook that lets you add state to functional components. It returns an array with the current state value and a function to update it.",
    keyPoints: ["Returns [state, setState]", "Triggers re-render on update", "Can hold any value type", "Initial value set once"]
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "What is useEffect hook?",
    answer: "useEffect is a Hook that lets you perform side effects in functional components. It runs after every render by default, but you can control when it runs using the dependency array.",
    keyPoints: ["Replaces lifecycle methods", "Dependency array controls execution", "Cleanup function for unmount", "Runs after DOM updates"]
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "What is the purpose of useContext?",
    answer: "useContext is a Hook that lets you subscribe to React context without nesting. It accepts a context object and returns the current context value, allowing you to share data across components without prop drilling.",
    keyPoints: ["Avoids prop drilling", "Subscribes to context changes", "Works with Context.Provider", "Re-renders on context change"]
  },
  {
    id: 8,
    difficulty: "Easy",
    question: "What is React Router?",
    answer: "React Router is a library for handling client-side routing in React applications. It enables navigation between different views/components without full page reloads.",
    keyPoints: ["Client-side routing", "No page reload", "Declarative routing", "Supports nested routes"]
  },
  {
    id: 9,
    difficulty: "Medium",
    question: "What is the difference between state and props?",
    answer: "Props are read-only data passed from parent to child components, while state is mutable data managed within a component. Props flow down, state is local.",
    keyPoints: ["Props are immutable", "State is mutable", "Props flow parent to child", "State is component-local"]
  },
  {
    id: 10,
    difficulty: "Hard",
    question: "What is React reconciliation?",
    answer: "Reconciliation is the process React uses to determine which parts of the UI need to be updated. It compares the new virtual DOM tree with the previous one using a diffing algorithm and makes minimal changes to the real DOM.",
    keyPoints: ["Diffing algorithm", "O(n) complexity", "Key prop importance", "Component type comparison"]
  },
  {
    id: 11,
    difficulty: "Medium",
    question: "What is useMemo hook?",
    answer: "useMemo is a Hook that memoizes a computed value. It only recomputes when its dependencies change, preventing expensive calculations on every render.",
    keyPoints: ["Memoizes computed values", "Dependencies array required", "Prevents expensive recalculations", "Returns cached value"]
  },
  {
    id: 12,
    difficulty: "Medium",
    question: "What is useCallback hook?",
    answer: "useCallback is a Hook that memoizes a callback function. It returns the same function reference between renders unless its dependencies change, useful for preventing unnecessary re-renders of child components.",
    keyPoints: ["Memoizes functions", "Stable reference between renders", "Useful with React.memo", "Dependencies control updates"]
  },
  {
    id: 13,
    difficulty: "Hard",
    question: "What is useReducer hook?",
    answer: "useReducer is a Hook for managing complex state logic. It accepts a reducer function and initial state, returning the current state and a dispatch function. It's similar to Redux but local to a component.",
    keyPoints: ["For complex state logic", "Reducer pattern", "Returns [state, dispatch]", "Alternative to useState"]
  },
  {
    id: 14,
    difficulty: "Easy",
    question: "What is a React component?",
    answer: "A React component is a reusable piece of UI that can be a function or class. It accepts inputs (props) and returns React elements describing what should appear on screen.",
    keyPoints: ["Reusable UI pieces", "Function or class", "Accepts props", "Returns JSX"]
  },
  {
    id: 15,
    difficulty: "Medium",
    question: "What is the key prop in React?",
    answer: "The key prop is a special attribute used to identify elements in a list. It helps React's reconciliation algorithm determine which items have changed, been added, or removed efficiently.",
    keyPoints: ["Unique identifier for list items", "Helps with reconciliation", "Should be stable and unique", "Don't use array index if order changes"]
  },
  {
    id: 16,
    difficulty: "Hard",
    question: "What is React.memo?",
    answer: "React.memo is a higher-order component that memoizes a component. It prevents re-renders if the props haven't changed, performing a shallow comparison of props by default.",
    keyPoints: ["Higher-order component", "Shallow prop comparison", "Prevents unnecessary re-renders", "Custom comparison function option"]
  },
  {
    id: 17,
    difficulty: "Medium",
    question: "What is Context API?",
    answer: "Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed for data that is considered global for a tree of components.",
    keyPoints: ["Avoids prop drilling", "Provider-Consumer pattern", "Global-like data sharing", "Use for themes, auth, language"]
  },
  {
    id: 18,
    difficulty: "Hard",
    question: "What are Higher-Order Components (HOC)?",
    answer: "A Higher-Order Component is a function that takes a component and returns a new enhanced component. It's a pattern for reusing component logic without modifying the original component.",
    keyPoints: ["Function that takes a component", "Returns enhanced component", "Reuses logic", "Cross-cutting concerns"]
  },
  {
    id: 19,
    difficulty: "Medium",
    question: "What is useRef hook?",
    answer: "useRef is a Hook that returns a mutable ref object whose .current property is initialized to the passed argument. It persists across renders without causing re-renders when changed.",
    keyPoints: ["Persists between renders", "No re-render on change", "Access DOM elements", "Store mutable values"]
  },
  {
    id: 20,
    difficulty: "Easy",
    question: "What is conditional rendering in React?",
    answer: "Conditional rendering means rendering different UI elements based on certain conditions. You can use if statements, ternary operators, logical && operator, or switch statements.",
    keyPoints: ["if/else statements", "Ternary operator", "Logical && operator", "Renders based on state/props"]
  },
  {
    id: 21,
    difficulty: "Hard",
    question: "What is React Fiber?",
    answer: "React Fiber is the reimplementation of React's core algorithm. It enables incremental rendering, allowing React to split rendering work into chunks and spread it out over multiple frames.",
    keyPoints: ["Incremental rendering", "Priority-based updates", "Pause and resume work", "Better user experience"]
  },
  {
    id: 22,
    difficulty: "Medium",
    question: "What is prop drilling?",
    answer: "Prop drilling is the process of passing data through multiple levels of components that don't need the data themselves, just to get it to a deeply nested component.",
    keyPoints: ["Passing props through many layers", "Anti-pattern for deep trees", "Solved by Context API", "Or state management libraries"]
  },
  {
    id: 23,
    difficulty: "Easy",
    question: "What is the difference between controlled and uncontrolled components?",
    answer: "Controlled components have their form data handled by React state, while uncontrolled components store data in the DOM itself. Controlled components use value and onChange props.",
    keyPoints: ["Controlled: state-driven", "Uncontrolled: DOM-driven", "Controlled preferred in React", "Uncontrolled uses refs"]
  },
  {
    id: 24,
    difficulty: "Hard",
    question: "What is code splitting in React?",
    answer: "Code splitting is a technique to split your app's bundle into smaller chunks that are loaded on demand. React supports it via React.lazy() and Suspense for dynamic imports.",
    keyPoints: ["Reduces initial bundle size", "React.lazy for components", "Suspense for loading states", "Dynamic import()"]
  },
  {
    id: 25,
    difficulty: "Medium",
    question: "What are React Fragments?",
    answer: "Fragments let you group multiple children elements without adding extra nodes to the DOM. You can use <React.Fragment> or the shorthand <>...</> syntax.",
    keyPoints: ["Groups elements without DOM node", "Short syntax: <></>", "Can have key prop", "Cleaner DOM structure"]
  },
  {
    id: 26,
    difficulty: "Hard",
    question: "What is the useLayoutEffect hook?",
    answer: "useLayoutEffect is similar to useEffect but fires synchronously after all DOM mutations and before the browser paints. Use it when you need to measure DOM elements or synchronously re-render.",
    keyPoints: ["Fires before paint", "Synchronous execution", "For DOM measurements", "Can block visual updates"]
  },
  {
    id: 27,
    difficulty: "Medium",
    question: "What is React.StrictMode?",
    answer: "StrictMode is a development tool that highlights potential problems in an application. It activates additional checks and warnings for its descendants, like detecting unsafe lifecycles.",
    keyPoints: ["Development only", "Detects potential issues", "Double-invokes functions", "No visual UI"]
  },
  {
    id: 28,
    difficulty: "Easy",
    question: "What is the difference between class and functional components?",
    answer: "Class components use ES6 classes with render() method and lifecycle methods, while functional components are plain functions that can use Hooks. Functional components are simpler and now preferred.",
    keyPoints: ["Class: ES6 class syntax", "Functional: plain functions", "Hooks replaced lifecycle methods", "Functional preferred now"]
  },
  {
    id: 29,
    difficulty: "Hard",
    question: "What is React Portals?",
    answer: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. Useful for modals, tooltips, and popups.",
    keyPoints: ["Renders outside parent DOM", "ReactDOM.createPortal()", "Events still bubble up", "Useful for modals/tooltips"]
  },
  {
    id: 30,
    difficulty: "Medium",
    question: "What is the useImperativeHandle hook?",
    answer: "useImperativeHandle customizes the instance value that is exposed to parent components when using ref. It's used with forwardRef to control what values are accessible via the ref.",
    keyPoints: ["Customizes ref value", "Used with forwardRef", "Controls exposed API", "Limits parent access"]
  }
];
