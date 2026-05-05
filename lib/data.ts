export const siteConfig = {
  name: "Himanshu",
  role: "Full-Stack Engineer",
  tagline: "I build things for the web.",
  description:
    "A passionate Full-Stack Engineer crafting modern, high-performance web experiences with a focus on beautiful UI and clean code.",
  email: "himanshupise016@gmail.com",
  github: "https://github.com/himanshup016/",
  linkedin: "https://www.linkedin.com/in/himanshu-pise/",
  twitter: "#",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const typingRoles = [
  "Full-Stack Engineer",
  "Frontend Engineer",
  "React Specialist",
  "Open Source Enthusiast",
  "Problem Solver",
];

export const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Framer Motion", icon: "✦" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL", icon: "◈" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Figma", icon: "🖌️" },
  { name: "Git", icon: "🔀" },
];

// export const projects = [
//   {
//     id: 1,
//     title: "NovaMart – E-Commerce Platform",
//     description:
//       "A full-stack e-commerce platform with real-time inventory, Stripe payments, and an AI-powered recommendation engine.",
//     tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
//     github: "https://github.com/himanshu/novamart",
//     live: "https://novamart.demo",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Synapse – AI Chat Interface",
//     description:
//       "A sleek, real-time AI chat application built on top of the OpenAI API with streaming responses and conversation history.",
//     tags: ["React", "OpenAI API", "Node.js", "Socket.io", "Redis"],
//     github: "https://github.com/himanshu/synapse",
//     live: "https://synapse.demo",
//     featured: true,
//   },
//   {
//     id: 3,
//     title: "TaskFlow – Project Manager",
//     description:
//       "A Kanban-style project management tool with drag-and-drop boards, team collaboration, and deadline tracking.",
//     tags: ["Next.js", "DnD Kit", "Zustand", "Supabase", "Tailwind"],
//     github: "https://github.com/himanshu/taskflow",
//     live: "https://taskflow.demo",
//     featured: true,
//   },
//   {
//     id: 4,
//     title: "PriceRadar – Market Analytics",
//     description:
//       "A data visualization dashboard that aggregates and charts real-time commodity price data from multiple APIs.",
//     tags: ["React", "D3.js", "FastAPI", "Python", "WebSockets"],
//     github: "https://github.com/himanshu/priceradar",
//     live: "https://priceradar.demo",
//     featured: false,
//   },
//   {
//     id: 5,
//     title: "DevDocs – Documentation Builder",
//     description:
//       "A markdown-powered documentation site generator with live preview, versioning, and full-text search.",
//     tags: ["Next.js", "MDX", "Algolia", "TypeScript"],
//     github: "https://github.com/himanshu/devdocs",
//     live: "https://devdocs.demo",
//     featured: false,
//   },
//   {
//     id: 6,
//     title: "Palette – Color System Tool",
//     description:
//       "A browser-based color palette generator with contrast checking, code export, and accessibility scoring.",
//     tags: ["React", "CSS Houdini", "Zustand", "Vite"],
//     github: "https://github.com/himanshu/palette",
//     live: "https://palette.demo",
//     featured: false,
//   },
// ];

// export const experiences = [
//   {
//     id: 1,
//     role: "Senior Frontend Engineer",
//     company: "TechCorp Inc.",
//     location: "Remote",
//     period: "Jan 2023 – Present",
//     description:
//       "Lead the frontend architecture for a suite of SaaS products serving 500K+ users. Championed a design system migration to Tailwind CSS, reducing UI inconsistencies by 80%.",
//     skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
//   },

// ];
export const projects = [
  {
    id: 1,
    title: "Headless LMS – Adobe Learning Manager (ALM) Integration",
    description:
      "Enterprise LMS serving 15,000+ active users. Designed modular, API-driven architecture with distributed content delivery, infinite scrolling, and server-side pagination for 100,000+ records.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "ALM API"],
    github: "https://github.com/himanshu/lms-integration", // Placeholder based on GitHub profile link
    live: "https://lms.demo",
    featured: true,
    type: "Professional",
  },
  {
    id: 2,
    title: "Multi-Platform E-commerce Application",
    description:
      "Full-stack MERN platform processing 10,000+ daily transactions. Features real-time inventory management, secure payment workflows, and a MongoDB-powered recommendation engine.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis", "Distributed Architecture"],
    github: "https://github.com/himanshu/ecommerce-platform",
    live: "https://ecommerce.demo",
    featured: true,
    type: "Professional",
  },
  {
    id: 3,
    title: "Dudhved — Premium Dairy basedE-commerce Platform",
    description:
      "A full-stack, end-to-end e-commerce platform built from scratch and running in production. Features OTP-based auth, a serverless backend, and a glassmorphism UI with real-time admin management.",
    tags: ["Next.js 15", "NestJS", "PostgreSQL", "AWS Lambda", "Redux Toolkit", "Tailwind CSS v4"],
    github: "https://github.com/himanshu/dudhved", // Based on GitHub handle in resume[cite: 1]
    live: "https://dudhved.com",
    featured: true,
    type: "Personal",
  },
  {
    id: 4,
    title: "VRDS - Vaccination Record Data System",
    description:
      "A comprehensive web application designed to streamline the process of vaccination record management for children aged 0–12 years. The system serves as a centralized, secure platform for parents to maintain their children's immunization history, receive timely reminders for upcoming vaccinations, and access educational resources regarding vaccine safety and importance.",
    tags: ["php", "mysql", "bootstrap", "javascript"],
    github: "https://github.com/himanshup016/VRDS", // Based on GitHub handle in resume[cite: 1]
    live: "#",
    featured: false,
    type: "Personal",
  }
];

