import { Project, Skill, Experience, Service, Testimonial } from './types';
import { 
  Globe, User, Cpu, Layers, Clock, GraduationCap, 
  Zap, Trophy, MessageSquare, BarChart2, Bot, Mail
} from 'lucide-react';

export const portfolioData = {
  name: "Alex 'Void' Walker",
  role: "Full-Stack Neural Architect",
  tagline: "Building digital realities across the multiverse.",
  about: "I am a creative technologist specializing in React ecosystems and immersive web experiences. I blend high-performance code with stunning visual aesthetics to create applications that feel like they're from the future.",
  location: "Sector 7, Earth-Prime",
  email: "alex.walker@nexus.dev"
};

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 98, category: "Design" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Three.js / R3F", level: 80, category: "Design" },
  { name: "GraphQL", level: 82, category: "Backend" },
  { name: "Python / AI", level: 75, category: "Tools" },
  { name: "Docker / K8s", level: 70, category: "Tools" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nebula Dashboard",
    category: "Analytics",
    description: "A real-time crypto analytics dashboard with holographic visualizations.",
    tech: ["React", "D3.js", "WebSockets"],
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "Quantum E-Com",
    category: "E-Commerce",
    description: "Headless e-commerce platform with AI-driven recommendations.",
    tech: ["Next.js", "Shopify API", "Gemini"],
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "CyberSocial",
    category: "Social",
    description: "Decentralized social graph visualizer using WebGL.",
    tech: ["Three.js", "React-Force-Graph", "Solidity"],
    image: "https://picsum.photos/600/400?random=3"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechNova Corp",
    period: "2022 - Present",
    description: "Leading the UI/UX overhaul of the flagship SaaS platform. Improved performance by 40%."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Orbital Studios",
    period: "2019 - 2022",
    description: "Developed interactive marketing sites for Fortune 500 clients using WebGL and React."
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "CodeFoundry",
    period: "2018 - 2019",
    description: "Maintained legacy codebases and migrated jQuery apps to React."
  }
];

export const SERVICES: Service[] = [
  { title: "Web Application Dev", icon: "Globe", description: "Scalable, high-performance web apps built with modern stacks." },
  { title: "UI/UX Architecture", icon: "Layers", description: "Design systems and component libraries for cohesive user experiences." },
  { title: "3D Web Integration", icon: "Cpu", description: "Immersive WebGL experiences using Three.js and R3F." },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Sarah Connor", role: "CTO, Skynet Inc", text: "Alex's code is cleaner than a fresh cyborg chassis. Highly recommended.", avatar: "https://picsum.photos/100/100?random=10" },
  { id: 2, name: "Flynn", role: "Grid Architect", text: "Visually stunning work. He built a grid that changed everything.", avatar: "https://picsum.photos/100/100?random=11" },
  { id: 3, name: "Neo", role: "The One", text: "He sees the matrix. The interfaces he builds are beyond reality.", avatar: "https://picsum.photos/100/100?random=12" }
];

export const EDUCATION = [
  { degree: "M.S. Computer Science", school: "MIT (Multiverse Institute of Tech)", year: "2018" },
  { degree: "B.S. Digital Arts", school: "Design Academy of Mars", year: "2016" }
];

export const ACHIEVEMENTS = [
  { title: "Best UI Award 2023", org: "Awwwards" },
  { title: "Hackathon Winner", org: "Global AI Hack" },
  { title: "Open Source Hero", org: "GitHub" }
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
