import { Link, Outlet, useLocation } from "react-router-dom";

import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Route change started
    performance.mark('routeChangeStart');
  }, [location.pathname]);

  return (
    <div className="app-layout">
      <header className="app-header">
        <nav>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/blogs" className="nav-link">Blogs</Link></li>
            <li><Link to="/script" className="nav-link">ScriptLoadingTab</Link></li>
            <li><Link to="/apiCall" className="nav-link">ApiCallTab</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 My Website - Sethulakshmi P M. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;