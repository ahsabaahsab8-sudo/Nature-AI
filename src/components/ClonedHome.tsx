/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';

interface ClonedHomeProps {
  onHome: () => void;
  onScannerHub: () => void;
  onDevCore: () => void;
  onFishIdentify: () => void;
  onBirdIdentify: () => void;
  onInsectIdentify: () => void;
}

export function ClonedHome({
  onHome,
  onScannerHub,
  onDevCore,
  onFishIdentify,
  onBirdIdentify,
  onInsectIdentify
}: ClonedHomeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const routeMap: { [key: string]: () => void } = {
      'home': onHome,
      'scanner-hub': onScannerHub,
      'developer-core': onDevCore,
      'bird-identify': onBirdIdentify,
      'fish-identify': onFishIdentify,
      'insect-identify': onInsectIdentify,
    };

    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'navigate' && event.data.route) {
        const handler = routeMap[event.data.route];
        if (handler) handler();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onHome, onScannerHub, onDevCore, onBirdIdentify, onFishIdentify, onInsectIdentify]);

  return (
    <div className="cloned-home-wrapper relative w-full h-screen overflow-hidden bg-black">
      <iframe
        ref={iframeRef}
        src="/home/index.html"
        className="w-full h-full border-none block m-0 p-0"
        title="Nature AI Home"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
