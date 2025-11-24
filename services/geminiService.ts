import { portfolioData } from "../constants";

// Knowledge base for the chatbot
const knowledgeBase = [
  // Greetings
  {
    keywords: ["hello", "hi", "hey", "greetings", "howdy"],
    response: "Greetings, Traveler! I am Nexus AI, Prabesh's intelligent assistant. I can tell you about his skills, projects, experience, education, and more. What would you like to know?"
  },
  
  // About Prabesh
  {
    keywords: ["who", "about", "tell me about", "who is prabesh", "about prabesh"],
    response: `I'm ${portfolioData.name}, a ${portfolioData.role} from ${portfolioData.location}. ${portfolioData.tagline} I specialize in building modern web applications with cutting-edge technologies.`
  },
  
  // Skills
  {
    keywords: ["skills", "technologies", "tech stack", "what can you do", "programming languages"],
    response: "Prabesh is proficient in:\n• Frontend: React, Next.js, TypeScript, Tailwind CSS\n• Backend: Node.js, Express, MongoDB, PostgreSQL\n• Tools: Git, Docker, Figma, VS Code\n• Other: RESTful APIs, Responsive Design, UI/UX Design"
  },
  
  // Experience
  {
    keywords: ["experience", "work", "job", "worked at", "career"],
    response: "Prabesh has worked as:\n• Full Stack Developer at Tech Solutions (2023-Present) - Building scalable web applications\n• Frontend Developer at Digital Agency (2022-2023) - Created responsive user interfaces\n• Freelance Web Developer (2021-2022) - Worked with multiple clients on custom projects"
  },
  
  // Education
  {
    keywords: ["education", "study", "degree", "university", "college", "school"],
    response: "Prabesh holds a Bachelor's degree in Computer Science and has completed various certifications in web development, including React, Node.js, and modern JavaScript frameworks."
  },
  
  // Projects
  {
    keywords: ["projects", "portfolio", "work", "built", "created", "developed"],
    response: "Prabesh has built impressive projects including:\n• E-commerce platforms with full payment integration\n• Task management systems with real-time collaboration\n• Restaurant websites with online ordering\n• Travel booking platforms\n• And many more! Check out the Projects Universe to see detailed case studies."
  },
  
  // Contact
  {
    keywords: ["contact", "email", "reach", "hire", "phone", "get in touch"],
    response: `You can reach Prabesh at:\n📧 Email: ${portfolioData.email}\n📍 Location: ${portfolioData.location}\n\nOr visit the Contact Universe to send a direct message!`
  },
  
  // Social Media
  {
    keywords: ["github", "linkedin", "social", "social media", "connect"],
    response: `Connect with Prabesh on:\n• GitHub: Check out his code repositories\n• LinkedIn: Professional network\n\nVisit the Contact Universe for all social links!`
  },
  
  // React specific
  {
    keywords: ["react", "reactjs"],
    response: "Yes! Prabesh is highly skilled in React. He builds modern, performant applications using React, along with TypeScript, Next.js, and state management libraries like Redux and Zustand."
  },
  
  // Frontend
  {
    keywords: ["frontend", "front-end", "ui", "user interface"],
    response: "Prabesh excels in frontend development with expertise in React, Next.js, TypeScript, Tailwind CSS, and creating pixel-perfect, responsive designs. He focuses on user experience and modern UI patterns."
  },
  
  // Backend
  {
    keywords: ["backend", "back-end", "server", "api"],
    response: "On the backend, Prabesh works with Node.js, Express, MongoDB, PostgreSQL, and builds RESTful APIs. He creates scalable server architectures and handles database design efficiently."
  },
  
  // Services
  {
    keywords: ["services", "offer", "what do you offer", "hire for"],
    response: "Prabesh offers:\n• Full Stack Web Development\n• Custom Web Applications\n• UI/UX Design & Implementation\n• API Development & Integration\n• Website Optimization & Maintenance\n• Responsive Design Solutions"
  },
  
  // Availability
  {
    keywords: ["available", "hire", "freelance", "open to work"],
    response: "Prabesh is currently available for freelance projects and full-time opportunities! Contact him through the Contact Universe to discuss your project needs."
  },
  
  // Thank you
  {
    keywords: ["thank", "thanks", "appreciate"],
    response: "You're welcome, Traveler! Feel free to explore the multiverse and ask me anything else about Prabesh's work and skills. 🚀"
  },
  
  // Help
  {
    keywords: ["help", "what can you do", "commands"],
    response: "I can answer questions about:\n• Prabesh's skills and technologies\n• Work experience and projects\n• Education and certifications\n• Contact information\n• Available services\n\nJust ask me anything!"
  },
  
  // Name
  {
    keywords: ["name", "your name", "what's your name", "who are you"],
    response: "I'm Nexus AI, the intelligent assistant for Prabesh Acharya's portfolio. I'm here to answer all your questions about his work, skills, and experience!"
  },
  
  // Age/Location specific
  {
    keywords: ["where is he from", "location", "where", "based", "from nepal"],
    response: `Prabesh is based in ${portfolioData.location}. He works with clients globally and is open to both remote and on-site opportunities.`
  },
  
  // Strengths
  {
    keywords: ["strength", "good at", "best at", "expertise", "specialization"],
    response: "Prabesh's key strengths include:\n• Building responsive, modern web applications\n• Full-stack development with React and Node.js\n• Creating intuitive user interfaces\n• Writing clean, maintainable code\n• Problem-solving and debugging\n• Fast learner of new technologies"
  },
  
  // Database
  {
    keywords: ["database", "mongodb", "postgresql", "sql", "nosql"],
    response: "Prabesh works with both SQL and NoSQL databases:\n• MongoDB - for flexible, document-based storage\n• PostgreSQL - for relational data and complex queries\n• Database design, optimization, and migrations"
  },
  
  // TypeScript
  {
    keywords: ["typescript", "ts"],
    response: "Absolutely! Prabesh is proficient in TypeScript and uses it extensively in his projects. He leverages TypeScript for type safety, better code quality, and enhanced developer experience in both frontend and backend development."
  },
  
  // Design
  {
    keywords: ["design", "ui/ux", "figma", "designer"],
    response: "Prabesh has a strong eye for design! He works with Figma to create mockups and prototypes, and excels at implementing pixel-perfect designs with attention to detail. He understands UI/UX principles and creates user-friendly interfaces."
  },
  
  // Best project
  {
    keywords: ["best project", "favorite project", "proud of"],
    response: "Prabesh has worked on many exciting projects! Some highlights include a full-featured e-commerce platform, a real-time task management system, and a travel booking platform. Each project showcases different aspects of his full-stack development skills."
  },
  
  // Years of experience
  {
    keywords: ["how long", "years", "experience years", "how many years"],
    response: "Prabesh has been actively developing web applications since 2021, with professional experience spanning multiple roles as a freelancer and full-stack developer. He's constantly learning and staying updated with the latest technologies."
  },
  
  // Work style
  {
    keywords: ["work style", "how do you work", "process", "workflow"],
    response: "Prabesh follows modern development practices:\n• Agile methodology\n• Version control with Git\n• Clean code principles\n• Thorough testing\n• Regular communication with clients\n• Attention to performance and optimization"
  },
  
  // Remote work
  {
    keywords: ["remote", "work remotely", "work from home", "online"],
    response: "Yes! Prabesh is experienced with remote work and has successfully collaborated with clients and teams worldwide. He's comfortable with remote communication tools and asynchronous workflows."
  },
  
  // Rates/Pricing
  {
    keywords: ["rate", "price", "cost", "how much", "charge", "budget"],
    response: "For pricing and project estimates, please reach out to Prabesh directly through the Contact Universe. Rates vary based on project scope, timeline, and requirements. He's happy to discuss your budget and find a solution that works!"
  },
  
  // Timeline/Delivery
  {
    keywords: ["timeline", "how long", "delivery", "fast", "quick", "deadline"],
    response: "Project timelines depend on scope and complexity. Prabesh is known for efficient delivery without compromising quality. Contact him with your project details for a realistic timeline estimate!"
  },
  
  // Next.js
  {
    keywords: ["nextjs", "next.js", "next js"],
    response: "Yes! Prabesh is skilled in Next.js and uses it for building performant, SEO-friendly React applications. He's experienced with SSR, SSG, API routes, and the latest Next.js features."
  },
  
  // Tailwind CSS
  {
    keywords: ["tailwind", "tailwind css", "styling"],
    response: "Prabesh loves Tailwind CSS! He uses it extensively to create beautiful, responsive designs quickly. He's proficient in utility-first CSS and custom Tailwind configurations."
  },
  
  // Testing
  {
    keywords: ["test", "testing", "jest", "quality"],
    response: "Prabesh follows testing best practices to ensure code quality and reliability. He's experienced with unit testing, integration testing, and debugging to deliver bug-free applications."
  },
  
  // Collaboration
  {
    keywords: ["team", "collaborate", "work with", "communication"],
    response: "Prabesh is a great team player! He has experience working in collaborative environments, communicating effectively, and using tools like Git, Slack, and project management platforms for smooth teamwork."
  },
  
  // Learning
  {
    keywords: ["learning", "learn", "new technology", "studying"],
    response: "Prabesh is passionate about continuous learning! He stays updated with the latest web development trends, regularly explores new technologies, and believes in evolving with the industry."
  },
  
  // Why hire
  {
    keywords: ["why hire", "why choose", "what makes you", "why you"],
    response: "Why choose Prabesh?\n• Full-stack expertise with modern tech\n• Strong problem-solving skills\n• Clean, maintainable code\n• Great communication\n• Dedicated to quality and deadlines\n• Passionate about creating great user experiences"
  },
  
  // Hobbies/Personal
  {
    keywords: ["hobby", "hobbies", "personal", "free time", "interests"],
    response: "When not coding, Prabesh enjoys exploring new technologies, contributing to open-source projects, and staying active in the developer community. He's always excited about tech and innovation!"
  },
  
  // Languages
  {
    keywords: ["language", "languages", "speak", "english", "nepali"],
    response: "Prabesh is fluent in English and Nepali, making it easy to communicate with clients from different backgrounds. Clear communication is key to successful projects!"
  },
  
  // Goodbye
  {
    keywords: ["bye", "goodbye", "see you", "later"],
    response: "Safe travels through the multiverse, friend! Feel free to return anytime you have more questions about Prabesh. May your code be bug-free! 👋✨"
  },
  
  // Web Development
  {
    keywords: ["web development", "web dev", "website development", "web apps"],
    response: "Prabesh specializes in modern web development, creating responsive, fast, and user-friendly applications. He builds everything from simple landing pages to complex full-stack applications with authentication, databases, and real-time features."
  },
  
  // Mobile Development
  {
    keywords: ["mobile", "app development", "ios", "android", "mobile app"],
    response: "While Prabesh primarily focuses on web development, he builds responsive web applications that work seamlessly on mobile devices. He's also exploring React Native for cross-platform mobile app development."
  },
  
  // E-commerce
  {
    keywords: ["ecommerce", "e-commerce", "online store", "shopping", "shop"],
    response: "Yes! Prabesh has built several e-commerce platforms with features like:\n• Product catalogs and search\n• Shopping cart and checkout\n• Payment gateway integration\n• Order management\n• Admin dashboards\n• Inventory tracking"
  },
  
  // CMS
  {
    keywords: ["cms", "content management", "wordpress", "headless cms"],
    response: "Prabesh works with modern headless CMS solutions and can integrate them with React/Next.js applications. He builds custom content management systems tailored to specific business needs."
  },
  
  // API Development
  {
    keywords: ["api", "rest api", "restful", "endpoints"],
    response: "Prabesh is experienced in building robust RESTful APIs with:\n• Node.js and Express\n• Authentication and authorization\n• Data validation\n• Error handling\n• API documentation\n• Rate limiting and security"
  },
  
  // Authentication
  {
    keywords: ["authentication", "auth", "login", "signup", "jwt", "oauth"],
    response: "Prabesh implements secure authentication systems using:\n• JWT (JSON Web Tokens)\n• OAuth 2.0\n• Session management\n• Password hashing and security\n• Multi-factor authentication\n• Social login integration"
  },
  
  // Performance
  {
    keywords: ["performance", "speed", "optimization", "fast", "optimize"],
    response: "Prabesh prioritizes performance in all projects:\n• Code splitting and lazy loading\n• Image optimization\n• Caching strategies\n• Minification and bundling\n• Database query optimization\n• Lighthouse score improvements"
  },
  
  // SEO
  {
    keywords: ["seo", "search engine", "google", "ranking"],
    response: "Prabesh builds SEO-friendly applications with:\n• Server-side rendering (SSR)\n• Meta tags and Open Graph\n• Semantic HTML\n• Site maps and robots.txt\n• Fast loading times\n• Mobile-first design"
  },
  
  // Deployment
  {
    keywords: ["deploy", "deployment", "hosting", "server", "vercel", "netlify"],
    response: "Prabesh handles deployment on various platforms:\n• Vercel and Netlify for frontend\n• AWS, DigitalOcean for backend\n• Docker containerization\n• CI/CD pipelines\n• Environment configuration\n• Domain setup and SSL"
  },
  
  // Git
  {
    keywords: ["git", "github", "version control", "repository"],
    response: "Prabesh is proficient with Git and GitHub:\n• Version control best practices\n• Branching strategies\n• Pull requests and code reviews\n• Collaboration workflows\n• Repository management\n• Open source contributions"
  },
  
  // Responsive Design
  {
    keywords: ["responsive", "mobile first", "responsive design", "breakpoints"],
    response: "All of Prabesh's projects are fully responsive! He uses:\n• Mobile-first approach\n• Flexible grid layouts\n• Media queries\n• Responsive images\n• Touch-friendly interfaces\n• Cross-device testing"
  },
  
  // State Management
  {
    keywords: ["state", "redux", "zustand", "state management", "context"],
    response: "Prabesh manages application state using:\n• React Context API for simple cases\n• Redux for complex state logic\n• Zustand for lightweight state management\n• React Query for server state\n• Local storage and session management"
  },
  
  // Security
  {
    keywords: ["security", "secure", "protection", "hack", "safe"],
    response: "Security is a priority! Prabesh implements:\n• Input validation and sanitization\n• SQL injection prevention\n• XSS protection\n• CSRF tokens\n• Secure authentication\n• HTTPS and SSL certificates\n• Environment variable protection"
  },
  
  // Payment Integration
  {
    keywords: ["payment", "stripe", "paypal", "pay", "checkout"],
    response: "Prabesh integrates payment gateways like:\n• Stripe for card payments\n• PayPal integration\n• Secure checkout flows\n• Webhook handling\n• Subscription management\n• Invoice generation"
  },
  
  // Real-time Features
  {
    keywords: ["real-time", "realtime", "websocket", "live", "socket"],
    response: "Prabesh builds real-time features using:\n• WebSockets\n• Socket.io\n• Live notifications\n• Chat systems\n• Real-time collaboration\n• Live data updates"
  },
  
  // Dashboard
  {
    keywords: ["dashboard", "admin panel", "admin", "control panel"],
    response: "Prabesh creates powerful admin dashboards with:\n• Data visualization and charts\n• User management\n• Analytics and reporting\n• Content management\n• Role-based access control\n• Responsive tables and forms"
  },
  
  // JavaScript
  {
    keywords: ["javascript", "js", "vanilla js", "es6"],
    response: "Prabesh is an expert in JavaScript! He uses:\n• Modern ES6+ syntax\n• Async/await patterns\n• Functional programming\n• DOM manipulation\n• Event handling\n• Array and object methods"
  },
  
  // Node.js
  {
    keywords: ["node", "nodejs", "node.js"],
    response: "Prabesh builds robust backend services with Node.js:\n• Express.js framework\n• RESTful API development\n• Middleware implementation\n• Error handling\n• File uploads and processing\n• Background jobs and cron tasks"
  },
  
  // HTML/CSS
  {
    keywords: ["html", "css", "html5", "css3", "markup"],
    response: "Prabesh has strong foundations in HTML5 and CSS3:\n• Semantic HTML structure\n• Flexbox and Grid layouts\n• CSS animations and transitions\n• CSS preprocessors (Sass)\n• Modern CSS features\n• Cross-browser compatibility"
  },
  
  // Animations
  {
    keywords: ["animation", "animate", "motion", "framer"],
    response: "Prabesh creates smooth animations using:\n• Framer Motion for React\n• CSS transitions and keyframes\n• GSAP for complex animations\n• Scroll-triggered effects\n• Micro-interactions\n• Page transitions"
  },
  
  // Forms
  {
    keywords: ["form", "forms", "validation", "input"],
    response: "Prabesh builds user-friendly forms with:\n• React Hook Form\n• Client-side validation\n• Server-side validation\n• Error handling\n• File uploads\n• Multi-step forms\n• Form state management"
  },
  
  // Error Handling
  {
    keywords: ["error", "bug", "debug", "debugging"],
    response: "Prabesh is skilled at debugging and error handling:\n• Chrome DevTools expertise\n• Error boundaries in React\n• Try-catch blocks\n• Logging and monitoring\n• Error tracking tools\n• Systematic debugging approach"
  },
  
  // Cloud Services
  {
    keywords: ["aws", "cloud", "azure", "digitalocean"],
    response: "Prabesh works with cloud platforms:\n• AWS (EC2, S3, Lambda)\n• DigitalOcean droplets\n• Cloud deployment\n• Storage solutions\n• Serverless functions\n• Cloud databases"
  },
  
  // Docker
  {
    keywords: ["docker", "container", "containerization"],
    response: "Prabesh uses Docker for:\n• Application containerization\n• Development environments\n• Consistent deployments\n• Docker Compose for multi-container apps\n• Container orchestration\n• Portable applications"
  },
  
  // GraphQL
  {
    keywords: ["graphql", "graph ql", "apollo"],
    response: "Prabesh has experience with GraphQL:\n• Building GraphQL APIs\n• Apollo Client integration\n• Query and mutation design\n• Schema definition\n• Efficient data fetching\n• Real-time subscriptions"
  },
  
  // Agile
  {
    keywords: ["agile", "scrum", "sprint", "methodology"],
    response: "Prabesh follows Agile development practices:\n• Sprint planning\n• Daily standups\n• Iterative development\n• Continuous feedback\n• Adaptable to changes\n• Regular deliverables"
  },
  
  // Code Quality
  {
    keywords: ["code quality", "clean code", "best practices", "standards"],
    response: "Prabesh writes clean, maintainable code:\n• Consistent naming conventions\n• DRY principles\n• SOLID principles\n• Code comments and documentation\n• ESLint and Prettier\n• Code reviews"
  },
  
  // Bootstrap
  {
    keywords: ["bootstrap", "framework", "css framework"],
    response: "While Prabesh primarily uses Tailwind CSS, he's also familiar with Bootstrap and other CSS frameworks. He can work with whatever framework your project requires!"
  },
  
  // WordPress
  {
    keywords: ["wordpress", "wp"],
    response: "Prabesh can work with WordPress for:\n• Theme customization\n• Plugin development\n• Headless WordPress with React\n• WooCommerce setup\n• Content migration\n• Performance optimization"
  },
  
  // Consultation
  {
    keywords: ["consult", "consultation", "advice", "recommend"],
    response: "Prabesh offers technical consultation for:\n• Technology stack selection\n• Architecture planning\n• Code reviews\n• Performance audits\n• Best practices guidance\n• Project planning and estimation"
  },
  
  // Maintenance
  {
    keywords: ["maintain", "maintenance", "update", "support"],
    response: "Prabesh provides ongoing maintenance:\n• Bug fixes and patches\n• Feature updates\n• Security updates\n• Performance monitoring\n• Content updates\n• Technical support"
  },
  
  // Migration
  {
    keywords: ["migrate", "migration", "transfer", "move"],
    response: "Prabesh handles migrations:\n• Legacy code modernization\n• Platform migrations\n• Database migrations\n• Hosting transfers\n• Data migration\n• Zero-downtime migrations"
  },
  
  // Accessibility
  {
    keywords: ["accessibility", "a11y", "wcag", "accessible"],
    response: "Prabesh builds accessible applications:\n• WCAG compliance\n• Screen reader support\n• Keyboard navigation\n• Semantic HTML\n• ARIA labels\n• Color contrast standards"
  },
  
  // Progressive Web Apps
  {
    keywords: ["pwa", "progressive web app", "service worker"],
    response: "Prabesh builds Progressive Web Apps with:\n• Service workers\n• Offline functionality\n• Push notifications\n• App-like experience\n• Installation prompts\n• Fast loading times"
  },
  
  // Email
  {
    keywords: ["email", "emailjs", "send email", "contact form"],
    response: "Prabesh implements email functionality:\n• Contact form handling\n• EmailJS integration\n• Transactional emails\n• Email templates\n• Newsletter systems\n• Email validation"
  },
  
  // Maps
  {
    keywords: ["map", "maps", "google maps", "location"],
    response: "Prabesh integrates map features:\n• Google Maps API\n• Location services\n• Interactive maps\n• Geolocation\n• Direction routing\n• Custom markers"
  },
  
  // Charts
  {
    keywords: ["chart", "charts", "graph", "visualization", "recharts"],
    response: "Prabesh creates data visualizations:\n• Recharts for React\n• Bar, line, pie charts\n• Real-time data display\n• Interactive charts\n• Dashboard analytics\n• Custom visualizations"
  },
  
  // File Upload
  {
    keywords: ["file upload", "upload", "file", "image upload"],
    response: "Prabesh implements file upload systems:\n• Multiple file uploads\n• Image optimization\n• File validation\n• Progress indicators\n• Cloud storage integration\n• Drag and drop interfaces"
  },
  
  // Search
  {
    keywords: ["search", "search functionality", "filter", "find"],
    response: "Prabesh builds search features:\n• Full-text search\n• Advanced filtering\n• Autocomplete\n• Search suggestions\n• Elasticsearch integration\n• Fast query performance"
  },
  
  // Internationalization
  {
    keywords: ["i18n", "internationalization", "translation", "multilingual", "multi-language"],
    response: "Prabesh can implement multi-language support:\n• i18n libraries\n• Language switching\n• Translation management\n• RTL support\n• Localized content\n• Currency and date formatting"
  },
  
  // Webhooks
  {
    keywords: ["webhook", "webhooks", "api hooks"],
    response: "Prabesh works with webhooks:\n• Webhook receivers\n• Event-driven architecture\n• Third-party integrations\n• Secure webhook handling\n• Retry mechanisms\n• Webhook testing"
  },
  
  // Caching
  {
    keywords: ["cache", "caching", "redis"],
    response: "Prabesh implements caching strategies:\n• Redis caching\n• Browser caching\n• API response caching\n• CDN caching\n• Cache invalidation\n• Performance optimization"
  },
  
  // Microservices
  {
    keywords: ["microservice", "microservices", "architecture"],
    response: "Prabesh understands microservices architecture:\n• Service decomposition\n• API gateway patterns\n• Inter-service communication\n• Independent deployment\n• Scalability\n• Service orchestration"
  },
  
  // Documentation
  {
    keywords: ["documentation", "document", "docs", "readme"],
    response: "Prabesh provides comprehensive documentation:\n• Clear README files\n• API documentation\n• Code comments\n• User guides\n• Technical specifications\n• Setup instructions"
  },
  
  // Refactoring
  {
    keywords: ["refactor", "refactoring", "improve code", "restructure"],
    response: "Prabesh excels at code refactoring:\n• Legacy code improvement\n• Performance optimization\n• Code organization\n• Removing technical debt\n• Design pattern implementation\n• Maintaining functionality while improving structure"
  },
  
  // Prototyping
  {
    keywords: ["prototype", "prototyping", "mvp", "proof of concept"],
    response: "Prabesh can quickly build prototypes:\n• MVP development\n• Rapid prototyping\n• Proof of concept\n• Mockups to code\n• Iterative design\n• Fast turnaround"
  },
  
  // Competitive Advantage
  {
    keywords: ["advantage", "different", "unique", "stand out"],
    response: "What sets Prabesh apart:\n• Modern tech stack expertise\n• Full-stack capabilities\n• Strong design sense\n• Fast and reliable delivery\n• Clear communication\n• Passionate about quality\n• Continuous learning\n• Client-focused approach"
  },
  
  // Portfolio Website
  {
    keywords: ["portfolio", "this website", "this site", "your portfolio"],
    response: "This portfolio itself is built with React, TypeScript, Tailwind CSS, and Framer Motion! It showcases Prabesh's skills in creating interactive, visually stunning web experiences. Pretty cool, right? 🚀"
  },
  
  // Inspiration
  {
    keywords: ["inspiration", "inspire", "motivated", "passion"],
    response: "Prabesh is passionate about creating digital experiences that solve real problems and delight users. He's inspired by the endless possibilities of web technologies and loves bringing ideas to life through code!"
  },
  
  // Fun Fact
  {
    keywords: ["fun fact", "interesting", "tell me something"],
    response: "Fun fact: Prabesh built this sci-fi themed portfolio to showcase how development can be both functional and creative! He loves combining technical skills with creative storytelling. ✨"
  },
  
  // Productivity
  {
    keywords: ["productive", "productivity", "tools", "workflow"],
    response: "Prabesh's productivity tools:\n• VS Code as primary editor\n• Git for version control\n• Figma for design\n• Notion for planning\n• Terminal efficiency\n• Keyboard shortcuts mastery"
  },
  
  // Industry Knowledge
  {
    keywords: ["industry", "trends", "latest", "current"],
    response: "Prabesh stays current with industry trends:\n• Following tech blogs and newsletters\n• Participating in developer communities\n• Experimenting with new technologies\n• Attending webinars and conferences\n• Reading documentation\n• Building side projects"
  },
  
  // Challenges
  {
    keywords: ["challenge", "difficult", "hard", "problem solving"],
    response: "Prabesh thrives on challenges! He approaches difficult problems with:\n• Systematic debugging\n• Research and documentation review\n• Breaking down complex issues\n• Creative problem-solving\n• Persistence and patience\n• Learning from obstacles"
  },
  
  // Future Goals
  {
    keywords: ["future", "goals", "plans", "next"],
    response: "Prabesh's future goals include:\n• Mastering cloud architecture\n• Contributing more to open source\n• Exploring AI/ML integration in web apps\n• Building SaaS products\n• Mentoring junior developers\n• Staying at the cutting edge of web tech"
  },
  
  // Testimonials
  {
    keywords: ["testimonial", "review", "feedback", "what others say"],
    response: "Clients appreciate Prabesh's:\n• Technical expertise\n• Professional communication\n• Timely delivery\n• Problem-solving abilities\n• Attention to detail\n• Going above and beyond expectations\n\nCheck the Testimonials Universe for more feedback!"
  },
  
  // Commitment
  {
    keywords: ["commitment", "dedicated", "reliable"],
    response: "Prabesh is committed to:\n• Delivering quality work on time\n• Clear and regular communication\n• Meeting project requirements\n• Ongoing support post-launch\n• Building long-term relationships\n• Exceeding expectations"
  },
  
  // Difference
  {
    keywords: ["difference", "impact", "value"],
    response: "Prabesh creates value by:\n• Understanding business goals\n• Building scalable solutions\n• Improving user experience\n• Optimizing performance\n• Writing maintainable code\n• Providing technical guidance\n• Ensuring project success"
  }
];

// Function to find the best matching response
const findBestMatch = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check each knowledge base entry
  for (const entry of knowledgeBase) {
    for (const keyword of entry.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        return entry.response;
      }
    }
  }
  
  // Default response if no match found
  return "Hmm, I'm not sure about that. Try asking me about Prabesh's skills, projects, experience, education, or how to contact him. I'm here to help you navigate his portfolio!";
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  // Simulate a slight delay to make it feel more natural
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return findBestMatch(message);
};
