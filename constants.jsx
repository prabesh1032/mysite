import {
  Globe, User, Cpu, Layers, Clock, GraduationCap,
  Zap, Trophy, MessageSquare, BarChart2, Bot, Mail,
  Database, Briefcase
} from 'lucide-react';

export const portfolioData = {
  name: "Prabesh Acharya",

  role: "Full Stack Developer",

  tagline:
    "Building scalable, modern, and user-centric web applications with Laravel, Next.js and MERN Stack.",

  about:
    "I'm a Full Stack Developer passionate about building modern, scalable, and high-performance web applications. I specialize in MERN Stack, Laravel, Next.js, React, TypeScript, and REST APIs. I enjoy transforming complex business requirements into clean, responsive, and user-friendly digital experiences while continuously learning modern technologies and software architecture.",

  location: "Kathmandu, Nepal",

  email: "praveshach1032@gmail.com",

  phone: "+977 9812965110",

  github: "https://github.com/prabesh1032",

  linkedin: "https://www.linkedin.com/in/prabesh1032/",

  instagram: "https://www.instagram.com/prabesh_ach/",

  twitter: "https://x.com/PrabeshAch33319",

  facebook: "https://www.facebook.com/pravesh.ach/",

  portfolio: "https://prabeshacharya10.com.np"
};

export const SKILLS = [
  // Frontend
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "TypeScript", level: 72, category: "Frontend" },
  { name: "React.js", level: 85, category: "Frontend" },
  { name: "Next.js", level: 75, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },
  { name: "Responsive Design", level: 90, category: "Frontend" },
  { name: "Framer Motion", level: 75, category: "Frontend" },

  // Backend
  { name: "PHP", level: 88, category: "Backend" },
  { name: "Laravel", level: 87, category: "Backend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Express.js", level: 72, category: "Backend" },
  { name: "REST APIs", level: 85, category: "Backend" },
  { name: "MySQL", level: 84, category: "Backend" },
  { name: "MongoDB", level: 72, category: "Backend" },

  // Tools
  { name: "Git & GitHub", level: 88, category: "Tools" },
  { name: "Postman", level: 82, category: "Tools" },
];

