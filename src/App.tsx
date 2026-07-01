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
import { BirdIdentifySection } from './components/BirdIdentifySection';
import { InsectIdentifySection } from './components/InsectIdentifySection';
import PremiumFeatures from './components/PremiumFeatures';
import DeveloperCore from './components/DeveloperCore';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { ClonedHome } from './components/ClonedHome';

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
  const [currentPage, setCurrentPage] = React.useState<'main' | 'premium-features' | 'developer-core' | 'privacy-policy' | 'terms-of-service' | 'fish-identify' | 'bird-identify' | 'insect-identify'>('main');

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
      } else if (route === 'fish-identify') {
        setCurrentPage('fish-identify');
      } else if (route === 'bird-identify') {
        setCurrentPage('bird-identify');
      } else if (route === 'identify-insect') {
        setCurrentPage('insect-identify');
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
    window.history.pushState(null, '', '/fish-identify');
    setCurrentPage('fish-identify');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBirdIdentifySection = () => {
    window.history.pushState(null, '', '/bird-identify');
    setCurrentPage('bird-identify');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openInsectIdentifySection = () => {
    window.history.pushState(null, '', '/identify-insect');
    setCurrentPage('insect-identify');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      ) : currentPage === 'fish-identify' ? (
        <>
          <main className="w-full bg-black min-h-screen">
            <FishIdentifySection />
          </main>
        </>
      ) : currentPage === 'bird-identify' ? (
        <>
          <main className="w-full bg-black min-h-screen">
            <BirdIdentifySection />
          </main>
        </>
      ) : currentPage === 'insect-identify' ? (
        <>
          <main className="w-full bg-black min-h-screen">
            <InsectIdentifySection />
          </main>
        </>
      ) : (
        <ClonedHome />
      )}
    </div>
  );
}