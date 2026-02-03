import { motion } from 'motion/react';
import { Volume2, VolumeX, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/app/context/theme-context';
import { useSound } from '@/app/context/sound-context';

export default function MobileHeader() {
  const { theme, toggleTheme } = useTheme();
  const { playClick, soundEnabled, toggleSound } = useSound();

  // Theme colors
  const bgColor = theme === 'dark' ? '#000000' : '#ffffff';
  const textColor = theme === 'dark' ? '#ffffff' : '#0a0a0a';
  const borderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const cardBgUnselected = theme === 'dark' ? '#1a1a1a' : '#f5f5f5';
  const cardBorder = theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';

  return (
    <header className="sticky top-0 z-40 px-6 pt-6 pb-4" style={{ backgroundColor: bgColor }}>
      <div className="flex items-center justify-between">
        {/* Logo - Simple Text */}
        <motion.h1 
          className="font-['Coiny',sans-serif] text-[40px] leading-none"
          style={{ color: textColor }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gd.
        </motion.h1>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <motion.button
            onClick={() => {
              playClick();
              toggleSound();
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{ 
              backgroundColor: cardBgUnselected,
              border: `1px solid ${cardBorder}`
            }}
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.05 }}
            aria-label="Toggle sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-5 h-5" style={{ color: textColor }} />
            ) : (
              <VolumeX className="w-5 h-5" style={{ color: textColor }} />
            )}
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            onClick={() => {
              playClick();
              toggleTheme();
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{ 
              backgroundColor: cardBgUnselected,
              border: `1px solid ${cardBorder}`
            }}
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.05 }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" style={{ color: textColor }} />
            ) : (
              <Moon className="w-5 h-5" style={{ color: textColor }} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-5 h-[1px]" style={{ backgroundColor: borderColor }} />
    </header>
  );
}
