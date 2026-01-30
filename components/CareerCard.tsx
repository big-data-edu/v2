
import React from 'react';
import { CareerRole } from '../types';

export const CareerCard: React.FC<{ role: CareerRole }> = ({ role }) => {
  return (
    <div 
      className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-2xl transition-all group shadow-sm relative overflow-hidden text-left"
      style={{ borderTop: `6px solid ${role.color}` }}
    >
      <div 
        className="text-5xl font-black mb-4 opacity-10 font-display transition-all group-hover:opacity-30 absolute top-4 right-6"
        style={{ color: role.color }}
      >
        {role.id}
      </div>
      <h3 
        className="text-2xl font-bold text-slate-900 mb-4 font-display transition-colors tracking-tight"
        style={{ color: '#1e293b' }}
      >
        {role.title}
      </h3>
      <p className="text-slate-500 mb-6 text-base leading-relaxed font-light">
        {role.description}
      </p>
      
      <div className="pt-6 border-t border-dashed border-slate-100">
        <p className="font-bold text-slate-700 mb-4 text-[11px] uppercase tracking-widest">Skilluri necesare:</p>
        <div className="flex flex-wrap gap-2.5">
          {role.skills.map((skill, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-100 text-slate-500 bg-slate-50 group-hover:bg-white transition-colors"
              style={{ color: role.color }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 p-5 rounded-xl bg-slate-50 border-l-4" style={{ borderColor: role.color }}>
        <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-[0.2em]">Mini-proiect recomandat:</p>
        <p className="text-sm text-slate-700 italic font-medium leading-relaxed">{role.miniProject}</p>
      </div>
    </div>
  );
};
