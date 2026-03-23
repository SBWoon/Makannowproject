import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

const TutorScreen: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  const handleSend = async () => {
    if (!query.trim()) return;
    
    const userMsg = { role: 'user', text: query };
    setMessages([...messages, userMsg]);
    setQuery('');
    setIsThinking(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: query,
        config: {
          systemInstruction: "You are a helpful Malaysian culinary expert. Provide advice on recipes, techniques, and fixing kitchen mishaps. Keep responses concise and warm.",
        },
      });
      
      setMessages(prev => [...prev, { role: 'ai', text: response.text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "Maaf, I'm simmering on a problem. Try again later!" }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-4 space-y-8 pb-40"
    >
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-on-secondary-container mb-3">
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
          <span className="font-label text-xs font-bold uppercase tracking-widest">AI Kitchen Guide</span>
        </div>
        <h1 className="font-headline text-3xl font-extrabold text-on-surface leading-tight tracking-tight">Apa khabar, Chef?</h1>
        <p className="text-on-surface-variant mt-2 text-sm">Your personal tutor for mastering Malaysian flavors and fixing kitchen mishaps.</p>
      </header>

      <div className="space-y-6">
        {/* Static Advice Cards */}
        <section className="bg-surface-container-low rounded-lg p-6 shadow-sm border-l-4 border-secondary">
          <div className="flex items-start gap-4">
            <div className="bg-secondary-fixed p-3 rounded-full text-on-secondary-fixed shrink-0">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <div>
              <span className="font-label text-[10px] font-bold text-secondary uppercase tracking-widest block mb-1">Advice: Technique</span>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">The Secret to 'Pecah Minyak'</h3>
              <p className="text-on-surface-variant text-xs leading-relaxed">To get that authentic sambal taste, you must cook the chili paste until the oil separates. This means the water has evaporated and the chilies are perfectly fried.</p>
            </div>
          </div>
        </section>

        {/* Chat Messages */}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end pl-12' : 'justify-start pr-12'}`}>
            <div className={`p-4 rounded-lg shadow-sm text-sm ${msg.role === 'user' ? 'bg-primary-container text-on-primary-container rounded-bl-lg' : 'bg-surface-container-low text-on-surface rounded-br-lg'}`}>
              {msg.text}
            </div>
          </div>
        ))}

        {isThinking && (
          <div className="flex items-center gap-3 text-secondary animate-pulse">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="text-[10px] font-bold font-label tracking-tighter uppercase">AI is simmering a response...</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="fixed bottom-24 left-0 right-0 px-4 max-w-md mx-auto z-40">
        <div className="bg-surface-container-highest/90 backdrop-blur-xl p-3 rounded-full shadow-lg border border-outline-variant/20 flex items-center gap-2">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-secondary hover:bg-secondary-fixed/30 transition-colors">
            <span className="material-symbols-outlined">add_circle</span>
          </button>
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/60 font-body py-2 text-sm" 
            placeholder="Ask for a recipe, tip, or help..." 
          />
          <button 
            onClick={handleSend}
            className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TutorScreen;
