
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { InitiativeCard } from './components/InitiativeCard';
import { CareerCard } from './components/CareerCard';
import { StatCard } from './components/StatCard';
import { STATS, INITIATIVES, CAREER_ROLES } from './constants';

const App: React.FC = () => {
  const [tab, setTab] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'career', 'funding'].includes(hash)) {
        setTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const updateTab = (newTab: string) => {
    window.location.hash = newTab;
    setTab(newTab);
    window.scrollTo(0, 0);
  };

  const learningObjectives = [
    { t: "Tipuri de date", d: "Ce sunt datele educaționale și ce tipuri întâlnim (cantitative, calitative, administrative, observaționale, digitale).", c: "bg-indigo-500" },
    { t: "Colectare reală", d: "Cum se colectează datele în contexte educaționale reale, de la grădiniță până la universitate.", c: "bg-pink-500" },
    { t: "Gândire critică", d: "Cum citim datele critic, evitând interpretările greșite, supra-simplificarea sau biasurile.", c: "bg-cyan-500" },
    { t: "Decizii acționabile", d: "Cum transformăm datele în decizii bune, nu doar în rapoarte sau statistici.", c: "bg-amber-500" },
    { t: "Adaptare & Diversitate", d: "Cum adaptăm deciziile bazate pe date la vârsta, nevoile și diversitatea copiilor și studenților.", c: "bg-emerald-500" },
    { t: "Etică & Responsabilitate", d: "Etica datelor, protecția (GDPR), confidențialitatea și responsabilitatea profesională.", c: "bg-violet-500" },
    { t: "Inovare în educație", d: "Cum folosim datele pentru reflecție educațională, îmbunătățirea practicii și inovare.", c: "bg-rose-500" }
  ];

  return (
    <div className="min-h-screen bg-transparent text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar currentTab={tab} setTab={updateTab} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* HOME SECTION */}
        {tab === 'home' && (
          <div className="animate-fadeIn">
            <header className="text-center mb-24">
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.2] font-display tracking-tight max-w-4xl mx-auto">
                Transformă <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-amber-500">datele</span> în decizii educaționale mai bune
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
                Ghidul tău practic pentru utilizarea dovezilor în educație. Explorează inițiative concrete și descoperă cum poți face diferența.
              </p>
            </header>

            <section className="mb-32">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-indigo-100">
                  Analiza de context
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 mb-4 tracking-tight">De Ce Contează Datele?</h2>
                <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed font-light">
                  Provocările sistemului educațional pot fi abordate prin analiză riguroasă și decizii informate.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {STATS.map((stat, i) => <StatCard key={i} stat={stat} />)}
              </div>
            </section>

            <section className="mb-40">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 mb-4 tracking-tight">Modele de Bune Practici</h2>
                <p className="text-slate-400 text-lg max-w-3xl mx-auto font-light">Inovații globale care folosesc datele pentru impact real în educație.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {INITIATIVES.map((init) => <InitiativeCard key={init.id} initiative={init} />)}
              </div>
            </section>

            {/* COURSE SECTION */}
            <section className="mt-32 bg-slate-900 border border-slate-800 rounded-[4rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl text-left">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/10 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-8">
                    UVT | Științele Educației
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-8 leading-tight">
                    Big Data, Analiza și Utilizarea Datelor
                  </h2>
                  <div className="flex items-center gap-5 mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-black text-xl text-white shadow-xl shadow-indigo-500/20">
                      SF
                    </div>
                    <div>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Predat de</p>
                      <p className="text-white text-xl font-bold">Lect. Univ. Dr. Silvia Fierăscu</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light">
                    Un curs interdisciplinar la Universitatea de Vest din Timișoara care pregătește viitoarea generație de profesioniști capabili să lucreze cu dovezi.
                  </p>
                  
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10">
                    <h3 className="text-[10px] font-black text-indigo-400 mb-6 uppercase tracking-[0.3em]">Competențe cheie</h3>
                    <ul className="space-y-4">
                      {[
                        "Managementul fluxurilor de date instituționale.",
                        "Fundamentarea intervențiilor pe dovezi.",
                        "Interpretarea și vizualizarea indicatorilor.",
                        "Evaluarea etică a sistemelor de date."
                      ].map((reason, i) => (
                        <li key={i} className="flex gap-4 items-start text-slate-300">
                          <span className="text-pink-500 font-bold text-lg leading-none">•</span>
                          <span className="text-base leading-relaxed font-light">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-10">
                  <h3 className="text-2xl font-display font-black text-white mb-8">Structura Cursului:</h3>
                  <div className="space-y-6">
                    {learningObjectives.map((obj, i) => (
                      <div key={i} className="flex gap-5 group">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${obj.c} text-white flex items-center justify-center font-black text-lg shadow-lg transition-transform group-hover:scale-110`}>
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1 leading-tight">{obj.t}</h4>
                          <p className="text-sm text-slate-400 leading-relaxed font-light">{obj.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* CAREER SECTION */}
        {tab === 'career' && (
          <div className="animate-fadeIn">
            <header className="text-center mb-24">
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-display tracking-tight">
                Harta ta de <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Carieră</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
                Descoperă oportunități noi la intersecția dintre Științele Educației, tehnologie și analiză de date.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {CAREER_ROLES.map((role) => <CareerCard key={role.id} role={role} />)}
            </div>

            <div className="mt-24 p-12 bg-gradient-to-br from-slate-50 to-white rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-3xl rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 mb-10 tracking-tight">Cum te pregătești?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                <div className="space-y-8">
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-base shadow-lg">1</div>
                    <p className="text-slate-500 text-base leading-relaxed font-light pt-1"><strong>Specializarea:</strong> Identifică un domeniu de nișă unde datele pot face diferența.</p>
                  </div>
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-base shadow-lg">2</div>
                    <p className="text-slate-500 text-base leading-relaxed font-light pt-1"><strong>Portofoliu:</strong> Lucrează cu date publice și vizualizează-le constant.</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-500 text-white flex items-center justify-center font-black text-base shadow-lg">3</div>
                    <p className="text-slate-500 text-base leading-relaxed font-light pt-1"><strong>Tehnologie:</strong> Familiarizează-te cu tool-uri de dashboarding (Tableau, PowerBI).</p>
                  </div>
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-base shadow-lg">4</div>
                    <p className="text-slate-500 text-base leading-relaxed font-light pt-1"><strong>Comunitate:</strong> Participă la conferințe și conectează-te cu experți.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FUNDING SECTION */}
        {tab === 'funding' && (
          <div className="animate-fadeIn text-left">
            <header className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.2] font-display tracking-tight">
                Cum <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Finanțezi</span> o Inițiativă
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
                Ghid complet despre sursele de finanțare europene și oportunități specifice pentru proiecte de Data & AI în educație.
              </p>
            </header>

            {/* Surse Principale */}
            <section className="mb-32">
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 mb-12 text-center tracking-tight">Surse Principale de Finanțare</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Erasmus+ */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-4xl font-black text-indigo-600 mb-1 block font-display italic">E+</span>
                      <h3 className="text-xl font-bold text-slate-900">Erasmus+</h3>
                    </div>
                    <span className="bg-indigo-50 px-3 py-1 rounded-full text-[9px] font-black text-indigo-400 border border-indigo-100 uppercase tracking-widest">2021-2027 | €26.2 mld</span>
                  </div>
                  <p className="text-slate-500 mb-6 text-base font-light leading-relaxed">Programul emblematic al UE pentru educație. Excelent pentru parteneriate educaționale, inovație și data literacy.</p>
                  <div className="space-y-4 mb-8">
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest border-l-4 border-indigo-600 pl-3">Pentru proiecte de date:</p>
                    <ul className="text-sm text-slate-500 space-y-2 list-disc pl-5 font-light">
                      <li>KA2 - Parteneriate de cooperare</li>
                      <li>Inovație digitală: platforme digitale</li>
                      <li>Dezvoltare profesională: training</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50/50 p-6 rounded-2xl border-l-4 border-indigo-600 mb-6">
                    <p className="text-[9px] font-black text-indigo-600 uppercase mb-1 tracking-widest">Exemplu de proiect:</p>
                    <p className="text-sm text-slate-700 italic font-medium leading-relaxed">"Data Literacy pentru Profesori din Rural" - parteneriat strategic pentru competențe digitale.</p>
                  </div>
                  <a href="https://erasmus-plus.ec.europa.eu/" target="_blank" className="text-base font-bold text-indigo-600 hover:translate-x-1 transition-transform inline-block">Explorează Erasmus+ →</a>
                </div>

                {/* Horizon Europe */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-4xl font-black text-pink-500 mb-1 block font-display italic">HE</span>
                      <h3 className="text-xl font-bold text-slate-900">Horizon Europe</h3>
                    </div>
                    <span className="bg-pink-50 px-4 py-1.5 rounded-full text-[9px] font-black text-pink-400 border border-pink-100 uppercase tracking-widest">2021-2027 | €95.5 mld</span>
                  </div>
                  <p className="text-slate-500 mb-6 text-base font-light leading-relaxed">Programul UE pentru cercetare și inovare. Perfect pentru proiecte care testează AI și learning analytics.</p>
                  <div className="space-y-4 mb-8">
                    <p className="text-[10px] font-black text-pink-500 uppercase tracking-widest border-l-4 border-pink-500 pl-3">Pentru proiecte AI & Data:</p>
                    <ul className="text-base text-slate-500 space-y-2 list-disc pl-5 font-light">
                      <li>Cluster 2 - Culture & Society</li>
                      <li>Piloting tehnologii: testare soluții</li>
                      <li>Ethical AI: AI responsabil</li>
                    </ul>
                  </div>
                  <div className="bg-pink-50/50 p-8 rounded-2xl border-l-4 border-pink-500 mb-6">
                    <p className="text-[9px] font-black text-pink-500 uppercase mb-2 tracking-widest">Exemplu de proiect:</p>
                    <p className="text-sm text-slate-700 italic font-medium leading-relaxed">"AI Tutor Adaptat pentru Matematică" - dezvoltare și testare RCT a unui sistem de tutorat AI.</p>
                  </div>
                  <a href="https://research-and-innovation.ec.europa.eu/" target="_blank" className="text-base font-bold text-pink-500 hover:translate-x-1 transition-transform inline-block">Explorează Horizon Europe →</a>
                </div>

                {/* ESF+ */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-4xl font-black text-cyan-500 mb-1 block font-display italic">ESF</span>
                      <h3 className="text-xl font-bold text-slate-900">ESF+ (Fondul Social European Plus)</h3>
                    </div>
                    <span className="bg-cyan-50 px-4 py-1.5 rounded-full text-[9px] font-black text-cyan-400 border border-cyan-100 uppercase tracking-widest">2021-2027 | €99.3 mld</span>
                  </div>
                  <p className="text-slate-500 mb-6 text-base font-light leading-relaxed">Cel mai mare instrument UE pentru investiții în oameni. Ideal pentru scalarea intervențiilor bazate pe date.</p>
                  <div className="space-y-4 mb-8">
                    <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest border-l-4 border-cyan-500 pl-3">Pentru proiecte de date:</p>
                    <ul className="text-base text-slate-500 space-y-2 list-disc pl-5 font-light">
                      <li>Combaterea abandonului școlar</li>
                      <li>Incluziune grupuri vulnerabile</li>
                      <li>Upskilling cadre didactice la scară</li>
                    </ul>
                  </div>
                  <div className="bg-cyan-50/50 p-8 rounded-2xl border-l-4 border-cyan-500 mb-6">
                    <p className="text-[9px] font-black text-cyan-500 uppercase mb-2 tracking-widest">Exemplu de proiect:</p>
                    <p className="text-sm text-slate-700 italic font-medium leading-relaxed">"Observator Județean pentru Echitate" - platformă integrată de date pentru decizii strategice.</p>
                  </div>
                  <a href="https://ec.europa.eu/european-social-fund-plus/ro" target="_blank" className="text-base font-bold text-cyan-500 hover:translate-x-1 transition-transform inline-block">Explorează ESF+ →</a>
                </div>

                {/* Digital Europe */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-4xl font-black text-amber-500 mb-1 block font-display italic">DEP</span>
                      <h3 className="text-xl font-bold text-slate-900">Digital Europe Programme</h3>
                    </div>
                    <span className="bg-amber-50 px-4 py-1.5 rounded-full text-[9px] font-black text-amber-400 border border-amber-100 uppercase tracking-widest">2021-2027 | €7.5 mld</span>
                  </div>
                  <p className="text-slate-500 mb-6 text-base font-light leading-relaxed">Program pentru accelerarea transformării digitale. Finanțează proiecte de AI și competențe digitale avansate.</p>
                  <div className="space-y-4 mb-8">
                    <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest border-l-4 border-amber-500 pl-3">Focus AI & Data:</p>
                    <ul className="text-base text-slate-500 space-y-2 list-disc pl-5 font-light">
                      <li>AI pentru educație: aplicații noi</li>
                      <li>Data spaces: ecosisteme securizate</li>
                      <li>Testing AI: sandboxes pentru teste</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50/50 p-8 rounded-2xl border-l-4 border-amber-500 mb-6">
                    <p className="text-[9px] font-black text-amber-500 uppercase mb-2 tracking-widest">Exemplu de proiect:</p>
                    <p className="text-sm text-slate-700 italic font-medium leading-relaxed">"European Education Data Space Pilot" - demonstrator pentru partajarea datelor securizate.</p>
                  </div>
                  <a href="https://digital-strategy.ec.europa.eu/en" target="_blank" className="text-base font-bold text-amber-500 hover:translate-x-1 transition-transform inline-block">Explorează DEP →</a>
                </div>
              </div>
            </section>

            {/* Oportunități Specifice */}
            <section className="mb-32 py-20 bg-slate-900 rounded-[3.5rem] px-10 md:px-20 border border-slate-800 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-12 text-center tracking-tight">Apeluri Active și Viitoare (2025-2027)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
                  <div className="text-[9px] font-black text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded inline-block mb-4 uppercase tracking-[0.2em]">DESCHIS 2025</div>
                  <h4 className="font-bold text-white mb-3 text-base font-display">Erasmus+ KA220</h4>
                  <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed">Dezvoltare curriculum și training pentru profesori.</p>
                  <div className="pt-4 border-t border-white/5 space-y-1.5 text-[10px] text-indigo-300 font-black uppercase tracking-widest">
                    <p>€120k - €400k</p>
                    <p>24-36 luni</p>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
                  <div className="text-[9px] font-black text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded inline-block mb-4 uppercase tracking-[0.2em]">APEL 2026</div>
                  <h4 className="font-bold text-white mb-3 text-base font-display">Horizon Europe</h4>
                  <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed">Cercetare și inovare în sisteme AI educaționale.</p>
                  <div className="pt-4 border-t border-white/5 space-y-1.5 text-[10px] text-pink-300 font-black uppercase tracking-widest">
                    <p>€2M - €5M</p>
                    <p>36-48 luni</p>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
                  <div className="text-[9px] font-black text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded inline-block mb-4 uppercase tracking-[0.2em]">PLANIFICAT 2026</div>
                  <h4 className="font-bold text-white mb-3 text-base font-display">Digital Europe</h4>
                  <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed">Crearea de ecosisteme de partajare a datelor.</p>
                  <div className="pt-4 border-t border-white/5 space-y-1.5 text-[10px] text-cyan-300 font-black uppercase tracking-widest">
                    <p>€3M - €8M</p>
                    <p>24-36 luni</p>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
                  <div className="text-[9px] font-black text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded inline-block mb-4 uppercase tracking-[0.2em]">ROLLING CALLS</div>
                  <h4 className="font-bold text-white mb-3 text-base font-display">ESF+ EWS</h4>
                  <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed">Sisteme pentru identificarea riscului de abandon.</p>
                  <div className="pt-4 border-t border-white/5 space-y-1.5 text-[10px] text-amber-300 font-black uppercase tracking-widest">
                    <p>€500k - €2M</p>
                    <p>24-48 luni</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cum Construiești o Propunere */}
            <section className="mb-32">
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 mb-16 text-center tracking-tight">Cum Construiești o Propunere de Succes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  { t: "1. Definește problema clar", d: "Nu începe cu soluția tehnică. Identifică o problemă reală din educație.", c: "text-indigo-600" },
                  { t: "2. Arată dovada conceptului", d: "Pilot mic care demonstrează că abordarea funcționează. Dovezi concrete.", c: "text-pink-500" },
                  { t: "3. Parteneriate strategice", d: "Combină expertise: universitate, ONG, școală și companii tech.", c: "text-cyan-500" },
                  { t: "4. Impact măsurabil", d: "Definește KPI-uri clare: cifre exacte, procente și termene limită.", c: "text-amber-500" },
                  { t: "5. Etica datelor ca prioritate", d: "GDPR compliance de la design. Transparență și măsuri anti-bias.", c: "text-emerald-500" },
                  { t: "6. Sustenabilitate post-proiect", d: "Plan clar pentru continuare după finanțare. Integrare bugetară.", c: "text-violet-500" }
                ].map((item, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute -top-8 left-0 text-6xl font-black text-slate-50 group-hover:text-slate-100 transition-colors pointer-events-none">{idx + 1}</div>
                    <h4 className={`text-lg font-bold mb-3 relative z-10 ${item.c}`}>{item.t}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed relative z-10">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Resurse Utile */}
            <section className="p-12 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm text-center">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10">Resurse Utile pentru Grant Writing</h3>
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
                {[
                  { n: "Funding & Tenders Portal", l: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home", c: "text-indigo-600" },
                  { n: "Erasmus+ Programme Guide", l: "https://erasmus-plus.ec.europa.eu/programme-guide/erasmus-plus-programme-guide", c: "text-pink-500" },
                  { n: "HE Work Programme", l: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/how-to-participate/reference-documents", c: "text-cyan-500" },
                  { n: "Digital Education Action Plan", l: "https://education.ec.europa.eu/focus-topics/digital-education/digital-education-action-plan", c: "text-amber-500" }
                ].map((res, i) => (
                  <a 
                    key={i} 
                    href={res.l} 
                    target="_blank" 
                    className={`${res.c} font-bold text-[10px] uppercase tracking-widest transition-all hover:translate-y-[-1px] hover:brightness-110 border-b-2 border-transparent hover:border-current pb-1`}
                  >
                    {res.n}
                  </a>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 mt-32 text-left relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-pink-500 via-cyan-500 via-amber-500 to-emerald-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2 text-left">
              <div className="text-3xl font-bold font-display mb-6 tracking-tighter text-white">BigData<span className="text-indigo-500">.</span>Edu</div>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md font-light">
                Ghidul studentului la Științele Educației pentru utilizarea Big Data și AI în procesul de învățământ modern.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-black mb-6 uppercase text-[9px] tracking-[0.3em] text-indigo-400">Navigare</h4>
              <ul className="space-y-4 text-base text-slate-400 font-light">
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => updateTab('home')}>De ce date?</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => updateTab('career')}>Harta Carierei</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => updateTab('funding')}>Fonduri & Proiecte</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="font-black mb-6 uppercase text-[9px] tracking-[0.3em] text-pink-400">Parteneri</h4>
              {/* Visual trick: White container to blend the white background logo */}
              <div className="bg-white p-6 rounded-[1.5rem] shadow-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300">
                <img src="logo.png" alt="Parteneri" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>

          <div className="mb-20 p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 text-left max-w-4xl">
            <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-5">Programul Educație și Ocupare 2021-2027</h4>
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed italic font-light">
                „Profesioniști reflexivi - colaborativi: un sistem integrat de activități de învățare la locul de muncă și complementare, fundamentat pe principiile integrării teoriei cu practica și utilizării dovezilor în procesul de decizie”
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-4 pt-2">
                <p className="text-xs text-indigo-400 font-mono font-bold tracking-widest bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20 inline-block">
                  Cod SMIS: 311901
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-left">
            <p className="text-xs text-slate-500 max-w-lg font-light">
              © 2026 BigData.Edu | Toate drepturile rezervate. Material realizat sub egida Universității de Vest din Timișoara.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
