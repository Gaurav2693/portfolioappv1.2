import { useEffect, useRef, useState } from 'react';

interface AnimatedSVGProps {
  children: React.ReactNode;
  className?: string;
  viewBox: string;
  enableStrokeAnimation?: boolean;
  animateOnHover?: boolean;
  strokeDuration?: number;
  fillDelay?: number;
}

/**
 * Premium SVG wrapper that adds stroke-draw animation on viewport entry or hover
 * Respects prefers-reduced-motion by falling back to fade-in
 */
export default function AnimatedSVG({
  children,
  className = '',
  viewBox,
  enableStrokeAnimation = true,
  animateOnHover = false,
  strokeDuration = 700,
  fillDelay = 100,
}: AnimatedSVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useRef(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (!enableStrokeAnimation || prefersReducedMotion.current || animateOnHover) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animatePaths();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, [enableStrokeAnimation, hasAnimated, animateOnHover]);

  const animatePaths = () => {
    if (!svgRef.current || prefersReducedMotion.current) return;

    const paths = svgRef.current.querySelectorAll('path');
    paths.forEach((path, index) => {
      const length = path.getTotalLength();
      
      // Set up stroke animation
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.fillOpacity = '0';
      path.style.stroke = path.getAttribute('fill') || 'currentColor';
      path.style.strokeWidth = '1.5';
      
      // Animate stroke
      const delay = index * 50;
      setTimeout(() => {
        path.style.transition = `stroke-dashoffset ${strokeDuration}ms ease-out`;
        path.style.strokeDashoffset = '0';
        
        // Fade in fill after stroke completes
        setTimeout(() => {
          path.style.transition = `fill-opacity ${fillDelay}ms ease-out, stroke-width ${fillDelay}ms ease-out`;
          path.style.fillOpacity = '1';
          path.style.strokeWidth = '0';
        }, strokeDuration);
      }, delay);
    });
  };

  const handleMouseEnter = () => {
    if (animateOnHover && !isHovered) {
      setIsHovered(true);
      animatePaths();
    }
  };

  const handleMouseLeave = () => {
    if (animateOnHover) {
      setIsHovered(false);
    }
  };

  // Reduced motion: simple fade-in
  const reducedMotionClass = prefersReducedMotion.current
    ? 'animate-fadeInUp'
    : '';

  return (
    <svg
      ref={svgRef}
      className={`${className} ${reducedMotionClass}`}
      viewBox={viewBox}
      fill="none"
      preserveAspectRatio="none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </svg>
  );
}