export const PROJECTS = [
  {
    id: 0,
    title: "TypeTheory",
    category: "Blog & Content Platform",
    description: "A full-stack blog platform built with React and Laravel, designed for publishing and managing articles. Features include user authentication, dynamic blog management, category-based content organization, Cloudinary image uploads, and a clean responsive UI for readers across all devices.",
    tech: ["React.js", "Tailwind CSS", "Laravel", "PostgreSQL", "Cloudinary"],
    image: "/images/typetheory/typetheory.png",
    github: "https://github.com/prabesh1032",
    live: "https://typetheory.vercel.app/"
  },
  {
    id: 5,
    title: "YatraSathi",
    category: "Travel & Tourism",
    description:
      "Comprehensive travel and adventure platform for modern travelers. Features curated destinations, customized tour packages, interactive destination pages, real-time package availability, secure booking system, user authentication, admin dashboard, and responsive design for seamless trip planning.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/yatrasathi/home-bg2.jpg",
    github: "https://github.com/prabesh1032/YatraSathi",
    live: "https://yatrasathi-yl3m.onrender.com/"
  },
  {
    id: 6,
    title: "Task Management",
    category: "Productivity",
    description: "Robust and user-friendly application designed to streamline task organization and progress tracking. Features task creation, editing, deletion with form validation, user dashboard, status tracking, and role-based access control system.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/task management/task management.png",
    github: "https://github.com/prabesh1032/Task-management",
    live: "https://task-management-1-6r9k.onrender.com/"
  },
  {
    id: 2,
    title: "Connect for Study",
    category: "Education & Migration",
    description: "Connect Australian Education and Visa Services is your trusted partner for studying and immigrating to Australia. Comprehensive education and migration consulting services with personalized guidance for international students. Services include course selection, visa documentation, interview preparation, and post-arrival orientation.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/connect/aussflag.png",
    github: "https://github.com/sudipparajulee/connect-for-study",
    live: "https://connectforstudy.com.au/"
  },
  {
    id: 3,
    title: "Smart Hand Cleaning Services",
    category: "Service Platform",
    description: "Professional platform offering comprehensive cleaning and sanitation solutions for residential and commercial properties. Features service packages, pricing transparency, booking system, real-time confirmation, and customer loyalty programs with verified professional cleaners.",
    tech: ["Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
    image: "/images/smarthand/1760520326.jpg",
    github: "https://github.com/Amansolta/smartHandsCleaningServices",
    live: "http://smarthandscleaningservices.com.au/"
  },
  {
    id: 4,
    title: "Chethna",
    category: "E-Commerce",
    description: "Advanced e-commerce platform designed to revolutionize online shopping for grocery and general merchandise. Features intelligent product categorization, secure checkout, order tracking, personalized recommendations, and comprehensive admin dashboard.",
    tech: ["Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
    image: "/images/chethna/ecommerce.jpg",
    github: "https://github.com/Amansolta/chetana"
  },
  {
    id: 7,
    title: "Seti-Style",
    category: "E-Commerce",
    description: "Modern e-commerce platform dedicated to fashion and apparel with curated collection of trendy clothing. Features secure checkout, real-time inventory tracking, size recommendation engine, personalized suggestions, and customer testimonials.",
    tech: ["PHP", "SQLite", "Tailwind CSS", "JavaScript"],
    image: "/images/setistyle/e-commerce.png",
    github: "https://github.com/prabesh1032/Myfirstproject"
  },
  {
    id: 8,
    title: "FoodCircle",
    category: "Social Platform",
    description: "Vibrant social platform for food enthusiasts and culinary creators. Share recipes, food blogs, cooking tips, and culinary stories with comprehensive recipe database, community forums, chef profiles, and restaurant reviews.",
    tech: ["Laravel", "JavaScript", "Tailwind CSS",],
    image: "/images/foodcircle/foodcircle.jpg",
    github: "https://github.com/prabesh1032/Food-Circle"
  },
  {
    id: 9,
    title: "TheInkLight",
    category: "Blog & Content Platform",
    description: "A modern blog platform designed for publishing and managing articles with a clean and responsive user interface. Features include dynamic blog management, category-based content organization, responsive layouts, and smooth user experience for readers across all devices.",
    tech: ["React.js", "Tailwind CSS", "Express.js", "PostgreSQL"],
    image: "/images/theinklight/inklight.png",
    github: "https://github.com/prabesh1032",
    live: "https://theinklight-frontend.onrender.com/"
  },
  {
    id: 10,
    title: "Lumbini ICT Campus",
    category: "Educational",
    description: "Comprehensive digital platform showcasing institutional academic excellence, modern facilities, and vibrant student community. Features academic programs, faculty profiles, student resources, event management, alumni network, and virtual campus tours.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/lumbini ict campus/ict.png",
    github: "https://github.com/Amansolta/lict"
  },
  {
    id: 11,
    title: "Ankur Nepal",
    category: "Non-Profit",
    description: "Ankur Nepal is a dedicated non-profit organization committed to child welfare and community development. The website showcases ongoing projects, fundraising campaigns, volunteer opportunities, and impact stories with donation system and transparent financial reporting.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/Ankur nepal/Ankurnepal.jpg",
    github: "https://github.com/prabesh1032/ankur-nepal"
  },

  {
    id: 12,
    title: "Landing Page",
    category: "Web Design",
    description: "Creative and modern landing page template designed for startups, products, and services. Features hero sections, feature highlights, testimonials, pricing tables, newsletter subscription, and responsive design optimized for conversions.",
    tech: ["React", "Tailwind CSS", "JavaScript",],
    image: "/images/landing page/landing1.png",
    github: "https://github.com/prabesh1032/landing-page"
  }

];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Cloudlaya (Technozlife Information Technology Pvt. Ltd.)",
    period: "2026 - Present",
    description:
      "Contributing to the development of real-world SaaS applications using Laravel, Next.js, TypeScript, and modern web technologies. Working with large-scale production codebases, developing reusable frontend components, integrating REST APIs, optimizing application performance, and collaborating with experienced developers to deliver scalable business solutions."
  },

  {
    id: 2,
    role: "MERN Stack Trainee",
    company: "Broadway Infosys Nepal",
    period: "2026 - Present",
    description:
      "Learning and building full-stack web applications using the MERN stack, including MongoDB, Express.js, React.js, and Node.js. Gaining hands-on experience with authentication, REST APIs, state management, database design, and modern JavaScript development through practical projects."
  },

  {
    id: 3,
    role: "PHP & Laravel Full Stack Developer",
    company: "Bitmap IT Solution Pvt. Ltd.",
    period: "2025 - 2026",
    description:
      "Developed and maintained scalable web applications using Laravel, React.js, PHP, and MySQL. Built reusable frontend components, integrated RESTful APIs, optimized application performance, and delivered responsive user interfaces for real-world business requirements."
  },

  {
    id: 4,
    role: "Freelance Full Stack Developer",
    company: "Freelance & Personal Projects",
    period: "2023 - Present",
    description:
      "Designed, developed, and deployed full-stack web applications including blogging platforms, travel booking systems, business websites, and management systems using Laravel, React.js, Tailwind CSS, MySQL, PostgreSQL, and REST APIs while following modern development practices."
  },

  {
    id: 5,
    role: "Bachelor in Information Management (BIM)",
    company: "Tribhuvan University",
    period: "2021 - 2026",
    description:
      "Completed a Bachelor's degree in Information Management with a strong foundation in software engineering, web development, database management, networking, system analysis, project management, and practical software development."
  }
];
export const SERVICES = [
  {
    title: "Full Stack Web Development",
    icon: Globe,
    description:
      "Building scalable, secure, and high-performance web applications using MERN Stack, Laravel, Next.js, TypeScript, and modern web technologies."
  },
  {
    title: "Frontend Development",
    icon: Layers,
    description:
      "Developing responsive, interactive, and user-friendly interfaces using React.js, Next.js, TypeScript, Tailwind CSS, and modern UI practices."
  },
  {
    title: "Backend & API Development",
    icon: Cpu,
    description:
      "Building robust backend systems, RESTful APIs, authentication, database architecture, and business logic using Laravel, Node.js, Express.js, PHP, and MySQL."
  },
  {
    title: "Database Design",
    icon: Database,
    description:
      "Designing efficient database structures and managing data using MySQL, PostgreSQL, and MongoDB with optimized performance and scalability."
  },
  {
    title: "SaaS & Business Applications",
    icon: Briefcase,
    description:
      "Developing business-focused web applications including admin dashboards, content management systems, booking platforms, and productivity solutions."
  },
  {
    title: "Performance & Optimization",
    icon: Zap,
    description:
      "Improving website speed, responsiveness, SEO, accessibility, and overall user experience through modern development best practices."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Pratik Tiwari",
    role: "Graphic Designer",
    text: "Prabesh transformed our design ideas into a responsive and functional web application. His communication, attention to detail, and ability to solve technical challenges made collaboration smooth and efficient.",
    avatar: "/images/testinomials/pratik.jpg"
  },

  {
    id: 2,
    name: "Pradip Khanal",
    role: "Frontend Developer",
    text: "Prabesh is a quick learner who consistently writes clean, maintainable code. He's always open to feedback and works well in a collaborative development environment.",
    avatar: "/images/testinomials/pradip.jpg"
  },

  {
    id: 3,
    name: "Arjun Bhusal",
    role: "Backend Developer",
    text: "I enjoyed collaborating with Prabesh on Laravel projects. His API integration skills, problem-solving approach, and commitment to delivering quality work make him a dependable developer.",
    avatar: "/images/testinomials/arjun.jpg"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "10+ Full Stack Projects",
    org: "Successfully Designed & Developed"
  },

  {
    title: "Real Industry Experience",
    org: "Cloudlaya & Bitmap IT Solution"
  },

  {
    title: "Production Web Applications",
    org: "Laravel, Next.js & MERN Stack"
  },

  {
    title: "REST API Development",
    org: "Authentication & Third-Party Integrations"
  },

  {
    title: "Modern Database Experience",
    org: "MySQL, PostgreSQL & MongoDB"
  },

  {
    title: "Version Control & Collaboration",
    org: "Git, GitHub & Team Workflow"
  },

  {
    title: "Continuous Learning",
    org: "Next.js, TypeScript & System Design"
  }
];

export const UNIVERSES = [
  { id: 'hero', name: 'Home', icon: Globe },
  { id: 'about', name: 'About', icon: User },
  { id: 'skills', name: 'Skills', icon: Zap },
  { id: 'projects', name: 'Projects', icon: Layers },
  { id: 'experience', name: 'Experience', icon: Clock },
  { id: 'services', name: 'WHAT I DO', icon: Cpu },
  { id: 'achievements', name: 'Career Highlights', icon: Trophy },
  { id: 'testimonials', name: 'Testimonials', icon: MessageSquare },
  { id: 'ai', name: 'AI Assistant', icon: Bot },
  { id: 'contact', name: 'Contact', icon: Mail },
];
