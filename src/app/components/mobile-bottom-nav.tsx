import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { useTheme } from '@/app/context/theme-context';
import { useSound } from '@/app/context/sound-context';
import { Home, Briefcase, BarChart3, Sparkles, Mail } from 'lucide-react';

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
    { path: '/dashboard', label: 'Home', icon: 'home' },
    { path: '/case-studies', label: 'Work', icon: 'briefcase' },
    { path: '/evidence-metrics', label: 'Metrics', icon: 'chart' },
    { path: '/thinking-canvas', label: 'Canvas', icon: 'sparkles' },
    { path: '/contact', label: 'About', icon: 'mail' },
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

  const getIcon = (iconType: string, color: string, filled: boolean) => {
    const iconProps = {
      size: 24,
      stroke: color,
      strokeWidth: filled ? 2.5 : 2,
      fill: filled ? color : 'none',
    };

    switch (iconType) {
      case 'home':
        return <Home {...iconProps} />;
      case 'briefcase':
        return <Briefcase {...iconProps} />;
      case 'chart':
        return <BarChart3 {...iconProps} />;
      case 'sparkles':
        return <Sparkles {...iconProps} />;
      case 'mail':
        return <Mail {...iconProps} />;
      default:
        return null;
    }
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
                  {getIcon(item.icon, active ? activeColor : mutedColor, active)}
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