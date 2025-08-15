export const about = {
  role: "Senior Software Engineer at Razorpay",
  location: ["Bangalore", "India"],
  skills: [
    "Golang", "MySQL", "JavaScript", "MongoDB",
    "Redis", "Kafka"
  ],
  interests: ["Tennis", "F1", "Swimming", "Padel", "Gaming"],
  summary: `Backend Engineer with 6+ years of experience in SaaS and event-tech startups, now building scalable, reliable fintech systems at Razorpay with expertise in Golang, Kafka, and Kubernetes.`
};

export const projects = [
  {
    name: "Reverse Proxy Server (Golang)",
    description: [
      "Developed a reverse proxy to route HTTP traffic based on path rules using a dynamic JSON configuration",
      "Implemented a token bucket rate limiter and backend server health checks for performance reliability"
    ],
    link: "https://github.com/Dhroov7/reverse-proxy-server"
  },
  {
    name: "Dist Rate (Node.js, TypeScript)",
    description: [
      "Published distributed rate limiter using Redis and token bucket algorithm on NPM",
      "Used Redis locking for atomic operations and race-condition prevention"
    ],
    link: "https://www.npmjs.com/package/dist-rate"
  },
  {
    name: "Database Internals (Medium Series)",
    description: [
      "Wrote in-depth articles on ACID, I/O internals, and indexing in MySQL/PostgreSQL"
    ],
    link: "https://dhroovgupta.medium.com/list/database-internals-7b49c0b02cd6"
  }
];
