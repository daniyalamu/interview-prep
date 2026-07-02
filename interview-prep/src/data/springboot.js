export const springBootQuestions = [
  {
    id: 1,
    difficulty: "Medium",
    question: "Spring vs Spring Boot",
    answer: "Spring is a general-purpose framework that requires a lot of manual configuration (XML or Java Config), separate server setup, and dependency management. Spring Boot is built on top of Spring and adds three big things: (1) Auto-configuration — configures beans based on classpath, (2) Starter dependencies — one dependency pulls transitive libs (spring-boot-starter-web), and (3) Embedded servers (Tomcat/Jetty) so you can 'java -jar' your app. Spring Boot follows convention over configuration, letting you build production-ready apps quickly.",
    keyPoints: [
      "Spring — flexible but heavy manual configuration",
      "Spring Boot — auto-configuration + starters + embedded server",
      "Boot follows 'convention over configuration'",
      "Boot produces runnable jar via 'java -jar'"
    ],
    questionHi: "Spring aur Spring Boot me kya difference hai?",
    answerHi: "Spring ek general purpose framework hai jisme manual configuration (XML ya Java Config), server setup, aur dependency management sab hand se karna padta hai. Spring Boot Spring ke upar bana hai aur teen main cheezein deta hai — pehla auto configuration (classpath ke basis pe beans configure hote hain), dusra starter dependencies (ek dependency me transitive libs aa jaati hain jaise spring-boot-starter-web), aur teesra embedded server (Tomcat ya Jetty) taaki 'java -jar' se app chala sakein. Boot convention over configuration follow karta hai.",
    keyPointsHi: [
      "Spring flexible manual XML Java configuration heavy",
      "Boot auto configuration starters embedded server features",
      "Convention over configuration Boot ka main principle",
      "java jar runnable jar Boot production ready app"
    ]
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "Which annotation is used for Auto Configuration?",
    answer: "@EnableAutoConfiguration is the annotation that enables Spring Boot's auto-configuration mechanism. However, we typically use @SpringBootApplication on the main class, which is a meta-annotation that combines three things: @Configuration (marks the class as a source of bean definitions), @EnableAutoConfiguration (turns on auto-config based on classpath), and @ComponentScan (scans the current package and sub-packages for @Component/@Service/@Repository).",
    keyPoints: [
      "@EnableAutoConfiguration — enables auto-configuration",
      "@SpringBootApplication combines Config + AutoConfig + ComponentScan",
      "Configures beans based on classpath libs",
      "Can exclude specific auto-configs with (exclude = ...)"
    ],
    questionHi: "Auto Configuration ke liye kaunsa annotation use hota hai?",
    answerHi: "@EnableAutoConfiguration annotation hai jo Spring Boot ka auto configuration mechanism enable karta hai. But usually hum main class pe @SpringBootApplication use karte hain, jo teen annotations ka combination hai — @Configuration (class ko bean definitions ka source banata), @EnableAutoConfiguration (classpath ke basis pe auto config on karta), aur @ComponentScan (current package aur sub packages me @Component, @Service, @Repository scan karta hai).",
    keyPointsHi: [
      "EnableAutoConfiguration auto config feature enable karta",
      "SpringBootApplication meta annotation teen combine karta",
      "Configuration ComponentScan EnableAutoConfiguration combined shortcut",
      "exclude parameter specific auto config disable option"
    ]
  },
  {
    id: 3,
    difficulty: "Easy",
    question: "'@Controller' vs '@RestController'",
    answer: "@Controller is used in traditional Spring MVC — its methods return a view name (like a Thymeleaf or JSP page) and Spring resolves it through a ViewResolver. @RestController = @Controller + @ResponseBody applied to the whole class — every method's return value is serialized directly to the HTTP response body as JSON (or XML). Use @RestController for REST APIs, @Controller for server-side rendered pages.",
    keyPoints: [
      "@Controller — returns view names (MVC)",
      "@RestController — returns data (JSON/XML) directly",
      "@RestController = @Controller + @ResponseBody",
      "Use @RestController for REST APIs"
    ],
    questionHi: "@Controller aur @RestController me kya difference hai?",
    answerHi: "@Controller traditional Spring MVC me use hota hai, iske methods view name return karte hain (jaise Thymeleaf ya JSP page) aur Spring ViewResolver se resolve karta hai. @RestController = @Controller + @ResponseBody, matlab har method ka return value directly HTTP response body me JSON ya XML ke roop me serialize hota hai. REST APIs ke liye @RestController use karo, server side rendered pages ke liye @Controller.",
    keyPointsHi: [
      "Controller view name return MVC style server render",
      "RestController data JSON XML response body directly",
      "RestController Controller aur ResponseBody ka combination hai",
      "REST API ke liye RestController use karo hamesha"
    ]
  },
  {
    id: 4,
    difficulty: "Easy",
    question: "What is '@ResponseBody'?",
    answer: "@ResponseBody tells Spring that the method's return value should be written directly to the HTTP response body — NOT interpreted as a view name. Spring uses HttpMessageConverters (like Jackson) to serialize the object into JSON/XML. You can put @ResponseBody on individual methods of a @Controller, OR simply use @RestController which applies it to every method automatically.",
    keyPoints: [
      "Return value → HTTP response body (not view)",
      "Uses HttpMessageConverters (Jackson for JSON)",
      "Applied per method inside @Controller",
      "@RestController = shortcut for class-level @ResponseBody"
    ],
    questionHi: "@ResponseBody kya karta hai?",
    answerHi: "@ResponseBody Spring ko batata hai ki method ka return value directly HTTP response body me likha jaye, view name ki tarah interpret na kiya jaye. Spring HttpMessageConverters (jaise Jackson) use karke object ko JSON ya XML me serialize karta hai. Ise @Controller ke individual methods pe laga sakte hain, ya @RestController use karo jo class level pe automatically apply kar deta hai.",
    keyPointsHi: [
      "Return value HTTP response body directly write",
      "HttpMessageConverters Jackson JSON serialization handle karte",
      "Controller ke individual methods pe apply option",
      "RestController class level shortcut ResponseBody sabko"
    ]
  },
  {
    id: 5,
    difficulty: "Easy",
    question: "What is '@Repository'?",
    answer: "@Repository is a Spring stereotype annotation applied to DAO (Data Access Object) classes — the layer that talks to the database. It's a specialization of @Component, so Spring picks it up during component scanning. Its most important extra role: it enables persistence-related exception translation — Spring converts JDBC/JPA exceptions (like SQLException) into Spring's DataAccessException hierarchy, which is unchecked and consistent across data-access technologies.",
    keyPoints: [
      "Stereotype for DAO / persistence layer",
      "Specialization of @Component (auto-detected)",
      "Enables exception translation to DataAccessException",
      "Used with Spring Data JPA repositories too"
    ],
    questionHi: "@Repository annotation kya karta hai?",
    answerHi: "@Repository Spring ka stereotype annotation hai jo DAO (Data Access Object) classes pe lagta hai — jo database se baat karti hain. Ye @Component ka specialization hai isliye component scanning me automatically pick ho jata hai. Iska sabse important role hai persistence exception translation — SQLException jaisi JDBC/JPA exceptions ko Spring ki DataAccessException hierarchy me convert karta hai, jo unchecked aur consistent hoti hai.",
    keyPointsHi: [
      "DAO layer database access classes ka stereotype",
      "Component ka specialization auto scan detection",
      "Exception translation DataAccessException me convert unchecked",
      "Spring Data JPA repositories ke saath bhi use"
    ]
  },
  {
    id: 6,
    difficulty: "Medium",
    question: "What is Hibernate?",
    answer: "Hibernate is a Java ORM (Object Relational Mapping) framework that maps Java classes to database tables and Java objects to rows. It implements the JPA specification. You annotate classes with @Entity, @Table, @Id, etc., and Hibernate generates SQL, handles caching (L1 & L2), lazy loading, and transaction management via HQL/JPQL. Benefits: no boilerplate JDBC, database-independent queries, and automatic dirty-checking. Spring Boot integrates it via Spring Data JPA.",
    keyPoints: [
      "ORM framework — objects ↔ database tables",
      "Implements the JPA specification",
      "Uses @Entity, @Id, @Column annotations",
      "Provides caching, lazy loading, HQL/JPQL"
    ],
    questionHi: "Hibernate kya hai?",
    answerHi: "Hibernate Java ka ORM (Object Relational Mapping) framework hai jo Java classes ko database tables aur objects ko rows se map karta hai. Ye JPA specification implement karta hai. Classes pe @Entity, @Table, @Id annotations lagate hain, aur Hibernate SQL generate karta hai, caching (L1 aur L2), lazy loading aur transaction management handle karta hai HQL/JPQL ke through. Benefits — JDBC boilerplate nahi, database independent queries, automatic dirty checking. Spring Boot me ye Spring Data JPA ke through integrate hota hai.",
    keyPointsHi: [
      "ORM framework Java class database table mapping",
      "JPA specification implement karta annotations use",
      "Entity Id Column annotations mapping declaration",
      "Cache lazy loading HQL JPQL query features"
    ]
  },
  {
    id: 7,
    difficulty: "Medium",
    question: "What is SessionFactory?",
    answer: "SessionFactory is a heavyweight, thread-safe factory that creates Hibernate Session objects. It's built once per application (per database) at startup from Hibernate configuration and holds compiled mappings, caches, and connection pool references. Sessions, on the other hand, are lightweight, single-threaded units of work that represent a conversation with the database. Analogy: SessionFactory = database connection factory, Session = one open transaction. In JPA terms, EntityManagerFactory ↔ EntityManager plays the same role.",
    keyPoints: [
      "Thread-safe factory creating Session instances",
      "One per application (heavyweight, built at startup)",
      "Holds mappings, second-level cache, pool config",
      "JPA equivalent: EntityManagerFactory / EntityManager"
    ],
    questionHi: "SessionFactory kya hoti hai?",
    answerHi: "SessionFactory Hibernate ki heavyweight aur thread safe factory hai jo Session objects create karti hai. Ye application startup pe ek baar banti hai (per database) Hibernate configuration se, aur compiled mappings, caches aur connection pool references hold karti hai. Session lightweight aur single threaded hoti hai, ek conversation ko represent karti hai database ke saath. Analogy — SessionFactory database connection factory, Session ek open transaction. JPA me EntityManagerFactory aur EntityManager same role play karte hain.",
    keyPointsHi: [
      "Thread safe factory Session objects generate karti",
      "Application per ek baar startup heavyweight banti",
      "Mappings second level cache pool config hold",
      "JPA EntityManagerFactory EntityManager equivalent same concept"
    ]
  },
  {
    id: 8,
    difficulty: "Hard",
    question: "How do you implement Security in your project?",
    answer: "I use Spring Security. Setup: add spring-boot-starter-security, then create a SecurityFilterChain @Bean configuring which endpoints are public (permitAll) vs authenticated. For stateless REST APIs I add a JWT authentication filter (OncePerRequestFilter) that extracts the token from the Authorization header, validates it, and sets the Authentication in SecurityContext. Passwords are hashed with BCryptPasswordEncoder. Method-level security (@PreAuthorize(\"hasRole('ADMIN')\")) enforces role-based access. CSRF is disabled for stateless APIs, and CORS is explicitly configured.",
    keyPoints: [
      "spring-boot-starter-security + SecurityFilterChain bean",
      "JWT filter for stateless REST APIs",
      "BCryptPasswordEncoder for password hashing",
      "@PreAuthorize for method-level role checks"
    ],
    questionHi: "Aap apne project me Security kaise implement karte ho?",
    answerHi: "Main Spring Security use karta hoon. Setup ye hai — spring-boot-starter-security dependency add karo, phir SecurityFilterChain @Bean configure karo jisme public endpoints (permitAll) aur authenticated endpoints define karte hain. Stateless REST APIs ke liye ek JWT authentication filter add karta hoon (OncePerRequestFilter) jo Authorization header se token nikalta hai, validate karta hai, aur SecurityContext me Authentication set karta hai. Passwords BCryptPasswordEncoder se hash hote hain. Method level security ke liye @PreAuthorize(\"hasRole('ADMIN')\") use karta hoon. CSRF stateless APIs me disable, CORS explicitly configure.",
    keyPointsHi: [
      "Spring Security starter SecurityFilterChain bean configuration",
      "JWT filter OncePerRequestFilter stateless API auth",
      "BCryptPasswordEncoder passwords hash secure storage",
      "PreAuthorize method level role based access control"
    ]
  },
  {
    id: 9,
    difficulty: "Medium",
    question: "What is a JWT Token?",
    answer: "JWT (JSON Web Token) is a compact, URL-safe, self-contained token used for stateless authentication. It has three Base64URL-encoded parts separated by dots: Header.Payload.Signature. Header specifies algorithm (e.g. HS256), Payload contains claims (user id, roles, expiry — exp/iat), and Signature is computed from header+payload+secret so the server can verify it hasn't been tampered with. The client sends it in the 'Authorization: Bearer <token>' header on each request. Since the server doesn't store sessions, JWT scales easily.",
    keyPoints: [
      "Three parts: Header.Payload.Signature (Base64URL)",
      "Self-contained → stateless authentication",
      "Signed (HMAC or RSA) — server can verify integrity",
      "Sent via Authorization: Bearer <token>"
    ],
    questionHi: "JWT Token kya hota hai?",
    answerHi: "JWT (JSON Web Token) ek compact aur URL safe self contained token hai jo stateless authentication ke liye use hota hai. Iske teen Base64 URL encoded parts hote hain, dots se separate — Header.Payload.Signature. Header algorithm batata hai (jaise HS256), Payload me claims hote hain (user id, roles, exp/iat), aur Signature header+payload+secret se compute hoti hai taaki server tamper check kar sake. Client 'Authorization: Bearer <token>' header me bhejta hai. Server ko sessions store nahi karne padte, isliye scale asaan hota hai.",
    keyPointsHi: [
      "Teen parts Header Payload Signature Base64 encoded",
      "Self contained stateless authentication mechanism token",
      "Signed HMAC RSA integrity verify server side",
      "Authorization Bearer header me client send karta"
    ]
  },
  {
    id: 10,
    difficulty: "Easy",
    question: "What is REST?",
    answer: "REST (Representational State Transfer) is an architectural style for designing networked APIs, introduced by Roy Fielding. It's based on HTTP and uses resources identified by URIs (e.g. /users/1). Each resource is manipulated using standard HTTP methods: GET (read), POST (create), PUT (update/replace), PATCH (partial update), DELETE (remove). REST is stateless (each request contains all info the server needs), uses standard status codes (200, 201, 400, 401, 404, 500), and typically exchanges JSON.",
    keyPoints: [
      "Architectural style built on HTTP",
      "Resources identified by URIs (nouns)",
      "HTTP verbs: GET, POST, PUT, PATCH, DELETE",
      "Stateless, uses standard status codes and JSON"
    ],
    questionHi: "REST kya hota hai?",
    answerHi: "REST (Representational State Transfer) ek architectural style hai networked APIs design karne ke liye, Roy Fielding ne introduce kiya tha. HTTP pe based hota hai aur resources ko URIs se identify karta hai (jaise /users/1). Har resource ko standard HTTP methods se manipulate karte hain — GET (read), POST (create), PUT (update/replace), PATCH (partial update), DELETE (remove). REST stateless hota hai matlab har request me sari info hoti hai, standard status codes use karta hai (200, 201, 400, 401, 404, 500), aur usually JSON exchange hota hai.",
    keyPointsHi: [
      "Architectural style HTTP protocol based API design",
      "URIs resources identify noun based routes",
      "GET POST PUT PATCH DELETE HTTP verbs use",
      "Stateless status codes JSON standard data format"
    ]
  },
  {
    id: 11,
    difficulty: "Easy",
    question: "Write a Triangle Star Pattern Program",
    answer: "A common right-angle triangle star pattern in Java:\n\npublic class TriangleStar {\n  public static void main(String[] args) {\n    int rows = 5;\n    for (int i = 1; i <= rows; i++) {\n      for (int j = 1; j <= i; j++) {\n        System.out.print(\"* \");\n      }\n      System.out.println();\n    }\n  }\n}\n\nOutput:\n*\n* *\n* * *\n* * * *\n* * * * *\n\nOuter loop runs once per row (i = 1..rows), inner loop prints i stars, then a newline. For a pyramid pattern, add a leading-spaces loop that prints (rows - i) spaces before the stars.",
    keyPoints: [
      "Outer loop → rows (1..n)",
      "Inner loop → stars per row (1..i)",
      "System.out.println() ends each row",
      "Add spaces loop for pyramid variant"
    ],
    questionHi: "Java me Triangle Star pattern program kaise likhte hain?",
    answerHi: "Common right angle triangle star pattern aisa hota hai:\n\npublic class TriangleStar {\n  public static void main(String[] args) {\n    int rows = 5;\n    for (int i = 1; i <= rows; i++) {\n      for (int j = 1; j <= i; j++) {\n        System.out.print(\"* \");\n      }\n      System.out.println();\n    }\n  }\n}\n\nOutput 5 rows me stars increase karta hai (1, 2, 3, 4, 5 stars). Outer loop rows chalata hai, inner loop us row ke stars print karta hai, phir newline. Pyramid pattern chahiye to leading spaces ka ek aur loop add karo jo (rows - i) spaces print kare.",
    keyPointsHi: [
      "Outer loop rows i equal 1 se n tak",
      "Inner loop j equal 1 se i tak stars",
      "System out println har row ke baad newline",
      "Pyramid ke liye leading spaces ka extra loop"
    ]
  }
];
