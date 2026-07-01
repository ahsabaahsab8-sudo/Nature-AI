/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function ClonedHome() {
  return (
    <div className="cloned-home-wrapper relative w-full h-screen overflow-hidden bg-black">
      <iframe
        src="/home/index.html"
        className="w-full h-full border-none block m-0 p-0"
        title="Nature AI Home"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
