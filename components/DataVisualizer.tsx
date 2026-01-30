
import React, { useState } from 'react';

export const DataVisualizer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {/* 1. ABANDON SCOLAR - Indigo */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-default group">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Target UE 2030</div>
        <div className="relative h-32 flex items-end justify-center gap-4 mb-6">
          <div className="w-10 bg-slate-100 rounded-t-xl relative h-full">
            <div 
              className="absolute bottom-0 w-full bg-indigo-500 rounded-t-xl transition-all duration-1000 ease-out shadow-lg shadow-indigo-200"
              style={{ height: '100%' }}
            ></div>
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-indigo-600">15.3%</span>
          </div>
          <div className="w-10 bg-slate-100 rounded-t-xl relative h-full">
            <div 
              className="absolute bottom-0 w-full bg-slate-300 rounded-t-xl transition-all duration-1000"
              style={{ height: '58.8%' }}
            ></div>
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-slate-400">Target 9%</span>
          </div>
        </div>
        <h4 className="text-lg font-bold text-slate-800 mb-2 font-display">Abandon Școlar</h4>
        <p className="text-xs text-slate-500 leading-relaxed">Suntem la aproape dublu față de targetul UE. Datele identifică copiii în risc.</p>
      </div>

      {/* 2. URBAN-RURAL - Cyan */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-default group">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Acces la liceu</div>
        <div className="flex items-center justify-around h-32 mb-6">
          <div className="text-center group-hover:scale-110 transition-transform">
            <div className="text-cyan-500 font-black text-3xl mb-1">1</div>
            <div className="text-[9px] uppercase font-bold text-slate-400">Rural</div>
            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 mt-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </div>
          </div>
          <div className="h-px bg-slate-200 flex-1 mx-2 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-transparent opacity-20"></div>
          </div>
          <div className="text-center group-hover:scale-110 transition-transform">
            <div className="text-slate-800 font-black text-3xl mb-1">3</div>
            <div className="text-[9px] uppercase font-bold text-slate-400">Urban</div>
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 mt-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
            </div>
          </div>
        </div>
        <h4 className="text-lg font-bold text-slate-800 mb-2 font-display">Inechitate Rurală</h4>
        <p className="text-xs text-slate-500 leading-relaxed">Copiii din rural au de 3 ori mai puține șanse să continue studiile. Datele ghidează alocările.</p>
      </div>

      {/* 3. PISA - Violet */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-default group">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Scoruri PISA 2022</div>
        <div className="relative h-32 flex items-center justify-center mb-6">
          <svg className="w-24 h-24 -rotate-90">
            <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
            <circle 
              cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" 
              className="text-violet-500 transition-all duration-1000 ease-out"
              strokeDasharray="251.32"
              strokeDashoffset={251.32 - (251.32 * 43) / 100}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-black text-xl text-slate-800">43%</div>
        </div>
        <h4 className="text-lg font-bold text-slate-800 mb-2 font-display">Alfabetizare</h4>
        <p className="text-xs text-slate-500 leading-relaxed">43% dintre elevi sunt analfabeți funcționali. Avem nevoie de monitorizare constantă a progresului.</p>
      </div>

      {/* 4. DEFICIT - Emerald */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-default group">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Piața Muncii</div>
        <div className="h-32 flex flex-wrap gap-1.5 content-center justify-center mb-6">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className={`w-3.5 h-3.5 rounded-md transition-all duration-500 ${i < 15 ? 'bg-emerald-400' : 'bg-slate-100'}`}
              style={{ transitionDelay: `${i * 30}ms` }}
            ></div>
          ))}
          <div className="w-full text-center mt-2 font-black text-emerald-600 text-sm">~45.000 lipsă</div>
        </div>
        <h4 className="text-lg font-bold text-slate-800 mb-2 font-display">Resurse Umane</h4>
        <p className="text-xs text-slate-500 leading-relaxed">Deficit major de profesori calificați. Datele de HR pot optimiza recrutarea.</p>
      </div>
    </div>
  );
};
