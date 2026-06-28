import React from 'react';

export function InsectIdentifySection() {
  return (
    <section 
      id="insect-identify-section" 
      className="relative w-full h-screen overflow-hidden bg-black border-t border-white/10"
    >
      <iframe 
        src="/identify-insect/index.html" 
        className="w-full h-full border-none block m-0 p-0" 
        title="Insect Identify Section"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
}
