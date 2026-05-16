import {
  Globe, User, Cpu, Layers, Clock, GraduationCap,
  Zap, Trophy, MessageSquare, BarChart2, Bot, Mail
} from 'lucide-react';

export const portfolioData = {
  name: "Prabesh Acharya",
  role: "Web Developer",
  tagline: "Building clean, functional, and user-friendly web experiences.",
  about: "Passionate  Web Developer with experience in Laravel, React.js, and modern frontend technologies. Skilled in building responsive web applications, REST API integrations, and scalable backend systems with clean UI, optimized performance, and user-focused design. Experienced in developing dynamic admin dashboards, reusable frontend components, and modern web solutions that deliver smooth and efficient user experiences.",
  location: "Nepal",
  email: "praveshach1032@gmail.com",
  phone: "+977 9812965110",
  github: "https://github.com/prabesh1032",
  linkedin: "https://www.linkedin.com/in/prabesh-acharya-8547a2321/",
  instagram: "https://www.instagram.com/prabesh_ach/",
  twitter: "https://x.com/PrabeshAch33319",
  facebook: "https://www.facebook.com/pravesh.ach/",
  portfolio: ""
};

export const SKILLS = [
  // Frontend
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "React.js", level: 82, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },
  { name: "Responsive Design", level: 90, category: "Frontend" },
  { name: "Framer Motion", level: 75, category: "Frontend" },

  // Backend
  { name: "PHP", level: 88, category: "Backend" },
  { name: "Laravel", level: 86, category: "Backend" },
  { name: "REST APIs", level: 84, category: "Backend" },
  { name: "MySQL", level: 82, category: "Backend" },

  // Tools
  { name: "Git & GitHub", level: 85, category: "Tools" },
  { name: "Postman", level: 78, category: "Tools" },
];

export const PROJECTS = [
  {
    id: 0,
    title: "The Ink Light",
    category: "Blog & Content Platform",
    description: "A modern MERN stack blog platform designed for publishing and managing articles with a clean and responsive user interface. Features include dynamic blog management, category-based content organization, responsive layouts, and smooth user experience for readers across all devices.",
    tech: [ "React.js", "Tailwind CSS","Express.js", "PostgreSQL"],
    image: "/images/theinklight/inklight.png",
    github: "https://github.com/prabesh1032",
    live: "https://theinklight-frontend.onrender.com/"
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
    id: 5,
    title: "YatraSathi",
    category: "Travel & Tourism",
    description: "Comprehensive travel and adventure platform for modern travel enthusiasts. Features curated destinations, customized travel packages, interactive maps, real-time availability, dynamic package customization, user reviews, and secure booking with multiple payment options.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/yatrasathi/home-bg2.jpg",
    github: "https://github.com/prabesh1032/YatraSathi"
  },
  {
    id: 6,
    title: "Task Management",
    category: "Productivity",
    description: "Robust and user-friendly application designed to streamline task organization and progress tracking. Features task creation, editing, deletion with form validation, user dashboard, status tracking, and role-based access control system.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/task management/task management.png",
    github: "https://github.com/prabesh1032/Task-management"
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
    tech: ["Laravel", "JavaScript", "Tailwind CSS", ],
    image: "/images/foodcircle/foodcircle.jpg",
    github: "https://github.com/prabesh1032/Food-Circle"
  },
  {
    id: 9,
    title: "Lumbini ICT Campus",
    category: "Educational",
    description: "Comprehensive digital platform showcasing institutional academic excellence, modern facilities, and vibrant student community. Features academic programs, faculty profiles, student resources, event management, alumni network, and virtual campus tours.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/lumbini ict campus/ict.png",
    github: "https://github.com/Amansolta/lict"
  },
  {
    id: 10,
    title: "Ankur Nepal",
    category: "Non-Profit",
    description: "Ankur Nepal is a dedicated non-profit organization committed to child welfare and community development. The website showcases ongoing projects, fundraising campaigns, volunteer opportunities, and impact stories with donation system and transparent financial reporting.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/Ankur nepal/Ankurnepal.jpg",
    github: "https://github.com/prabesh1032/ankur-nepal"
  },

  {
    id: 11,
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
    role: "Web Developer",
    company: "Bitmap IT Solution Pvt Ltd",
    period: "2024 - 2025",
    description:
      "Developed scalable web applications using Laravel, React.js, PHP, and MySQL. Built reusable frontend components, integrated REST APIs, improved application performance, and created responsive modern user interfaces."
  },

  {
    id: 2,
    role: "Full Stack Developer",
    company: "Freelance & Personal Projects",
    period: "2023 - Present",
    description:
      "Built and deployed full-stack web applications including educational platforms, business websites, and modern frontend systems using Laravel, React.js, Tailwind CSS, and REST APIs."
  },

  {
    id: 3,
    role: "Bachelor in Information Management",
    company: "Tribhuvan University",
    period: "2021 - 2026",
    description:
      "Studying web technologies, database systems, software engineering, networking, and project management with practical development experience."
  },

  {
    id: 4,
    role: "Self-Learning & Skill Development",
    company: "Continuous Learning",
    period: "2020 - Present",
    description:
      "Continuously improving skills in modern web development, UI/UX design, frontend technologies, backend systems, and scalable application architecture through hands-on projects and real-world development."
  }
];

