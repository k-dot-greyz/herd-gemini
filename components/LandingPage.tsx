import React from 'react';
import { Hero } from './Hero';
import { PainSection } from './PainSection';
import { SocialProof } from './SocialProof';
import { SolutionSection } from './SolutionSection';
import { ContactForm } from './ContactForm';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <PainSection />
      <SolutionSection />
      <ContactForm />
    </>
  );
};