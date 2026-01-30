import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Simple wrapper that adds fade-in animation to page content
 * Respects prefers-reduced-motion
 */
export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
}