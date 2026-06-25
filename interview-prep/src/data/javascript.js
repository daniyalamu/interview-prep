export const javascriptQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is a Closure?",
    answer: "A closure is a function that has access to variables from its outer (enclosing) function's scope, even after the outer function has returned. It 'closes over' the variables it needs.",
    keyPoints: ["Function + lexical environment", "Access outer scope variables", "Persists after outer function returns", "Used for data privacy"]
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "What is Hoisting?",
    answer: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. Variable declarations (var) and function declarations are hoisted, but not their assignments.",
    keyPoints: ["Declarations moved to top", "var is hoisted (undefined)", "let/const are not accessible before declaration", "Function declarations fully hoisted"]
  },
  {
    id: 3,
    difficulty: "Medium",
    question: "What is the Event Loop?",
    answer: "The Event Loop is JavaScript's concurrency model. It continuously checks the call stack, and when empty, takes the first task from the callback queue (or microtask queue) and pushes it onto the call stack.",
    keyPoints: ["Enables async behavior", "Call stack + task queue", "Microtasks have priority", "Non-blocking I/O"]
  },
  {
    id: 4,
    difficulty: "Medium",
    question: "What is the difference between == and ===?",
    answer: "== performs type coercion before comparison (loose equality), while === compares both value and type without coercion (strict equality). Always prefer === for predictable comparisons.",
    keyPoints: ["== coerces types", "=== no coercion", "=== checks type + value", "Always prefer ==="]
  },
  {
    id: 5,
    difficulty: "Hard",
    question: "What is Prototypal Inheritance?",
    answer: "Prototypal inheritance is JavaScript's mechanism where objects can inherit properties and methods from other objects via the prototype chain. Every object has a [[Prototype]] that links to another object.",
    keyPoints: ["Objects inherit from objects", "Prototype chain lookup", "__proto__ and Object.getPrototypeOf()", "Constructor.prototype"]
  },
  {
    id: 6,
    difficulty: "Easy",
    question: "What are Promises?",
    answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
    keyPoints: ["Three states: pending/fulfilled/rejected", ".then() for success", ".catch() for errors", "Chainable"]
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "What is async/await?",
    answer: "async/await is syntactic sugar over Promises. An async function always returns a Promise, and await pauses execution until the Promise resolves, making asynchronous code look synchronous.",
    keyPoints: ["Syntactic sugar for Promises", "async returns Promise", "await pauses execution", "Try/catch for error handling"]
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "What is the difference between let, const, and var?",
    answer: "var is function-scoped and hoisted, let is block-scoped and not accessible before declaration, const is like let but cannot be reassigned. let and const were introduced in ES6.",
    keyPoints: ["var: function-scoped, hoisted", "let: block-scoped, reassignable", "const: block-scoped, not reassignable", "Temporal dead zone for let/const"]
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "What is the 'this' keyword?",
    answer: "The 'this' keyword refers to the object that is executing the current function. Its value depends on how the function is called: method call, function call, constructor, or arrow function.",
    keyPoints: ["Context-dependent", "Method: owner object", "Function: window/undefined", "Arrow: lexical this"]
  },
  {
    id: 10,
    difficulty: "Easy",
    question: "What are Arrow Functions?",
    answer: "Arrow functions are a concise syntax for writing functions in ES6+. They don't have their own 'this', 'arguments', or 'super', and cannot be used as constructors.",
    keyPoints: ["Concise syntax", "Lexical 'this' binding", "No arguments object", "Cannot be constructors"]
  },
  {
    id: 11,
    difficulty: "Medium",
    question: "What is Destructuring?",
    answer: "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a cleaner way to extract data.",
    keyPoints: ["Array destructuring: [a, b]", "Object destructuring: {name}", "Default values supported", "Nested destructuring"]
  },
  {
    id: 12,
    difficulty: "Hard",
    question: "What is the Spread and Rest operator?",
    answer: "The spread operator (...) expands an iterable into individual elements. The rest operator (...) collects multiple elements into an array. Same syntax, different context.",
    keyPoints: ["Spread: expands elements", "Rest: collects elements", "Same ... syntax", "Spread in calls, rest in parameters"]
  },
  {
    id: 13,
    difficulty: "Medium",
    question: "What is a Higher-Order Function?",
    answer: "A higher-order function is a function that takes another function as an argument, returns a function, or both. Examples include map, filter, reduce, and forEach.",
    keyPoints: ["Takes function as argument", "Returns a function", "map, filter, reduce", "Enables functional programming"]
  },
  {
    id: 14,
    difficulty: "Hard",
    question: "What is the Module Pattern?",
    answer: "The Module Pattern uses closures to create private and public encapsulation. It returns an object with public methods that have access to private variables defined in the closure.",
    keyPoints: ["Encapsulation via closures", "Private/public access", "IIFE commonly used", "Namespace management"]
  },
  {
    id: 15,
    difficulty: "Easy",
    question: "What is the DOM?",
    answer: "The DOM (Document Object Model) is a programming interface for web documents. It represents the page as a tree of nodes that can be manipulated with JavaScript.",
    keyPoints: ["Tree structure of HTML", "API for document manipulation", "Nodes and elements", "Dynamic page updates"]
  },
  {
    id: 16,
    difficulty: "Medium",
    question: "What is Event Delegation?",
    answer: "Event delegation is a pattern where you attach a single event listener to a parent element instead of multiple listeners on child elements. It leverages event bubbling to handle events at a higher level.",
    keyPoints: ["Single listener on parent", "Leverages event bubbling", "Better performance", "Dynamic elements handled"]
  },
  {
    id: 17,
    difficulty: "Hard",
    question: "What is a Generator Function?",
    answer: "A generator function (function*) returns an iterator object. It can be paused and resumed using yield, allowing lazy evaluation and custom iteration patterns.",
    keyPoints: ["function* syntax", "yield pauses execution", "Returns iterator", "Lazy evaluation"]
  },
  {
    id: 18,
    difficulty: "Medium",
    question: "What is the difference between null and undefined?",
    answer: "undefined means a variable has been declared but not assigned a value. null is an intentional assignment meaning 'no value'. typeof undefined is 'undefined', typeof null is 'object'.",
    keyPoints: ["undefined: not assigned", "null: intentional no-value", "typeof null === 'object'", "== true, === false"]
  },
  {
    id: 19,
    difficulty: "Easy",
    question: "What is Template Literal?",
    answer: "Template literals are string literals using backticks (`) that allow embedded expressions (${expression}), multi-line strings, and tagged templates.",
    keyPoints: ["Backtick syntax", "${} for expressions", "Multi-line strings", "Tagged templates"]
  },
  {
    id: 20,
    difficulty: "Hard",
    question: "What is a WeakMap and WeakSet?",
    answer: "WeakMap and WeakSet hold weak references to their keys/values. Objects used as keys can be garbage collected if there's no other reference, preventing memory leaks.",
    keyPoints: ["Weak references", "Keys must be objects", "Garbage collection friendly", "Not iterable"]
  }
];
