import '../App.css';

import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';

const Contact = () => {
  useEffect(() => {
    requestAnimationFrame(() => {
      if (performance.getEntriesByName('routeChangeStart').length > 0) {
        performance.mark('routeChangeEnd');
        performance.measure('PageTransition', 'routeChangeStart', 'routeChangeEnd');
        const [measure] = performance.getEntriesByName('PageTransition');
        console.log(`Page transition took ${measure.duration.toFixed(2)} ms`);

        performance.clearMarks('routeChangeStart');
        performance.clearMarks('routeChangeEnd');
        performance.clearMeasures('PageTransition');
      } else {
        console.warn('routeChangeStart mark not found — skipping measure.');
      }
    });
  }, []);
  return (
    <div className="page-content">
      <Helmet>
        <title>Contact Page Title</title>
      </Helmet>
      <h1>Contact Me</h1>
      <div className="email-wrapper">
        <span className="moving-email">sethulakshmi.pm@ibm.com</span>
      </div>
    </div>
  );
};

export default Contact;
