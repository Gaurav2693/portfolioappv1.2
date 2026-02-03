import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from "@/app/components/header";
import NavigationSidebar from "@/app/components/navigation-sidebar";
import EvidenceMetricsMobile from "@/app/pages/evidence-metrics-mobile";
import { useTheme } from "@/app/context/theme-context";
import { useSound } from "@/app/context/sound-context";
import ThinkingCanvasPreview from "@/app/pages/thinking-canvas-preview";
import GamePlay from "@/app/pages/game/play";

type ViewMode = 'stillroom' | 'inertia';

export default function EvidenceMetrics() {
  const { theme } = useTheme();
  const { playClick, playGameAction } = useSound();
  const [viewMode, setViewMode] = useState<ViewMode>('stillroom');
  const [isLoading, setIsLoading] = useState(false);
  
  // Theme-aware colors
  const outerBg = theme === 'dark' ? 'bg-white' : 'bg-black';
  const cardBg = theme === 'dark' ? 'bg-black' : 'bg-white';
  const mainTextColor = theme === 'dark' ? '#ffffff' : '#0a0a0a';
  const mutedTextColor = theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(10,10,10,0.4)';
  const borderColor = theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(10,10,10,0.08)';
  const selectorBg = theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(10,10,10,0.03)';
  const activeBg = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(10,10,10,0.1)';
  
  const handleViewChange = (mode: ViewMode) => {
    playClick();
    setIsLoading(true);
    setViewMode(mode);
    
    // Play load sound after mode transition starts
    setTimeout(() => {
      playGameAction();
    }, 300);
    
    // Clear loading state after transition completes
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };
  
  return (
    <>
      {/* Mobile View */}
      <EvidenceMetricsMobile />
      
      {/* Desktop View */}
      <div className={`hidden lg:flex ${outerBg} min-h-screen w-full items-start justify-center py-[74px] overflow-auto`}>
        <div className="relative w-[1315px] h-[893px]">
          {/* Main Card */}
          <div className={`absolute ${cardBg} h-[893px] left-0 rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1315px] overflow-hidden`} />
          
          <NavigationSidebar />
          <Header />
          
          {/* Main Content Container */}
          <div className="absolute left-[110px] top-[140px] w-[1095px] h-[700px]">
            
            {/* Preview Container - Left */}
            <div className="absolute bg-black h-[557px] left-[-52px] rounded-[14px] top-[86px] w-[743px]">
              <div className="flex flex-col items-start overflow-clip pl-px pr-px py-px relative rounded-[inherit] size-full">
                <div className="bg-black h-full overflow-clip relative shrink-0 w-full">
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
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <div style={{ 
                          width: '920px', 
                          height: '920px',
                          transform: 'scale(0.6)',
                          transformOrigin: 'center',
                        }}>
                          <ThinkingCanvasPreview />
                        </div>
                      </motion.div>
                    )}
                    {viewMode === 'inertia' && (
                      <motion.div
                        key="inertia-preview"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <div style={{ 
                          width: '1200px', 
                          height: '700px',
                          transform: 'scale(0.6)',
                          transformOrigin: 'center',
                        }}>
                          <GamePlay />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.46)] border-solid inset-0 pointer-events-none rounded-[14px]" />
            </div>
            
            {/* Right Column - Metadata */}
            <div className="absolute flex flex-col h-[557px] left-[753px] top-[86px] w-[342px]">
              <div className="flex-1 min-h-px min-w-px relative w-[293px]">
                <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
                  
                  {/* System Selector */}
                  <div 
                    className="absolute h-[49.5px] left-0 rounded-[16777200px] top-0 w-[222.984px] border border-solid"
                    style={{
                      backgroundColor: selectorBg,
                      borderColor: borderColor,
                    }}
                  >
                    <button
                      onClick={() => handleViewChange('stillroom')}
                      className="absolute h-[35.5px] left-[8px] rounded-[16777200px] top-[6px] w-[101.188px]"
                      style={{
                        backgroundColor: viewMode === 'stillroom' ? activeBg : 'transparent',
                      }}
                    >
                      <p 
                        className="-translate-x-1/2 absolute font-['Cambay',sans-serif] leading-[19.5px] left-[51px] not-italic text-[13px] text-center top-[8px] tracking-[0.13px]"
                        style={{
                          color: viewMode === 'stillroom' ? mainTextColor : mutedTextColor,
                        }}
                      >
                        Stillroom
                      </p>
                    </button>
                    <button
                      onClick={() => handleViewChange('inertia')}
                      className="absolute h-[35.5px] left-[117.19px] rounded-[16777200px] top-[6px] w-[95.797px]"
                      style={{
                        backgroundColor: viewMode === 'inertia' ? activeBg : 'transparent',
                      }}
                    >
                      <p 
                        className="-translate-x-1/2 absolute font-['Cambay',sans-serif] leading-[19.5px] left-[48px] not-italic text-[13px] text-center top-[8px] tracking-[0.13px]"
                        style={{
                          color: viewMode === 'inertia' ? mainTextColor : mutedTextColor,
                        }}
                      >
                        INERTIA
                      </p>
                    </button>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {viewMode === 'stillroom' && (
                      <motion.div
                        key="stillroom-metadata"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Title Section */}
                        <div className="absolute flex flex-col gap-[12px] h-[82.195px] left-[12px] top-[99px] w-[375px]">
                          <div className="h-[46.195px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Caladea',sans-serif] leading-[46.2px] left-0 not-italic text-[48px] top-[-1px] tracking-[0.48px]"
                              style={{ color: mainTextColor }}
                            >
                              Stillroom Canvas
                            </p>
                          </div>
                          <div className="h-[24px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[24px] left-0 not-italic text-[15px] top-[-0.5px] tracking-[0.15px]"
                              style={{ color: mutedTextColor }}
                            >
                              A living thinking environment
                            </p>
                          </div>
                        </div>
                        
                        {/* Divider */}
                        <div 
                          className="absolute border-solid border-t h-px left-0 top-[235.7px] w-[48px]"
                          style={{ borderColor: borderColor }}
                        />
                        
                        {/* Type Section */}
                        <div className="absolute flex flex-col gap-[4px] h-[51px] left-[12px] top-[217px] w-[375px]">
                          <div className="h-[15px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[15px] left-0 not-italic text-[10px] top-0 tracking-[0.2px] uppercase"
                              style={{ color: mutedTextColor }}
                            >
                              Type
                            </p>
                          </div>
                          <div className="h-[24px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[24px] left-0 not-italic text-[16px] top-0 tracking-[0.16px]"
                              style={{ color: mainTextColor }}
                            >
                              Canvas System
                            </p>
                          </div>
                        </div>
                        
                        {/* Purpose Section */}
                        <div className="absolute flex flex-col gap-[4px] h-[75px] left-[12px] top-[281px] w-[317px]">
                          <div className="h-[15px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[15px] left-0 not-italic text-[10px] top-0 tracking-[0.2px] uppercase"
                              style={{ color: mutedTextColor }}
                            >
                              Purpose
                            </p>
                          </div>
                          <div className="h-[47.594px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[23.8px] left-0 not-italic text-[14px] top-0 tracking-[0.14px] w-[317px] whitespace-pre-wrap"
                              style={{ color: mainTextColor }}
                            >
                              Structured thought, externalised. A spatial canvas for visual reasoning and model-based thinking.
                            </p>
                          </div>
                        </div>
                        
                        {/* Interaction Section */}
                        <div className="absolute flex flex-col gap-[4px] h-[74px] left-[12px] top-[369px] w-[292px]">
                          <div className="h-[15px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[15px] left-0 not-italic text-[10px] top-0 tracking-[0.2px] uppercase"
                              style={{ color: mutedTextColor }}
                            >
                              Interaction
                            </p>
                          </div>
                          <div className="h-[47.594px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[23.8px] left-0 not-italic text-[14px] top-0 tracking-[0.14px] w-[318px] whitespace-pre-wrap"
                              style={{ color: mainTextColor }}
                            >
                              Draw connections, create cards, apply thinking models, structure reasoning visually.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {viewMode === 'inertia' && (
                      <motion.div
                        key="inertia-metadata"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Title Section */}
                        <div className="absolute flex flex-col gap-[12px] h-[82.195px] left-[12px] top-[99px] w-[375px]">
                          <div className="h-[46.195px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Caladea',sans-serif] leading-[46.2px] left-0 not-italic text-[48px] top-[-1px] tracking-[0.48px]"
                              style={{ color: mainTextColor }}
                            >
                              INERTIA
                            </p>
                          </div>
                          <div className="h-[24px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[24px] left-0 not-italic text-[15px] top-[-0.5px] tracking-[0.15px]"
                              style={{ color: mutedTextColor }}
                            >
                              A temporal feedback system
                            </p>
                          </div>
                        </div>
                        
                        {/* Divider */}
                        <div 
                          className="absolute border-solid border-t h-px left-0 top-[235.7px] w-[48px]"
                          style={{ borderColor: borderColor }}
                        />
                        
                        {/* Type Section */}
                        <div className="absolute flex flex-col gap-[4px] h-[51px] left-[12px] top-[217px] w-[375px]">
                          <div className="h-[15px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[15px] left-0 not-italic text-[10px] top-0 tracking-[0.2px] uppercase"
                              style={{ color: mutedTextColor }}
                            >
                              Type
                            </p>
                          </div>
                          <div className="h-[24px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[24px] left-0 not-italic text-[16px] top-0 tracking-[0.16px]"
                              style={{ color: mainTextColor }}
                            >
                              Temporal System
                            </p>
                          </div>
                        </div>
                        
                        {/* Purpose Section */}
                        <div className="absolute flex flex-col gap-[4px] h-[75px] left-[12px] top-[281px] w-[317px]">
                          <div className="h-[15px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[15px] left-0 not-italic text-[10px] top-0 tracking-[0.2px] uppercase"
                              style={{ color: mutedTextColor }}
                            >
                              Purpose
                            </p>
                          </div>
                          <div className="h-[47.594px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[23.8px] left-0 not-italic text-[14px] top-0 tracking-[0.14px] w-[317px] whitespace-pre-wrap"
                              style={{ color: mainTextColor }}
                            >
                              Time-based feedback, felt not shown. A precision system exploring cause, effect, timing.
                            </p>
                          </div>
                        </div>
                        
                        {/* Mechanics Section */}
                        <div className="absolute flex flex-col gap-[4px] h-[74px] left-[12px] top-[369px] w-[292px]">
                          <div className="h-[15px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[15px] left-0 not-italic text-[10px] top-0 tracking-[0.2px] uppercase"
                              style={{ color: mutedTextColor }}
                            >
                              Mechanics
                            </p>
                          </div>
                          <div className="h-[47.594px] relative shrink-0 w-full">
                            <p 
                              className="absolute font-['Cambay',sans-serif] leading-[23.8px] left-0 not-italic text-[14px] top-0 tracking-[0.14px] w-[318px] whitespace-pre-wrap"
                              style={{ color: mainTextColor }}
                            >
                              Inputs have weight. Momentum must be earned. Physics-based feedback communicates consequence.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
