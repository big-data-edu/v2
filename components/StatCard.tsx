
import React from 'react';
import { Stat } from '../types';

export const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-6 border transition-all hover:-translate-y-1 hover:shadow-lg text-left flex flex-col h-full shadow-sm"
      style={{ borderColor: `${stat.color}40` }}
    >
      <div className="flex flex-col gap-1.5 mb-4 items-start">
        <div 
          className="text-3xl font-black font-display tracking-tight" 
          style={{ color: stat.color }}
        >
          {stat.value}
        </div>
        <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">
          {stat.label}
        </div>
      </div>
      <p className="text-sm text-slate-600 mb-5 leading-relaxed flex-grow font-light">
        {stat.description}
      </p>
      <div className="pt-4 border-t border-slate-50 space-y-2">
        <div className="flex items-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stat.color }}></span>
           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Potențială soluție</p>
        </div>
        <p className="text-xs font-bold text-slate-800 leading-tight">{stat.solution}</p>
      </div>
    </div>
  );
};
