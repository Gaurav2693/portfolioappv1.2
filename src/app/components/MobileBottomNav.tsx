import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { useTheme } from '@/app/context/ThemeContext';
import { useSound } from '@/app/context/SoundContext';

export default function MobileBottomNav() {
  const location = useLocation();
  const { theme } = useTheme();
  const { playClick } = useSound();

  const bgColor = theme === 'dark' ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)';
  const textColor = theme === 'dark' ? '#ffffff' : '#000000';
  const mutedColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)';
  const activeColor = textColor;
  const borderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';

  const navItems = [
    { path: '/dashboard', label: 'Home' },
    { path: '/case-studies', label: 'Work' },
    { path: '/evidence-metrics', label: 'Metrics' },
    { path: '/contact', label: 'About' },
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

  // Filled Icons as SVG
  const HomeIcon = ({ filled }: { filled: boolean }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {filled ? (
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
      ) : (
        <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" fill="currentColor" />
      )}
    </svg>
  );

  const WorkIcon = ({ filled }: { filled: boolean }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {filled ? (
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="currentColor" />
      ) : (
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM14 6h-4V4h4v2zm6 13H4V8h16v11z" fill="currentColor" />
      )}
    </svg>
  );

  const MetricsIcon = ({ filled }: { filled: boolean }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {filled ? (
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor" />
      ) : (
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2-12H5v14h14V5z" fill="currentColor" />
      )}
    </svg>
  );

  const AboutIcon = ({ filled }: { filled: boolean }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {filled ? (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor" />
      ) : (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" fill="currentColor" />
      )}
    </svg>
  );

  const getIcon = (path: string, filled: boolean) => {
    if (path === '/dashboard') return <HomeIcon filled={filled} />;
    if (path === '/case-studies') return <WorkIcon filled={filled} />;
    if (path === '/evidence-metrics') return <MetricsIcon filled={filled} />;
    if (path === '/contact') return <AboutIcon filled={filled} />;
    return null;
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden backdrop-blur-xl"
      style={{
        backgroundColor: bgColor,
        borderTop: `1px solid ${borderColor}`,
      }}
    >
      <div className="flex items-center justify-around h-[68px] px-2 max-w-[500px] mx-auto">
        {navItems.map((item) => {
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={playClick}
              className="flex flex-col items-center justify-center flex-1 relative group"
            >
              {/* Icon */}
              <motion.div
                className="relative"
                animate={{
                  scale: active ? 1 : 1,
                  y: active ? -3 : 0,
                }}
                transition={{ 
                  type: 'spring',
                  stiffness: 400,
                  damping: 25,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div style={{ color: active ? activeColor : mutedColor }}>
                  {getIcon(item.path, active)}
                </div>
              </motion.div>

              {/* Label */}
              <motion.span
                className="font-['Cambay',sans-serif] text-[11px] font-bold mt-1"
                style={{
                  color: active ? activeColor : mutedColor,
                }}
                animate={{
                  opacity: active ? 1 : 0.7,
                }}
              >
                {item.label}
              </motion.span>

              {/* Active indicator dot */}
              {active && (
                <motion.div
                  layoutId="mobile-nav-dot"
                  className="absolute -bottom-1 w-1 h-1 rounded-full"
                  style={{ backgroundColor: activeColor }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
