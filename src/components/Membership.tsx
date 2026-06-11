import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageSquare, Bot, ArrowRight, User } from 'lucide-react';

export default function Membership() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    { role: 'assistant', text: 'Hello! I am Leafy, your fine-tuned ecosystem assistant. Ask me anything about local plants, pests, diagnostics, treatment remedies, or migratory patterns.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll chat to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;
    
    // Add user message to log
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setInputVal('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: textToSend })
      });

      if (!response.ok) {
        throw new Error('API failed');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', text: data.reply || 'Sorry, I couldn\'t formulate an answer.' }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', text: 'Unable to connect to GenAI servers. Standard protocol: check your GEMINI_API_KEY in Secrets context.' }]);
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <section id="unrivaled" className="py-32 px-8 max-w-7xl mx-auto border-t border-moss/10">
      
      {/* SECTION 7: THE COMPARATIVE MATRIX */}
      <div className="mb-20 text-center">
        <span className="text-clay font-mono text-xs uppercase tracking-widest font-bold">Nature AI Metrics</span>
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-charcoal tracking-tight mt-2 mb-4">
          What Makes Us Unrivaled?
        </h2>
        <p className="font-serif italic text-2xl text-moss/80 max-w-2xl mx-auto">
          A definitive evaluation of ecological computer vision models.
        </p>
      </div>

      <div className="overflow-x-auto mb-32 rounded-3xl border border-moss/10 shadow-sm bg-white">
        <table className="w-full min-w-[700px] border-collapse text-left">
          <thead>
            <tr className="bg-moss text-cream font-sans text-xs uppercase tracking-widest border-b border-moss/20">
              <th className="p-6 font-bold">Capabilities</th>
              <th className="p-6 font-normal">Traditional Apps</th>
              <th className="p-6 font-bold bg-moss-dark border-l border-white/15 text-clay">🏆 Nature AI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-moss/10 font-sans text-sm text-charcoal">
            {/* Row 1 */}
            <tr className="hover:bg-cream/40 transition-colors">
              <td className="p-6 font-bold align-top w-1/4">Cross-Kingdom Diagnostics</td>
              <td className="p-6 text-charcoal/70 align-top w-3/8">Limited to only plants or only animals.</td>
              <td className="p-6 font-medium text-moss align-top bg-cream/30 border-l border-moss/10 w-3/8">
                🏆 Unified Multi-Vision Engine covering Plants, Insects, Fish, and Birds under one ecosystem.
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="hover:bg-cream/40 transition-colors">
              <td className="p-6 font-bold align-top w-1/4">Acoustic Audio Analytics</td>
              <td className="p-6 text-charcoal/70 align-top w-3/8">Visual image capture uploads only.</td>
              <td className="p-6 font-medium text-moss align-top bg-cream/30 border-l border-moss/10 w-3/8">
                🏆 Real-time Bird Call Audio Analysis with wave match parameters.
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="hover:bg-cream/40 transition-colors">
              <td className="p-6 font-bold align-top w-1/4">Hyper-Local Proximity Radar</td>
              <td className="p-6 text-charcoal/70 align-top w-3/8">Static searchable encyclopedias.</td>
              <td className="p-6 font-medium text-moss align-top bg-cream/30 border-l border-moss/10 w-3/8">
                🏆 Live GPS Specie Mapping to instantly show what is living near you.
              </td>
            </tr>
            {/* Row 4 */}
            <tr className="hover:bg-cream/40 transition-colors">
              <td className="p-6 font-bold align-top w-1/4">Micro-Tool Utility Matrix</td>
              <td className="p-6 text-charcoal/70 align-top w-3/8">Zero built-in environment utilities.</td>
              <td className="p-6 font-medium text-moss align-top bg-cream/30 border-l border-moss/10 w-3/8">
                🏆 20+ Integrated Ecosystem Utilities (Lux Meter, Toxicity Checker, Soil Moisture Tracker).
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* SECTION 8: COMPANIONAL INTERACTION COMPONENT */}
      <div id="leafy-chat" className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-charcoal text-cream rounded-[3rem] p-8 md:p-14 border border-white/10 items-stretch shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Left Side: Layout Intro */}
        <div className="lg:col-span-5 flex flex-col justify-between relative z-10 text-left">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-5 h-5 text-clay animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#F2F0E9]/60 font-black">COMPANIONAL INTERACTION</span>
            </div>
            <h3 className="font-sans font-extrabold text-4xl md:text-5xl text-cream tracking-tight mb-6">
              Meet Leafy Chat AI
            </h3>
            <p className="font-sans text-cream/80 text-sm md:text-base leading-relaxed font-light mb-8 max-w-sm">
              Have complex ecosystem questions? Engage with our fine-tuned companion chatbot agent built to provide instant structural tips, treatment guides, and localized advice around the clock.
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] text-clay block tracking-wider uppercase mb-3">Suggested Prompts</span>
            <div className="flex flex-col gap-2.5 max-w-sm">
              <button 
                onClick={() => handleSendMessage('Identify a bird that has high frequency wave acoustics and thrives in North American sub-alpine biomes.')}
                className="text-left py-2 px-3.5 rounded bg-white/5 border border-white/5 font-sans text-xs hover:bg-white/10 transition-colors text-cream/90 truncate flex justify-between items-center"
              >
                <span>Avian acoustics identification...</span>
                <ArrowRight className="w-3 h-3 text-clay flex-shrink-0" />
              </button>
              <button 
                onClick={() => handleSendMessage('How to cure pathogenetic Cedar Apple Rust visible on apple trees foliage?')}
                className="text-left py-2 px-3.5 rounded bg-white/5 border border-white/5 font-sans text-xs hover:bg-white/10 transition-colors text-cream/90 truncate flex justify-between items-center"
              >
                <span>Treating Cedar Apple Rust...</span>
                <ArrowRight className="w-3 h-3 text-clay flex-shrink-0" />
              </button>
              <button 
                onClick={() => handleSendMessage('What soil volumetric saturation parameters are ideal for wild ferns?')}
                className="text-left py-2 px-3.5 rounded bg-white/5 border border-white/5 font-sans text-xs hover:bg-white/10 transition-colors text-cream/90 truncate flex justify-between items-center"
              >
                <span>Soil saturation parameters...</span>
                <ArrowRight className="w-3 h-3 text-clay flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Chatbox Console */}
        <div className="lg:col-span-7 bg-black/40 border border-white/10 rounded-2xl flex flex-col justify-between overflow-hidden relative z-10 h-[480px]">
          {/* Header */}
          <div className="bg-white/5 border-b border-white/5 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-sans text-xs font-bold text-cream">Leafy Core v2.5-Flash</span>
            </div>
            <span className="font-mono text-[9px] text-cream/40 uppercase">Ecosystem Synapse Link</span>
          </div>

          {/* Messages block */}
          <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 text-left custom-scrollbar">
            {messages.map((message, i) => (
              <div 
                key={i} 
                className={`flex gap-3 max-w-[85%] ${message.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0
                  ${message.role === 'user' ? 'bg-clay text-white' : 'bg-moss text-cream'}`}
                >
                  {message.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-3.5 rounded-2xl font-sans text-xs leading-relaxed
                  ${message.role === 'user' ? 'bg-clay text-white rounded-tr-none' : 'bg-white/5 text-cream/90 rounded-tl-none border border-white/5'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-7 h-7 rounded-full bg-moss text-cream flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-bounce" />
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-cream/60 font-mono text-[10px] animate-pulse flex items-center gap-2">
                  <span>DEPLOYING NEURAL COMPARISONS...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Panel */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputVal); }}
            className="p-4 bg-white/5 border-t border-white/5 flex gap-2"
          >
            <input 
              type="text" 
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask Leafy about flora, insects, diagnostic symptoms..."
              className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 font-sans text-xs text-cream focus:outline-none focus:border-clay placeholder-cream/30"
              disabled={loading}
            />
            <button 
              type="submit"
              className="p-3 bg-clay hover:bg-clay/90 text-white rounded-xl transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
              disabled={loading || !inputVal.trim()}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

    </section>
  );
}
