import { ReactNode } from 'react';

interface HoverTextProps {
  children: ReactNode;
  className?: string;
}

/**
 * Passthrough component for interactive text
 * The actual hover effect is handled by the .interactive-text class in theme.css
 */
export default function HoverText({ children, className = '' }: HoverTextProps) {
  return (
    <>
      {children}
    </>
  );
}
