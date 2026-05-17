import { portfolioData } from "../constants";

const API_URL = import.meta.env.VITE_CHAT_API_URL || "/api/chat";

// Simple keyword-based chatbot responses used as a safe fallback
const responses = [
  {
    keywords: ["hello", "hi", "hey", "greetings", "howdy", "sup", "yo", "start", "good morning", "good afternoon", "good evening"],
    response: "Greetings, Traveler! 🚀 I'm Nexus AI, your guide through Prabesh's portfolio. Ask me about his skills, projects, experience, or how to contact him!"
  },
  {
    keywords: ["who", "about", "introduce", "tell", "name", "who is", "tell me about", "who are you", "your name"],
    response: `I'm ${portfolioData.name}, a ${portfolioData.role} from ${portfolioData.location}. ${portfolioData.tagline} I build modern web applications with cutting-edge technologies!`
  },
  {
    keywords: ["skill", "tech", "know", "can", "do", "programming", "language", "tool", "stack", "able", "his skill", "what skill", "tech stack", "what can", "what do", "good at", "expert in"],
    response: "💻 Prabesh's Tech Stack:\n\n• Frontend: React, Next.js, TypeScript, Tailwind CSS\n• Backend: Node.js, Express, MongoDB, PostgreSQL\n• Tools: Git, Docker, Figma, VS Code\n\nHe's a full-stack developer who loves building modern, responsive applications!"
  },
  {
    keywords: ["react", "frontend", "ui", "ux", "interface", "reactjs", "front end", "user interface", "front-end"],
    response: "Yes! Prabesh is highly skilled in React and modern frontend development. He builds performant applications using React, TypeScript, Next.js, and Tailwind CSS with smooth animations using Framer Motion. ⚛️"
  },
  {
    keywords: ["backend", "server", "api", "node", "express", "rest", "back end", "back-end", "nodejs", "restful"],
    response: "On the backend, Prabesh works with Node.js, Express, MongoDB, and PostgreSQL. He builds RESTful APIs, handles authentication, and creates scalable server architectures. 🔧"
  },
  {
    keywords: ["project", "work", "built", "created", "portfolio", "develop", "made", "example", "his work", "his project", "what built", "what made", "show me"],
    response: "Prabesh has built amazing projects:\n\n• E-commerce platforms with payment integration\n• Task management systems\n• Restaurant websites with online ordering\n• Travel booking platforms\n\nCheck out the Projects Universe to see them all! 🌟"
  },
  {
    keywords: ["contact", "email", "reach", "message", "talk", "touch", "call", "get in touch", "reach out", "contact him", "his email"],
    response: `📧 Contact Prabesh:\n\nEmail: ${portfolioData.email}\nLocation: ${portfolioData.location}\n\nVisit the Contact Universe to send a direct message or find social links!`
  },
  {
    keywords: ["experience", "job", "career", "worked", "year", "long", "how long", "work experience", "his experience", "how many years"],
    response: "Prabesh has been actively developing web applications since 2021, working as a freelancer and full-stack developer. He has experience building scalable applications, leading projects, and collaborating with clients worldwide. 💼"
  },
  {
    keywords: ["available", "hire", "freelance", "work with", "employ", "offer", "opportunity", "for hire", "hiring", "work together", "collaborate"],
    response: "Yes! Prabesh is available for freelance projects and full-time opportunities. He's passionate about building great web experiences and would love to discuss your project. Contact him through the Contact Universe! 🤝"
  },
  {
    keywords: ["typescript", "type", "ts", "type script"],
    response: "Absolutely! Prabesh uses TypeScript extensively for type safety and better code quality. He leverages it in both frontend (React) and backend (Node.js) development. 📘"
  },
  {
    keywords: ["database", "mongo", "sql", "postgres", "data", "storage", "mongodb", "postgresql", "nosql", "database design"],
    response: "Prabesh works with both SQL and NoSQL databases:\n\n• MongoDB for flexible, document-based storage\n• PostgreSQL for relational data\n• Database design, optimization, and migrations\n\nHe chooses the right database for each project's needs! 🗄️"
  },
  {
    keywords: ["design", "figma", "ui/ux", "look", "style", "visual", "designer", "ui design", "ux design", "user experience"],
    response: "Prabesh has a strong eye for design! He works with Figma to create mockups and prototypes, and excels at implementing pixel-perfect designs with great attention to detail. 🎨"
  },
  {
    keywords: ["next", "nextjs", "ssr", "ssg", "next.js", "next js", "server side", "static site"],
    response: "Yes! Prabesh is skilled in Next.js for building performant, SEO-friendly React applications. He's experienced with SSR, SSG, API routes, and the latest Next.js features. ⚡"
  },
  {
    keywords: ["tailwind", "css", "style", "tailwindcss", "styling", "tailwind css"],
    response: "Prabesh loves Tailwind CSS! He uses it to create beautiful, responsive designs quickly with utility-first CSS. This portfolio itself is built with Tailwind! 💨"
  },
  {
    keywords: ["thank", "appreciate", "thanks", "thank you", "thanks you", "appreciated"],
    response: "You're welcome, Traveler! Feel free to explore the multiverse and ask me anything else about Prabesh's work and skills. May your code be bug-free! 🚀✨"
  },
  {
    keywords: ["help", "what", "command", "what can", "how can", "guide me", "assist me"],
    response: "I can help you learn about:\n\n• Prabesh's skills and technologies\n• His projects and work experience\n• How to contact or hire him\n• His design and development approach\n\nJust ask me anything! 🤖"
  },
  {
    keywords: ["bye", "goodbye", "see you", "later", "see ya", "good bye"],
    response: "Safe travels through the multiverse, friend! Feel free to return anytime. May your code be bug-free! 👋✨"
  },
  {
    keywords: ["price", "cost", "rate", "budget", "charge", "pay", "money", "how much", "pricing", "payment"],
    response: "For pricing and project estimates, please contact Prabesh directly through the Contact Universe. Rates vary based on project scope and requirements. He's happy to discuss your budget! 💰"
  },
  {
    keywords: ["remote", "online", "distance", "location", "work remote", "remotely", "where located", "from where"],
    response: "Yes! Prabesh is experienced with remote work and has collaborated with clients and teams worldwide. He's comfortable with remote communication tools and asynchronous workflows. 🌍"
  },
  {
    keywords: ["git", "github", "version", "code", "version control", "repository", "repo"],
    response: "Prabesh is proficient with Git and GitHub. He follows version control best practices, branching strategies, and code reviews. Check out his GitHub profile from the Contact Universe! 🔀"
  }
];

const getLocalResponse = async (message) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const lowerMessage = message.toLowerCase();
  
  // Find matching response - check all words in the message
  for (const item of responses) {
    for (const keyword of item.keywords) {
      if (lowerMessage.includes(keyword)) {
        return item.response;
      }
    }
  }
  
  // Default response if no keyword matches
  return "Hmm, I'm not sure about that. Try asking me about Prabesh's skills, projects, experience, or how to contact him. I'm here to help you navigate his portfolio! 🌌";
};

export const sendMessageToGemini = async (message) => {
  const trimmedMessage = message.trim();

  if (!trimmedMessage) {
    return "Please type a message first.";
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: trimmedMessage }),
    });

    if (!response.ok) {
      throw new Error(`Chat API failed with status ${response.status}`);
    }

    const data = await response.json();
    if (typeof data.response === 'string' && data.response.trim()) {
      return data.response;
    }

    throw new Error('Chat API returned an empty response');
  } catch (error) {
    return getLocalResponse(trimmedMessage);
  }
};
