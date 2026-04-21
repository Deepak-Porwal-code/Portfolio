import blogImage from '../images/technology-communication-icons-symbols-concept.jpg'
import taxaiImage from '../images/indomay19.jpg'
import git from '../images/git-icon.svg'
import figma from '../images/figma-icon.svg'
import postman from '../images/postman-icon.svg'
import codeIcon from '../images/code.png'
import cssIcon from '../images/css-3.png'
import jsIcon from '../images/java-script.png'

export const Bio = {
  name: "Deepak Porwal",
  roles: [
    "Frontend Developer",
    "Full Stack Developer",
  ],
  description:
    "Frontend Developer with 11+ months of production experience across 3 companies — shipping real-time dashboards, e-commerce frontends, and AI-powered applications. Delivered 35% faster load times, 40% fewer bugs, and products used by 500+ daily users. Self-taught, execution-focused, and built for fast-moving product teams.",
  resume:
    "https://drive.google.com/file/d/1XaUbDAbpYqX6_XkvRnfVaGdFY9TiT4rt/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/deepak-porwal-504489254/",
  email: "porwal99deepak@gmail.com",
  phone: "+91 73749 53088",
  location: "Bangalore, India",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React JS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Redux",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "JavaScript",
        image: jsIcon,
      },
      {
        name: "HTML",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        image: cssIcon,
      },
      {
        name: "Tailwind CSS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "Axios",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",
      },
      {
        name: "Responsive Design",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node JS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express JS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "REST APIs",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "JWT",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg",
      },
      {
        name: "Spring Boot",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "AI & APIs",
    skills: [
      {
        name: "LangChain",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "LLM Workflows",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Twilio API",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twilio/twilio-original.svg",
      },
      {
        name: "WATI API",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp/whatsapp-original.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image: git,
      },
      {
        name: "GitHub",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Postman",
        image: postman,
      },
      {
        name: "Figma",
        image: figma,
      },
      {
        name: "VS Code",
        image: codeIcon,
      },
      {
        name: "IntelliJ IDEA",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      },
      {
        name: "Vercel",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Netlify",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    role: "Frontend Developer",
    company: "Powerplay",
    date: "Nov 2025 - Present",
    desc: "Sole frontend owner of a real-time construction dashboard — built end-to-end and shipped to 500+ users across 4 departments. Boosted performance by 35% through React memoisation, lazy loading, and eliminating unnecessary re-renders. Built a reusable component library integrated with live REST APIs, cutting future feature delivery time for the whole team. Reduced bug resolution time by 40% via structured debugging workflows and proactive smoke tests before every release.",
    skills: [
      "React.js",
      "JavaScript",
      "Redux",
      "REST APIs",
      "Tailwind CSS",
      "Performance Optimization",
    ],
    doc: ""
  },
  {
    id: 1,
    img: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    role: "Software Developer Intern",
    company: "Swastya.ai",
    date: "Sep 2025 - Nov 2025",
    desc: "Built an AI WhatsApp chatbot using LangChain + LLM workflows — automated 1,000+ patient interactions/month at ~90% accuracy, fully eliminating manual triage. Integrated Twilio & WATI APIs for end-to-end messaging automation, reducing patient response time to under 2 seconds.",
    skills: [
      "Python",
      "LangChain",
      "LLM Workflows",
      "Twilio API",
      "WATI API",
    ],
    doc: ""
  },
  {
    id: 2,
    img: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    role: "Frontend Developer Intern",
    company: "Balansha",
    date: "Jul 2024 - Nov 2024",
    desc: "Converted Figma designs to a full e-commerce frontend in React.js — pixel-perfect, mobile-first, responsive across all screen sizes. Integrated REST APIs with Node.js & Spring Boot, improving page load by 20% and ensuring smooth cross-browser data flow. Reduced frontend bugs by 30% through clean coding standards, proactive testing, and full cross-browser compatibility checks.",
    skills: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Spring Boot",
      "REST APIs",
      "Figma",
      "Responsive Design",
    ],
    doc: ""
  },
];

export const projects = [
  {
    id: 0,
    title: "TaxAI Pro - AI-Powered CA Platform",
    date: "2025",
    description:
      "A comprehensive AI-powered chartered accountant platform trusted by 5,000+ CAs across India. Features automated GST filing, fraud detection, real-time insights, and advanced AI analysis. Includes pricing plans, testimonials, and bank-level security with 99.9% accuracy.",
    image: taxaiImage,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Models", "Machine Learning APIs", "Tailwind CSS", "JWT", "REST APIs", "Vercel", "AES-256 Encryption"],
    category: "web app",
    github: "https://github.com/Deepak-Porwal-code",
    webapp: "https://client-black-phi.vercel.app/",
  },
  {
    id: 1,
    title: "BlogSpace - Modern Blogging Platform",
    date: "2024",
    description:
      "A beautiful and modern blogging platform where writers can share their stories and connect with readers worldwide. Features user authentication, blog creation, responsive design, and a clean, intuitive interface built for the writing community.",
    image: blogImage,
    tags: ["React.js", "Node.js", "Authentication", "Tailwind CSS", "Responsive Design", "Full Stack"],
    category: "web app",
    github: "https://github.com/Deepak-Porwal-code",
    webapp: "https://blog-website-frontend-g34n.onrender.com/",
  },
];