export const SERVICES = [
  {
    title: "Full Stack Web Development",
    icon: Globe,
    description:
      "Building responsive and scalable web applications using Laravel, React.js, PHP, and modern frontend technologies."
  },
  {
    title: "Frontend Development",
    icon: Layers,
    description:
      "Creating modern, responsive, and user-friendly interfaces with React.js, Tailwind CSS, and JavaScript."
  },
  {
    title: "Backend Development",
    icon: Cpu,
    description:
      "Developing secure backend systems, REST APIs, authentication, and dynamic functionalities using Laravel and PHP."
  },
  {
    title: "REST API Integration",
    icon: Globe,
    description:
      "Integrating third-party APIs and building efficient RESTful services for seamless data communication."
  },
  {
    title: "Admin Dashboard Systems",
    icon: Layers,
    description:
      "Building dynamic admin panels with content management, analytics, and user management functionalities."
  },
  {
    title: "Website Maintenance",
    icon: Cpu,
    description:
      "Providing bug fixes, performance optimization, responsive improvements, and ongoing website support."
  }
];

export const TESTIMONIALS = [
  { id: 1, name: "Pratik Tiwari", role: "Graphics Designer", text: "Prabesh delivered exceptional work on our travel platform. His attention to detail and technical expertise made the project a success.", avatar: "/images/testinomials/pratik.jpg" },
  { id: 2, name: "Pradip Khanal", role: "Front-End Developer", text: "Working with Prabesh was a great experience. He's dedicated, skilled, and always willing to learn and improve.", avatar: "/images/testinomials/pradip.jpg" },
  { id: 3, name: "Arjun Bhusal", role: "Back-End Developer", text: "Prabesh has strong problem-solving skills and writes clean, maintainable code. A valuable team member.", avatar: "/images/testinomials/arjun.jpg" }
];

export const ACHIEVEMENTS = [
  { title: "10+ Web Projects Built", org: "Full Stack Development" },

  { title: "1+ Year Professional Experience", org: "Bitmap IT Solution Pvt Ltd" },

  { title: "Modern Full Stack Applications", org: "Laravel & React.js" },

  { title: "REST API Integration Experience", org: "Backend Development" },

  { title: "Responsive UI/UX Development", org: "Modern Frontend Design" },

  { title: "Git & GitHub Workflow", org: "Version Control & Collaboration" },

  { title: "Continuous Learning Journey", org: "Web Technologies & Development" }
];

export const UNIVERSES = [
  { id: 'hero', name: 'Home', icon: Globe },
  { id: 'about', name: 'About', icon: User },
  { id: 'skills', name: 'Skills', icon: Zap },
  { id: 'projects', name: 'Projects', icon: Layers },
  { id: 'experience', name: 'Experience', icon: Clock },
  { id: 'services', name: 'Services', icon: Cpu },
  { id: 'achievements', name: 'Achievements', icon: Trophy },
  { id: 'testimonials', name: 'Testimonials', icon: MessageSquare },
  { id: 'ai', name: 'AI Assistant', icon: Bot },
  { id: 'contact', name: 'Contact', icon: Mail },
];
