/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Membership from './components/Membership';
import Footer from './components/Footer';
import PremiumFeatures from './components/PremiumFeatures';
import DeveloperCore from './components/DeveloperCore';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

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
    <div className="relative w-full min-h-screen bg-cream text-charcoal font-sans selection:bg-moss selection:text-cream">
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
          <div className="noise-overlay"></div>
          <Navbar onOpenPremium={openPremiumFeatures} onOpenDevCore={openDeveloperCore} onOpenPrivacy={openPrivacyPolicy} />
          <main>
            <Hero />
            <Features onOpenPremium={openPremiumFeatures} />
            <Philosophy />
            <Protocol />
            <Membership />
          </main>
          <Footer onOpenPremium={openPremiumFeatures} onOpenDevCore={openDeveloperCore} onOpenPrivacy={openPrivacyPolicy} onOpenTerms={openTermsOfService} />
        </>
      )}
    </div>
  );
}

