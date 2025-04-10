'use client';

import { useEffect } from 'react';

export default function SplineViewer({ url }) {
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.79/build/spline-viewer.js';
    document.body.appendChild(script);

    // Create and add the viewer
    const viewer = document.createElement('spline-viewer');
    viewer.setAttribute('url', url);
    viewer.style.width = '100%';
    viewer.style.height = '100%';
    viewer.style.borderRadius = '12px';
    
    const container = document.getElementById('spline-container');
    if (container) {
      container.appendChild(viewer);
    }

    return () => {
      document.body.removeChild(script);
      if (container && container.contains(viewer)) {
        container.removeChild(viewer);
      }
    };
  }, [url]);

  return <div id="spline-container" style={{ width: '100%', height: '500px', position: 'relative' }}></div>;
} 