export const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Harbinger Group",
    location: "Pune, Maharashtra, India",
    period: "January 2023 – Present",
    description: [
      "Architected high-performance MERN stack applications, improving application load performance by 30% through optimized API queries, code-splitting, and lazy loading.",
      "Implemented secure authentication and authorization systems utilizing JWT and Role-Based Access Control (RBAC), reducing security vulnerabilities by 60%.",
      "Optimized MongoDB performance using indexing and aggregation pipelines, reducing average API response times by 45% for high-traffic distributed endpoints.",
      "Built and deployed automated CI/CD pipelines using GitHub Actions and Docker, cutting manual release errors and reducing deployment time by 50%.",
      "Designed a reusable UI component library using React, TypeScript, and Material UI, which reduced code duplication by 40% and increased development velocity by 25%.",
      "Established 85%+ test coverage using Jest and React Testing Library, enforced via SonarQube to ensure zero critical bugs in production.",
      "Led technical initiatives for junior developers through code reviews and system design workshops, improving team code quality scores by 35%.",
      "Leveraged AI tools like ChatGPT, Claude, and Gemini to accelerate development, debug complex issues, and enhance code quality."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript",
      "Redux Toolkit", "Jest",
      "GraphQL", "AWS", "Jira", "Docker", "Git",
      "Intellum LMS", "Adobe Learning Manager", "Workato"
    ]
  },
];

export const certifications = [
  {
    id: 1,
    name: "Frontend Developer (React)",
    issuer: "Hackerrank",
    date: "2026",
    link: "https://www.hackerrank.com/certificates/65b9165d6919",
  },
  {
    id: 2,
    name: "Front-End Web Development",
    issuer: "IBM",
    date: "2026",
    link: "https://www.credly.com/badges/b89c8fea-9ea3-4c5c-a448-d69bbcedfcd1",

  },
  {
    id: 3,
    name: "Certified Intellum Admin Badge",
    issuer: "Intellum",
    date: "2025",
    link: "https://partners.intellum.com/student/award/YckQ3PrbxdAbJYP8fnigaZME",

  },
  {
    id: 4,
    name: "The Complete Node.js Developer Course",
    issuer: "Udemy",
    date: "2025",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-3d48a306-ab1f-44a6-becf-e830e97878cc.pdf",

  },
  {
    id: 5,
    name: "Workato Foundations Level 2",
    issuer: "Workato",
    date: "2025",
    link: "https://verify.skilljar.com/c/2dx5az6jjr7f",
  },
  {
    id: 6,
    name: "Next.js App Router Fundamentals",
    issuer: "Vercel",
    date: "2025",
    link: "https://nextjs.org/learn/certificate?course=dashboard-app&user=123232&certId=dashboard-app-123232-1764746218255",
  }
];

import {
  FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaBootstrap, FaFigma, FaJava,
  FaPython
} from "react-icons/fa6";
import {
  SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiMui, SiExpress, SiJsonwebtokens, SiMongodb, SiPostgresql, SiGit, SiGithubactions
} from "react-icons/si";
import { VscVscode, VscAzureDevops } from "react-icons/vsc";
import { Blocks, Server, Users, BrainCircuit } from "lucide-react";

export const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript (ES6+)", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
    ]
  },
  {
    category: "Frameworks/Libraries",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "ShadCN", icon: Blocks },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Material UI", icon: SiMui }
    ]
  },
  {
    category: "Backend / APIs",
    items: [
      { name: "RESTful APIs", icon: Server },
      { name: "Express.js", icon: SiExpress },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Azure DevOps", icon: VscAzureDevops },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "VS Code", icon: VscVscode },
      { name: "Figma", icon: FaFigma }
    ]
  },
  {
    category: "Best Practices",
    items: [
      { name: "SOLID", icon: BrainCircuit },
      { name: "DRY", icon: BrainCircuit },
      { name: "KISS", icon: BrainCircuit },
      { name: "YAGNI", icon: BrainCircuit }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Communication", icon: Users },
      { name: "Leadership", icon: Users }
    ]
  }
];