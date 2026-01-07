import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import Services from './pages/Services';
import ContactPage from './pages/ContactPage';
import ProjectDetails from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <div className="bg-slate-50 min-h-screen">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
