export const javascriptQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is a Closure?",
    answer: "A closure is a function that has access to variables from its outer (enclosing) function's scope, even after the outer function has returned. It 'closes over' the variables it needs.",
    keyPoints: ["Function + lexical environment", "Access outer scope variables", "Persists after outer function returns", "Used for data privacy"],
    questionHi: "JavaScript me Closure kya hota hai aur iska usage kaha hota hai?",
    answerHi: "Closure ek simple mechanism hai jahan ek inner function apne surrounding lexical scope ke variables ko access kar sakta hai, chahe parent function execution phase poora kar ke return ho chuka ho.",
    keyPointsHi: ["Function + lexical environment binding variables trackers", "Outer parent variables reference tracking inner scope access", "Javascript encapsulation variables privacy structures scopes", "Memory context persistence functions targets variables standard checks"]
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "What is Hoisting?",
    answer: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. Variable declarations (var) and function declarations are hoisted, but not their assignments.",
    keyPoints: ["Declarations moved to top", "var is hoisted (undefined)", "let/const are not accessible before declaration", "Function declarations fully hoisted"],
    questionHi: "Hoisting JS execution mechanisms rules variables parameters hoisting comparisons updates details?",
    answerHi: "Hoisting JavaScript compiling behavior compiler memory allocation stage code block compilation time variable var functional declarations scope lists default top pre-allocations registers variables undefined defaults.",
    keyPointsHi: ["Declarations variables functions compilation phase memory top allocations", "var declarations initialized default values undefined access before execution", "let const variables block scope temporal dead zone access error block", "Function declarations fully variables access settings before inline line call"]
  },
  {
    id: 3,
    difficulty: "Medium",
    question: "What is the Event Loop?",
    answer: "The Event Loop is JavaScript's concurrency model. It continuously checks the call stack, and when empty, takes the first task from the callback queue (or microtask queue) and pushes it onto the call stack.",
    keyPoints: ["Enables async behavior", "Call stack + task queue", "Microtasks have priority", "Non-blocking I/O"],
    questionHi: "Event Loop engine concurrency mechanisms task queues asynchronous call stacks executions details?",
    answerHi: "Event Loop JS environment asynchronous calls callbacks queue scheduler controller check loops execution stack checks callbacks queues event tasks call stack execute registers handles standard setups.",
    keyPointsHi: ["Asynchronous processes executions scheduling tools system engines", "Call Stack execution stack tracking Queue tasks list transfers controls", "Microtasks queue (Promises, mutation observer) priority execution check macros", "Non-blocking background runtime process controls inputs values operations"]
  },
  {
    id: 4,
    difficulty: "Medium",
    question: "What is the difference between == and ===?",
    answer: "== performs type coercion before comparison (loose equality), while === compares both value and type without coercion (strict equality). Always prefer === for predictable comparisons.",
    keyPoints: ["== coerces types", "=== no coercion", "=== checks type + value", "Always prefer ==="],
    questionHi: "JS comparisons loose equality == aur strict comparisons === difference checks parameters?",
    answerHi: "== loose equality type casting coercion dynamically comparisons handles value conversions checks variables matching, whereas === strict equality checks variables values type constraints validation without type coercions strictly match indicators.",
    keyPointsHi: ["== dynamic type casting automatic conversion value match properties checks", "=== strict comparison values types checks validations exact matches", "Coercion implicit casting conversion differences properties types variables indicators", "Always prefer === standard verification comparisons prevent anomalies systems controls"]
  },
  {
    id: 5,
    difficulty: "Hard",
    question: "What is Prototypal Inheritance?",
    answer: "Prototypal inheritance is JavaScript's mechanism where objects can inherit properties and methods from other objects via the prototype chain. Every object has a [[Prototype]] that links to another object.",
    keyPoints: ["Objects inherit from objects", "Prototype chain lookup", "__proto__ and Object.getPrototypeOf()", "Constructor.prototype"],
    questionHi: "Prototypal Inheritance objects dynamic prototypes references link lookup rules chains structures details?",
    answerHi: "Prototypal inheritance javascript setup target object dynamic templates prototype attributes checks dynamic inheritance hierarchies prototypes lookups structures standard objects lookup.",
    keyPointsHi: ["Objects directly inherits object references methods variables parameters options", "Prototype chain levels parent object check steps target properties validations", "__proto__ lookup link configurations Object.getPrototypeOf() standard actions API properties", "Constructor function prototype objects default parent properties allocations setups"]
  },
  {
    id: 6,
    difficulty: "Easy",
    question: "What are Promises?",
    answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
    keyPoints: ["Three states: pending/fulfilled/rejected", ".then() for success", ".catch() for errors", "Chainable"],
    questionHi: "Promises async event operations trackers states chains reject resolve standard definitions?",
    answerHi: "Promise container value placeholder asynchronous callbacks updates success outcomes: pending executions run status, fulfilled success data results, rejected error messages variables standard handles sequence integrations checks.",
    keyPointsHi: ["Chained sequences async actions data dynamic trackers handlers system options", "State definitions pending parameters fulfilled response outputs rejected errors checks", ".then() callbacks resolves chain output tracking items systems parameters check", ".catch() error validations systems rejection intercept setups values options trackers"]
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "What is async/await?",
    answer: "async/await is syntactic sugar over Promises. An async function always returns a Promise, and await pauses execution until the Promise resolves, making asynchronous code look synchronous.",
    keyPoints: ["Syntactic sugar for Promises", "async returns Promise", "await pauses execution", "Try/catch for error handling"],
    questionHi: "Async/Await keywords await promise promises response operations try catch layouts interfaces checks?",
    answerHi: "Async/await syntactic design patterns layouts code format styles dynamic promises await waits resolution resolves templates returns try catch formats error handle options setup values.",
    keyPointsHi: ["Syntactic sugar async promise structures cleaner layout designs codes", "async automatically returns wrap value Promise systems standard parameters options", "await blocks script line until promise response object resolves indicators variables", "try catch blocks errors logs handling patterns clean interfaces tracking codes"]
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "What is the difference between let, const, and var?",
    answer: "var is function-scoped and hoisted, let is block-scoped and not accessible before declaration, const is like let but cannot be reassigned. let and const were introduced in ES6.",
    keyPoints: ["var: function-scoped, hoisted", "let: block-scoped, reassignable", "const: block-scoped, not reassignable", "Temporal dead zone for let/const"],
    questionHi: "Let, Const, Var parameters difference variable declarations scopes reassignment parameters values setups?",
    answerHi: "var global dynamic scope settings var overrides re-declaration let block scoping constraints const value reassignment restrictions dynamic references locking variable values variables settings formats parameters structures.",
    keyPointsHi: ["var global functions scopes allocations undefined defaults overrides check", "let block scopes blocks statements variables parameters re-assign value options", "const block scope variable binding locks references values immutable properties elements", "Temporal Dead Zone blocks accessing let const variables declarations checks locations"]
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "What is the 'this' keyword?",
    answer: "The 'this' keyword refers to the object that is executing the current function. Its value depends on how the function is called: method call, function call, constructor, or arrow function.",
    keyPoints: ["Context-dependent", "Method: owner object", "Function: window/undefined", "Arrow: lexical this"],
    questionHi: "this keyword context reference values dynamic mappings execution calls types explanations details?",
    answerHi: "this keyword dynamic execution reference pointers maps dynamically values context: method contexts maps executing object target, global references windows targets, arrow inherit parents lexical scope context settings.",
    keyPointsHi: ["Context references runtime invocation parameters details coordinates indicators styles", "Method context levels target executing object reference elements dynamic sets", "Global normal function window parameters strict mode undefined allocations systems", "Arrow functions inherits outer lexical block parents reference structures parameters bind"]
  },
  {
    id: 10,
    difficulty: "Easy",
    question: "What are Arrow Functions?",
    answer: "Arrow functions are a concise syntax for writing functions in ES6+. They don't have their own 'this', 'arguments', or 'super', and cannot be used as constructors.",
    keyPoints: ["Concise syntax", "Lexical 'this' binding", "No arguments object", "Cannot be constructors"],
    questionHi: "Arrow Functions concise syntaxes variables this lexical contexts arrow codes layouts difference parameters?",
    answerHi: "Arrow function concise syntax declarations ES6 updates lexical this binding parents lexical scope context systems controls no arguments keywords cannot use class constructor engines parameters.",
    keyPointsHi: ["Concise syntax inline declarations options returns values templates dynamic elements", "No internal this keyword context checks lexical parent binding context systems", "No default arguments variables lists parameters setups standard arrow layouts", "Cannot initialize constructor classes objects instances errors allocations checks"]
  },
  {
    id: 11,
    difficulty: "Medium",
    question: "What is Destructuring?",
    answer: "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a cleaner way to extract data.",
    keyPoints: ["Array destructuring: [a, b]", "Object destructuring: {name}", "Default values supported", "Nested destructuring"],
    questionHi: "Destructuring arrays objects data unpack assignment parameters styles definitions setups details checks?",
    answerHi: "Destructuring assignment unpack values variables parameters elements layouts: array positions variables mapping, objects values variables fields mapping default assignments supports inputs checks.",
    keyPointsHi: ["Array values matching patterns unpack indexes [val1, val2] systems templates", "Object keys extract properties names matching assignments {key} properties definitions", "Supports default assignments variables if undef matches settings indicators values", "Nested structure fields data checks extract inner properties targets rules checks"]
  },
  {
    id: 12,
    difficulty: "Hard",
    question: "What is the Spread and Rest operator?",
    answer: "The spread operator (...) expands an iterable into individual elements. The rest operator (...) collects multiple elements into an array. Same syntax, different context.",
    keyPoints: ["Spread: expands elements", "Rest: collects elements", "Same ... syntax", "Spread in calls, rest in parameters"],
    questionHi: "Spread operator Rest parameters differences usage syntaxes array updates methods dynamic details checks?",
    answerHi: "Spread expansions updates arrays arguments parameter list unpacking options Rest collect parameters functions arguments list dynamic arrays collect tools properties configurations values setups.",
    keyPointsHi: ["Spread expands array fields arguments items parameters lists values indicators", "Rest parameters collect inputs arguments list dynamic function params setups", "Identical three dots syntax usage placement defines actions values checks", "Spread array clones mergers Rest function arguments dynamically variables lists"]
  },
  {
    id: 13,
    difficulty: "Medium",
    question: "What is a Higher-Order Function?",
    answer: "A higher-order function is a function that takes another function as an argument, returns a function, or both. Examples include map, filter, reduce, and forEach.",
    keyPoints: ["Takes function as argument", "Returns a function", "map, filter, reduce", "Enables functional programming"],
    questionHi: "Higher-Order Functions functional modules callbacks arguments maps filters arrays codes implementations details?",
    answerHi: "Higher-Order Function receives function arguments callback inputs functions dynamic returned standard examples JS array operations: map filters arrays formats data controls layouts calculations.",
    keyPointsHi: ["Accepts functions input parameters callback systems templates data controls", "Returns functional execution code blocks dynamic interfaces rules configurations", "map filter reduce arrays collections transformations parameters settings options", "Functional programming pattern components abstractions pipelines codes configurations"]
  },
  {
    id: 14,
    difficulty: "Hard",
    question: "What is the Module Pattern?",
    answer: "The Module Pattern uses closures to create private and public encapsulation. It returns an object with public methods that have access to private variables defined in the closure.",
    keyPoints: ["Encapsulation via closures", "Private/public access", "IIFE commonly used", "Namespace management"],
    questionHi: "Module Pattern closure data encapsulation variables configurations private values details checks?",
    answerHi: "Module Pattern javascript encapsulation wrapper designs logic functions closures private variables public properties returned objects standard isolate logic properties details namespaces.",
    keyPointsHi: ["Encapsulates codes variables closures safety privacy properties definitions", "Private local scopes values structures public exposed interfaces returned objects definitions", "IIFE standard usages namespace isolations clean codes rules setups systems", "Avoids global scopes pollutions variable tracking validations parameters models"]
  },
  {
    id: 15,
    difficulty: "Easy",
    question: "What is the DOM?",
    answer: "The DOM (Document Object Model) is a programming interface for web documents. It represents the page as a tree of nodes that can be manipulated with JavaScript.",
    keyPoints: ["Tree structure of HTML", "API for document manipulation", "Nodes and elements", "Dynamic page updates"],
    questionHi: "DOM (Document Object Model) interfaces nodes structural graphs layouts browser scripts manipulates definitions options?",
    answerHi: "DOM browser documentation model tree representation pages nodes styles scripts dynamically updates layout selectors query selector bindings page dynamic updates checks values selectors.",
    keyPointsHi: ["HTML nodes structure document object representation tree graph layout elements", "API mapping interfaces browsers updates visual component modifications dynamically", "Nodes text components properties elements selectors classes actions events variables", "Dynamic dynamic elements updates values states properties tracking rules details"]
  },
  {
    id: 16,
    difficulty: "Medium",
    question: "What is Event Delegation?",
    answer: "Event delegation is a pattern where you attach a single event listener to a parent element instead of multiple listeners on child elements. It leverages event bubbling to handle events at a higher level.",
    keyPoints: ["Single listener on parent", "Leverages event bubbling", "Better performance", "Dynamic elements handled"],
    questionHi: "Event Delegation patterns bubbling capturing event listener optimization event objects parent child mechanics systems?",
    answerHi: "Event delegation is a design pattern which places a single event listener on the parent element to track child clicks. It uses event bubbling to check the event target, optimizing memory usages.",
    keyPointsHi: ["Single listener parent component configurations handles multiple items clicks", "Uses event bubbling target element check parameters event object properties target", "Memory footprint minimization list dynamic items elements event connections", "Handles dynamic children added layouts automatically runtime updates check events"]
  },
  {
    id: 17,
    difficulty: "Hard",
    question: "What is a Generator Function?",
    answer: "A generator function (function*) returns an iterator object. It can be paused and resumed using yield, allowing lazy evaluation and custom iteration patterns.",
    keyPoints: ["function* syntax", "yield pauses execution", "Returns iterator", "Lazy evaluation"],
    questionHi: "Generator Functions yields executions loops next control sequences custom iterators details checks?",
    answerHi: "Generators function* executions returns iteration tools yield pauses state values next() continues processes outputs custom dynamic calculations tools dynamic iterators.",
    keyPointsHi: ["function* definition syntax code lines generator setups coordinates", "yield pauses execution values output next iteration trigger settings options", "Returns custom iterator sequences structures values parameters validations checks", "Lazy evaluations dynamic stream coordinates loops memory footprint optimizations values"]
  },
  {
    id: 18,
    difficulty: "Medium",
    question: "What is the difference between null and undefined?",
    answer: "undefined means a variable has been declared but not assigned a value. null is an intentional assignment meaning 'no value'. typeof undefined is 'undefined', typeof null is 'object'.",
    keyPoints: ["undefined: not assigned", "null: intentional no-value", "typeof null === 'object'", "== true, === false"],
    questionHi: "Null aur Undefined comparisons differences data types variables assignments indicators checks rules?",
    answerHi: "undefined indicator variable declared without values assignment default options null explicit empty value target object assignments configurations matches.",
    keyPointsHi: ["undefined declared variable without initial assignments default setting options", "null assignment indicator explicit empty target object mapping settings", "typeof undefined returns undefined, typeof null returns object default standard JS", "Equality loose returns true == strict check === false mismatch indicators types"]
  },
  {
    id: 19,
    difficulty: "Easy",
    question: "What is Template Literal?",
    answer: "Template literals are string literals using backticks (`) that allow embedded expressions (${expression}), multi-line strings, and tagged templates.",
    keyPoints: ["Backtick syntax", "${} for expressions", "Multi-line strings", "Tagged templates"],
    questionHi: "Template Literals string definitions interpolations multi line structures backtick notations ES6 JS templates?",
    answerHi: "Template literals backtick strings allow inline ${expression} variables outputs multi-line representations layout formats codes configurations clean setups values dynamic text updates.",
    keyPointsHi: ["Backtick string borders values setups specifications formatting features lines", "Expression string evaluation format code injection templates parameters value placeholders", "Multi line strings without escapes syntax standard readable codes templates", "Tagged template calls customizations parsing arrays raw parameters scripts details"]
  },
  {
    id: 20,
    difficulty: "Hard",
    question: "What is a WeakMap and WeakSet?",
    answer: "WeakMap and WeakSet hold weak references to their keys/values. Objects used as keys can be garbage collected if there's no other reference, preventing memory leaks.",
    keyPoints: ["Weak references", "Keys must be objects", "Garbage collection friendly", "Not iterable"],
    questionHi: "WeakMap WeakSet collections garbage collection memory leakage release target objects checks?",
    answerHi: "WeakMap WeakSet specialized collections holding references weakly object parameters values automatically cleaned up browser garbage collections memory leakage stops validations controls.",
    keyPointsHi: ["Weak references components dynamic objects memory tracking items lists checks", "Key values must objects types data checks keys constraints setups parameters", "Automatic garbage cleanups references drops variables settings checks values details", "Non-iterable collections checks sizes values tracking methods systems boundaries"]
  }
];
