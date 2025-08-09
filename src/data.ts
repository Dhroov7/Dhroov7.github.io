export const about = {
    role: "Senior Software Engineer at Razorpay",
    location: "Bangalore, India",
    skills: "Golang, MySQL, Javascript, MongoDB, Redis, Kafka, Kubernetes",
    interests: "Tennis, F1, Swimming, Padel, Music",
    summary: `Senior Backend Engineer with 6+ years of experience designing and scaling
    high-performance, distributed systems for fast-paced startups and leading fintech platforms.
    At Razorpay, lead microservice architecture initiatives on the payout platform, driving systems
    that process millions of transactions daily with 99.99% uptime. Expert in Golang, Kafka, Redis,
    and Kubernetes, with deep expertise in system design, reliability engineering, and performance
    optimization. Proven track record of taking products from 0→1 and delivering core platform
    capabilities in high-scale, mission-critical environments.`
  };
  
  export const projects = [
    {
      name: "Reverse Proxy Server (GoLang)",
      description: [
        "Built reverse proxy to route HTTP traffic based on path rules with dynamic JSON config",
        "Implemented token bucket rate limiter and backend server health checks"
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
  