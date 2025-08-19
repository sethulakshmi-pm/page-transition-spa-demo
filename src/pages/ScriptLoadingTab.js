import '../App.css';

import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';

const ScriptLoadingTab = () => {

  const scriptText = `
    window.onload = function() {
      document.getElementById('greeting').innerText = 'Welcome to Script Loading Tab!';
      setInterval(() => {
        document.querySelector('.moving-email').style.color = 
          document.querySelector('.moving-email').style.color === 'red' ? 'blue' : 'red';
      }, 1000);
    }
  `;

  // Optional: If you need to handle any side-effects after the script is loaded, use useEffect
  useEffect(() => {
    // You can also dynamically add the script if you prefer not to use Helmet
    const script = document.createElement('script');
    script.src = 'https://eum.instana.io/1.7.5/eum.min.js'; // Replace with your server URL
    script.async = true;
    script.onload = () => console.log('Script loaded successfully');
    script.onerror = () => console.error('Error loading the script');
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted (optional)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="page-content">
      <Helmet>
        <title>ScriptLoadingTab Page Title</title>
        {/* Load the external JavaScript file from the server */}
        <script src="https://eum.instana.io/1.7.5/eum.min.js" async></script>
      </Helmet>

      <h1 id="greeting">ScriptLoadingTab</h1>

      <div className="email-wrapper">
        <span className="moving-email">sethulakshmi.pm@ibm.com</span>
      </div>

      {/* Display the raw script text */}
      <div className="script-display">
        <h2>JavaScript Code:</h2>
        <pre>
          <code>{scriptText}</code>
        </pre>
      </div>
    </div>
  );
};

export default ScriptLoadingTab;
