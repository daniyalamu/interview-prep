export const gitQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is Git?",
    answer: "Git is a distributed version control system (DVCS) created by Linus Torvalds in 2005. It tracks changes to source code over time, letting developers collaborate, branch, merge, and roll back easily. 'Distributed' means every developer has a full copy of the entire repository (including history) on their local machine — you can commit offline, and the central remote (like GitHub/GitLab/Bitbucket) is just one of many clones. Core objects: blob (file contents), tree (directory), commit (snapshot with metadata), and branches/tags (movable pointers to commits).",
    keyPoints: [
      "Distributed Version Control System (DVCS)",
      "Every clone has full history — works offline",
      "Core concepts: commit, branch, merge, remote",
      "Popular remotes: GitHub, GitLab, Bitbucket"
    ],
    questionHi: "Git kya hai?",
    answerHi: "Git ek distributed version control system (DVCS) hai jo Linus Torvalds ne 2005 me banaya tha. Ye source code me hone wale changes ko time ke saath track karta hai, aur developers ko collaborate, branch, merge aur rollback karne me help karta hai. Distributed ka matlab har developer ke paas puri repository ki complete copy hoti hai (history samet), matlab offline bhi commit ho sakta hai. GitHub, GitLab, Bitbucket bas central remote hote hain. Core objects — blob (file content), tree (directory), commit (metadata ke saath snapshot), branches aur tags (movable pointers).",
    keyPointsHi: [
      "Distributed version control system source code tracking",
      "Har clone puri history offline commit possible",
      "Commit branch merge remote core concepts",
      "GitHub GitLab Bitbucket popular hosted remotes"
    ]
  },
  {
    id: 2,
    difficulty: "Easy",
    question: "How do you clone the Main branch to your local system?",
    answer: "Use the 'git clone' command with the repository URL. By default git clone checks out the repository's default branch — if that's already 'main', you're done: git clone https://github.com/user/repo.git. To explicitly clone only the main branch use the -b flag: git clone -b main https://github.com/user/repo.git. For a shallow (faster) clone add --depth 1. After cloning, cd into the folder and 'git branch' shows you're on main. Verify with 'git remote -v' to see the origin URL.",
    keyPoints: [
      "git clone <url> — clones default branch",
      "git clone -b main <url> — clone specific branch",
      "--depth 1 for a shallow, faster clone",
      "cd into folder → git branch to confirm"
    ],
    questionHi: "Main branch ko apne local system me kaise clone karte ho?",
    answerHi: "'git clone' command use karo repository URL ke saath. By default git clone repository ki default branch checkout karti hai — agar wo already 'main' hai to bas 'git clone https://github.com/user/repo.git' likho aur ho gaya. Sirf main branch clone karni ho to -b flag use karo: 'git clone -b main https://github.com/user/repo.git'. Faster shallow clone chahiye to '--depth 1' add karo. Cloning ke baad folder me cd karo aur 'git branch' se confirm karo ki main pe ho. 'git remote -v' se origin URL verify karo.",
    keyPointsHi: [
      "git clone URL default branch checkout automatic",
      "git clone dash b main specific branch clone",
      "depth 1 shallow clone fast download option",
      "cd folder git branch verify main confirm"
    ]
  }
];
