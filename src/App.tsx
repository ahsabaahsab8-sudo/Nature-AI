/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RedesignedNavbar } from './components/RedesignedNavbar';
import { RedesignedHero } from './components/RedesignedHero';
import { RedesignedCapabilities } from './components/RedesignedCapabilities';
import { PlantScrollSection } from './components/PlantScrollSection';
import { ResearchDatabaseSection } from './components/ResearchDatabaseSection';
import { FishIdentifySection } from './components/FishIdentifySection';
import PremiumFeatures from './components/PremiumFeatures';
import DeveloperCore from './components/DeveloperCore';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

// Suppress Framer Motion list key warnings and other benign logs
if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = (...args: any[]) => {
    if (args[0] && typeof args[0] === 'string' && (
      args[0].includes('React does not recognize the') ||
      args[0].includes('Framer Motion') ||
      args[0].includes('list keys') ||
      args[0].includes('key prop')
    )) {
      return;
    }
    originalError(...args);
  };
}

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<'main' | 'premium-features' | 'developer-core' | 'privacy-policy' | 'terms-of-service'>('main');

  React.useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname.replace(/^\/|\/$/g, '');
      const hash = window.location.hash.replace('#', '');
      const route = path || hash;

      if (route === 'privacy-policy') {
        setCurrentPage('privacy-policy');
      } else if (route === 'terms-of-service') {
        setCurrentPage('terms-of-service');
      } else if (route === 'developer-core') {
        setCurrentPage('developer-core');
      } else if (route === 'premium-features') {
        setCurrentPage('premium-features');
      } else {
        setCurrentPage('main');
      }
    };

    handleNavigation();

    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('hashchange', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  const openPremiumFeatures = () => {
    window.history.pushState(null, '', '/premium-features');
    setCurrentPage('premium-features');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDeveloperCore = () => {
    window.history.pushState(null, '', '/developer-core');
    setCurrentPage('developer-core');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openFishIdentifySection = () => {
    if (currentPage !== 'main') {
      window.history.pushState(null, '', '/');
      setCurrentPage('main');
      setTimeout(() => {
        const el = document.getElementById('fish-identify-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('fish-identify-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPrivacyPolicy = () => {
    window.history.pushState(null, '', '/privacy-policy');
    setCurrentPage('privacy-policy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openTermsOfService = () => {
    window.history.pushState(null, '', '/terms-of-service');
    setCurrentPage('terms-of-service');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    window.history.pushState(null, '', '/');
    setCurrentPage('main');
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {currentPage === 'premium-features' ? (
        <PremiumFeatures onBack={handleBack} />
      ) : currentPage === 'developer-core' ? (
        <DeveloperCore onBack={handleBack} />
      ) : currentPage === 'privacy-policy' ? (
        <PrivacyPolicy onBack={handleBack} />
      ) : currentPage === 'terms-of-service' ? (
        <TermsOfService onBack={handleBack} />
      ) : (
        <>
          <RedesignedNavbar
            onHome={handleBack}
            onScannerHub={openPremiumFeatures}
            onDevCore={openDeveloperCore}
            onFishIdentify={openFishIdentifySection}
            onGlobalReach={() => {
              const el = document.getElementById('capabilities');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onSystemCore={openDeveloperCore}
            onPremiumMode={openPremiumFeatures}
          />
          <main className="w-full bg-black min-h-screen">
            <RedesignedHero
              onOpenPremium={openPremiumFeatures}
              onOpenDevCore={openDeveloperCore}
              onOpenPrivacy={openPrivacyPolicy}
              onOpenTerms={openTermsOfService}
            />
            <RedesignedCapabilities />
            <PlantScrollSection />
            
            {/* Premium visual spacer separating PlantScrollSection (Section 3) and ResearchDatabaseSection (Section 4) */}
            <div className="w-full bg-black py-20 flex items-center justify-center relative z-20 border-t border-b border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />
              <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <span className="mx-6 text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4b411]/50 animate-pulse" />
                  TRANSITIONING SYSTEM CORES
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 animate-pulse" />
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
              </div>
            </div>

            <ResearchDatabaseSection />
            
            {/* Premium visual spacer separating ResearchDatabaseSection (Section 4) and FishIdentifySection (Section 5) */}
            <div className="w-full bg-black py-24 flex items-center justify-center relative z-20 border-t border-b border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)] pointer-events-none" />
              <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <span className="mx-6 text-[10px] font-mono tracking-[0.3em] text-cyan-400/40 uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 animate-pulse" />
                  INITIALIZING AQUATIC COGNIZANCE
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 animate-pulse" />
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
              </div>
            </div>

            <FishIdentifySection />
          </main>
          
          <footer className="relative z-10 bg-black py-10 border-t border-white/5 select-none text-center text-xs text-white/40 font-body">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p>&copy; 2026 Nature AI. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <button onClick={openPrivacyPolicy} className="hover:text-white/80 transition-colors cursor-pointer">
                  Privacy Policy
                </button>
                <button onClick={openTermsOfService} className="hover:text-white/80 transition-colors cursor-pointer">
                  Terms of Service
                </button>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

