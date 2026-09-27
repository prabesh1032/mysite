'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import {
  Tooltip as RechartTooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { Send, MapPin, Mail, Github, Linkedin, ExternalLink, X, GraduationCap, Trophy, Globe, User, MessageSquare, CheckCircle, AlertCircle, Twitter, Facebook, Instagram, Loader, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Starfield from './components/Starfield';
import Navigation from './components/Navigation';

import { portfolioData, SKILLS, PROJECTS, EXPERIENCE, SERVICES, ACHIEVEMENTS, TESTIMONIALS, projectSlug } from './constants';

// --- Shared UI Components ---

const GlassPanel = ({ children, className = "" }) => (
  <div className={`bg-glass-bg backdrop-blur-xl border border-glass-border rounded-xl shadow-lg relative overflow-hidden ${className}`}>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />
    {children}
  </div>
);

const SectionHeading = ({ title, subtitle, headingLevel = 'h2' }) => {
  const Heading = headingLevel === 'h1' ? motion.h1 : motion.h2;
  return (
  <div className="mb-8 text-center">
    <Heading
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]"
    >
      {title}
    </Heading>
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
};

// --- Universes ---

const HeroUniverse = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const letters = nameRef.current?.querySelectorAll('.hero-letter');
    const buttons = buttonsRef.current.filter(Boolean);
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (reduceMotion) {
      gsap.set([imageRef.current, roleRef.current, descriptionRef.current, buttons, letters], { clearProps: 'all' });
      return undefined;
    }

    timeline
      .set(imageRef.current, { scale: 0, opacity: 0, rotation: -12 })
      .set(letters, { y: 36, opacity: 0 })
      .set([roleRef.current, descriptionRef.current, buttons], { y: 22, opacity: 0 })
      .to(imageRef.current, { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.7)' })
      .to(letters, { y: 0, opacity: 1, duration: 0.5, stagger: 0.045 }, '-=0.2')
      .to(roleRef.current, { y: 0, opacity: 1, duration: 0.5 }, '-=0.2')
      .to(descriptionRef.current, { y: 0, opacity: 1, duration: 0.5 }, '-=0.2')
      .to(buttons, { y: 0, opacity: 1, duration: 0.45, stagger: 0.1 }, '-=0.15');

    const magneticCleanups = buttons.map((button) => {
      const onMove = (event) => {
        const bounds = button.getBoundingClientRect();
        const x = (event.clientX - (bounds.left + bounds.width / 2)) * 0.18;
        const y = (event.clientY - (bounds.top + bounds.height / 2)) * 0.18;
        gsap.to(button, { x, y, duration: 0.35, ease: 'power3.out' });
      };
      const onLeave = () => gsap.to(button, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.45)' });
      button.addEventListener('pointermove', onMove);
      button.addEventListener('pointerleave', onLeave);
      return () => {
        button.removeEventListener('pointermove', onMove);
        button.removeEventListener('pointerleave', onLeave);
      };
    });

    return () => {
      magneticCleanups.forEach((cleanup) => cleanup());
      timeline.kill();
    };
  }, []);

  return (
  <div ref={heroRef} className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4 relative py-12">
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
      <div
        ref={imageRef}
        className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-neon-blue shadow-[0_0_30px_rgba(0,243,255,0.5)] mx-auto mb-6 overflow-hidden bg-black"
      >
        <Image src="/images/profile2.png" alt="Prabesh Acharya, Full Stack Developer" width={192} height={192} priority className="w-full h-full object-cover" />
      </div>

      <h1 ref={nameRef} className="text-5xl md:text-7xl font-orbitron font-black text-white mb-4 tracking-tighter" aria-label={portfolioData.name}>
        {portfolioData.name.toUpperCase().split('').map((letter, index) => (
          <span key={`${letter}-${index}`} className="hero-letter inline-block">{letter === ' ' ? '\u00a0' : letter}</span>
        ))}
      </h1>

      <div
        ref={roleRef}
        className="text-xl md:text-2xl text-neon-blue font-rajdhani bg-neon-blue/10 px-4 py-2 rounded-full inline-block border border-neon-blue/30"
      >
        {portfolioData.role}
      </div>

      <p ref={descriptionRef} className="mt-6 text-gray-400 max-w-lg mx-auto font-rajdhani text-lg">
        {portfolioData.tagline}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link ref={(element) => { buttonsRef.current[0] = element; }} href="/projects" className="rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 font-orbitron text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,243,255,0.25)] transition-shadow hover:shadow-[0_0_30px_rgba(0,243,255,0.65)]">
          Explore My Work
        </Link>
        <Link ref={(element) => { buttonsRef.current[1] = element; }} href="/contact" className="rounded-lg border border-neon-blue/50 bg-neon-blue/5 px-6 py-3 font-orbitron text-sm font-semibold text-neon-blue transition-colors hover:bg-neon-blue/15">
          Let&apos;s Connect
        </Link>
      </div>
    </div>
  </div>
  );
};

