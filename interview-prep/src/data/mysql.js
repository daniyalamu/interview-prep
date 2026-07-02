export const mysqlQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "Tables vs Views",
    answer: "A Table is a physical structure in the database that actually stores rows of data on disk. A View is a virtual table — it's a stored SELECT query that dynamically returns data from one or more underlying tables when queried. Views don't hold data themselves (unless materialized), they help with security (expose only selected columns), simplify complex joins, and provide an abstraction layer. Tables allow all DML operations directly; views are usually read-only unless they're 'updatable' with restrictions.",
    keyPoints: [
      "Table — physical storage of actual data",
      "View — virtual, based on a stored SELECT query",
      "Views help with security & query simplification",
      "Tables support full DML; views often read-only"
    ],
    questionHi: "Tables aur Views me kya difference hai?",
    answerHi: "Table database ka physical structure hai jo actual rows disk pe store karta hai. View ek virtual table hai — ek stored SELECT query jo underlying tables se dynamically data return karti hai jab query hoti hai. Views khud data hold nahi karte (materialized ho to alag baat), inka use security ke liye hota hai (limited columns expose), complex joins simplify karne aur abstraction layer dene ke liye. Tables pe saare DML operations chalte hain, views usually read only hote hain except updatable views with restrictions.",
    keyPointsHi: [
      "Table physical storage actual rows disk save",
      "View virtual stored SELECT query dynamic data",
      "Security abstraction complex joins simplify use case",
      "Table DML support view usually read only"
    ]
  },
  {
    id: 2,
    difficulty: "Medium",
    question: "What is a Composite Key?",
    answer: "A Composite Key is a primary key made up of TWO OR MORE columns combined together to uniquely identify a row. Individually the columns may not be unique, but their combination is. Common example: an OrderItems table where (order_id, product_id) together form the primary key — the same product can appear in different orders, and the same order has multiple products, but the pair is unique. It's declared using PRIMARY KEY(col1, col2) in the CREATE TABLE statement.",
    keyPoints: [
      "Primary key using 2+ columns together",
      "Combination is unique, individual columns may not be",
      "Common in junction/mapping tables",
      "PRIMARY KEY (col1, col2) syntax"
    ],
    questionHi: "Composite Key kya hoti hai?",
    answerHi: "Composite Key woh primary key hoti hai jo do ya zyada columns ko milakar banti hai aur unique row identify karti hai. Individually columns unique na ho, but unka combination unique hota hai. Common example — OrderItems table jisme (order_id, product_id) milkar primary key banti hai — same product multiple orders me aur same order me multiple products ho sakte hain, but pair unique hai. CREATE TABLE me PRIMARY KEY(col1, col2) likhkar declare karte hain.",
    keyPointsHi: [
      "Do ya zyada columns milkar primary key",
      "Combination unique individual columns non unique",
      "Junction mapping tables me common pattern",
      "PRIMARY KEY col1 col2 syntax CREATE TABLE"
    ]
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "Primary Key vs Unique Key",
    answer: "Both enforce uniqueness on column values. Differences: (1) A table can have only ONE Primary Key but MANY Unique Keys. (2) Primary Key does NOT allow NULL values; Unique Key allows a single NULL (SQL standard) or many (MySQL). (3) Primary Key automatically creates a clustered index; Unique Key creates a non-clustered index. Semantically, Primary Key is the main identifier of the row, while Unique Key is any other column (like email or username) that must remain unique.",
    keyPoints: [
      "PK: one per table, no NULLs, clustered index",
      "UK: many per table, allows NULL (usually one)",
      "PK is the row's main identifier",
      "UK enforces uniqueness on secondary attributes"
    ],
    questionHi: "Primary Key aur Unique Key me kya difference hai?",
    answerHi: "Dono uniqueness enforce karte hain columns pe. Differences — ek table me sirf ek Primary Key ho sakti hai, but multiple Unique Keys ho sakti hain. Primary Key NULL values allow nahi karti, Unique Key ek NULL allow karti hai (SQL standard) ya multiple (MySQL). Primary Key automatically clustered index banati hai, Unique Key non clustered index. Semantic level pe Primary Key row ka main identifier hai, Unique Key kisi aur column pe uniqueness ensure karti hai jaise email ya username.",
    keyPointsHi: [
      "Primary Key ek table ek NULL nahi allowed",
      "Unique Key multiple NULL allowed usually ek",
      "Primary Key clustered index Unique non clustered",
      "PK row main identifier UK secondary uniqueness"
    ]
  },
  {
    id: 4,
    difficulty: "Medium",
    question: "What is an Index?",
    answer: "An Index is a database structure (usually a B-Tree in MySQL InnoDB) that speeds up data retrieval, similar to a book's index. Instead of scanning the whole table, MySQL can jump to matching rows via the index. Types: Primary (auto-created for PK, clustered — the data itself), Unique, Composite (multiple columns), Full-Text, and Covering (has all columns the query needs). Trade-off: indexes speed up SELECTs but slow down INSERT/UPDATE/DELETE (index must be maintained) and take extra disk space.",
    keyPoints: [
      "Data structure (B-Tree) for fast lookup",
      "Auto for PK/UK, manual via CREATE INDEX",
      "Composite/covering indexes speed up multi-column queries",
      "Trade-off: faster reads, slower writes + extra storage"
    ],
    questionHi: "Index kya hota hai database me?",
    answerHi: "Index ek database structure hai (usually B Tree, MySQL InnoDB me) jo data retrieval fast karta hai, book ke index ki tarah. Puri table scan karne ki jagah MySQL index se seedha matching rows pe jaata hai. Types — Primary (Primary Key ke liye auto, clustered matlab data khud), Unique, Composite (multiple columns), Full Text, aur Covering (query ke sab columns cover). Trade off — SELECT fast but INSERT UPDATE DELETE slow (index maintain karna padta hai) aur extra disk space use hoti hai.",
    keyPointsHi: [
      "B Tree structure fast lookup data retrieval",
      "Primary Unique auto CREATE INDEX manual banta",
      "Composite covering multi column query speed up",
      "Read fast write slow extra disk space cost"
    ]
  },
  {
    id: 5,
    difficulty: "Medium",
    question: "Explain Joins",
    answer: "JOIN combines rows from two or more tables based on a related column. Types: (1) INNER JOIN — only matching rows from both tables. (2) LEFT JOIN — all rows from the left table + matching from the right (NULLs where no match). (3) RIGHT JOIN — opposite of LEFT. (4) FULL OUTER JOIN — all rows from both, matched where possible (MySQL simulates via UNION of LEFT + RIGHT). (5) CROSS JOIN — Cartesian product, every combination. (6) SELF JOIN — table joined with itself using aliases (e.g. employees ↔ managers).",
    keyPoints: [
      "INNER JOIN — only matching rows",
      "LEFT/RIGHT JOIN — all from one side + matches",
      "FULL OUTER JOIN — everything (UNION of LEFT+RIGHT in MySQL)",
      "CROSS JOIN — Cartesian product; SELF JOIN — same table alias"
    ],
    questionHi: "Joins kya hote hain aur inke types kya hain?",
    answerHi: "JOIN do ya zyada tables ke rows ko related column ke basis pe combine karta hai. Types — INNER JOIN sirf matching rows deta hai dono tables se. LEFT JOIN left table ke saare rows plus right ke matching (na match ho to NULL). RIGHT JOIN LEFT ka opposite. FULL OUTER JOIN dono tables ke saare rows (MySQL me LEFT UNION RIGHT karke simulate karte hain). CROSS JOIN Cartesian product deta hai, har combination. SELF JOIN table ko khud se aliases ke through join, jaise employees table me employee aur manager.",
    keyPointsHi: [
      "INNER JOIN matching rows dono tables se",
      "LEFT RIGHT JOIN ek side pura NULL fill",
      "FULL OUTER JOIN sab rows MySQL UNION trick",
      "CROSS JOIN cartesian SELF JOIN alias same table"
    ]
  }
];
