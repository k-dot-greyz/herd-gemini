import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { RequirementsSpec } from './components/RequirementsSpec';
import { AdminConsole } from './components/AdminConsole';
import { Footer } from './components/Footer';
import { SeoHead } from './components/SeoHead';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'specs' | 'admin'>('home');

  const handleNavigate = (view: 'home' | 'specs' | 'admin') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <SeoHead 
              title="Home" 
              description="Herding Cats Consulting - High performance organizational optimization." 
            />
            <LandingPage />
          </>
        )}
        
        {currentView === 'specs' && (
           <>
            <SeoHead 
              title="System Specs" 
              description="Technical documentation and design system architecture for Project Feline Focus." 
            />
            <RequirementsSpec />
          </>
        )}

        {currentView === 'admin' && (
           <>
            <SeoHead 
              title="Admin Console" 
              description="Restricted Access. Authorization required." 
            />
            <AdminConsole />
          </>
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;