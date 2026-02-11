import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { SocialProof } from './components/SocialProof';
import { SolutionSection } from './components/SolutionSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <PainSection />
        <SolutionSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;