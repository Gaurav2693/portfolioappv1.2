import { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

const GlitchText = ({ children, className = '' }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(children);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!isGlitching) {
      setDisplayText(children);
      return;
    }

    let iteration = 0;
    const originalText = children;
    const totalIterations = originalText.length;

    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            // Keep spaces and punctuation
            if (char === ' ' || char === '.' || char === ',' || char === ';' || char === ':' || char === '!' || char === '?' || char === '—' || char === '-' || char === "'" || char === '"') {
              return char;
            }

            // Reconstruct characters that have been processed
            if (index < iteration) {
              return originalText[index];
            }

            // Only glitch 30% of remaining characters for subtlety
            if (Math.random() > 0.3) {
              return originalText[index];
            }

            // Glitch remaining characters
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iteration += 1; // Faster reconstruction (was 1/3, now 1)

      if (iteration >= totalIterations) {
        setDisplayText(originalText);
        clearInterval(interval);
        setIsGlitching(false);
      }
    }, 20); // 60% faster (was 50ms, now 20ms)

    return () => clearInterval(interval);
  }, [isGlitching, children]);

  return (
    <span
      className={`inline-block cursor-pointer transition-colors ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;
