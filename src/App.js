import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ApiCallTab from "./pages/ApiCallTab";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import ReactDOM from 'react-dom/client';
import ScriptLoadingTab from "./pages/ScriptLoadingTab";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="apiCall" element={<ApiCallTab />} />
          <Route path="script" element={<ScriptLoadingTab />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
