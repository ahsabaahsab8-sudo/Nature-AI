import React from 'react';
import { X, ArrowLeft } from 'lucide-react';

interface PremiumFeaturesProps {
  onBack: () => void;
}

export default function PremiumFeatures({ onBack }: PremiumFeaturesProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black select-none">
      {/* Floating absolute close button in the top right */}
      <button 
        onClick={onBack}
        className="absolute top-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full text-white font-bold text-xs bg-black/40 border border-white/10 hover:bg-black/60 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer shadow-lg backdrop-blur-md"
        style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
        id="btn-back-main"
      >
        <ArrowLeft size={14} />
        <span>Back to Main Hub</span>
      </button>
      
      <iframe 
        src="/scanner-hub/index.html" 
        className="w-full h-full border-none block m-0 p-0" 
        title="Scanner Hub"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
