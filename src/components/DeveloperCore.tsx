import React from 'react';

interface DeveloperCoreProps {
  onBack: () => void;
}

const DeveloperCore: React.FC<DeveloperCoreProps> = ({ onBack }) => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Premium Sleek Floating Close Button */}
      <button 
        onClick={onBack}
        className="fixed top-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 pointer-events-auto"
        title="Back to Nature AI"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Cloned Portal Iframe */}
      <iframe 
        src="/unseen/index.html" 
        className="w-full h-full border-none"
        title="Deep Minded Developer Core Portal"
      />
    </div>
  );
};

export default DeveloperCore;