const AboutUniverse = () => {
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    timeline.fromTo(aboutRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.55 })
      .fromTo(contentRef.current, { opacity: 0, x: -35 }, { opacity: 1, x: 0, duration: 0.65 }, '-=0.25')
      .fromTo(imageRef.current, { opacity: 0, x: 35, scale: 0.94 }, { opacity: 1, x: 0, scale: 1, duration: 0.7 }, '<')
      .fromTo(resumeRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2');
    return () => timeline.kill();
  }, []);

  return (
  <div ref={aboutRef} className="max-w-4xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
    <SectionHeading title="About Me" subtitle="Who I Am" headingLevel="h1" />
    <GlassPanel className="p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div ref={contentRef}>
          <p className="text-gray-300 font-rajdhani text-lg leading-relaxed mb-6">
            {portfolioData.about}
          </p>

          <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-400 text-sm font-rajdhani">
              <MapPin size={16} className="text-neon-blue" />
              <span>{portfolioData.location}</span>
            </div>
            <a ref={resumeRef}
              href="/resume/Prabesh_Acharya_Full_Stack_Developer_Resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-lg border border-neon-purple/50 bg-neon-purple/10 px-5 py-2.5 text-sm font-orbitron text-white hover:bg-neon-purple hover:shadow-[0_0_20px_rgba(148,50,255,0.5)] transition-all"
            >
              <Download size={16} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <div ref={imageRef} className="relative h-80 md:h-96 w-full bg-black/50 rounded-lg overflow-hidden border border-neon-purple/30 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <Image src="/images/profile.jpg" alt="Prabesh Acharya working as a Full Stack Developer" width={800} height={960} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-xl font-bold font-orbitron text-white">Full Stack Developer</h3>
            <p className="text-neon-pink text-xs">Access Granted</p>
          </div>
        </div>
      </div>
    </GlassPanel>
  </div>
  );
};

