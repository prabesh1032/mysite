import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tooltip as RechartTooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar 
} from 'recharts';
import { Send, MapPin, Mail, Github, Linkedin, ExternalLink, X, GraduationCap, Trophy, Globe } from 'lucide-react';
import Starfield from './components/Starfield';
import Navigation from './components/Navigation';
import { portfolioData, SKILLS, PROJECTS, EXPERIENCE, EDUCATION, SERVICES, ACHIEVEMENTS, TESTIMONIALS } from './constants';
import { sendMessageToGemini } from './services/geminiService';
import { ChatMessage, ChatSender, Project } from './types';

// --- Shared UI Components ---

const GlassPanel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-glass-bg backdrop-blur-xl border border-glass-border rounded-xl shadow-lg relative overflow-hidden ${className}`}>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />
    {children}
  </div>
);

const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-8 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-cyan-200/70 font-rajdhani text-lg mt-2 tracking-widest uppercase"
    >
      {subtitle}
    </motion.p>
  </div>
);

// --- Universes ---

const HeroUniverse = () => (
  <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4 relative py-12">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-neon-blue/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" 
    />
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute w-[280px] h-[280px] md:w-[460px] md:h-[460px] border border-neon-purple/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" 
    />
    
    <div className="relative z-10">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-neon-blue shadow-[0_0_30px_rgba(0,243,255,0.5)] mx-auto mb-6 overflow-hidden bg-black"
      >
         <img src="https://picsum.photos/400/400?grayscale" alt="Avatar" className="w-full h-full object-cover opacity-80" />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-orbitron font-black text-white mb-4 tracking-tighter"
      >
        {portfolioData.name.toUpperCase()}
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl text-neon-blue font-rajdhani bg-neon-blue/10 px-4 py-2 rounded-full inline-block border border-neon-blue/30"
      >
        {portfolioData.role}
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-gray-400 max-w-lg mx-auto font-rajdhani text-lg"
      >
        {portfolioData.tagline}
      </motion.p>
    </div>
  </div>
);

const AboutUniverse = () => (
  <div className="max-w-4xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
    <SectionHeading title="Identity Chamber" subtitle="Who I Am" />
    <GlassPanel className="p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-300 font-rajdhani text-lg leading-relaxed mb-6">
            {portfolioData.about}
          </p>
          <div className="flex items-center gap-4 text-neon-blue font-orbitron text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> {portfolioData.location}
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> {portfolioData.email}
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full bg-black/50 rounded-lg overflow-hidden border border-neon-purple/30 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img src="https://picsum.photos/600/400?tech" alt="Coding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-xl font-bold font-orbitron text-white">System Online</h3>
            <p className="text-neon-pink text-xs">Access Granted</p>
          </div>
        </div>
      </div>
    </GlassPanel>
  </div>
);

const SkillsUniverse = () => (
  <div className="max-w-5xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
    <SectionHeading title="Ability Core" subtitle="Tech Stack" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {SKILLS.map((skill, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.05 }}
        >
          <GlassPanel className="p-4 hover:border-neon-blue transition-colors group">
            <div className="flex justify-between items-end mb-2">
              <h3 className="font-rajdhani font-bold text-lg text-white group-hover:text-neon-blue transition-colors">{skill.name}</h3>
              <span className="text-neon-purple font-mono text-xs">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">{skill.category}</p>
          </GlassPanel>
        </motion.div>
      ))}
    </div>
  </div>
);

const ProjectsUniverse = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="max-w-6xl mx-auto min-h-full flex flex-col justify-center relative py-12 md:py-20">
      <SectionHeading title="Creation Realm" subtitle="Deployed Entities" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="cursor-pointer group"
          >
            <GlassPanel className="h-full border-neon-blue/20 group-hover:border-neon-blue/60 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-neon-blue border border-neon-blue px-4 py-2 rounded font-orbitron text-sm">View Data</span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-neon-pink mb-1 font-mono uppercase">{project.category}</div>
                <h3 className="text-xl font-bold font-orbitron text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">{t}</span>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              layoutId={`project-${selectedProject.id}`}
              className="bg-gray-900 border border-neon-blue w-full max-w-2xl rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.2)]"
            >
              <div className="relative h-64">
                 <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                 <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                  className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-red-500/50 transition-colors text-white"
                 >
                   <X size={20} />
                 </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-orbitron font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-neon-pink font-mono mb-4">{selectedProject.category}</p>
                <p className="text-gray-300 leading-relaxed mb-6 font-rajdhani text-lg">{selectedProject.description}</p>
                
                <div className="mb-6">
                   <h4 className="text-sm text-gray-500 uppercase mb-2">Technologies</h4>
                   <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="text-xs bg-neon-blue/10 text-neon-blue px-3 py-1 rounded border border-neon-blue/30">{t}</span>
                    ))}
                   </div>
                </div>
                
                <div className="flex gap-4">
                   <button className="flex-1 bg-neon-blue hover:bg-cyan-400 text-black font-bold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2">
                     <ExternalLink size={18} /> Live Demo
                   </button>
                   <button className="flex-1 bg-transparent border border-gray-600 hover:border-white text-white py-3 px-4 rounded transition-colors flex items-center justify-center gap-2">
                     <Github size={18} /> Source Code
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ExperienceUniverse = () => (
  <div className="max-w-4xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
    <SectionHeading title="Time Shard" subtitle="Experience Timeline" />
    <div className="relative pl-8 border-l-2 border-gray-800 ml-4 md:ml-0">
      {EXPERIENCE.map((exp, idx) => (
        <motion.div 
          key={exp.id}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: idx * 0.2 }}
          className="mb-8 relative"
        >
          <span className="absolute -left-[41px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-black border-2 border-neon-purple shadow-[0_0_10px_#bc13fe]">
            <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
          </span>
          <GlassPanel className="p-6">
            <span className="inline-block px-2 py-1 bg-neon-purple/20 text-neon-purple text-xs rounded mb-2 font-mono">
              {exp.period}
            </span>
            <h3 className="text-xl font-bold text-white font-orbitron">{exp.role}</h3>
            <h4 className="text-lg text-gray-400 font-rajdhani mb-2">{exp.company}</h4>
            <p className="text-gray-300 text-sm">{exp.description}</p>
          </GlassPanel>
        </motion.div>
      ))}
    </div>
  </div>
);

const EducationUniverse = () => (
  <div className="max-w-4xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
    <SectionHeading title="Knowledge Sphere" subtitle="Academic Database" />
    <div className="grid md:grid-cols-2 gap-6">
      {EDUCATION.map((edu, idx) => (
        <motion.div
          key={idx}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ delay: idx * 0.2 }}
        >
          <GlassPanel className="p-8 text-center hover:border-neon-pink transition-colors">
            <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4 text-neon-pink">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold text-white font-orbitron mb-1">{edu.degree}</h3>
            <p className="text-neon-blue font-rajdhani text-lg">{edu.school}</p>
            <p className="text-gray-500 mt-2 font-mono">{edu.year}</p>
          </GlassPanel>
        </motion.div>
      ))}
    </div>
  </div>
);

const ServicesUniverse = () => (
  <div className="max-w-5xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
     <SectionHeading title="Service Sector" subtitle="Offerings" />
     <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="h-full"
          >
            <GlassPanel className="p-6 h-full border-t-4 border-t-neon-blue">
               <div className="mb-4 text-neon-blue">
                 <div className="w-12 h-12 bg-neon-blue/10 rounded-lg flex items-center justify-center border border-neon-blue/30">
                   <div className="w-2 h-2 bg-neon-blue rounded-full" />
                 </div>
               </div>
               <h3 className="text-xl font-bold text-white font-orbitron mb-3">{s.title}</h3>
               <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
            </GlassPanel>
          </motion.div>
        ))}
     </div>
  </div>
);

const AchievementsUniverse = () => (
  <div className="max-w-4xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
    <SectionHeading title="Trophy Cluster" subtitle="Recognitions" />
    <div className="grid gap-4">
      {ACHIEVEMENTS.map((ach, i) => (
        <motion.div 
          key={i}
          initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-4 bg-glass-bg border border-neon-purple/30 p-4 rounded-xl"
        >
          <div className="text-neon-purple">
            <Trophy size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{ach.title}</h3>
            <p className="text-gray-400 text-sm">{ach.org}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const TestimonialsUniverse = () => (
  <div className="max-w-5xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
     <SectionHeading title="Voice Realm" subtitle="Transmissions" />
     <div className="grid md:grid-cols-3 gap-6">
       {TESTIMONIALS.map((t, i) => (
         <motion.div 
          key={t.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 }}
         >
           <GlassPanel className="p-6 relative">
             <div className="absolute -top-3 left-6 text-6xl text-neon-blue/20 font-serif leading-none">"</div>
             <p className="text-gray-300 italic mb-6 relative z-10">{t.text}</p>
             <div className="flex items-center gap-3">
               <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border border-neon-blue" />
               <div>
                 <h4 className="text-white font-bold text-sm">{t.name}</h4>
                 <p className="text-neon-pink text-xs">{t.role}</p>
               </div>
             </div>
           </GlassPanel>
         </motion.div>
       ))}
     </div>
  </div>
);

const StatsUniverse = () => {
  const data = SKILLS.map(s => ({ subject: s.name, A: s.level, fullMark: 100 }));
  
  return (
    <div className="max-w-5xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
      <SectionHeading title="Stats Nebula" subtitle="Data Visualization" />
      <div className="grid md:grid-cols-2 gap-8 h-[400px]">
        <GlassPanel className="p-4 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 10 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar name="Skills" dataKey="A" stroke="#00f3ff" fill="#00f3ff" fillOpacity={0.3} />
              <RechartTooltip 
                contentStyle={{ backgroundColor: '#000', borderColor: '#333' }}
                itemStyle={{ color: '#00f3ff' }} 
              />
            </RadarChart>
          </ResponsiveContainer>
        </GlassPanel>
        
        <GlassPanel className="p-4 flex flex-col justify-center gap-6">
          <div className="flex items-center justify-between px-4">
             <div className="text-center">
                <h3 className="text-4xl font-bold text-white mb-1">3+</h3>
                <p className="text-gray-400 text-sm">Years Exp</p>
             </div>
             <div className="text-center">
                <h3 className="text-4xl font-bold text-white mb-1">50+</h3>
                <p className="text-gray-400 text-sm">Projects</p>
             </div>
             <div className="text-center">
                <h3 className="text-4xl font-bold text-white mb-1">100%</h3>
                <p className="text-gray-400 text-sm">Commitment</p>
             </div>
          </div>
          <div className="px-4">
             <h4 className="text-neon-pink mb-2 font-mono text-sm">System Status</h4>
             <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden relative">
               <div className="absolute inset-0 bg-gray-800 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:10px_10px]" />
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "98%" }}
                 transition={{ duration: 2 }}
                 className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
               />
             </div>
             <div className="flex justify-between text-xs text-gray-500 mt-1">
               <span>CPU Load: Normal</span>
               <span className="text-green-400">Operational</span>
             </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};

const AIChatbotUniverse = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', text: "Greetings, Traveler. I am Nexus AI. Ask me about the developer's skills, experience, or origin.", sender: ChatSender.AI, timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg: ChatMessage = { id: Date.now().toString(), text: input, sender: ChatSender.User, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const responseText = await sendMessageToGemini(input);
      const aiMsg: ChatMessage = { id: (Date.now() + 1).toString(), text: responseText, sender: ChatSender.AI, timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (e) {
      // Error handled in service
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
      <SectionHeading title="AI Nexus" subtitle="Neural Interface" />
      <GlassPanel className="h-[60vh] flex flex-col border-neon-blue/40 shadow-[0_0_30px_rgba(0,243,255,0.15)]">
        {/* Terminal Header */}
        <div className="bg-black/40 p-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="text-xs font-mono text-neon-blue/70">NEXUS_CORE_V2.5</div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4" ref={scrollRef}>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === ChatSender.User ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg border ${
                msg.sender === ChatSender.User 
                  ? 'bg-neon-blue/10 border-neon-blue/30 text-cyan-50 rounded-br-none' 
                  : 'bg-neon-purple/10 border-neon-purple/30 text-fuchsia-50 rounded-bl-none'
              }`}>
                <div className="text-[10px] opacity-50 mb-1 font-mono uppercase">{msg.sender === ChatSender.User ? 'You' : 'Nexus AI'}</div>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-neon-purple/10 border border-neon-purple/30 p-3 rounded-lg rounded-bl-none flex gap-2 items-center">
                <span className="w-2 h-2 bg-neon-purple rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-neon-purple rounded-full animate-bounce delay-75" />
                <span className="w-2 h-2 bg-neon-purple rounded-full animate-bounce delay-150" />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-black/40 border-t border-white/10 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Initialize query..." 
            className="flex-1 bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue font-mono"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="bg-neon-blue/20 hover:bg-neon-blue/40 text-neon-blue border border-neon-blue/50 rounded-lg px-4 transition-colors disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </GlassPanel>
    </div>
  );
};

