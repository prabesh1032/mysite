import { Project, Skill, Experience, Service, Testimonial } from './types';
import { 
  Globe, User, Cpu, Layers, Clock, GraduationCap, 
  Zap, Trophy, MessageSquare, BarChart2, Bot, Mail
} from 'lucide-react';

export const portfolioData = {
  name: "Prabesh Acharya",
  role: "Web Developer",
  tagline: "Building clean, functional, and user-friendly web experiences.",
  about: "A dedicated web developer with a strong passion for building clean, functional, and user-friendly web experiences. With a Bachelor's degree in Information Management from Lumbini ICT Campus, I specialize in Laravel and JavaScript, and enjoy bringing ideas to life through efficient backend logic and responsive frontend design using TailwindCSS. I focus on writing thoughtful, maintainable code and crafting digital solutions that are both technically sound and intuitive for users.",
  location: "Nepal",
  email: "prabesh11100@gmail.com",
  phone: "+977 9812965110",
  github: "https://github.com/prabesh1032",
  linkedin: "https://www.linkedin.com/in/prabesh-acharya-8547a2321/",
  instagram: "https://www.instagram.com/prabesh_ach/",
  twitter: "https://x.com/PrabeshAch33319"
};

export const SKILLS: Skill[] = [
  // Frontend Skills
  { name: "HTML5 & CSS3", level: 95, category: "Frontend" },
  { name: "JavaScript ES6+", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Responsive Design", level: 88, category: "Frontend" },
  { name: "React", level: 75, category: "Frontend" },
  
  // Backend Skills
  { name: "Laravel (PHP)", level: 85, category: "Backend" },
  { name: "Blade Templating", level: 80, category: "Backend" },
  { name: "MySQL / SQLite", level: 78, category: "Backend" },
  { name: "REST API", level: 82, category: "Backend" },
  
  // Tools & Platforms
  { name: "Git & GitHub", level: 85, category: "Tools" },
  { name: "Vite", level: 80, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Connect for Study",
    category: "Education & Migration",
    description: "Connect Australian Education and Visa Services is your trusted partner for studying and immigrating to Australia. Comprehensive education and migration consulting services with personalized guidance for international students. Services include course selection, visa documentation, interview preparation, and post-arrival orientation.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/connect/aussflag.png",
    github: "https://github.com/sudipparajulee/connect-for-study",
    live: "https://connectforstudy.com.au/"
  },
  {
    id: 2,
    title: "Smart Hand Cleaning Services",
    category: "Service Platform",
    description: "Professional platform offering comprehensive cleaning and sanitation solutions for residential and commercial properties. Features service packages, pricing transparency, booking system, real-time confirmation, and customer loyalty programs with verified professional cleaners.",
    tech: ["Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
    image: "/images/smarthand/1760520326.jpg",
    github: "https://github.com/Amansolta/smartHandsCleaningServices",
    live: "http://smarthandscleaningservices.com.au/"
  },
  {
    id: 3,
    title: "Chethna",
    category: "E-Commerce",
    description: "Advanced e-commerce platform designed to revolutionize online shopping for grocery and general merchandise. Features intelligent product categorization, secure checkout, order tracking, personalized recommendations, and comprehensive admin dashboard.",
    tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    image: "/images/chethna/ecommerce.jpg",
    github: "https://github.com/Amansolta/chetana"
  },
  {
    id: 4,
    title: "YatraSathi",
    category: "Travel & Tourism",
    description: "Comprehensive travel and adventure platform for modern travel enthusiasts. Features curated destinations, customized travel packages, interactive maps, real-time availability, dynamic package customization, user reviews, and secure booking with multiple payment options.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/yatrasathi/home-bg2.jpg",
    github: "https://github.com/prabesh1032/YatraSathi"
  },
  {
    id: 5,
    title: "Task Management",
    category: "Productivity",
    description: "Robust and user-friendly application designed to streamline task organization and progress tracking. Features task creation, editing, deletion with form validation, user dashboard, status tracking, and role-based access control system.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/task management/task management.png",
    github: "https://github.com/prabesh1032/Task-management"
  },
  {
    id: 6,
    title: "Seti-Style",
    category: "E-Commerce",
    description: "Modern e-commerce platform dedicated to fashion and apparel with curated collection of trendy clothing. Features secure checkout, real-time inventory tracking, size recommendation engine, personalized suggestions, and customer testimonials.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: "/images/setistyle/e-commerce.png",
    github: "https://github.com/prabesh1032/Myfirstproject"
  },
  {
    id: 7,
    title: "FoodCircle",
    category: "Social Platform",
    description: "Vibrant social platform for food enthusiasts and culinary creators. Share recipes, food blogs, cooking tips, and culinary stories with comprehensive recipe database, community forums, chef profiles, and restaurant reviews.",
    tech: ["Laravel", "JavaScript", "Tailwind CSS", "MySQL"],
    image: "/images/foodcircle/foodcircle.jpg",
    github: "https://github.com/prabesh1032/Food-Circle"
  },
  {
    id: 8,
    title: "Lumbini ICT Campus",
    category: "Educational",
    description: "Comprehensive digital platform showcasing institutional academic excellence, modern facilities, and vibrant student community. Features academic programs, faculty profiles, student resources, event management, alumni network, and virtual campus tours.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/lumbini ict campus/ict.png",
    github: "https://github.com/Amansolta/lict"
  },
  {
    id: 9,
    title: "Ankur Nepal",
    category: "Non-Profit",
    description: "Ankur Nepal is a dedicated non-profit organization committed to child welfare and community development. The website showcases ongoing projects, fundraising campaigns, volunteer opportunities, and impact stories with donation system and transparent financial reporting.",
    tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    image: "/images/Ankur nepal/Ankurnepal.jpg",
    github: "https://github.com/prabesh1032/ankur-nepal"
  },
  {
    id: 10,
    title: "Optical House",
    category: "E-Commerce",
    description: "Optical House is a premium eyewear e-commerce platform offering designer glasses, sunglasses, and contact lenses. Features virtual try-on, prescription management, home delivery, eye care tips, and expert consultation booking system.",
    tech: ["Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
    image: "/images/optical house/glasses.jpeg",
    github: "https://github.com/prabesh1032/optical-house"
  },
  {
    id: 11,
    title: "Opera Education",
    category: "Educational",
    description: "Opera Education is an innovative online learning platform offering courses, tutorials, and educational resources. Features course enrollment, progress tracking, certificate generation, interactive quizzes, instructor dashboard, and student performance analytics.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/images/opera/Opera Logo.png",
    github: "https://github.com/prabesh1032/opera-education"
  },
  {
    id: 12,
    title: "Portfolio Website",
    category: "Personal",
    description: "Modern, responsive personal portfolio website showcasing projects, skills, and professional experience. Features smooth animations, interactive UI elements, project galleries, contact form, and optimized performance.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    image: "/images/portfolio/cooder.png",
    github: "https://github.com/prabesh1032/Portfolio"
  },
  {
    id: 13,
    title: "Landing Page",
    category: "Web Design",
    description: "Creative and modern landing page template designed for startups, products, and services. Features hero sections, feature highlights, testimonials, pricing tables, newsletter subscription, and responsive design optimized for conversions.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    image: "/images/landing page/landing1.png",
    github: "https://github.com/prabesh1032/landing-page"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Self-Taught Developer Journey",
    company: "Personal Learning",
    period: "2020 - Present",
    description: "Learned web development through online courses, documentation, and consistent practice. Built hands-on experience with Laravel, modern JavaScript, and UI/UX principles by working on real-world challenges."
  },
  {
    id: 2,
    role: "Bachelor's in Information Management",
    company: "Lumbini ICT Campus",
    period: "2022 - Present",
    description: "Comprehensive program covering web technologies, database management, software engineering, and IT project management with hands-on practical experience."
  },
  {
    id: 3,
    role: "Certifications & Workshops",
    company: "Various Organizations",
    period: "2022 - Present",
    description: "Completed certifications in web development, participated in coding workshops and hackathons, and continuously sharpened skills through community engagement and practical learning."
  },
  {
    id: 4,
    role: "Internship – Web Development",
    company: "BITS (Bitmat IT Solution)",
    period: "2024",
    description: "Gained real-world experience working on production-level projects in a collaborative environment. Focused on backend logic, frontend integration, and understanding client-driven development processes."
  }
];

export const SERVICES: Service[] = [
  { 
    title: "Web Development", 
    icon: "Globe", 
    description: "Full-stack web applications with modern frameworks like Laravel and responsive design that scales beautifully. Tech: Laravel, JavaScript, PHP"
  },
  { 
    title: "E-Commerce Solutions", 
    icon: "Layers", 
    description: "Complete online stores with payment integration, inventory management, and powerful admin panels. Tech: Payment Gateway, Cart System, Admin Panel"
  },
  { 
    title: "API Development", 
    icon: "Cpu", 
    description: "RESTful APIs and robust backend services for mobile apps and web applications. Tech: REST API, JSON, Authentication"
  },
  { 
    title: "Database Design", 
    icon: "Globe", 
    description: "Efficient database architecture and optimization for lightning-fast performance. Tech: MySQL, Optimization, Indexing"
  },
  { 
    title: "UI/UX Implementation", 
    icon: "Layers", 
    description: "Beautiful, intuitive interfaces built with Tailwind CSS and modern design principles that enhance user experience."
  },
  { 
    title: "Maintenance & Support", 
    icon: "Cpu", 
    description: "Ongoing support, bug fixes, updates, and performance optimization to keep your website running smoothly and securely."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Pratik Tiwari", role: "Graphics Designer", text: "Prabesh delivered exceptional work on our travel platform. His attention to detail and technical expertise made the project a success.", avatar: "/images/testinomials/pratik.jpg" },
  { id: 2, name: "Pradip Khanal", role: "Front-End Developer", text: "Working with Prabesh was a great experience. He's dedicated, skilled, and always willing to learn and improve.", avatar: "/images/testinomials/pradip.jpg" },
  { id: 3, name: "Arjun Bhusal", role: "Back-End Developer", text: "Prabesh has strong problem-solving skills and writes clean, maintainable code. A valuable team member.", avatar: "/images/testinomials/arjun.jpg" }
];

export const EDUCATION = [
  { degree: "Bachelor's in Information Management", school: "Lumbini ICT Campus", year: "2022 - Present" },
  { degree: "Self-Taught Web Development", school: "Online Courses & Documentation", year: "2018 - Present" }
];

export const ACHIEVEMENTS = [
  { title: "25+ Projects Completed", org: "Personal & Professional" },
  { title: "3+ Years Experience", org: "Full Stack Development" },
  { title: "50+ Happy Clients", org: "Successful Collaborations" },
  { title: "4.9/5 Code Quality Rating", org: "Industry Standard" },
  { title: "2000+ Development Hours", org: "Continuous Learning" },
  { title: "15+ GitHub Repositories", org: "Open Source Contributions" },
  { title: "8+ Technologies Mastered", org: "Modern Tech Stack" }
];

export const UNIVERSES = [
  { id: 'hero', name: 'Origin Zone', icon: Globe },
  { id: 'about', name: 'Identity Chamber', icon: User },
  { id: 'skills', name: 'Ability Core', icon: Zap },
  { id: 'projects', name: 'Creation Realm', icon: Layers },
  { id: 'experience', name: 'Time Shard', icon: Clock },
  { id: 'education', name: 'Knowledge Sphere', icon: GraduationCap },
  { id: 'services', name: 'Service Sector', icon: Cpu },
  { id: 'achievements', name: 'Trophy Cluster', icon: Trophy },
  { id: 'testimonials', name: 'Voice Realm', icon: MessageSquare },
  { id: 'stats', name: 'Stats Nebula', icon: BarChart2 },
  { id: 'ai', name: 'AI Nexus', icon: Bot },
  { id: 'contact', name: 'Final Gateway', icon: Mail },
];
