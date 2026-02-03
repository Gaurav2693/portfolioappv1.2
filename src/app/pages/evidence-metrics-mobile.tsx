import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '@/app/context/theme-context';
import { useSound } from '@/app/context/sound-context';
import MobileHeader from '@/app/components/mobile-header';
import MobileBottomNav from '@/app/components/mobile-bottom-nav';
import ThinkingCanvasPreview from '@/app/pages/thinking-canvas-preview';
import GamePlay from '@/app/pages/game/play';

type ViewMode = 'stillroom' | 'inertia';

export default function EvidenceMetricsMobile() {
  const { theme } = useTheme();
  const { playClick, playGameAction } = useSound();
  const [viewMode, setViewMode] = useState<ViewMode>('stillroom');
  const [isLoading, setIsLoading] = useState(false);

  // Theme colors
  const bgColor = theme === 'dark' ? '#000000' : '#ffffff';
  const textColor = theme === 'dark' ? '#ffffff' : '#0a0a0a';
  const mutedColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(10, 10, 10, 0.4)';
  const borderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(10, 10, 10, 0.08)';
  const selectorBg = theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(10, 10, 10, 0.03)';
  const activeBg = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 10, 10, 0.1)';

  const handleViewChange = (mode: ViewMode) => {
    playClick();
    setIsLoading(true);
    setViewMode(mode);
    
    setTimeout(() => {
      playGameAction();
    }, 300);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };

  return (
    <div className="lg:hidden min-h-screen w-full pb-24 overflow-x-hidden" style={{ backgroundColor: bgColor }}>
      <MobileHeader />

      {/* Main Content */}
      <main className="px-6 space-y-8 pt-4">
        
        {/* System Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <div 
            className="inline-flex gap-2 rounded-full px-2 py-1.5"
            style={{
              backgroundColor: selectorBg,
              border: `1px solid ${borderColor}`,
            }}
          >
            <button
              onClick={() => handleViewChange('stillroom')}
              className="px-5 py-1.5 rounded-full font-['Cambay',sans-serif] text-[12px] tracking-[0.12px] transition-all duration-300"
              style={{
                backgroundColor: viewMode === 'stillroom' ? activeBg : 'transparent',
                color: viewMode === 'stillroom' ? textColor : mutedColor,
              }}
            >
              Stillroom
            </button>
            <button
              onClick={() => handleViewChange('inertia')}
              className="px-5 py-1.5 rounded-full font-['Cambay',sans-serif] text-[12px] tracking-[0.12px] transition-all duration-300"
              style={{
                backgroundColor: viewMode === 'inertia' ? activeBg : 'transparent',
                color: viewMode === 'inertia' ? textColor : mutedColor,
              }}
            >
              INERTIA
            </button>
          </div>
        </motion.div>

        {/* Live Preview */}
        <motion.section
          className="relative rounded-2xl overflow-hidden"
          style={{
            backgroundColor: '#000000',
            border: `1px solid ${borderColor}`,
            aspectRatio: '16/10',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Loading overlay */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-4"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full"
                  />
                  <p className="font-['Cambay',sans-serif] text-[12px] text-white/60 tracking-[0.12px]">
                    Loading {viewMode === 'stillroom' ? 'Stillroom' : 'INERTIA'}...
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {viewMode === 'stillroom' && (
              <motion.div
                key="stillroom-preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <div style={{ 
                  width: '920px', 
                  height: '920px',
                  transform: 'scale(0.4)',
                  transformOrigin: 'top left',
                }}>
                  <ThinkingCanvasPreview />
                </div>
              </motion.div>
            )}
            {viewMode === 'inertia' && (
              <motion.div
                key="inertia-preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <div style={{ 
                  width: '1200px', 
                  height: '700px',
                  transform: 'scale(0.3)',
                  transformOrigin: 'top left',
                }}>
                  <GamePlay />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {viewMode === 'stillroom' && (
            <motion.div
              key="stillroom-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Title */}
              <div className="space-y-2">
                <h2 
                  className="font-['Caladea',serif] text-[36px] leading-tight tracking-[0.36px]"
                  style={{ color: textColor }}
                >
                  Stillroom Canvas
                </h2>
                <p 
                  className="font-['Cambay',sans-serif] text-[15px] leading-[24px] tracking-[0.15px]"
                  style={{ color: mutedColor }}
                >
                  A living thinking environment
                </p>
              </div>

              {/* Divider */}
              <div className="w-12 h-px" style={{ backgroundColor: borderColor }} />

              {/* Type */}
              <div className="space-y-1">
                <p 
                  className="font-['Cambay',sans-serif] text-[10px] leading-[15px] tracking-[0.2px] uppercase"
                  style={{ color: mutedColor }}
                >
                  Type
                </p>
                <p 
                  className="font-['Cambay',sans-serif] text-[16px] leading-[24px] tracking-[0.16px]"
                  style={{ color: textColor }}
                >
                  Canvas System
                </p>
              </div>

              {/* Purpose */}
              <div className="space-y-1">
                <p 
                  className="font-['Cambay',sans-serif] text-[10px] leading-[15px] tracking-[0.2px] uppercase"
                  style={{ color: mutedColor }}
                >
                  Purpose
                </p>
                <p 
                  className="font-['Cambay',sans-serif] text-[14px] leading-[23.8px] tracking-[0.14px]"
                  style={{ color: textColor }}
                >
                  Structured thought, externalised. A spatial canvas for visual reasoning and model-based thinking.
                </p>
              </div>

              {/* Interaction */}
              <div className="space-y-1">
                <p 
                  className="font-['Cambay',sans-serif] text-[10px] leading-[15px] tracking-[0.2px] uppercase"
                  style={{ color: mutedColor }}
                >
                  Interaction
                </p>
                <p 
                  className="font-['Cambay',sans-serif] text-[14px] leading-[23.8px] tracking-[0.14px]"
                  style={{ color: textColor }}
                >
                  Draw connections, create cards, apply thinking models, structure reasoning visually.
                </p>
              </div>
            </motion.div>
          )}

          {viewMode === 'inertia' && (
            <motion.div
              key="inertia-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Title */}
              <div className="space-y-2">
                <h2 
                  className="font-['Caladea',serif] text-[36px] leading-tight tracking-[0.36px]"
                  style={{ color: textColor }}
                >
                  INERTIA
                </h2>
                <p 
                  className="font-['Cambay',sans-serif] text-[15px] leading-[24px] tracking-[0.15px]"
                  style={{ color: mutedColor }}
                >
                  A temporal feedback system
                </p>
              </div>

              {/* Divider */}
              <div className="w-12 h-px" style={{ backgroundColor: borderColor }} />

              {/* Type */}
              <div className="space-y-1">
                <p 
                  className="font-['Cambay',sans-serif] text-[10px] leading-[15px] tracking-[0.2px] uppercase"
                  style={{ color: mutedColor }}
                >
                  Type
                </p>
                <p 
                  className="font-['Cambay',sans-serif] text-[16px] leading-[24px] tracking-[0.16px]"
                  style={{ color: textColor }}
                >
                  Temporal System
                </p>
              </div>

              {/* Purpose */}
              <div className="space-y-1">
                <p 
                  className="font-['Cambay',sans-serif] text-[10px] leading-[15px] tracking-[0.2px] uppercase"
                  style={{ color: mutedColor }}
                >
                  Purpose
                </p>
                <p 
                  className="font-['Cambay',sans-serif] text-[14px] leading-[23.8px] tracking-[0.14px]"
                  style={{ color: textColor }}
                >
                  Time-based feedback, felt not shown. A precision system exploring cause, effect, timing.
                </p>
              </div>

              {/* Mechanics */}
              <div className="space-y-1">
                <p 
                  className="font-['Cambay',sans-serif] text-[10px] leading-[15px] tracking-[0.2px] uppercase"
                  style={{ color: mutedColor }}
                >
                  Mechanics
                </p>
                <p 
                  className="font-['Cambay',sans-serif] text-[14px] leading-[23.8px] tracking-[0.14px]"
                  style={{ color: textColor }}
                >
                  Inputs have weight. Momentum must be earned. Physics-based feedback communicates consequence.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Spacing */}
        <div className="h-8" />
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}
