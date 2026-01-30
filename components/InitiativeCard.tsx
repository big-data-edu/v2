
import React from 'react';
import { Initiative } from '../types';

export const InitiativeCard: React.FC<{ initiative: Initiative }> = ({ initiative }) => {
  const colors = [
    'bg-indigo-600', 'bg-pink-500', 'bg-cyan-500', 
    'bg-amber-500', 'bg-emerald-500', 'bg-violet-500'
  ];
  const accentColor = colors[initiative.id % colors.length];
  const textColorClass = accentColor.replace('bg-', 'text-');
  const bgColorClass = accentColor.replace('bg-', 'bg-').replace('-600', '-50').replace('-500', '-50');

  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all relative group shadow-sm flex flex-col p-8">
      <div className={`absolute top-0 left-0 w-full h-1.5 ${accentColor} z-10`}></div>
      
      <div className="mb-6 text-left">
        <span className={`inline-block px-3 py-1 ${bgColorClass} ${textColorClass} text-[10px] font-black uppercase tracking-wider rounded-lg mb-4 border border-slate-50`}>
          {initiative.tag}
        </span>
        <h3 className={`text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:${textColorClass} transition-colors font-display`}>
          {initiative.title}
        </h3>
        <p className="text-sm text-slate-400 font-semibold">{initiative.org}</p>
      </div>
      
      <div className="space-y-6 flex-grow text-left">
        <p className="text-base text-slate-500 leading-relaxed font-light">
          {initiative.description}
        </p>
        <div className={`${bgColorClass} p-6 rounded-2xl border-l-4 ${accentColor.replace('bg-', 'border-')}`}>
          <p className={`text-[11px] font-black ${textColorClass} uppercase mb-2`}>Decizia îmbunătățită:</p>
          <p className="text-sm text-slate-700 italic leading-relaxed font-medium">{initiative.impact}</p>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-50 text-left">
        <a 
          href={initiative.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-flex items-center ${textColorClass} font-bold text-sm hover:translate-x-1 transition-all`}
        >
          Explorează proiectul <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};
