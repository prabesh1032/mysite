import React from 'react';
import { UNIVERSES } from '../constants';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeUniverse: string;
  onNavigate: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeUniverse, onNavigate }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="bg-black/60 backdrop-blur-md border border-neon-blue/20 rounded-2xl px-4 py-3 shadow-[0_0_20px_rgba(0,243,255,0.1)] flex items-center justify-between overflow-x-auto gap-2 no-scrollbar">
        {UNIVERSES.map((universe) => {
          const Icon = universe.icon;
          const isActive = activeUniverse === universe.id;
          
          return (
            <button
              key={universe.id}
              onClick={() => onNavigate(universe.id)}
              className={`relative group flex flex-col items-center justify-center p-2 min-w-[3rem] transition-all duration-300 ${
                isActive ? 'text-neon-blue scale-110' : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className={`absolute inset-0 bg-neon-blue/20 blur-xl rounded-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              <Icon size={20} className="relative z-10" />
              <span className="text-[10px] mt-1 font-orbitron truncate max-w-[4rem] relative z-10 hidden sm:block">
                {universe.name.split(' ')[0]}
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 w-1 h-1 bg-neon-blue rounded-full shadow-[0_0_5px_#00f3ff]"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
