
import React from 'react';

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setTab }) => {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-slate-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="text-2xl font-bold text-slate-900 cursor-pointer font-display tracking-tight" 
            onClick={() => setTab('home')}
          >
            BigData<span className="text-indigo-600">.</span>Edu
          </div>
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setTab('home')}
              className={`text-sm font-bold transition-all px-4 py-2.5 rounded-xl ${currentTab === 'home' ? 'text-white bg-indigo-600 shadow-lg shadow-indigo-200' : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'}`}
            >
              De ce date?
            </button>
            <button
              onClick={() => setTab('career')}
              className={`text-sm font-bold transition-all px-4 py-2.5 rounded-xl ${currentTab === 'career' ? 'text-white bg-indigo-600 shadow-lg shadow-indigo-200' : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'}`}
            >
              Carieră
            </button>
            <button
              onClick={() => setTab('funding')}
              className={`text-sm font-bold transition-all px-4 py-2.5 rounded-xl ${currentTab === 'funding' ? 'text-white bg-indigo-600 shadow-lg shadow-indigo-200' : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'}`}
            >
              Finanțare
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
