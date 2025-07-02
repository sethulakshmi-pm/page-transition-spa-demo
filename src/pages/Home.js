import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const Home = () => {
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
        <title>HOME Page Title</title>
      </Helmet>
      <h1>Welcome to the Home Page!</h1>
      <h2>React SPA with auto page detection.</h2>
    </div>
  );
};

export default Home;