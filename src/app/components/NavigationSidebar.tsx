import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useTheme } from '@/app/context/ThemeContext';
import { useSound } from '@/app/context/SoundContext';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/app/components/ui/Tooltip';
import svgPaths from '@/imports/svg-szb0ty09rw';

interface NavItem {
  id: string;
  path: string;
  icon: 'chart' | 'border' | 'brightness' | 'contact';
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', path: '/dashboard', icon: 'chart', label: 'Intro Context' },
  { id: 'case-studies', path: '/case-studies', icon: 'border', label: 'Case Studies' },
  { id: 'evidence', path: '/evidence-metrics', icon: 'brightness', label: 'Evidence & Metrics' },
  { id: 'contact', path: '/contact', icon: 'contact', label: 'Contact' },
];

/**
 * Global Navigation Sidebar
 * Positioned on the right edge with theme-aware colors and smooth animations
 * Animates in only once when the app first loads
 * Hidden on mobile (<1024px) - MobileBottomNav is used instead
 */
export default function NavigationSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
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

  const renderIcon = (iconType: string, fillColor: string) => {
    switch (iconType) {
      case 'chart':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g clipPath="url(#clip0_chart)">
              <path d={svgPaths.p3d20e700} fill={fillColor} />
            </g>
            <defs>
              <clipPath id="clip0_chart">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </svg>
        );
      case 'border':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g clipPath="url(#clip0_border)">
              <path d={svgPaths.p32082b00} fill={fillColor} />
            </g>
            <defs>
              <clipPath id="clip0_border">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </svg>
        );
      case 'brightness':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g clipPath="url(#clip0_brightness)">
              <path d={svgPaths.p1283a9f0} fill={fillColor} />
            </g>
            <defs>
              <clipPath id="clip0_brightness">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </svg>
        );
      case 'contact':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g clipPath="url(#clip0_contact)">
              <path d={svgPaths.p309b31c0} fill={fillColor} />
            </g>
            <defs>
              <clipPath id="clip0_contact">
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <TooltipProvider delayDuration={200}>
      <div 
        className={`hidden lg:block absolute ${sidebarBg} h-[200px] right-0 rounded-bl-[12px] rounded-tl-[12px] top-[375px] w-[52px] shadow-lg transition-all duration-300 ease-in-out z-50`}
        style={{ 
          animation: hasAnimated ? 'none' : 'slideInFromRight 0.4s ease-out'
        }}
      >
        <div className="relative h-full">
          {navItems.map((item, index) => {
            const colors = getButtonColors(item.id);
            const topPosition = 11 + (index * 47.61); // Starting at 11px with 47.61px spacing

            return (
              <Tooltip key={item.id}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`absolute ${colors.bg} rounded-[8px] size-[36px] left-[8px] transition-all duration-200 ease-in-out hover:scale-105 active:scale-95`}
                    style={{ top: `${topPosition}px` }}
                    aria-label={item.label}
                  >
                    <div className="absolute left-[6px] size-[24px] top-[6px]">
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