import React from 'react';

// Define a shape for the Icon props compatible with Lucide
export type IconProps = {
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
  color?: string;
};

export type IconComponent = React.ComponentType<IconProps>;

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
  icon: IconComponent;
}