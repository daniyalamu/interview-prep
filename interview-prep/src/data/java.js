export const javaQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "Tell me something about OOPs concepts",
    answer: "OOP (Object-Oriented Programming) organizes code around real-world objects. Java is built on four pillars: Encapsulation (bundling data + behavior and hiding internals via access modifiers), Inheritance (child class reuses parent behavior using 'extends'), Polymorphism (same method behaves differently — method overloading at compile time, overriding at runtime), and Abstraction (exposing only what is essential using abstract classes and interfaces).",
    keyPoints: [
      "Encapsulation — private fields + public getters/setters",
      "Inheritance — code reuse via 'extends' / 'implements'",
      "Polymorphism — overloading (compile time), overriding (runtime)",
      "Abstraction — abstract class & interface hide implementation"
    ],
    questionHi: "Java me OOPs concepts kya hote hain aur inke four pillars kaunse hain?",
    answerHi: "OOP real world objects ke around code organize karta hai. Java me chaar main pillars hain — Encapsulation matlab data aur methods ko ek class me bundle karna aur private access modifier se hide karna. Inheritance matlab parent class ke properties child class me 'extends' keyword se reuse karna. Polymorphism matlab ek hi method different form me kaam kare, compile time pe overloading aur runtime pe overriding. Abstraction matlab implementation hide karke sirf essential feature dikhana, abstract class aur interface ke through.",
    keyPointsHi: [
      "Encapsulation — private variables plus getter setter access controls",
      "Inheritance — extends keyword parent class reuse subclass code",
      "Polymorphism — overloading compile time overriding runtime dispatch",
      "Abstraction — abstract class interface hide internal implementation"
    ]
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "What is an Object? How do we create an object? What are the other ways to create an object?",
    answer: "An object is a runtime instance of a class — it has state (fields) and behavior (methods). The most common way to create one is with the 'new' keyword, e.g. Employee e = new Employee();. Other ways include: Class.forName(\"...\").getDeclaredConstructor().newInstance() using Reflection, obj.clone() via the Cloneable interface, deserialization from a stream (ObjectInputStream), and factory methods (like String.valueOf, List.of).",
    keyPoints: [
      "Object = instance of a class (state + behavior)",
      "Using 'new' keyword — most common way",
      "Reflection — Class.forName().newInstance()",
      "clone() and deserialization also create objects",
      "Factory methods e.g. Integer.valueOf(), List.of()"
    ],
    questionHi: "Object kya hota hai aur ise create karne ke kitne tareeke hain?",
    answerHi: "Object ek class ka runtime instance hota hai, jisme state (fields) aur behavior (methods) dono hote hain. Sabse common way 'new' keyword hai, jaise Employee e = new Employee(). Iske alawa Reflection ke through Class.forName().newInstance(), clone() method, deserialization ke through ObjectInputStream, aur factory methods jaise String.valueOf() ya List.of() se bhi object bana sakte hain.",
    keyPointsHi: [
      "Object matlab class ka instance state behavior include",
      "new keyword sabse common object creation tareeka",
      "Reflection Class.forName newInstance dynamic creation option",
      "clone method deserialization stream se bhi object banta",
      "Factory methods like valueOf of static helpers"
    ]
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "What is an Anonymous Object?",
    answer: "An anonymous object is an object created without assigning it to a reference variable — it's used once and then eligible for garbage collection. Example: new Employee().display();. It's useful when you need to call a single method or pass an object as an argument, without needing to reuse it later.",
    keyPoints: [
      "Object created without a reference variable",
      "Used for one-time method calls",
      "Eligible for GC immediately after use",
      "Common in method arguments and event listeners"
    ],
    questionHi: "Anonymous Object kya hota hai Java me?",
    answerHi: "Anonymous object woh object hota hai jo bina kisi reference variable ke create hota hai aur ek hi baar use hota hai, uske baad garbage collection ke liye eligible ho jata hai. Jaise 'new Employee().display();'. Ye tab kaam aata hai jab hume ek hi baar method call karna ho ya method argument me directly object pass karna ho.",
    keyPointsHi: [
      "Reference variable ke bina object create hota hai",
      "Ek hi baar method call ke liye use hota hai",
      "Use ke turant baad garbage collection eligible",
      "Event listeners method arguments me common pattern"
    ]
  },
  {
    id: 4,
    difficulty: "Medium",
    question: "Difference between Abstraction and Encapsulation",
    answer: "Abstraction focuses on WHAT an object does, hiding implementation details behind abstract classes or interfaces — it's design-level. Encapsulation focuses on HOW data is protected inside a class using private fields and controlled access via getters/setters — it's implementation-level. In short: abstraction hides complexity, encapsulation hides data.",
    keyPoints: [
      "Abstraction — hides implementation (design level)",
      "Encapsulation — hides data (implementation level)",
      "Abstraction achieved via abstract class / interface",
      "Encapsulation achieved via private + getters/setters"
    ],
    questionHi: "Abstraction aur Encapsulation me kya difference hai?",
    answerHi: "Abstraction ye batata hai ki object kya karta hai, implementation details hide karke sirf essential functionality expose karta hai, ye design level ka concept hai — abstract class aur interface se achieve hota hai. Encapsulation ye handle karta hai ki data kaise protected rakha jaye — private variables aur public getters setters ke through, ye implementation level ka concept hai.",
    keyPointsHi: [
      "Abstraction complexity hide design level concept",
      "Encapsulation data hide implementation level concept",
      "Abstraction abstract class interface se achieve hota",
      "Encapsulation private fields getter setter controlled access"
    ]
  },
  {
    id: 5,
    difficulty: "Medium",
    question: "Difference between 'final', 'finally', and 'finalize'",
    answer: "'final' is a keyword — used to make a variable constant, a method non-overridable, or a class non-inheritable. 'finally' is a block used with try/catch that always executes (whether an exception is thrown or not) — perfect for closing resources. 'finalize()' is a method from Object class called by the Garbage Collector before destroying an object (deprecated since Java 9, avoid using it).",
    keyPoints: [
      "final — keyword: constant var, sealed method/class",
      "finally — block: always runs after try/catch",
      "finalize — method: called by GC before object destruction",
      "finalize() is deprecated — use try-with-resources instead"
    ],
    questionHi: "final, finally aur finalize me kya difference hai?",
    answerHi: "final ek keyword hai — variable ko constant, method ko non-overridable, aur class ko non-inheritable banane ke liye use hota hai. finally ek block hai jo try catch ke saath aata hai aur exception aaye ya na aaye, hamesha execute hota hai, resources close karne ke liye best hai. finalize() Object class ka method hai jo garbage collector object destroy karne se pehle call karta hai, but Java 9 se deprecated hai.",
    keyPointsHi: [
      "final keyword variable constant class method sealed",
      "finally block try catch ke baad hamesha execute",
      "finalize method GC object destroy pehle call",
      "finalize deprecated try with resources use recommended"
    ]
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "Difference between '==' and '.equals()'",
    answer: "'==' compares references — it checks whether two variables point to the same memory location. '.equals()' (from Object class) is meant to compare the content/state of two objects. By default Object.equals() also uses ==, but classes like String, Integer, and custom classes override equals() to compare actual values. Example: two Strings created with new have different references but equal content.",
    keyPoints: [
      "== compares references (memory address)",
      ".equals() compares content when overridden",
      "String overrides equals() to compare characters",
      "Always override hashCode() when overriding equals()"
    ],
    questionHi: "== aur .equals() me kya difference hai?",
    answerHi: "== operator do variables ke references compare karta hai matlab check karta hai ki dono same memory location point kar rahe hain ya nahi. .equals() method Object class ka hai jo content compare karne ke liye hota hai. Default Object class me equals bhi == hi karta hai, but String Integer aur custom classes isse override karti hain values compare karne ke liye. Do String new keyword se banayi jaayen to references different honge but equals se same content dikhega.",
    keyPointsHi: [
      "== reference memory address compare operator",
      "equals method content state comparison override",
      "String Integer classes equals override values match",
      "equals override karo to hashCode bhi override karo"
    ]
  },
  {
    id: 7,
    difficulty: "Easy",
    question: "When creating an object, in which memory is it stored?",
    answer: "Objects are always stored in the Heap memory. The reference variable (e.g. Employee e) that points to the object is stored in Stack memory (if it's a local variable) or inside the object itself (if it's an instance field). Class metadata and static fields live in the Method Area (Metaspace since Java 8).",
    keyPoints: [
      "Objects → Heap memory",
      "Reference variables → Stack (local) or Heap (fields)",
      "Class metadata & static → Method Area / Metaspace",
      "Heap is shared across threads; Stack is per-thread"
    ],
    questionHi: "Object create karne par kaunsi memory me store hota hai?",
    answerHi: "Object hamesha Heap memory me store hota hai. Reference variable jaise Employee e woh Stack memory me hota hai agar local variable ho, ya heap me hi hota hai agar instance field ho. Class metadata aur static fields Method Area me hote hain, Java 8 se ise Metaspace kehte hain.",
    keyPointsHi: [
      "Object heap memory allocation JVM run time",
      "Reference variable stack local ya heap field",
      "Class metadata static Method Area Metaspace Java 8",
      "Heap threads share stack per thread separate"
    ]
  },
  {
    id: 8,
    difficulty: "Medium",
    question: "What is the String Constant Pool in Java?",
    answer: "The String Constant Pool (SCP) is a special area inside the Heap where Java stores string literals to save memory. When you write String s1 = \"hello\"; JVM first checks the pool — if \"hello\" already exists it reuses the same reference, otherwise it creates a new entry. Using new String(\"hello\") always creates a new object in the heap outside the pool. The intern() method forces a string into the pool.",
    keyPoints: [
      "Special memory area inside Heap for string literals",
      "Reuses references for identical literals (saves memory)",
      "new String(...) creates a new heap object outside SCP",
      "intern() puts a string into the pool manually"
    ],
    questionHi: "String Constant Pool kya hota hai Java me?",
    answerHi: "String Constant Pool ek special area hai heap ke andar jaha JVM string literals store karta hai memory bachane ke liye. Jab hum String s1 = \"hello\" likhte hain to JVM pehle pool check karta hai, agar \"hello\" pehle se hai to same reference reuse hoti hai, warna new entry banti hai. new String(\"hello\") likhne se hamesha heap me naya object banta hai, pool ke bahar. intern() method string ko manually pool me daalta hai.",
    keyPointsHi: [
      "Heap ke andar special area string literals ke liye",
      "Same literal ke liye reference reuse memory save",
      "new String hamesha heap me naya object banata",
      "intern method string ko manually pool me daalta"
    ]
  },
  {
    id: 9,
    difficulty: "Medium",
    question: "Difference between String, StringBuilder, and StringBuffer",
    answer: "String is immutable — every modification creates a new object. StringBuilder is mutable and NOT thread-safe, making it the fastest choice for single-threaded string manipulation. StringBuffer is also mutable but its methods are synchronized, so it's thread-safe but slower. Use String for constant text, StringBuilder for local heavy concatenation, and StringBuffer only when multiple threads modify the same buffer.",
    keyPoints: [
      "String — immutable, thread-safe, slow for concat",
      "StringBuilder — mutable, NOT thread-safe, fastest",
      "StringBuffer — mutable, synchronized (thread-safe), slower",
      "Both StringBuilder and StringBuffer are from java.lang"
    ],
    questionHi: "String, StringBuilder aur StringBuffer me kya difference hai?",
    answerHi: "String immutable hota hai, har modification pe naya object banta hai. StringBuilder mutable hai aur thread safe nahi hai, single threaded concatenation ke liye sabse fast option. StringBuffer bhi mutable hai but iske methods synchronized hote hain, thread safe hai but thoda slow. Constant text ke liye String, local heavy concat ke liye StringBuilder, aur multiple threads same buffer modify kar rahe ho tab StringBuffer use karo.",
    keyPointsHi: [
      "String immutable naya object har modification pe",
      "StringBuilder mutable non thread safe fastest option",
      "StringBuffer mutable synchronized thread safe slower",
      "Dono java lang package built in classes"
    ]
  },
  {
    id: 10,
    difficulty: "Easy",
    question: "What are Wrapper Classes?",
    answer: "Wrapper classes wrap primitive data types (int, char, boolean, etc.) into objects — Integer, Character, Boolean, etc. They're needed because Collections (like ArrayList) work only with objects, not primitives. Java performs autoboxing (int → Integer) and unboxing (Integer → int) automatically. Wrappers also provide utility methods like Integer.parseInt(), Integer.MAX_VALUE.",
    keyPoints: [
      "Wrap primitives into objects (int → Integer)",
      "Required by Collections and Generics",
      "Autoboxing / unboxing done by compiler",
      "Provide utility methods (parseInt, valueOf, MAX_VALUE)"
    ],
    questionHi: "Wrapper Classes kya hoti hain Java me?",
    answerHi: "Wrapper classes primitive data types (int, char, boolean) ko object me wrap karti hain, jaise Integer, Character, Boolean. Ye isliye zaroori hain kyunki Collections jaise ArrayList sirf objects ke saath kaam karti hain, primitives ke saath nahi. Java autoboxing (int se Integer) aur unboxing (Integer se int) automatically karta hai. Wrapper me utility methods bhi hote hain jaise Integer.parseInt() ya Integer.MAX_VALUE.",
    keyPointsHi: [
      "Primitive types ko object me wrap karna",
      "Collections generics ke liye zaroori feature",
      "Autoboxing unboxing automatic compiler handle",
      "parseInt valueOf MAX_VALUE utility methods available"
    ]
  },
  {
    id: 11,
    difficulty: "Medium",
    question: "Exception Handling",
    answer: "Exception handling is Java's way of gracefully dealing with runtime errors so the program doesn't crash. It uses five keywords: try (code that may fail), catch (handle a specific exception), finally (cleanup code that always runs), throw (manually raise an exception), and throws (declare exceptions that a method may propagate). All exceptions inherit from Throwable → Exception (checked) or RuntimeException (unchecked).",
    keyPoints: [
      "Handles runtime errors, prevents crashes",
      "Keywords: try, catch, finally, throw, throws",
      "Throwable → Exception & Error hierarchy",
      "try-with-resources for auto-closing resources"
    ],
    questionHi: "Exception Handling kya hoti hai Java me?",
    answerHi: "Exception handling Java ka mechanism hai jisse runtime errors ko gracefully handle karke program crash hone se bachaya jata hai. Isme paanch keywords use hote hain — try (jo code fail ho sakta hai), catch (specific exception handle karne ke liye), finally (cleanup code jo hamesha chalta hai), throw (manually exception raise karna), aur throws (method declare karta hai kaunsi exceptions propagate ho sakti hain). Sab exceptions Throwable class se inherit hoti hain.",
    keyPointsHi: [
      "Runtime errors handle program crash rokta",
      "try catch finally throw throws paanch keywords",
      "Throwable Exception Error class hierarchy structure",
      "try with resources auto close resources feature"
    ]
  },
  {
    id: 12,
    difficulty: "Easy",
    question: "Can we have multiple 'catch' blocks?",
    answer: "Yes, one try block can be followed by multiple catch blocks — each handling a different exception type. Java checks them top to bottom and executes the first matching one. Important rule: place child exception classes first and parent classes (like Exception) last, otherwise the compiler throws an 'unreachable catch block' error. Since Java 7 you can also use multi-catch: catch (IOException | SQLException e).",
    keyPoints: [
      "Yes, multiple catch blocks are allowed",
      "Child exceptions first, parent last",
      "Only the first matching catch executes",
      "Multi-catch (Java 7+): catch(A | B e)"
    ],
    questionHi: "Kya multiple catch blocks use kar sakte hain?",
    answerHi: "Haan, ek try block ke saath multiple catch blocks likhe ja sakte hain, har ek different exception type handle karta hai. Java top to bottom check karta hai aur pehla matching catch execute karta hai. Important rule ye hai ki child exceptions pehle likho aur parent (jaise Exception) baad me, warna compiler 'unreachable catch block' error dega. Java 7 se multi catch bhi allowed hai jaise catch (IOException | SQLException e).",
    keyPointsHi: [
      "Multiple catch blocks allowed ek try ke saath",
      "Child exception pehle parent baad me rule",
      "Pehla matching catch hi execute hota hai",
      "Multi catch Java 7 feature pipe separator syntax"
    ]
  },
  {
    id: 13,
    difficulty: "Medium",
    question: "Difference between Checked and Unchecked Exceptions",
    answer: "Checked exceptions are checked by the compiler at compile time — you must either handle them with try/catch or declare them using 'throws'. Examples: IOException, SQLException, ClassNotFoundException. Unchecked exceptions extend RuntimeException and are not checked at compile time; they usually indicate programming bugs. Examples: NullPointerException, ArrayIndexOutOfBoundsException, ArithmeticException.",
    keyPoints: [
      "Checked — compile-time, must handle or declare",
      "Unchecked — runtime, extends RuntimeException",
      "Checked: IOException, SQLException",
      "Unchecked: NullPointerException, ArithmeticException"
    ],
    questionHi: "Checked aur Unchecked Exceptions me kya difference hai?",
    answerHi: "Checked exceptions compiler compile time pe check karta hai, matlab try catch se handle karna padta hai ya throws se declare karna padta hai. Jaise IOException, SQLException, ClassNotFoundException. Unchecked exceptions RuntimeException se extend hoti hain aur compile time pe check nahi hoti, ye usually programming mistakes hoti hain jaise NullPointerException, ArrayIndexOutOfBoundsException, ArithmeticException.",
    keyPointsHi: [
      "Checked compile time compiler force handle karta",
      "Unchecked runtime error programming bug indicate",
      "IOException SQLException checked ke common example",
      "NullPointerException ArithmeticException unchecked ke example"
    ]
  },
  {
    id: 14,
    difficulty: "Medium",
    question: "Difference between 'throw' and 'throws'. Where are they used?",
    answer: "'throw' is a statement used inside a method to actually raise an exception, e.g. throw new IllegalArgumentException(\"invalid\");. Only one exception can be thrown at a time. 'throws' is a clause in the method signature that declares which checked exceptions the method may propagate, e.g. public void read() throws IOException, SQLException. Multiple exceptions can be listed with 'throws'.",
    keyPoints: [
      "throw — statement, actually raises an exception",
      "throws — signature clause, declares exceptions",
      "throw is followed by an instance (new ...Exception)",
      "throws can list multiple exception types"
    ],
    questionHi: "throw aur throws me kya difference hai aur kaha use hote hain?",
    answerHi: "throw ek statement hai jo method ke andar likha jata hai exception actually raise karne ke liye, jaise 'throw new IllegalArgumentException(\"invalid\")'. Ek time pe sirf ek exception throw kar sakte hain. throws method signature me use hota hai declare karne ke liye ki method kaunsi checked exceptions propagate kar sakta hai, jaise 'public void read() throws IOException, SQLException'. throws me multiple exceptions list kar sakte hain.",
    keyPointsHi: [
      "throw statement method body actual exception raise",
      "throws signature clause exception declaration method level",
      "throw ke baad new exception instance zaroori",
      "throws me multiple exception types comma se list"
    ]
  },
  {
    id: 15,
    difficulty: "Medium",
    question: "What is Multithreading?",
    answer: "Multithreading is Java's ability to execute multiple threads (lightweight sub-processes) within a single program concurrently, sharing the same memory space. It improves CPU utilization and application responsiveness. Java provides built-in support via the Thread class, Runnable interface, and higher-level APIs like ExecutorService, Callable, and CompletableFuture (from java.util.concurrent).",
    keyPoints: [
      "Concurrent execution of multiple threads in one JVM",
      "Threads share heap memory, have separate stacks",
      "Improves performance & responsiveness",
      "APIs: Thread, Runnable, ExecutorService, Callable"
    ],
    questionHi: "Multithreading kya hoti hai Java me?",
    answerHi: "Multithreading Java ki ability hai ek program ke andar multiple threads (lightweight sub-processes) ko ek saath execute karne ki, jo same memory space share karte hain. Isse CPU ka better utilization hota hai aur application zyada responsive hoti hai. Java me Thread class, Runnable interface, aur higher level APIs jaise ExecutorService, Callable, aur CompletableFuture (java util concurrent package) provide karta hai.",
    keyPointsHi: [
      "Concurrent execution multiple threads ek JVM me",
      "Threads heap share karte stack separate hota",
      "CPU utilization application responsiveness improve karta",
      "Thread Runnable ExecutorService Callable APIs support"
    ]
  },
  {
    id: 16,
    difficulty: "Medium",
    question: "How do you implement a thread? What are the other ways?",
    answer: "There are two primary ways: (1) extend the Thread class and override run(), then call start(). (2) implement Runnable and pass it to a Thread object — this is preferred because Java doesn't allow multiple inheritance. Modern alternatives: Callable + Future (returns a result and can throw checked exceptions), ExecutorService for thread pools, and lambda-based tasks — e.g. new Thread(() -> {...}).start().",
    keyPoints: [
      "Extend Thread class, override run(), call start()",
      "Implement Runnable — preferred (no inheritance lock-in)",
      "Callable + Future — returns a result",
      "ExecutorService — managed thread pools"
    ],
    questionHi: "Thread implement karne ke kitne tareeke hain?",
    answerHi: "Thread implement karne ke do main tareeke hain — pehla, Thread class ko extend karo, run() method override karo, phir start() call karo. Dusra, Runnable interface implement karo aur usse Thread object ko pass karo, ye tareeka preferred hai kyunki Java multiple inheritance allow nahi karta. Modern alternatives me Callable plus Future (result return kar sakta hai), ExecutorService thread pool ke liye, aur lambda based tasks jaise 'new Thread(() -> {...}).start()' bhi available hain.",
    keyPointsHi: [
      "Thread class extend run override start method",
      "Runnable interface implement preferred way flexible",
      "Callable Future result return checked exceptions throw",
      "ExecutorService thread pool managed executor service"
    ]
  },
  {
    id: 17,
    difficulty: "Medium",
    question: "Difference between 'notify()' and 'notifyAll()'",
    answer: "Both are called on an object inside a synchronized block to wake up threads that are wait()-ing on that object. notify() wakes up only ONE waiting thread (chosen by the scheduler — no guarantee which). notifyAll() wakes up ALL waiting threads, and each of them then re-competes for the lock. Use notifyAll() when multiple threads wait on different conditions to avoid deadlocks or missed signals.",
    keyPoints: [
      "Both must be called inside a synchronized context",
      "notify() — wakes ONE waiting thread (arbitrary)",
      "notifyAll() — wakes ALL waiting threads",
      "Prefer notifyAll() when multiple wait conditions exist"
    ],
    questionHi: "notify() aur notifyAll() me kya difference hai?",
    answerHi: "Dono methods object pe synchronized block ke andar call hote hain, aur wait() kar rahe threads ko wake up karte hain. notify() sirf ek waiting thread ko wake karta hai, jise scheduler choose karta hai, guarantee nahi kaunsa. notifyAll() saare waiting threads ko wake up karta hai aur sab dobara lock ke liye compete karte hain. Jab multiple threads different conditions pe wait kar rahe ho to notifyAll() prefer karo, warna deadlock ya missed signal ho sakta hai.",
    keyPointsHi: [
      "Dono synchronized context ke andar hi call",
      "notify ek waiting thread wake arbitrary choice",
      "notifyAll saare waiting threads wake competitive lock",
      "Multiple conditions ho to notifyAll prefer safer"
    ]
  },
  {
    id: 18,
    difficulty: "Easy",
    question: "Which Collections have you worked with in your project?",
    answer: "In my projects I've frequently used ArrayList (dynamic ordered list for DTOs and API responses), HashMap (fast key-value lookup like userId → User), HashSet (for unique values / removing duplicates), LinkedList (rare — when frequent insertions/deletions in the middle), and TreeMap/TreeSet (when sorted order is required). For thread-safe scenarios I've used ConcurrentHashMap and CopyOnWriteArrayList.",
    keyPoints: [
      "List — ArrayList (most common, ordered, indexed)",
      "Map — HashMap (fast lookup by key)",
      "Set — HashSet (unique, no duplicates)",
      "Concurrent — ConcurrentHashMap, CopyOnWriteArrayList"
    ],
    questionHi: "Aapne apne project me kaunsi Collections use ki hain?",
    answerHi: "Apne projects me maine mostly ArrayList use ki hai DTOs aur API responses ke liye, HashMap ka use fast key value lookup ke liye (jaise userId se User), HashSet unique values ya duplicates hatane ke liye, LinkedList kabhi kabhi jab middle me insertion deletion frequent ho, aur TreeMap ya TreeSet jab sorted order chahiye ho. Thread safe scenarios me ConcurrentHashMap aur CopyOnWriteArrayList use ki hain.",
    keyPointsHi: [
      "ArrayList ordered list DTOs API responses common",
      "HashMap fast key value lookup use case",
      "HashSet unique elements duplicates hatane ke liye",
      "ConcurrentHashMap CopyOnWriteArrayList thread safe scenarios"
    ]
  },
  {
    id: 19,
    difficulty: "Easy",
    question: "In which situations do we use HashMap?",
    answer: "HashMap is used when you need fast O(1) average lookup, insertion, and deletion using a unique key. Typical scenarios: caching (userId → userDetails), counting occurrences (word → count), storing configuration properties, mapping IDs to objects, grouping data (e.g. groupingBy in streams), and building lookup indexes. It doesn't maintain insertion order (use LinkedHashMap for that) and allows one null key.",
    keyPoints: [
      "O(1) average time for get/put/remove",
      "Key-value lookup — caching, counting, grouping",
      "Allows one null key, multiple null values",
      "Unordered — use LinkedHashMap for insertion order"
    ],
    questionHi: "HashMap kaha use karte hain aap?",
    answerHi: "HashMap tab use hota hai jab hume unique key ke basis pe fast O(1) lookup, insertion aur deletion chahiye. Common scenarios — caching (userId se userDetails), counting (word se count), configuration properties, ID se object mapping, grouping data (streams me groupingBy), aur lookup indexes banane ke liye. Ye insertion order maintain nahi karta (uske liye LinkedHashMap), aur ek null key allow karta hai.",
    keyPointsHi: [
      "O(1) average time get put remove operations",
      "Caching counting grouping ID lookup use cases",
      "Ek null key multiple null values allowed",
      "Unordered LinkedHashMap use for insertion order"
    ]
  },
  {
    id: 20,
    difficulty: "Medium",
    question: "List, ArrayList vs LinkedList",
    answer: "List is an interface that guarantees ordered, index-based access. ArrayList is backed by a dynamic array — fast random access (get/set O(1)) but slow inserts/removes in the middle (O(n)) because elements shift. LinkedList is a doubly-linked list — slow random access (O(n)) but fast insertions and removals at the ends and after an iterator (O(1)). Use ArrayList by default; use LinkedList when you're doing lots of add/remove at head/tail.",
    keyPoints: [
      "List — interface (ordered, indexed)",
      "ArrayList — dynamic array, O(1) get, O(n) insert/remove",
      "LinkedList — doubly-linked, O(n) get, O(1) add at ends",
      "Prefer ArrayList unless frequent middle-modification needed"
    ],
    questionHi: "List, ArrayList aur LinkedList me kya difference hai?",
    answerHi: "List ek interface hai jo ordered aur index based access provide karta hai. ArrayList dynamic array pe based hai, random access fast O(1) hai but middle me insert delete slow O(n) hota hai kyunki elements shift hote hain. LinkedList doubly linked list hai, random access slow O(n) but ends me insert delete fast O(1) hai. Default me ArrayList use karo, LinkedList sirf tab jab head ya tail pe zyada modification ho rahi ho.",
    keyPointsHi: [
      "List interface ordered index based access contract",
      "ArrayList array based fast get slow middle insert",
      "LinkedList doubly linked slow get fast ends insert",
      "Default ArrayList LinkedList frequent ends modify case"
    ]
  },
  {
    id: 21,
    difficulty: "Medium",
    question: "HashMap vs Hashtable",
    answer: "HashMap is non-synchronized, allows one null key and multiple null values, and is faster — recommended for single-threaded or externally synchronized use. Hashtable is a legacy class (since Java 1.0), synchronized (thread-safe but slower), and does NOT allow null keys or values. For modern thread-safe needs, use ConcurrentHashMap instead of Hashtable, which locks per-bucket and is much more performant.",
    keyPoints: [
      "HashMap — not synchronized, allows null key/value",
      "Hashtable — synchronized (legacy), no nulls allowed",
      "HashMap is faster; Hashtable is slower due to locks",
      "Prefer ConcurrentHashMap over Hashtable today"
    ],
    questionHi: "HashMap aur Hashtable me kya difference hai?",
    answerHi: "HashMap non synchronized hoti hai, ek null key aur multiple null values allow karti hai, aur faster hai — single threaded ya externally synchronized use ke liye best. Hashtable legacy class hai (Java 1.0 se), synchronized hai matlab thread safe but slower, aur null keys ya values allow nahi karti. Aaj kal thread safe map chahiye to Hashtable ki jagah ConcurrentHashMap use karo, jo per bucket locking karta hai aur bahut fast hai.",
    keyPointsHi: [
      "HashMap non synchronized null key value allowed",
      "Hashtable legacy synchronized no null keys values",
      "HashMap fast Hashtable lock overhead slow",
      "ConcurrentHashMap modern thread safe better choice"
    ]
  },
  {
    id: 22,
    difficulty: "Hard",
    question: "How does HashMap work internally?",
    answer: "Internally HashMap uses an array of buckets (Node[] table). When you put(key, value), it computes hashCode() of the key, applies a supplemental hash, and derives an index using (n-1) & hash. If the bucket is empty it places the Node there; if not, it walks the linked list checking equals() — if key exists it updates the value, otherwise it appends. From Java 8, if a bucket has 8+ entries and the table size is 64+, that bucket converts to a Red-Black tree (O(log n) instead of O(n)). When load factor (default 0.75) is exceeded, the array is resized (rehashed) to double.",
    keyPoints: [
      "Backed by an array of Node buckets",
      "Index = (n-1) & hash(key)",
      "Collisions handled by linked list → tree (Java 8+)",
      "Default capacity 16, load factor 0.75 → resize doubles"
    ],
    questionHi: "HashMap internally kaise kaam karta hai?",
    answerHi: "HashMap internally ek Node array (buckets) use karta hai. put(key, value) call pe pehle key ka hashCode nikalta hai, phir supplemental hash apply karke index calculate karta hai (n-1) & hash. Agar bucket empty hai to Node waha place karta hai, warna linked list traverse karke equals() check karta hai — key exist karti hai to value update, warna list me append. Java 8 se, agar ek bucket me 8 se zyada entries aur table 64+ hai to bucket Red Black Tree me convert ho jata hai (O(log n)). Load factor 0.75 exceed hone pe array double hokar rehash hota hai.",
    keyPointsHi: [
      "Node array buckets internal storage structure",
      "hashCode se index (n minus 1) AND hash",
      "Collision linked list Java 8 tree conversion",
      "Default capacity 16 load factor 0.75 resize"
    ]
  },
  {
    id: 23,
    difficulty: "Medium",
    question: "What is a HashCode Collision?",
    answer: "A hashcode collision happens when two different keys produce the same hashCode(), or map to the same bucket index in the HashMap array. Java handles this using chaining — the entries are stored in a linked list at that bucket. Since Java 8, if the list grows large (≥8 entries), it converts into a Red-Black tree for O(log n) lookup instead of O(n). equals() is still used to distinguish keys with the same hash.",
    keyPoints: [
      "Two different keys → same bucket index",
      "Handled by linked list chaining",
      "Java 8+ upgrades list to Red-Black tree at threshold 8",
      "equals() disambiguates keys sharing a hash"
    ],
    questionHi: "HashCode Collision kya hoti hai?",
    answerHi: "HashCode collision tab hoti hai jab do different keys ka hashCode() same aa jata hai ya HashMap array me same bucket index pe map ho jati hain. Java isse chaining se handle karta hai — us bucket pe entries linked list me store hoti hain. Java 8 se, agar list bahut badi ho jaye (8 ya zyada entries) to Red Black Tree me convert ho jati hai jo O(log n) lookup deti hai. equals() still same hash wali keys ko distinguish karne ke liye use hota hai.",
    keyPointsHi: [
      "Different keys same bucket index situation",
      "Chaining linked list se collision handle",
      "Java 8 threshold 8 pe tree conversion",
      "equals method same hash keys ko differentiate"
    ]
  },
  {
    id: 24,
    difficulty: "Easy",
    question: "Which Java version is used in your project?",
    answer: "Depending on the project — commonly Java 8, 11, or 17 (LTS versions). In my most recent project we used Java 17 for its records, sealed classes, pattern matching, and improved Stream/Optional APIs. Legacy projects still run on Java 8 due to the widespread adoption of Streams, Lambdas, and Optional introduced there.",
    keyPoints: [
      "LTS versions: Java 8, 11, 17, 21",
      "Java 8 introduced Streams, Lambdas, Optional",
      "Java 11 removed applets, added var, HttpClient",
      "Java 17 — records, sealed classes, pattern matching"
    ],
    questionHi: "Aapke project me kaunsi Java version use hoti hai?",
    answerHi: "Project pe depend karta hai — commonly Java 8, 11 ya 17 (LTS versions) use hoti hain. Meri recent project me hum Java 17 use kar rahe the — iske records, sealed classes, pattern matching aur improved Stream/Optional APIs ke liye. Legacy projects abhi bhi Java 8 pe chalte hain kyunki wahi se Streams, Lambdas aur Optional aaye the.",
    keyPointsHi: [
      "LTS versions Java 8 11 17 21 popular",
      "Java 8 streams lambdas optional foundation features",
      "Java 11 var HttpClient applets removed changes",
      "Java 17 records sealed classes pattern matching"
    ]
  },
  {
    id: 25,
    difficulty: "Medium",
    question: "Java 8 Features",
    answer: "Java 8 was a major release introducing: (1) Lambda expressions — anonymous concise functions. (2) Functional Interfaces (@FunctionalInterface). (3) Stream API — declarative data processing. (4) Method References (::). (5) Optional — null-safe wrapper. (6) Default & static methods in interfaces. (7) java.time (Date/Time API — LocalDate, LocalDateTime). (8) Nashorn JavaScript engine. Together these enabled functional-style programming in Java.",
    keyPoints: [
      "Lambda expressions",
      "Stream API (map/filter/reduce)",
      "Functional Interfaces & Method References",
      "Optional, default methods, new Date/Time API"
    ],
    questionHi: "Java 8 ke main features kya hain?",
    answerHi: "Java 8 major release tha jisme ye features aaye — Lambda expressions (concise anonymous functions), Functional interfaces (@FunctionalInterface), Stream API (declarative data processing), Method references (::), Optional (null safe wrapper), default aur static methods interfaces me, naya java.time package (LocalDate, LocalDateTime), aur Nashorn JavaScript engine. In sabne Java me functional style programming enable ki.",
    keyPointsHi: [
      "Lambda expression concise anonymous function syntax",
      "Stream API map filter reduce declarative",
      "Functional interface method reference features",
      "Optional default methods java time API"
    ]
  },
  {
    id: 26,
    difficulty: "Easy",
    question: "What is a Functional Interface?",
    answer: "A functional interface is an interface with exactly ONE abstract method (SAM — Single Abstract Method). It can have any number of default and static methods. It's the target type for lambda expressions and method references. Marked with @FunctionalInterface annotation for compile-time enforcement. Examples: Runnable (run), Callable (call), Comparator (compare), Function<T,R> (apply), Predicate<T> (test), Consumer<T> (accept), Supplier<T> (get).",
    keyPoints: [
      "Exactly ONE abstract method (SAM)",
      "Target for lambdas / method references",
      "@FunctionalInterface annotation is optional but recommended",
      "Examples: Runnable, Callable, Function, Predicate, Consumer"
    ],
    questionHi: "Functional Interface kya hoti hai?",
    answerHi: "Functional interface woh interface hai jisme exactly ek abstract method ho (SAM matlab Single Abstract Method). Isme default aur static methods kitne bhi ho sakte hain. Ye lambda expressions aur method references ka target type hai. @FunctionalInterface annotation compile time enforcement ke liye lagate hain. Examples — Runnable (run), Callable (call), Comparator (compare), Function<T,R> (apply), Predicate<T> (test), Consumer<T> (accept), Supplier<T> (get).",
    keyPointsHi: [
      "Ek hi abstract method Single Abstract Method rule",
      "Lambda method reference ke liye target type",
      "@FunctionalInterface annotation compile time safety",
      "Runnable Callable Function Predicate common examples"
    ]
  },
  {
    id: 27,
    difficulty: "Medium",
    question: "Find odd numbers in a list using Stream API and explain the code",
    answer: "Code: List<Integer> odds = numbers.stream().filter(n -> n % 2 != 0).collect(Collectors.toList()); Explanation — numbers.stream() creates a Stream<Integer> pipeline from the list. filter(n -> n % 2 != 0) is an intermediate operation that keeps only elements where n modulo 2 is non-zero (odd numbers). collect(Collectors.toList()) is a terminal operation that gathers the filtered elements back into a new List. In Java 16+ you can use .toList() directly.",
    keyPoints: [
      ".stream() — creates the pipeline",
      ".filter(predicate) — intermediate, keeps matching elements",
      ".collect(Collectors.toList()) — terminal, gathers into list",
      "Java 16+: .toList() shorthand"
    ],
    questionHi: "Stream API se list me odd numbers kaise nikalte hain?",
    answerHi: "Code aisa hoga: List<Integer> odds = numbers.stream().filter(n -> n % 2 != 0).collect(Collectors.toList()); Explanation — numbers.stream() list se Stream<Integer> pipeline banata hai, filter(n -> n % 2 != 0) intermediate operation hai jo sirf odd numbers rakhta hai (jinke modulo 2 non zero hai), aur collect(Collectors.toList()) terminal operation hai jo filtered elements ko new List me gather karta hai. Java 16 se .toList() shortcut bhi available hai.",
    keyPointsHi: [
      "stream method pipeline banane ka starting point",
      "filter intermediate lambda predicate condition check",
      "collect Collectors.toList terminal result collect list",
      "Java 16 toList shorthand method direct return"
    ]
  },
  {
    id: 28,
    difficulty: "Medium",
    question: "Intermediate Operations vs Terminal Operations in Stream API",
    answer: "Intermediate operations transform a stream and return another stream — they are LAZY and don't execute until a terminal operation is called. Examples: filter, map, sorted, distinct, limit, peek. Terminal operations trigger the pipeline, produce a result or side effect, and CLOSE the stream. Examples: collect, forEach, reduce, count, findFirst, anyMatch, toArray. A stream can have many intermediates but exactly one terminal.",
    keyPoints: [
      "Intermediate — lazy, returns Stream (filter, map, sorted)",
      "Terminal — eager, produces result (collect, count, forEach)",
      "Pipeline executes only when terminal is invoked",
      "Once terminal runs the stream is closed"
    ],
    questionHi: "Stream API me Intermediate aur Terminal operations me kya difference hai?",
    answerHi: "Intermediate operations stream ko transform karke dusra stream return karti hain — ye lazy hoti hain, matlab terminal operation call hone tak execute nahi hoti. Examples — filter, map, sorted, distinct, limit, peek. Terminal operations pipeline ko trigger karti hain, result ya side effect produce karti hain aur stream close ho jata hai. Examples — collect, forEach, reduce, count, findFirst, anyMatch, toArray. Ek stream me multiple intermediates but sirf ek terminal ho sakta hai.",
    keyPointsHi: [
      "Intermediate lazy stream return filter map sorted",
      "Terminal eager result produce collect count forEach",
      "Pipeline execute terminal call hone pe hota",
      "Terminal ke baad stream close reuse nahi"
    ]
  },
  {
    id: 29,
    difficulty: "Medium",
    question: "What is the 'reduce()' operation in Stream API?",
    answer: "reduce() is a terminal operation that combines all elements of a stream into a single result using an associative binary function (BinaryOperator). It has three forms: reduce(BinaryOperator) → returns Optional<T>, reduce(identity, BinaryOperator) → returns T, and reduce(identity, accumulator, combiner) for parallel streams. Common uses: sum, product, min, max, string concatenation. Example: int sum = numbers.stream().reduce(0, Integer::sum);",
    keyPoints: [
      "Terminal operation — combines elements into one",
      "Three overloads: with/without identity, with combiner",
      "Uses BinaryOperator (must be associative)",
      "Common uses: sum, max, min, concat"
    ],
    questionHi: "Stream API ka reduce() operation kya hai?",
    answerHi: "reduce() terminal operation hai jo stream ke saare elements ko ek associative binary function (BinaryOperator) se combine karke ek single result me convert karta hai. Iske teen forms hain — reduce(BinaryOperator) jo Optional<T> return karta hai, reduce(identity, BinaryOperator) jo T return karta hai, aur reduce(identity, accumulator, combiner) parallel streams ke liye. Common use cases — sum, product, min, max, string concatenation. Jaise: int sum = numbers.stream().reduce(0, Integer::sum);",
    keyPointsHi: [
      "Terminal operation elements combine single result",
      "Teen overloads identity accumulator combiner variants",
      "BinaryOperator associative function requirement rule",
      "sum max min concat common reduce use cases"
    ]
  },
  {
    id: 30,
    difficulty: "Easy",
    question: "How do you sort using Stream API?",
    answer: "Use the sorted() intermediate operation. Two forms: sorted() — natural ordering (elements must implement Comparable), and sorted(Comparator) — custom ordering. Examples: numbers.stream().sorted().collect(Collectors.toList()) sorts ascending; employees.stream().sorted(Comparator.comparing(Employee::getSalary).reversed()).collect(...) sorts by salary descending. Use thenComparing(...) for tie-breakers.",
    keyPoints: [
      "sorted() — natural ordering (needs Comparable)",
      "sorted(Comparator) — custom ordering",
      "Comparator.comparing(...).reversed() for desc",
      "Chain thenComparing(...) for multi-key sort"
    ],
    questionHi: "Stream API se sorting kaise karte hain?",
    answerHi: "sorted() intermediate operation use hoti hai. Iske do forms hain — sorted() jo natural ordering deta hai (elements Comparable implement karte ho), aur sorted(Comparator) jo custom ordering ke liye. Jaise: numbers.stream().sorted().collect(Collectors.toList()) ascending sort, employees.stream().sorted(Comparator.comparing(Employee::getSalary).reversed()).collect(...) salary ke basis pe descending. Multi key sort ke liye thenComparing() chain karo.",
    keyPointsHi: [
      "sorted natural ordering Comparable interface required",
      "sorted Comparator custom compare logic pass",
      "Comparator.comparing reversed descending sort trick",
      "thenComparing multi field tie breaker chain"
    ]
  }
];
