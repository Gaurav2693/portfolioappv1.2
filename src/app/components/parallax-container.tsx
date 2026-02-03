import { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxContainer({ children, className = '' }: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const offsetX = (e.clientX - centerX) / rect.width;
    const offsetY = (e.clientY - centerY) / rect.height;
    
    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {typeof children === 'function' 
        ? children({ mouseX: smoothMouseX, mouseY: smoothMouseY })
        : children}
    </div>
  );
}

interface ParallaxLayerProps {
  children: ReactNode;
  depth?: number;
  className?: string;
  mouseX: any;
  mouseY: any;
}

export function ParallaxLayer({ 
  children, 
  depth = 1, 
  className = '',
  mouseX,
  mouseY 
}: ParallaxLayerProps) {
  const x = useTransform(mouseX, [-1, 1], [-depth * 20, depth * 20]);
  const y = useTransform(mouseY, [-1, 1], [-depth * 20, depth * 20]);

  return (
    <motion.div
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
