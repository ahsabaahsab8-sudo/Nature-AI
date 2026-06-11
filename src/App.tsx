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
  const [currentPage, setCurrentPage] = useState<'main' | 'premium-features' | 'developer-core' | 'privacy-policy' | 'terms-of-service'>('main');

  const openPremiumFeatures = () => {
    setCurrentPage('premium-features');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDeveloperCore = () => {
    setCurrentPage('developer-core');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPrivacyPolicy = () => {
    setCurrentPage('privacy-policy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openTermsOfService = () => {
    setCurrentPage('terms-of-service');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen bg-cream text-charcoal font-sans selection:bg-moss selection:text-cream">
      {currentPage === 'premium-features' ? (
        <PremiumFeatures onBack={() => { setCurrentPage('main'); window.scrollTo({ top: 0 }); }} />
      ) : currentPage === 'developer-core' ? (
        <DeveloperCore onBack={() => { setCurrentPage('main'); window.scrollTo({ top: 0 }); }} />
      ) : currentPage === 'privacy-policy' ? (
        <PrivacyPolicy onBack={() => { setCurrentPage('main'); window.scrollTo({ top: 0 }); }} />
      ) : currentPage === 'terms-of-service' ? (
        <TermsOfService onBack={() => { setCurrentPage('main'); window.scrollTo({ top: 0 }); }} />
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