const SkillsUniverse = () => {
  const skillsRef = useRef(null);
  const cardsRef = useRef([]);
  const barsRef = useRef([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;
    const cards = cardsRef.current.filter(Boolean);
    const bars = barsRef.current.filter(Boolean);
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    timeline.fromTo(skillsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      .fromTo(cards, { opacity: 0, y: 28, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.07 }, '-=0.1')
      .fromTo(bars, { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.8, stagger: 0.06, ease: 'power2.out' }, '-=0.35');
    return () => timeline.kill();
  }, []);

  return (
  <div ref={skillsRef} className="max-w-5xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
    <SectionHeading title="Skills" subtitle="Tech Stack" headingLevel="h1" />    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {SKILLS.map((skill, idx) => (
        <motion.div ref={(element) => { cardsRef.current[idx] = element; }}
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.05 }}
        >
          <GlassPanel className="p-4 hover:border-neon-blue transition-colors group">
            <div className="flex justify-between items-end mb-2">
              <h3 className="font-rajdhani font-bold text-lg text-white group-hover:text-neon-blue transition-colors">{skill.name}</h3>
              <span className="text-neon-purple font-mono text-xl">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div ref={(element) => { barsRef.current[idx] = element; }}
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
};

const ProjectsUniverse = () => {
  const projectsRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;
    const cards = cardsRef.current.filter(Boolean);
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    timeline.fromTo(projectsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      .fromTo(cards, { opacity: 0, y: 45, rotateX: 5 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.65, stagger: 0.09 }, '-=0.1');

    const cleanups = cards.map((card) => {
      const onMove = (event) => {
        const bounds = card.getBoundingClientRect();
        gsap.to(card, { rotateY: ((event.clientX - bounds.left) / bounds.width - 0.5) * 5, rotateX: ((event.clientY - bounds.top) / bounds.height - 0.5) * -5, transformPerspective: 900, duration: 0.35, ease: 'power2.out' });
      };
      const onLeave = () => gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power3.out' });
      card.addEventListener('pointermove', onMove);
      card.addEventListener('pointerleave', onLeave);
      return () => { card.removeEventListener('pointermove', onMove); card.removeEventListener('pointerleave', onLeave); };
    });
    return () => { timeline.kill(); cleanups.forEach((cleanup) => cleanup()); };
  }, []);

  return (
    <div ref={projectsRef} className="max-w-6xl mx-auto min-h-full flex flex-col justify-center relative py-12 md:py-20" style={{ perspective: '1000px' }}>
      <SectionHeading title="Projects" subtitle="Featured Work" headingLevel="h1" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div ref={(element) => { cardsRef.current[idx] = element; }}
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <GlassPanel className="h-full border-neon-blue/20 hover:border-neon-blue/60 transition-all duration-300 flex flex-col">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image src={project.image} alt={`${project.title} ${project.category.toLowerCase()} project screenshot`} width={800} height={500} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-neon-pink/80 backdrop-blur-sm text-white text-xs rounded-full font-mono uppercase border border-neon-pink">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-orbitron text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="text-[10px] bg-neon-blue/10 text-neon-blue px-2 py-1 rounded border border-neon-blue/30 font-medium">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-1 rounded border border-gray-700">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Link
                    href={`/projects/${projectSlug(project.title)}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-neon-blue/40 hover:bg-neon-blue/10 text-neon-blue rounded-lg transition-all duration-300 text-sm font-semibold"
                  >
                    View Details
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] text-sm font-semibold group/btn"
                    >
                      <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] text-white rounded-lg transition-all duration-300 text-sm font-semibold group/btn"
                    >
                      <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ExperienceUniverse = () => (
  <div className="max-w-4xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
    <SectionHeading title="Experience" subtitle="Career Journey" headingLevel="h1" />
    <div className="relative pl-8 border-l-2 border-gray-800 ml-4 md:ml-0">
      {EXPERIENCE.map((exp, idx) => (
        <motion.div
          key={exp.id}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: idx * 0.2 }}
          className="mb-10 relative"
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

const ServicesUniverse = () => (
  <div className="max-w-5xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20">
    <SectionHeading title="WHAT I DO" subtitle="What I Offer" headingLevel="h1" />
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
                <s.icon size={22} />
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
    <SectionHeading title="Career Highlights" subtitle="Milestones & Recognition" headingLevel="h1" />
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
    <SectionHeading title="Testimonials" subtitle="Feedback" headingLevel="h1" />
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
              <Image src={t.avatar} alt={`${t.name}, testimonial author`} width={40} height={40} className="w-10 h-10 rounded-full border border-neon-blue" />
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

const ContactUniverse = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const formRef = useRef(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("EWRGU8ISGhy2WRXNc");
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = formRef.current;
      if (!formElement) {
        throw new Error('Contact form is not ready');
      }

      await emailjs.sendForm(
        'service_e22emr5',
        'template_11llwi8',
        formElement,
        'EWRGU8ISGhy2WRXNc'
      );

      showNotification("Message sent successfully! I'll get back to you soon.", 'success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      showNotification('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto min-h-full flex flex-col justify-center py-12 md:py-20 px-4 relative">
      <SectionHeading title="Contact Me" subtitle="Get In Touch" headingLevel="h1" />

      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-4 right-4 md:absolute md:top-32 md:left-8 md:right-auto z-[9999] max-w-md"
          >
            <div className={`rounded-lg p-4 shadow-2xl bg-black/95 backdrop-blur-xl border-l-4 ${notification.type === 'success' ? 'border-green-500' : 'border-red-500'
              }`}>
              <div className="flex items-start justify-between gap-2">
                <p className={`font-semibold flex items-start text-sm ${notification.type === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}>
                  {notification.type === 'success' ? (
                    <CheckCircle className="mr-3 flex-shrink-0 mt-0.5" size={20} />
                  ) : (
                    <AlertCircle className="mr-3 flex-shrink-0 mt-0.5" size={20} />
                  )}
                  <span>{notification.message}</span>
                </p>
                <button
                  onClick={() => setNotification(null)}
                  className="text-gray-400 hover:text-white flex-shrink-0"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <GlassPanel className="p-8 border-neon-pink/30 shadow-[0_0_40px_rgba(255,0,85,0.1)]">
          <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="text-gray-500" size={18} />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="pl-10 w-full p-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-blue focus:border-transparent transition text-white placeholder-gray-500"
                  placeholder="your name...."
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-gray-500" size={18} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="pl-10 w-full p-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-blue focus:border-transparent transition text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                  <MessageSquare className="text-gray-500" size={18} />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="pl-10 w-full p-3 bg-glass-bg border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-blue focus:border-transparent transition resize-vertical text-white placeholder-gray-500"
                  placeholder="Hello Prabesh, I would like to discuss..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white py-3 px-6 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <Send size={18} />
                  </motion.div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" /> Send Message
                </>
              )}
            </button>
          </form>
        </GlassPanel>

        {/* Contact Info */}
        <div className="space-y-6">
          <GlassPanel className="p-8 border-neon-blue/30">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group"
              >
                <div className="p-3 bg-glass-bg rounded-lg group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{portfolioData.email}</p>
                </div>
              </a>

              <a
                href={`tel:${portfolioData.phone}`}
                className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group"
              >
                <div className="p-3 bg-glass-bg rounded-lg group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition">
                  <Send size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{portfolioData.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-glass-bg rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{portfolioData.location}</p>
                </div>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel className="p-8 border-neon-purple/30">
            <h3 className="text-xl font-bold text-white mb-4">Social Links</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Github, href: portfolioData.github, label: "GitHub" },
                { icon: Linkedin, href: portfolioData.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: portfolioData.twitter, label: "Twitter" },
                { icon: Facebook, href: portfolioData.facebook, label: "Facebook" },
                { icon: Instagram, href: portfolioData.instagram, label: "Instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-glass-bg border border-glass-border rounded-lg text-gray-300 hover:text-white hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all"
                >
                  <social.icon size={20} />
                  <span className="text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
};

// --- AI Assistant Universe ---

const AIUniverse = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! 👋 I'm Prabesh's AI Assistant. Ask me anything about his skills, projects, experience, or services!",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const messagesContainerRef = useRef(null);

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessagesScroll = () => {
    const container = messagesContainerRef.current;
    if (!container) return;
    setShowScrollTop(container.scrollTop > 120);
  };

  const scrollToTop = () => {
    messagesContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SUGGESTED_PROMPTS = [
    'Tell me about Prabesh',
    'What projects has he built?',
    'What technologies does he use?',
    'How can I contact him?',
  ];

  const WORKER_URL = 'https://portfolio-ai.praveshach1032.workers.dev';

  const renderMessageText = (text) => {
    const lines = text.split('\n').map((line) => line.trimEnd());
    const hasBullets = lines.some((line) => /^[-*•]\s+/.test(line));

    if (!hasBullets) {
      return <p className="text-sm leading-relaxed whitespace-pre-wrap">{text}</p>;
    }

    const elements = [];
    let listItems = [];

    const flushList = (key) => {
      if (!listItems.length) return;
      elements.push(
        <ul key={`list-${key}`} className="list-disc list-inside text-sm leading-relaxed space-y-1">
          {listItems.map((item, idx) => (
            <li key={`item-${key}-${idx}`}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return;
      const match = trimmed.match(/^[-*•]\s+(.*)$/);
      if (match) {
        listItems.push(match[1]);
      } else {
        flushList(index);
        elements.push(
          <p key={`p-${index}`} className="text-sm leading-relaxed">
            {trimmed}
          </p>
        );
      }
    });

    flushList('end');

    return <div className="space-y-2">{elements}</div>;
  };

  const handleSendMessage = async (messageText = input) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();

      const aiMessage = {
        id: Date.now() + 1,
        text: data.reply || "Sorry, I couldn't process that. Please try again.",
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Sorry, something went wrong. Please try again later.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-4">
          AI Assistant
        </h1>
        <p className="text-gray-400 text-lg">
          Ask me anything about Prabesh, his projects, skills, and experience
        </p>
      </div>

      {/* Chat Container */}
      <GlassPanel className="p-6 border-neon-blue/30 flex flex-col h-[600px]">
        {/* Messages Display */}
        <div
          ref={messagesContainerRef}
          onScroll={handleMessagesScroll}
          className="relative flex-1 overflow-y-auto mb-6 space-y-4 pr-4"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(0, 243, 255, 0.3) transparent'
          }}
        >
          {showScrollTop && (
            <button
              type="button"
              onClick={scrollToTop}
              className="absolute top-2 right-2 px-3 py-1 text-xs rounded-full bg-glass-bg border border-glass-border text-gray-300 hover:text-neon-blue hover:border-neon-blue transition"
            >
              Top
            </button>
          )}
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${msg.sender === 'user'
                  ? 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-neon-blue'
                  : 'bg-glass-bg border border-glass-border text-gray-200'
                  }`}
              >
                {renderMessageText(msg.text)}
              </div>
            </motion.div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-glass-bg border border-glass-border px-4 py-3 rounded-lg">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                  <Loader size={20} className="text-neon-blue" />
                </motion.div>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Prompts */}
        {messages.length === 1 && (
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            {SUGGESTED_PROMPTS.map((prompt, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleSendMessage(prompt)}
                className="p-3 text-left bg-glass-bg border border-glass-border rounded-lg hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition text-sm text-gray-300 hover:text-neon-blue"
              >
                {prompt}
              </motion.button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !loading && handleSendMessage()}
            placeholder="Type your message..."
            disabled={loading}
            className="flex-1 px-4 py-3 bg-glass-bg border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue disabled:opacity-50"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSendMessage()}
            disabled={loading}
            className="px-4 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition disabled:opacity-50"
          >
            <Send size={20} />
          </motion.button>
        </div>
      </GlassPanel>
    </div>
  );
};

// --- Main App Component ---

const SnakeCursor = () => {
  const segmentsRef = useRef([]);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(pointer: fine)');
    if (!desktopQuery.matches) return undefined;

    document.body.classList.add('snake-cursor-active');
    const segments = segmentsRef.current.filter(Boolean);
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const moveSnake = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      segments.forEach((segment, index) => {
        gsap.to(segment, {
          x: mouseX,
          y: mouseY,
          duration: 0.16 + index * 0.035,
          delay: index * 0.012,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      });
    };

    window.addEventListener('pointermove', moveSnake, { passive: true });
    return () => {
      window.removeEventListener('pointermove', moveSnake);
      document.body.classList.remove('snake-cursor-active');
      gsap.killTweensOf(segments);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, index) => (
        <span
          key={index}
          ref={(element) => { segmentsRef.current[index] = element; }}
          className="absolute left-0 top-0 -ml-1.5 -mt-1.5 rounded-full bg-neon-blue shadow-[0_0_12px_rgba(0,243,255,0.9)]"
          style={{
            width: `${Math.max(5, 13 - index * 0.65)}px`,
            height: `${Math.max(5, 13 - index * 0.65)}px`,
            opacity: Math.max(0.18, 1 - index * 0.065),
          }}
        />
      ))}
    </div>
  );
};

const App = ({ initialUniverse = 'hero' }) => {
  const activeUniverse = initialUniverse;
  const mainRef = useRef(null);
  const pageRef = useRef(null);

  // Scroll to top whenever universe changes
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }

    const page = pageRef.current;
    if (!page) return;

    const timeline = gsap.timeline({ defaults: { overwrite: 'auto' } });
    timeline
      .set(page, { opacity: 0, y: 18, filter: 'blur(4px)' })
      .to(page, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.42, ease: 'power2.out' });

    return () => timeline.kill();
  }, []);

  // Map IDs to components
  const renderUniverse = () => {
    switch (activeUniverse) {
      case 'hero': return <HeroUniverse />;
      case 'about': return <AboutUniverse />;
      case 'skills': return <SkillsUniverse />;
      case 'projects': return <ProjectsUniverse />;
      case 'experience': return <ExperienceUniverse />;
      case 'services': return <ServicesUniverse />;
      case 'achievements': return <AchievementsUniverse />;
      case 'testimonials': return <TestimonialsUniverse />;
      case 'ai': return <AIUniverse />;
      case 'contact': return <ContactUniverse />;
      default: return <HeroUniverse />;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-white font-rajdhani bg-slate-950">
      <SnakeCursor />
      <Starfield />

      {/* Main Content Area with "Warp" Transition */}
      <main ref={mainRef} className="relative w-full h-full pb-32 pt-10 px-4 md:px-8 overflow-y-auto scroll-smooth">
        <div ref={pageRef} className="min-h-full w-full max-w-7xl mx-auto flex flex-col will-change-transform">
          {renderUniverse()}
        </div>
      </main>

      {/* Navigation Dock */}
      <Navigation activeUniverse={activeUniverse} />

      {/* Overlay Vignette for atmosphere */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-40" />
    </div>
  );
};

export default App;
