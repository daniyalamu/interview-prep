export const htmlQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is the difference between HTML and HTML5?",
    answer: "HTML5 is the latest version of HTML with new semantic elements, multimedia support (audio/video), Canvas API, local storage, and improved form controls.",
    keyPoints: ["New semantic elements", "Audio/Video support", "Canvas and SVG", "Local/Session storage"],
    questionHi: "HTML aur HTML5 me kya difference hai?",
    answerHi: "HTML5 HTML ka sabse naya version hai jisme audio, video, SVG, canvas, local storage aur naye semantic tags (header, footer, nav) ka built-in support milta hai.",
    keyPointsHi: ["Naye semantic elements/tags", "Audio aur Video components integration", "Canvas aur SVG graphics support", "Local aur Session storage features"]
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "What are semantic HTML elements?",
    answer: "Semantic elements clearly describe their meaning to both browser and developer. Examples include <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>.",
    keyPoints: ["Meaningful element names", "Better accessibility", "SEO benefits", "header, nav, main, footer"],
    questionHi: "Semantic HTML elements kya hote hain?",
    answerHi: "Semantic elements browser aur developer dono ko element ka clear matlab batate hain. Jaise <header>, <nav>, <main>, aur <footer> code ko structural aur meaningful banate hain.",
    keyPointsHi: ["Meaningful elements ke naam", "Behtar accessibility (Screen-readers)", "SEO performance boost", "Structural layout tags"]
  },
  {
    id: 3,
    difficulty: "Medium",
    question: "What is the difference between localStorage and sessionStorage?",
    answer: "localStorage persists data with no expiration date (until explicitly cleared), while sessionStorage data is cleared when the browser tab is closed. Both store key-value pairs.",
    keyPoints: ["localStorage: persists forever", "sessionStorage: cleared on tab close", "Both: key-value pairs", "5-10MB storage limit"],
    questionHi: "localStorage aur sessionStorage me kya difference hai?",
    answerHi: "localStorage me data permanent browser me save rehta hai jag tak user use clear na kare, jabki sessionStorage ka data tab band (close) hote hi automatically delete ho jata hai.",
    keyPointsHi: ["localStorage permanent storage hai", "sessionStorage tab close hone par clean hota hai", "Dono key-value settings use karte hain", "Storage limit lagbhag 5-10MB hoti hai"]
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "What is the purpose of the DOCTYPE declaration?",
    answer: "DOCTYPE tells the browser which version of HTML the page is using. In HTML5, <!DOCTYPE html> triggers standards mode rendering instead of quirks mode.",
    keyPoints: ["Defines HTML version", "Triggers standards mode", "<!DOCTYPE html> for HTML5", "Must be first line"],
    questionHi: "DOCTYPE declaration ka kya purpose hota hai?",
    answerHi: "DOCTYPE declaration browser ko batata hai ki page kis HTML version par design kiya gaya hai. HTML5 me iske liye simple <!DOCTYPE html> declaration use hoti hai jo browser standards mode rendering trigger karti hai.",
    keyPointsHi: ["HTML standard specification tool", "Rendering standards mode trigger karta hai", "<!DOCTYPE html> for HTML5 standard", "Page ki sabse pehli line me use hota hai"]
  },
  {
    id: 5,
    difficulty: "Medium",
    question: "What are data attributes in HTML?",
    answer: "Data attributes (data-*) allow you to store custom data on HTML elements. They can be accessed via JavaScript using element.dataset and are useful for storing UI state.",
    keyPoints: ["Custom data storage", "data-* prefix", "Access via dataset API", "No visual effect"],
    questionHi: "HTML me data attributes kya hote hain?",
    answerHi: "Data attributes (data-*) HTML tags ke andar custom data values hold karne me help karte hain. Is data ko JavaScript me `element.dataset` ke through read aur modify kiya ja sakta hai.",
    keyPointsHi: ["Custom variables storage in HTML tags", "data-* notation pattern", "Access datasets via JS controls", "Bina visible change ke data store karta hai"]
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "What is the difference between inline, block, and inline-block elements?",
    answer: "Block elements take full width and start on new line (div, p). Inline elements only take needed width and don't break line (span, a). Inline-block combines both behaviors.",
    keyPoints: ["Block: full width, new line", "Inline: content width, same line", "Inline-block: set dimensions, same line", "display property controls"],
    questionHi: "Inline, Block, aur Inline-Block elements me kya difference hai?",
    answerHi: "Block elements page ki full width lete hain aur naye line se shuru hote hain (div, p). Inline elements content ke according space lete hain. Inline-block display line me rehkar dimensions rules (width/height/padding) support karta hai.",
    keyPointsHi: ["Block: full width aur new line", "Inline: content width aur continuous line", "Inline-block: dimensions support aur same line", "display CSS properties se switch hota hai"]
  },
  {
    id: 7,
    difficulty: "Hard",
    question: "What is the Shadow DOM?",
    answer: "Shadow DOM is a web standard that provides encapsulation for DOM and CSS. It allows hidden DOM trees to be attached to elements, keeping styles and markup private from the main document.",
    keyPoints: ["DOM encapsulation", "Scoped styles", "Web Components foundation", "Prevents style leaking"],
    questionHi: "Shadow DOM kya hota hai?",
    answerHi: "Shadow DOM browser ka built-in isolation mechanism hai jo web components ke HTML aur CSS codes ko encapsulated rakhta hai. Isse component ki styling document styles se separate aur safe rehti hai.",
    keyPointsHi: ["Styles variables boundaries containment", "Scoped components protection layers", "Web components standard block design", "Style leaks avoid mechanism standard"]
  },
  {
    id: 8,
    difficulty: "Easy",
    question: "What is the purpose of the alt attribute in images?",
    answer: "The alt attribute provides alternative text for an image when it cannot be displayed. It's essential for accessibility (screen readers) and SEO.",
    keyPoints: ["Accessibility requirement", "Screen reader text", "Shown if image fails", "SEO benefits"],
    questionHi: "Images elements me alt attribute kis purpose ke liye use hota hai?",
    answerHi: "Alt attribute image load na hone par back-up descriptive text display karta hai. Yeh screen-readers ke accessibility standards aur search engine SEO rankings ke liye bahut important hota.",
    keyPointsHi: ["Accessibility checklist mandatory", "Visual read substitute screen-readers", "Fallback label image components", "SEO keyword description boost metrics"]
  },
  {
    id: 9,
    difficulty: "Medium",
    question: "What are Web Workers?",
    answer: "Web Workers allow JavaScript to run in background threads separate from the main thread. They enable heavy computation without blocking the UI.",
    keyPoints: ["Background thread execution", "Non-blocking UI", "Message passing API", "No DOM access"],
    questionHi: "HTML5 Form Validation kaise work karti hai?",
    answerHi: "HTML5 default standard forms validate karne ke liye built-in parameters attributes detii hai (required, pattern, min, max, type). Isme verification processes browser engine handle karta hai bina kisi custom javascript validation coding ke.",
    keyPointsHi: ["Built-in browser logic validations", "Bina client JS code ke validate karta hai", "Interactive validation tooltips triggers", "Input values matching patterns filters"]
  },
  {
    id: 10,
    difficulty: "Easy",
    question: "What is the difference between <div> and <span>?",
    answer: "<div> is a block-level container element used for grouping larger sections of content. <span> is an inline element used for styling small pieces of text or content within a line.",
    keyPoints: ["div: block-level", "span: inline", "div: sections/containers", "span: text styling"],
    questionHi: "Canvas aur SVG elements me kya main differences hain?",
    answerHi: "Canvas raster pixels use karke graphics javascript runtime scripts ke through draw karta hai (high performance coding games ke liye useful), jabki SVG elements XML nodes vectors patterns hote hain jo bina resolution lose kiye zoom scale support karte hain.",
    keyPointsHi: ["Canvas JavaScript pixel scripts handles", "SVG element vector lines objects", "Canvas dynamic frames games renders", "SVG vector designs scalable icons elements"]
  }
];