const ContactUniverse = () => (
  <div className="max-w-3xl mx-auto min-h-full flex flex-col justify-center text-center py-12 md:py-20">
    <SectionHeading title="Final Gateway" subtitle="Establish Connection" />
    <GlassPanel className="p-10 border-neon-pink/30 shadow-[0_0_40px_rgba(255,0,85,0.1)]">
      <h3 className="text-2xl font-bold text-white mb-6">Ready to start a new mission?</h3>
      <p className="text-gray-400 mb-8 max-w-lg mx-auto">
        I am currently available for freelance projects and full-time opportunities across the multiverse.
      </p>
      
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
        <a href={`mailto:${portfolioData.email}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-neon-blue text-black font-bold rounded-full hover:shadow-[0_0_20px_#00f3ff] transition-all">
          <Mail size={20} /> Send Transmission
        </a>
      </div>
      
      <div className="flex justify-center gap-8">
        {[
          { icon: Github, href: "#", label: "GitHub" },
          { icon: Linkedin, href: "#", label: "LinkedIn" },
          { icon: Globe, href: "#", label: "Website" },
        ].map((social, i) => (
          <a 
            key={i} 
            href={social.href} 
            className="text-gray-400 hover:text-white hover:scale-125 transition-transform duration-300 p-2"
          >
            <social.icon size={28} />
          </a>
        ))}
      </div>
    </GlassPanel>
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [activeUniverse, setActiveUniverse] = useState<string>('hero');

  // Map IDs to components
  const renderUniverse = () => {
    switch (activeUniverse) {
      case 'hero': return <HeroUniverse />;
      case 'about': return <AboutUniverse />;
      case 'skills': return <SkillsUniverse />;
      case 'projects': return <ProjectsUniverse />;
      case 'experience': return <ExperienceUniverse />;
      case 'education': return <EducationUniverse />;
      case 'services': return <ServicesUniverse />;
      case 'achievements': return <AchievementsUniverse />;
      case 'testimonials': return <TestimonialsUniverse />;
      case 'stats': return <StatsUniverse />;
      case 'ai': return <AIChatbotUniverse />;
      case 'contact': return <ContactUniverse />;
      default: return <HeroUniverse />;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-white font-rajdhani bg-slate-950">
      <Starfield />
      
      {/* Main Content Area with "Warp" Transition */}
      <main className="relative w-full h-full pb-32 pt-10 px-4 md:px-8 overflow-y-auto scroll-smooth">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeUniverse}
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: "anticipate" }}
            className="min-h-full w-full max-w-7xl mx-auto flex flex-col"
          >
            {renderUniverse()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Dock */}
      <Navigation activeUniverse={activeUniverse} onNavigate={setActiveUniverse} />
      
      {/* Overlay Vignette for atmosphere */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-40" />
    </div>
  );
};

export default App;