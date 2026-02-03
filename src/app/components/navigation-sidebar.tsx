import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useTheme } from '@/app/context/theme-context';
import { useSound } from '@/app/context/sound-context';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/app/components/ui/tooltip';
import { Home, Briefcase, BarChart3, Sparkles, Play, Mail } from 'lucide-react';

interface NavItem {
  id: string;
  path: string;
  icon: 'home' | 'briefcase' | 'chart' | 'sparkles' | 'play' | 'mail';
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', path: '/dashboard', icon: 'home', label: 'Intro Context' },
  { id: 'case-studies', path: '/case-studies', icon: 'briefcase', label: 'Case Studies' },
  { id: 'evidence', path: '/evidence-metrics', icon: 'chart', label: 'Evidence & Metrics' },
  { id: 'stillroom', path: '/thinking-canvas', icon: 'sparkles', label: 'STILLROOM Canvas' },
  { id: 'game', path: '/game/play', icon: 'play', label: 'INERTIA Game' },
  { id: 'contact', path: '/contact', icon: 'mail', label: 'Contact' },
];

/**
 * Global Navigation Sidebar
 * Positioned on the right edge with theme-aware colors and smooth animations
 * Animates in only once when the app first loads
 * Hidden on mobile (<1024px) - MobileBottomNav is used instead
 */
export default function NavigationSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { playClick } = useSound();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hasAnimated, setHasAnimated] = useState(() => {
    // Check if the animation has already been shown during this session
    return sessionStorage.getItem('navSidebarAnimated') === 'true';
  });
  
  // Mark the animation as shown after it completes
  useEffect(() => {
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('navSidebarAnimated', 'true');
        setHasAnimated(true);
      }, 400); // Animation duration
      
      return () => clearTimeout(timer);
    }
  }, [hasAnimated]);

  // Theme-aware colors
  const sidebarBg = theme === 'dark' ? 'bg-white' : 'bg-black';
  
  const getButtonColors = (itemId: string) => {
    const isActive = location.pathname === navItems.find(item => item.id === itemId)?.path;
    const isHovered = hoveredId === itemId;
    
    if (theme === 'dark') {
      // Dark theme: white sidebar
      return {
        bg: isActive ? 'bg-black' : isHovered ? 'bg-[#f0f0f0]' : 'bg-white',
        icon: isActive ? 'white' : '#1e1e1e',
      };
    } else {
      // Light theme: black sidebar
      return {
        bg: isActive ? 'bg-white' : isHovered ? 'bg-[#2a2a2a]' : 'bg-black',
        icon: isActive ? 'black' : 'white',
      };
    }
  };

  const handleNavClick = (path: string) => {
    playClick();
    navigate(path);
  };

  const renderIcon = (iconType: string, strokeColor: string) => {
    const iconProps = {
      className: "size-full",
      stroke: strokeColor,
      strokeWidth: 2,
      fill: "none"
    };
    
    switch (iconType) {
      case 'home':
        return <Home {...iconProps} />;
      case 'briefcase':
        return <Briefcase {...iconProps} />;
      case 'chart':
        return <BarChart3 {...iconProps} />;
      case 'mail':
        return <Mail {...iconProps} />;
      case 'sparkles':
        return <Sparkles {...iconProps} />;
      case 'play':
        return <Play {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <TooltipProvider delayDuration={200}>
      <div 
        className={`hidden lg:block absolute ${sidebarBg} h-[249px] right-0 rounded-bl-[11px] rounded-tl-[11px] top-[355px] w-[46px] shadow-lg transition-all duration-300 ease-in-out z-50`}
        style={{ 
          animation: hasAnimated ? 'none' : 'slideInFromRight 0.4s ease-out'
        }}
      >
        <div className="relative h-full">
          {navItems.map((item, index) => {
            const colors = getButtonColors(item.id);
            const topPosition = 10 + (index * 40); // Starting at 10px with 40px spacing (32px button + 8px gap)

            return (
              <Tooltip key={item.id}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`absolute ${colors.bg} rounded-[7px] size-[32px] left-[7px] transition-all duration-200 ease-in-out hover:scale-105 active:scale-95`}
                    style={{ top: `${topPosition}px` }}
                    aria-label={item.label}
                  >
                    <div className="absolute left-[5.5px] size-[21px] top-[5.5px]">
                      {renderIcon(item.icon, colors.icon)}
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        <style>{`
          @keyframes slideInFromRight {
            from {
              transform: translateX(100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </TooltipProvider>
  );
}