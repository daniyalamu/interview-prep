export const cssQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is the Box Model?",
    answer: "The CSS Box Model is a rectangular layout paradigm for HTML elements consisting of content, padding, border, and margin. Every element is rendered as a box with these four areas.",
    keyPoints: ["Content + Padding + Border + Margin", "box-sizing controls calculation", "border-box includes padding/border", "content-box is default"],
    questionHi: "CSS Box Model kya hota hai?",
    answerHi: "CSS Box Model ek design rule hai jisme har element ke chaaron taraf content, padding, border, aur margin components layers layout models coordinates ke details setup define karta hai.",
    keyPointsHi: ["Content: dimension text images layouts values", "Padding: content borders inside gap", "Border: visible outline boundaries styles", "Margin: outer distance separator between elements"]
  },
  {
    id: 2,
    difficulty: "Medium",
    question: "What is Flexbox?",
    answer: "Flexbox is a one-dimensional CSS layout method for arranging items in rows or columns. It provides powerful alignment and distribution capabilities for responsive layouts.",
    keyPoints: ["One-dimensional layout", "Main axis and cross axis", "justify-content, align-items", "flex-grow, flex-shrink, flex-basis"],
    questionHi: "Flexbox layout properties aur uses kya hain?",
    answerHi: "Flexbox flex items horizontal ya vertical direction container align items setup directions systems hai, jisme flex values layout settings automatic resize supports provide karti hain dynamically coordinate settings options checks.",
    keyPointsHi: ["One-dimensional flexible layout alignments", "Main axis cross layout positioning setups", "Justify Content align items variables controls", "Flex values items scaling rules sizing options"]
  },
  {
    id: 3,
    difficulty: "Medium",
    question: "What is CSS Grid?",
    answer: "CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns simultaneously. It's ideal for page-level layouts.",
    keyPoints: ["Two-dimensional layout", "Rows and columns", "grid-template-areas", "Implicit and explicit grids"],
    questionHi: "CSS Grid layout model kya hai?",
    answerHi: "CSS Grid page-level layout design ke liye columns aur rows dono ko ek sath handle karne wala dual-axis two-dimensional layout coordinate system hai, jisse complex web app components positions setup adjust dynamic details filters targets blocks structures.",
    keyPointsHi: ["Two-dimensional layouts templates systems rows columns grids", "Dynamic Grid template areas layouts items setups properties", "Explicit templates grid columns rows auto dimensions setups", "Ideal layouts layout designs components dashboards pages systems"]
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "What is the difference between margin and padding?",
    answer: "Margin is the space outside an element's border that separates it from other elements. Padding is the space between the content and the border, inside the element.",
    keyPoints: ["Margin: outside border", "Padding: inside border", "Margin can be negative", "Padding cannot be negative"],
    questionHi: "Margin aur Padding spacing parameters me kya differences hain?",
    answerHi: "Margin element borders outer bounds space boundary distance settings hai jo elements gap maintain rakhti hai, padding element content inner boundaries elements borders safety gap setups spaces details defines controls.",
    keyPointsHi: ["Margin external space border properties separating sets", "Padding internal content spacing values borders alignment settings", "Margin settings negative values overlaps configurations standard check", "Padding negative space definition restrictions block systems properties"]
  },
  {
    id: 5,
    difficulty: "Medium",
    question: "What is CSS specificity?",
    answer: "Specificity determines which CSS rule is applied when multiple rules target the same element. It's calculated based on the types of selectors used: inline > ID > class > element.",
    keyPoints: ["Inline: 1000", "ID: 100", "Class/attribute: 10", "Element: 1"],
    questionHi: "CSS Specificity priorities overrides rules calculations explanations details parameters?",
    answerHi: "Specificity prioritizations engine check selectors values calculates priority to apply styles coordinates. Targets override weights: inline styles 1000, IDs 100, classes attributes 10, tag elements selectors 1 settings priority scores overrides checks.",
    keyPointsHi: ["Priority calculations values rules override selectors targets", "Inline selector style value priority weight 1000 configurations", "ID level selectors priority standard index value weight 100 settings", "Class attributes values selectors priority weight 10 standard indicators elements"]
  },
  {
    id: 6,
    difficulty: "Hard",
    question: "What are CSS Custom Properties (Variables)?",
    answer: "CSS Custom Properties (--variable-name) are entities defined by CSS authors that contain specific values to be reused throughout a document. They cascade and inherit like other properties.",
    keyPoints: ["--name: value syntax", "var(--name) to use", "Cascade and inherit", "Scoped to selectors"],
    questionHi: "CSS Custom Properties (Variables) definition settings cascading rules checks?",
    answerHi: "CSS Variables user declared reuse selectors parameters standard variable settings (--name: value) variables reusable colors styles margins details page setups templates cascades inheritance override features cascades standard.",
    keyPointsHi: ["--variable-name value declarations syntax custom setups variables", "var(--variable-name) call value setups layouts definitions", "Cascade inherit features child selector overrides variables options", "Dynamic theme parameters configurations runtime updates JavaScript sets"]
  },
  {
    id: 7,
    difficulty: "Easy",
    question: "What is the position property?",
    answer: "The position property specifies how an element is positioned in the document. Values include static (default), relative, absolute, fixed, and sticky.",
    keyPoints: ["static: normal flow", "relative: offset from normal", "absolute: removed from flow", "fixed: relative to viewport"],
    questionHi: "CSS Position positioning rules variables coordinates behaviors types options details?",
    answerHi: "Position settings element display location offsets layouts values control selectors coordinate: static (default parameters layouts), relative (offset relative normal layout), absolute (offset relative parent element positions), fixed (relative viewport scroll locks), sticky (hybrid transitions positions rules locks coordinates).",
    keyPointsHi: ["static default placement page settings coordinates indicators", "relative offsets coordinates relative normal layout positions", "absolute offsets layout calculation relative parent absolute flow", "fixed offsets tracking relative viewport browser window settings scroll locks"]
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "What are CSS Media Queries?",
    answer: "Media queries allow you to apply CSS styles based on device characteristics like screen width, height, orientation, and resolution. They're fundamental for responsive design.",
    keyPoints: ["@media rule", "Breakpoint-based styling", "Responsive design foundation", "Can query width, height, orientation"],
    questionHi: "Media Queries uses breakpoints structures layouts configurations responsive designs checks?",
    answerHi: "Media Queries conditional style applications target screens width height resolution properties responsive layouts coordinates dynamic viewport scales structures layouts updates.",
    keyPointsHi: ["@media rule selectors layouts parameters configurations responsive designs", "Screen width height resolution features checks media screens", "Breakpoints layout style screen size layouts", "Responsive design layout framework setups rules coordinates"]
  },
  {
    id: 9,
    difficulty: "Hard",
    question: "What is BEM methodology?",
    answer: "BEM (Block, Element, Modifier) is a naming convention for CSS classes that creates reusable, maintainable code. Block is standalone entity, Element is part of block, Modifier is a variation.",
    keyPoints: ["Block: standalone component", "Element: block__element", "Modifier: block--modifier", "Improves maintainability"],
    questionHi: "BEM CSS naming conventions selectors layouts structures definitions explain formats?",
    answerHi: "BEM (Block, Element, Modifier) methodology reusable code CSS class naming standard styling blocks components layout structures indicators clean components formats setups layouts.",
    keyPointsHi: ["Block parent layout components names standards wrappers styles", "Element nested item names double underscores block__element format", "Modifier state variation modifications naming double dashes block--modifier", "Component isolation CSS layout clean standard maintainability framework"]
  },
  {
    id: 10,
    difficulty: "Medium",
    question: "What is the z-index property?",
    answer: "z-index controls the stacking order of positioned elements (elements with position other than static). Higher values appear in front of lower values within the same stacking context.",
    keyPoints: ["Controls stack order", "Only works on positioned elements", "Stacking context matters", "Higher value = in front"],
    questionHi: "z-index layers positioning rules stack stack context variables control specifications?",
    answerHi: "z-index elements z-axis stacking overlays order render levels absolute relative fixed properties height checks stack context boundaries settings details indicators front back overlays controls.",
    keyPointsHi: ["Stack order depth values dimensions variables positioning controls", "Required positioned elements static position elements z-index constraints", "Stack context parent boundaries containment scopes boundaries", "Higher value levels element front layer render top priority stack"]
  }
];
