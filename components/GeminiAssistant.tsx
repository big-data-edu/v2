
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const GeminiAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const generateIdea = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Ești un expert în Big Data și educație. Sugerează o modalitate concretă prin care un profesor din România poate colecta și folosi date pentru a îmbunătăți următoarea situație: "${prompt}". Răspunde în limba română, scurt (max 100 cuvinte), cu pași acționabili.`,
        config: { temperature: 0.7 }
      });
      
      setResponse(model.text || "Nu am putut genera un răspuns. Te rog să încerci din nou.");
    } catch (error) {
      console.error(error);
      setResponse("Eroare la conectarea cu AI-ul. Verifică conexiunea.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl overflow-hidden relative group">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-display font-black">Gemini AI Assistant</h2>
        </div>
        <p className="text-slate-400 mb-8 max-w-2xl text-lg">
          Vrei o idee despre cum poți folosi datele în clasa ta? Scrie o provocare pedagogică și lasă AI-ul să sugereze un instrument digital.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Ex: Elevii mei au dificultăți la înțelegerea textelor..."
            className="flex-1 bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-500 transition-all text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button 
            onClick={generateIdea}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg active:scale-95 whitespace-nowrap"
          >
            {loading ? "Gândesc..." : "Generează Idee"}
          </button>
        </div>

        {response && (
          <div className="mt-8 bg-indigo-900/30 p-8 rounded-2xl border border-indigo-500/20 animate-fadeIn">
            <p className="text-indigo-200 leading-relaxed italic">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};
