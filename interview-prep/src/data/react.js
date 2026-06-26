export const reactQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components and efficiently update the DOM using a virtual representation.",
    keyPoints: ["Component-based architecture", "Virtual DOM for performance", "Declarative UI", "Maintained by Meta (Facebook)"],
    questionHi: "React kya hai aur iske main concepts kya hain?",
    answerHi: "React UI development component-based JS library hai jise Facebook/Meta maintain karta hai. Yeh Virtual DOM aur declarative style ka use karke fast aur dynamic interfaces banane me help karti hai.",
    keyPointsHi: ["Component architecture code structure reuse layout", "Virtual DOM performance dynamic page updates", "Declarative programming variables updates styles templates", "Meta Facebook maintenance developer support community standard"]
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It gets transpiled to React.createElement() calls by Babel.",
    keyPoints: ["Syntax extension for JS", "Transpiled by Babel", "Combines markup and logic", "Not required but recommended"],
    questionHi: "JSX kya hota hai aur iska React me kya kaam hai?",
    answerHi: "JSX ek syntax extension hai jo JavaScript files ke andar direct HTML-like UI code likhne ki facility deta hai. Yeh behind-the-scenes Babel compiler ke through standard React.createElement calls me transpile ho jata hai.",
    keyPointsHi: ["Syntax extensions combining JS layouts structures templates markup", "Babel compiler transpilation target dynamic codes standard models", "Integrates logic markup together dynamic component styles parameters", "Readability code layout structures simplifications targets options details"]
  },
  {
    id: 3,
    difficulty: "Medium",
    question: "What is Virtual DOM in React?",
    answer: "The Virtual DOM is a lightweight JavaScript representation of the real DOM. React creates a virtual DOM tree, and when state changes occur, it creates a new virtual tree, diffs it with the previous one, and only updates the changed parts in the real DOM.",
    keyPoints: ["Improves performance", "Minimizes direct DOM manipulation", "Uses diffing algorithm", "Updates only changed elements"],
    questionHi: "Virtual DOM React layout page rendering speeds updates me kaise improve karta hai?",
    answerHi: "Virtual DOM UI elements ka lightweight memory copy clone hai. Component values update hone par React virtual tree change compare diff calculations dynamically minimal real DOM updates check speeds operations layouts details setups.",
    keyPointsHi: ["Speed rendering adjustments components minimize direct DOM access operations", "Diffing algorithm updates nodes exact layouts levels coordinates standard steps", "Batch updates updates execution loop processes components layouts setups systems", "Improves overall UI speed dynamics graphics operations page responsiveness checks"]
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "What are React Hooks?",
    answer: "Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to eliminate the need for class components in most cases.",
    keyPoints: ["useState for state management", "useEffect for side effects", "Custom hooks for reusability", "Cannot be used in class components"],
    questionHi: "React Hooks kya hain aur inki rules guidelines standards kya hote hain?",
    answerHi: "Hooks custom parameters utilities functional components state tracking dynamic lifecycle methods features injection functions tools standard inputs (useState, useEffect) hooks use guidelines rules settings.",
    keyPointsHi: ["Functional component state lifecycle context accessibility hook APIs system", "useState dynamic state values variable tracking checks component levels setups", "useEffect side effects logic async processes cleanup handlers lifecycle tools", "Rule hooks execution top levels components functional containers only standard"]
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "What is useState hook?",
    answer: "useState is a Hook that lets you add state to functional components. It returns an array with the current state value and a function to update it.",
    keyPoints: ["Returns [state, setState]", "Triggers re-render on update", "Can hold any value type", "Initial value set once"],
    questionHi: "useState hooks variables state parameters render triggers setups systems details?",
    answerHi: "useState hooks components dynamic values tracking array sets updates return options current state updates parameters trigger component rendering updates check variables values states details.",
    keyPointsHi: ["Returns array tuple state value update setter function trigger", "Setter updates variables triggers auto UI component re-renders layouts values", "Holds any data formats strings arrays objects variables status indicators", "Initial settings parameters loaded once components load parameters defaults"]
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "What is useEffect hook?",
    answer: "useEffect is a Hook that lets you perform side effects in functional components. It runs after every render by default, but you can control when it runs using the dependency array.",
    keyPoints: ["Replaces lifecycle methods", "Dependency array controls execution", "Cleanup function for unmount", "Runs after DOM updates"],
    questionHi: "useEffect hook async data fetches side effects cleanup functions configurations dynamic details?",
    answerHi: "useEffect hook side effects tasks: data fetch API requests event listeners DOM dynamic edits triggers cleanups returned callbacks triggers, dependencies control runtime updates checks values.",
    keyPointsHi: ["Replaces component lifecycle methods (componentDidMount, Update, Unmount)", "Dependencies arrays variables control executing times parameters conditional triggers", "Cleanup function returned handles event removals timer clearings releases resources", "Asynchronous triggers updates layout paints browser window paint loops"]
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "What is the purpose of useContext?",
    answer: "useContext is a Hook that lets you subscribe to React context without nesting. It accepts a context object and returns the current context value, allowing you to share data across components without prop drilling.",
    keyPoints: ["Avoids prop drilling", "Subscribes to context changes", "Works with Context.Provider", "Re-renders on context change"],
    questionHi: "useContext context API prop passing avoidance global provider templates interfaces setups?",
    answerHi: "useContext subscribers direct values context data systems components trees depth levels access rules without prop drills limits configurations providers variables indicators setups.",
    keyPointsHi: ["Stops deep nested props values passing setups parameters layers variables", "Context Provider references child items subscription details updates listeners", "Subscribes updates context value changes triggers child re-renders configurations", "Good for global settings values themes profiles user auth parameters setups"]
  },
  {
    id: 8,
    difficulty: "Easy",
    question: "What is React Router?",
    answer: "React Router is a library for handling client-side routing in React applications. It enables navigation between different views/components without full page reloads.",
    keyPoints: ["Client-side routing", "No page reload", "Declarative routing", "Supports nested routes"],
    questionHi: "React Router SPA clients routing switch route location navigations definitions parameters?",
    answerHi: "React Router routing manager links page changes views update configurations path matcher components swap animations without complete webpage refresh transitions SPA route.",
    keyPointsHi: ["Client-side routing SPA navigation without page reloads", "Declarative route definitions path component mappings", "Supports nested routes layouts configurations", "URL parameters dynamic route matching"]
  },
  {
    id: 9,
    difficulty: "Medium",
    question: "What is the difference between state and props?",
    answer: "Props are read-only data passed from parent to child components, while state is mutable data managed within a component. Props flow down, state is local.",
    keyPoints: ["Props are immutable", "State is mutable", "Props flow parent to child", "State is component-local"],
    questionHi: "State aur Props variables values scopes difference components features layouts definitions?",
    answerHi: "Props external dynamic parameters parent pass child components read-only immutable value sets, state internal component updates tracker mutable variables configs dynamically rules component level indicators.",
    keyPointsHi: ["Props parent pass parameters read-only immutable elements components targets", "State components internal local data structures updates mutable tracking options", "Props change trigger child updates components tree parameters indicators sets", "State values updates trigger component re-render layouts variables changes"]
  },
  {
    id: 10,
    difficulty: "Hard",
    question: "What is React reconciliation?",
    answer: "Reconciliation is the process React uses to determine which parts of the UI need to be updated. It compares the new virtual DOM tree with the previous one using a diffing algorithm and makes minimal changes to the real DOM.",
    keyPoints: ["Diffing algorithm", "O(n) complexity", "Key prop importance", "Component type comparison"],
    questionHi: "Reconciliation diff logic key list checks Virtual DOM update calculation optimization frameworks?",
    answerHi: "Reconciliation algorithms page element update matching process React Virtual DOM comparisons real node updates minimal changes coordinates O(n) key map loops lists.",
    keyPointsHi: ["Virtual DOM matching updates rendering engine comparison algorithms steps", "Optimized O(n) complexity node matching heuristics layout details setups", "Keys usage index maps identification dynamic elements arrays loop systems", "Component level types checking elements swaps tree replacements selectors"]
  },
  {
    id: 11,
    difficulty: "Medium",
    question: "What is useMemo hook?",
    answer: "useMemo is a Hook that memoizes a computed value. It only recomputes when its dependencies change, preventing expensive calculations on every render.",
    keyPoints: ["Memoizes computed values", "Dependencies array required", "Prevents expensive recalculations", "Returns cached value"],
    questionHi: "useMemo computation caching updates memory controls performance triggers standard values?",
    answerHi: "useMemo caches computed variables checks skips processing loops repeat calculation performance checks checks updates dependencies values remains variables checks setups.",
    keyPointsHi: ["Caches calculations output results parameters evaluations details settings options", "Runs calculation logic conditionally inputs dependencies values updates checks", "Stops performance leaks layout renders checks expensive loops updates variables", "Returns computed cached variable reference context memory tracking operations"]
  },
  {
    id: 12,
    difficulty: "Medium",
    question: "What is useCallback hook?",
    answer: "useCallback is a Hook that memoizes a callback function. It returns the same function reference between renders unless its dependencies change, useful for preventing unnecessary re-renders of child components.",
    keyPoints: ["Memoizes functions", "Stable reference between renders", "Useful with React.memo", "Dependencies control updates"],
    questionHi: "useCallback callbacks references memoize functions stability indicators performance rules controls?",
    answerHi: "useCallback memoizes callback functions references prevents subcomponent rendering parent updating processes locks variables functional references standard hooks.",
    keyPointsHi: ["Memoizes callback functions references parameters stable memory tracking checks", "Prevents child rendering parameters updates function parameter changes details", "Dependencies variables arrays trigger dynamic updates function variables settings", "Returns memoized function instance wrapper parameters bindings triggers systems"]
  },
  {
    id: 13,
    difficulty: "Hard",
    question: "What is useReducer hook?",
    answer: "useReducer is a Hook for managing complex state logic. It accepts a reducer function and initial state, returning the current state and a dispatch function. It's similar to Redux but local to a component.",
    keyPoints: ["For complex state logic", "Reducer pattern", "Returns [state, dispatch]", "Alternative to useState"],
    questionHi: "useReducer hook complex state actions dispatch reducer logic templates details checks?",
    answerHi: "useReducer alternate useState manages complex state layouts objects transitions reducer actions dispatcher models return updated objects values targets coordinates options.",
    keyPointsHi: ["Complex multi-step state values object transitions manager variables checks", "Reducer function maps action types payloads parameters outputs state objects", "Returns state reference dispatch function triggers actions definitions properties", "Isolated local component Redux state configurations pattern setups standard options"]
  },
  {
    id: 14,
    difficulty: "Easy",
    question: "What is a React component?",
    answer: "A React component is a reusable piece of UI that can be a function or class. It accepts inputs (props) and returns React elements describing what should appear on screen.",
    keyPoints: ["Reusable UI pieces", "Function or class", "Accepts props", "Returns JSX"],
    questionHi: "Component definitions models functional components classes reuse code structures user layouts controls?",
    answerHi: "Component reusable interface segments rendering units logic markup layouts functional tags class parameters standard props state indicators settings parameters checks.",
    keyPointsHi: ["Reusable modular interface building elements layouts components modules", "Functions components plain JS variables props returns markup JSX templates", "Classes components legacy lifecycle systems states render options systems", "Accept props inputs manage state internally layout parameters checks details"]
  },
  {
    id: 15,
    difficulty: "Medium",
    question: "What is the key prop in React?",
    answer: "The key prop is a special attribute used to identify elements in a list. It helps React's reconciliation algorithm determine which items have changed, been added, or removed efficiently.",
    keyPoints: ["Unique identifier for list items", "Helps with reconciliation", "Should be stable and unique", "Don't use array index if order changes"],
    questionHi: "key props in array list rendering mappings tracking element positions checks settings?",
    answerHi: "key prop unique identify element list tracker reconciliation lists order shifts additions deletes matching values checks indexes overrides trackers parameters setups.",
    keyPointsHi: ["Unique identify items arrays looping JSX templates rendering components", "Reconciliation speed booster tracking components elements changes list nodes", "Must stable unique key variables databases IDs values prevent order anomalies", "Avoid array list indexing key values index shifts state misalignments"]
  },
  {
    id: 16,
    difficulty: "Hard",
    question: "What is React.memo?",
    answer: "React.memo is a higher-order component that memoizes a component. It prevents re-renders if the props haven't changed, performing a shallow comparison of props by default.",
    keyPoints: ["Higher-order component", "Shallow prop comparison", "Prevents unnecessary re-renders", "Custom comparison function option"],
    questionHi: "React.memo components shallow props comparison options rendering checks optimizations controls?",
    answerHi: "React.memo high order component optimizations wraps functional component prevents re-rendering cycles parent matches props shallow comparisons standard.",
    keyPointsHi: ["Abstractions wrapper functional component optimizations components layers check", "Shallow comparison logic check props updates parameter values layouts values", "Stops component rendering parent update cycles static props components", "Supports custom check functions variables validation logic comparisons checks"]
  },
  {
    id: 17,
    difficulty: "Medium",
    question: "What is Context API?",
    answer: "Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed for data that is considered global for a tree of components.",
    keyPoints: ["Avoids prop drilling", "Provider-Consumer pattern", "Global-like data sharing", "Use for themes, auth, language"],
    questionHi: "Context API React built-in props pass prevention data provider global context features parameters?",
    answerHi: "Context API built-in variables sharing settings without prop drilling layout hierarchies global parameters theme updates authorization configurations subscriptions.",
    keyPointsHi: ["Global variables props sharing system components tree layout settings checks", "Avoids layers parameters passing props drillings options clean trees", "Provider wraps child elements context values setting consumer access setups", "Best localized variables settings dynamic updates setups coordinates theme options"]
  },
  {
    id: 18,
    difficulty: "Hard",
    question: "What are Higher-Order Components (HOC)?",
    answer: "A Higher-Order Component is a function that takes a component and returns a new enhanced component. It's a pattern for reusing component logic without modifying the original component.",
    keyPoints: ["Function that takes a component", "Returns enhanced component", "Reuses logic", "Cross-cutting concerns"],
    questionHi: "HOC (Higher-Order Component) design wrapper layouts functions upgrade component logic configurations?",
    answerHi: "HOC functional pattern wraps component updates upgraded features values compositions (auth checking logs styles options) checks targets source files original files edit controls.",
    keyPointsHi: ["Function parameters components outputs enhanced components layouts templates", "Logic reuse templates parameters layouts wrapping details validation filters", "Composition patterns components enhancements layouts functionalities settings values", "Read-only wrap components details inputs unchanged attributes structures codes"]
  },
  {
    id: 19,
    difficulty: "Medium",
    question: "What is useRef hook?",
    answer: "useRef is a Hook that returns a mutable ref object whose .current property is initialized to the passed argument. It persists across renders without causing re-renders when changed.",
    keyPoints: ["Persists between renders", "No re-render on change", "Access DOM elements", "Store mutable values"],
    questionHi: "useRef hooks target DOM direct references mutable storage variables persist cycles checks values?",
    answerHi: "useRef returns ref object persists state across renders updating `.current` value changes does not trigger components re-renders DOM selector target focus inputs rules.",
    keyPointsHi: ["Ref object persistent rendering cycles standard variables updates settings", "Updating current values does not cause component re-renders layout states", "Direct DOM element target selections focus selectors actions scripts triggers", "Holds mutable values timers indexes coordinates values checks variables parameters"]
  },
  {
    id: 20,
    difficulty: "Easy",
    question: "What is conditional rendering in React?",
    answer: "Conditional rendering means rendering different UI elements based on certain conditions. You can use if statements, ternary operators, logical && operator, or switch statements.",
    keyPoints: ["if/else statements", "Ternary operator", "Logical && operator", "Renders based on state/props"],
    questionHi: "Conditional Rendering techniques components visibility logical operators switch cases checks details?",
    answerHi: "Conditional rendering dynamically outputs JSX formats layouts filters based constraints check: ternary configurations check, logical && values switches, clean dynamic code render parameters.",
    keyPointsHi: ["Renders markup conditional parameters criteria checks variables values", "Ternary expression setups standard toggles inline layout selectors options", "&& logical evaluations direct display inputs truthy conditions setups", "Clean switch case options outputs dynamic templates widgets blocks sets"]
  },
  {
    id: 21,
    difficulty: "Hard",
    question: "What is React Fiber?",
    answer: "React Fiber is the reimplementation of React's core algorithm. It enables incremental rendering, allowing React to split rendering work into chunks and spread it out over multiple frames.",
    keyPoints: ["Incremental rendering", "Priority-based updates", "Pause and resume work", "Better user experience"],
    questionHi: "React Fiber engine algorithms priority rendering slices frames updates speedups explanations details?",
    answerHi: "React Fiber core scheduler system engine reimplementation React. Splits rendering jobs updates chunks spreads execution across browser ticks priority schedule smooth UI frame rates.",
    keyPointsHi: ["Reimplemented core rendering scheduler systems update algorithms dynamic", "Splits operations execution chunks incremental rendering updates schedules", "Prioritizes high-priority updates user inputs animations before offline calculations", "Supports pause resumes stack adjustments components executions layout speedups"]
  },
  {
    id: 22,
    difficulty: "Medium",
    question: "What is prop drilling?",
    answer: "Prop drilling is the process of passing data through multiple levels of components that don't need the data themselves, just to get it to a deeply nested component.",
    keyPoints: ["Passing props through many layers", "Anti-pattern for deep trees", "Solved by Context API", "Or state management libraries"],
    questionHi: "Prop Drilling issues component tree parameter passing nested hierarchies prevention methodologies details?",
    answerHi: "Prop drilling props passed multiple parent child layers unneeded nodes makes layout modifications breakable solution settings: Context API state manager solve updates.",
    keyPointsHi: ["Props passing down many parent child components levels unneeded nodes", "Code maintenance issues updates variables shifts parameters breaks items", "Solved global context settings Context API providers subscriptions patterns", "State managers Redux MobX libraries simplify global variables targets"]
  },
  {
    id: 23,
    difficulty: "Easy",
    question: "What is the difference between controlled and uncontrolled components?",
    answer: "Controlled components have their form data handled by React state, while uncontrolled components store data in the DOM itself. Controlled components use value and onChange props.",
    keyPoints: ["Controlled: state-driven", "Uncontrolled: DOM-driven", "Controlled preferred in React", "Uncontrolled uses refs"],
    questionHi: "Controlled vs Uncontrolled input forms state bindings values changes DOM target selector handles details?",
    answerHi: "Controlled inputs updates values synced state React variables onChange triggers, Uncontrolled inputs store values DOM elements accessed refs selectors directly.",
    keyPointsHi: ["Controlled: value onChange state connection single source truth forms", "Uncontrolled: inputs direct browser DOM variables target ref selectors", "Controlled is preferred validations checks dynamic input values formatting", "Uncontrolled simplified setups default values parameters DOM targets refs"]
  },
  {
    id: 24,
    difficulty: "Hard",
    question: "What is code splitting in React?",
    answer: "Code splitting is a technique to split your app's bundle into smaller chunks that are loaded on demand. React supports it via React.lazy() and Suspense for dynamic imports.",
    keyPoints: ["Reduces initial bundle size", "React.lazy for components", "Suspense for loading states", "Dynamic import()"],
    questionHi: "Code Splitting dynamic imports bundles chunking React lazy Suspense load on demand performance?",
    answerHi: "Code splitting divides build files smaller segments chunk on demand lazy components load dynamic imports (React.lazy Suspense loading state screen layouts outputs checks).",
    keyPointsHi: ["Initial bundle size reductions speeds pages load performance setups", "React.lazy dynamic import components definitions modules parameters structures", "Suspense handling loading fallback screen indicators templates assets displays", "Route level splitting split bundles pages components dynamic load layouts"]
  },
  {
    id: 25,
    difficulty: "Medium",
    question: "What are React Fragments?",
    answer: "Fragments let you group multiple children elements without adding extra nodes to the DOM. You can use <React.Fragment> or the shorthand <>...</> syntax.",
    keyPoints: ["Groups elements without DOM node", "Short syntax: <></>", "Can have key prop", "Cleaner DOM structure"],
    questionHi: "React Fragments layout wrappers DOM nodes pollution exclusions clean syntax outputs html templates?",
    answerHi: "React Fragments templates allow grouping JSX lists items tags return wrapper div tags without creating actual wrapper nodes HTML DOM trees keeps structure clean syntax `<React.Fragment>` shorthand shorthand notation `<></>`.",
    keyPointsHi: ["Groups HTML components elements lists without node pollution HTML DOM", "Short syntax layouts shorthand `<></>` clean codes systems definitions", "Accepts key prop loops lists arrays rendering item wrappers keys", "Styling table rows grids formats layout margins exclusions parameters systems"]
  },
  {
    id: 26,
    difficulty: "Hard",
    question: "What is the useLayoutEffect hook?",
    answer: "useLayoutEffect is similar to useEffect but fires synchronously after all DOM mutations and before the browser paints. Use it when you need to measure DOM elements or synchronously re-render.",
    keyPoints: ["Fires before paint", "Synchronous execution", "For DOM measurements", "Can block visual updates"],
    questionHi: "useLayoutEffect hook differences useEffect paints timings synchronous execution layouts measurements?",
    answerHi: "useLayoutEffect synchronously fires right after DOM changes before page layout visually paints screen blocking layouts updates measurements useEffect runs async after screen paints.",
    keyPointsHi: ["Sync execution before paint screen block visual calculations structures", "DOM width height offsets layout metrics measurements corrections systems", "Blocks visual outputs if calculations take time setups indicators options", "Use cases layout corrections UI offsets shifts prevent flickers coordinates"]
  },
  {
    id: 27,
    difficulty: "Medium",
    question: "What is React.StrictMode?",
    answer: "StrictMode is a development tool that highlights potential problems in an application. It activates additional checks and warnings for its descendants, like detecting unsafe lifecycles.",
    keyPoints: ["Development only", "Detects potential issues", "Double-invokes functions", "No visual UI"],
    questionHi: "StrictMode tool diagnostic warnings development safety flags check operations outputs?",
    answerHi: "StrictMode developer checks wrappers highlights potential bugs unsafe lifecycles side effects memory leaks double invocation functions variables clean coding setups.",
    keyPointsHi: ["Dev-only helper wrapper component checks diagnostic logging system", "Checks deprecated features warning messages components patterns lines checks", "Double-invokes hooks check side-effect safety variables modifications testing", "Does not render visible output layout nodes page structures controls"]
  },
  {
    id: 28,
    difficulty: "Easy",
    question: "What is the difference between class and functional components?",
    answer: "Class components use ES6 classes with render() method and lifecycle methods, while functional components are plain functions that can use Hooks. Functional components are simpler and now preferred.",
    keyPoints: ["Class: ES6 class syntax", "Functional: plain functions", "Hooks replaced lifecycle methods", "Functional preferred now"],
    questionHi: "Class Components aur Functional Components difference lifecycle hooks state implementations preferences?",
    answerHi: "Class components use ES6 OOP styles render methods lifecycles, Functional components plain functions state hooks parameters. Functional lighter cleaner preferred standard React.",
    keyPointsHi: ["Class component class layout constructor render methods lifecycle methods standard", "Functional components hooks system simplifications lightweight fast compile", "Hooks replaced class lifecycle handlers context states actions parameters", "Industry preference functional component codes standard designs libraries"]
  },
  {
    id: 29,
    difficulty: "Hard",
    question: "What is React Portals?",
    answer: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. Useful for modals, tooltips, and popups.",
    keyPoints: ["Renders outside parent DOM", "ReactDOM.createPortal()", "Events still bubble up", "Useful for modals/tooltips"],
    questionHi: "React Portals modal dialogue escape boundaries target nodes HTML DOM hierarchy overlay coordinates?",
    answerHi: "Portals render child components HTML DOM nodes outside parent components tree container locations. Essential overlay modals tooltips dialogs styling scroll containments boundaries.",
    keyPointsHi: ["Renders target elements outside parent components structures DOM trees", "ReactDOM.createPortal() function target nodes placements configurations", "Bubbling events behaves normal React event hierarchies details tracking checks", "Perfect design modals tooltips alerts dropdowns absolute layers positioning"]
  },
  {
    id: 30,
    difficulty: "Medium",
    question: "What is the useImperativeHandle hook?",
    answer: "useImperativeHandle customizes the instance value that is exposed to parent components when using ref. It's used with forwardRef to control what values are accessible via the ref.",
    keyPoints: ["Customizes ref value", "Used with forwardRef", "Controls exposed API", "Limits parent access"],
    questionHi: "useImperativeHandle hooks standard forwardRef refs child component internal methods variables exposed parent?",
    answerHi: "useImperativeHandle hook customizes child ref object instance exposed parent elements. Used with forwardRef restricts access parent child functions component internals APIs controls.",
    keyPointsHi: ["Restricts exposed API methods child components refs variables setups", "Requires forwardRef wrappers components parameters variables pass items options", "Custom object ref parameters defined parent checks access standard options", "Rare use-cases specialized input components focus triggers scroll setups variables"]
  }
];
