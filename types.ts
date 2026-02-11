import React from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  chaosDescription: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}