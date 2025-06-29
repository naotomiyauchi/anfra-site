import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import { HelmetProvider } from 'react-helmet-async';
import ModernBackground from './components/ModernBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // モバイルでのスクロール最適化
    const optimizeMobileScroll = () => {
      if (window.innerWidth <= 768) {
        document.documentElement.style.setProperty('-webkit-overflow-scrolling', 'touch');
        document.body.style.setProperty('-webkit-overflow-scrolling', 'touch');
      }
    };

    optimizeMobileScroll();
    window.addEventListener('resize', optimizeMobileScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', optimizeMobileScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block rounded-full h-12 w-12 border-4 border-gray-900 border-t-transparent mb-6"
          />
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-900 text-xl font-light"
          >
            Loading...
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-500 overflow-x-hidden" style={{ WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
          <Header />
          <ModernBackground />
          
          <AnimatePresence mode="wait">
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;