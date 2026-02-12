import React, { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ title, description }) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Herding Cats Consulting`;

    // Update Meta Description
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null; // This component doesn't render anything visible
};