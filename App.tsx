import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { RequirementsSpec } from './components/RequirementsSpec';
import { Footer } from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'specs'>('home');

  const handleNavigate = (view: 'home' | 'specs') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {currentView === 'home' ? (
          <LandingPage />
        ) : (
          <RequirementsSpec />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;