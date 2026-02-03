import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { ArrowUpRight, ChevronDown, ChevronUp, MapPin, Leaf, Layers, Wand2, Zap } from 'lucide-react';
import { useTheme } from '@/app/context/theme-context';
import { useSound } from '@/app/context/sound-context';
import MobileHeader from '@/app/components/mobile-header';
import MobileBottomNav from '@/app/components/mobile-bottom-nav';
import svgPaths from "@/imports/svg-e8tfrdyvlf";

interface ExploratoryStudy {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function CaseStudiesMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null);
  const { theme } = useTheme();
  const { playClick } = useSound();

  // Theme colors
  const bgColor = theme === 'dark' ? '#000000' : '#ffffff';
  const textColor = theme === 'dark' ? '#ffffff' : '#0a0a0a';
  const mutedColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)';
  const borderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const cardBgSelected = theme === 'dark' ? '#ffffff' : '#000000';
  const cardTextSelected = theme === 'dark' ? '#000000' : '#ffffff';
  const cardBgUnselected = theme === 'dark' ? '#1a1a1a' : '#f5f5f5';
  const cardTextUnselected = theme === 'dark' ? '#ffffff' : '#0a0a0a';
  const cardBorder = theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
  const fillColor = theme === 'dark' ? 'white' : 'black';

  const caseStudies = [
    {
      id: 'pqe',
      title: 'Price Quotation Engine',
      subtitle: 'Decision-heavy pricing & approval system',
      about: 'A complex B2B pricing system designed to guide sales teams through multi-layered approval workflows, balance stakeholder priorities, and surface critical decision points with clarity.',
      prototypeUrl: 'https://cpq-dashboard-v2.vercel.app/',
      ctaText: 'View Prototype',
    },
    {
      id: 'plotsync',
      title: 'PlotSync',
      subtitle: 'Land evaluation & comparison platform',
      about: 'A platform to help users evaluate, verify, and compare land parcels across multiple parameters such as location, ownership, zoning, and feasibility.',
      ctaText: 'Coming Soon',
    },
    {
      id: 'exiro',
      title: 'Exiro AI',
      subtitle: 'Human-in-the-loop AI automation platform',
      about: 'An AI-based tool designed to assist negotiators in complex, multi-party scenarios. It surfaces relevant precedents, identifies leverage points, and helps structure proposals with clarity and precision.',
      prototypeUrl: 'https://exiro.ai',
      ctaText: 'Live Site',
    },
  ];

  const exploratoryStudies: ExploratoryStudy[] = [
    {
      id: 'ayuryuj',
      title: 'Ayuryuj',
      description: 'Ayuryuj explores how trust, security, and commerce intersect in traditional wellness products.\n\nIt focused on helping users understand ingredients, sourcing, and certifications before purchase—without overwhelming them with technical details.',
      icon: <Leaf className="w-5 h-5" strokeWidth={2} />,
    },
    {
      id: 'stillroom',
      title: 'Stillroom',
      description: 'Stillroom began as an exploration into how interfaces can support deep thinking without forcing users to break flow.\n\nThe work focused on layout, pacing, and information hierarchy rather than features.',
      icon: <Layers className="w-5 h-5" strokeWidth={2} />,
    },
    {
      id: 'rive',
      title: 'Rive Projects',
      description: 'A series of interaction experiments using Rive to explore how motion can communicate system state, orientation, and feedback—without visual noise.\n\nThe goal was to use animation as information, not decoration.',
      icon: <Wand2 className="w-5 h-5" strokeWidth={2} />,
    },
    {
      id: 'rapid',
      title: 'Rapid Staging',
      description: 'Explorations focused on staging product ideas using lightweight builds and prototypes to understand edge cases early.\n\nThis work informed how I approach validation and testing—how to know if a design will work before committing to larger projects.',
      icon: <Zap className="w-5 h-5" strokeWidth={2} />,
    },
  ];

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0 && currentIndex > 0) {
        playClick();
        setCurrentIndex(currentIndex - 1);
      } else if (info.offset.x < 0 && currentIndex < caseStudies.length - 1) {
        playClick();
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const handleDotClick = (index: number) => {
    playClick();
    setCurrentIndex(index);
  };

  const toggleStudy = (id: string) => {
    playClick();
    setExpandedStudy(expandedStudy === id ? null : id);
  };

  const renderCaseStudyCard = (study: any) => {
    if (study.id === 'pqe') {
      return (
        <>
          {/* Dollar Icon */}
          <motion.div 
            className="flex justify-center py-4"
            style={{ color: textColor }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg className="w-[80px] h-[61px]" fill="none" preserveAspectRatio="none" viewBox="0 0 103 79">
              <g clipPath="url(#clip0_13_1336)">
                <path d={svgPaths.p3a2dcd80} fill={fillColor} />
                <path d={svgPaths.p12c07180} fill={fillColor} />
                <path d={svgPaths.p9e32400} fill={fillColor} />
                <path d={svgPaths.p1e0c4500} fill={fillColor} />
                <path d={svgPaths.pdfa2100} fill={fillColor} />
                <path d={svgPaths.p2a14f660} fill={fillColor} />
                <path d={svgPaths.p15040e00} fill={fillColor} />
                <path d={svgPaths.p30360800} fill={fillColor} />
                <path d={svgPaths.p27de3df0} fill={fillColor} />
                <path d={svgPaths.pf716c00} fill={fillColor} />
                <path d={svgPaths.p195a2100} fill={fillColor} />
                <path d={svgPaths.p220d61c0} fill={fillColor} />
                <path d={svgPaths.p3dbf0180} fill={fillColor} />
              </g>
              <defs>
                <clipPath id="clip0_13_1336">
                  <rect fill="white" height="79" width="103" />
                </clipPath>
              </defs>
            </svg>
          </motion.div>

          {/* Title */}
          <div className="space-y-2 text-center">
            <h3 
              className="font-['Caladea',serif] text-[28px] leading-tight"
              style={{ color: textColor }}
            >
              {study.title}
            </h3>
            <p 
              className="font-['Cambay',sans-serif] font-bold text-[16px]"
              style={{ color: mutedColor }}
            >
              {study.subtitle}
            </p>
          </div>

          {/* Description (no "About" label) */}
          <p 
            className="font-['Cambay',sans-serif] text-[16px] leading-[26px] text-center"
            style={{ color: mutedColor }}
          >
            {study.about}
          </p>

          {/* CTA Button */}
          <motion.a
            href={study.prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="flex items-center justify-center gap-2 w-full h-[56px] rounded-2xl font-['Cambay',sans-serif] font-bold text-[16px] transition-all"
            style={{
              backgroundColor: cardBgSelected,
              color: cardTextSelected,
              boxShadow: theme === 'dark'
                ? '0px 8px 16px rgba(255, 255, 255, 0.1)'
                : '0px 8px 16px rgba(0, 0, 0, 0.1)',
            }}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
          >
            {study.ctaText}
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </>
      );
    }

    if (study.id === 'plotsync') {
      return (
        <>
          {/* Map Pin Icon */}
          <motion.div 
            className="flex justify-center py-4"
            style={{ color: textColor }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MapPin className="w-[80px] h-[80px]" strokeWidth={1.5} />
          </motion.div>

          {/* Title */}
          <div className="space-y-2 text-center">
            <h3 
              className="font-['Caladea',serif] text-[28px] leading-tight"
              style={{ color: textColor }}
            >
              {study.title}
            </h3>
            <p 
              className="font-['Cambay',sans-serif] font-bold text-[16px]"
              style={{ color: mutedColor }}
            >
              {study.subtitle}
            </p>
          </div>

          {/* Description (no "About" label) */}
          <p 
            className="font-['Cambay',sans-serif] text-[16px] leading-[26px] text-center"
            style={{ color: mutedColor }}
          >
            {study.about}
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={playClick}
            className="flex items-center justify-center gap-2 w-full h-[56px] rounded-2xl font-['Cambay',sans-serif] font-bold text-[16px] transition-all"
            style={{
              backgroundColor: cardBgSelected,
              color: cardTextSelected,
              boxShadow: theme === 'dark'
                ? '0px 8px 16px rgba(255, 255, 255, 0.1)'
                : '0px 8px 16px rgba(0, 0, 0, 0.1)',
            }}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
          >
            {study.ctaText}
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </>
      );
    }

    // Exiro AI card
    return (
      <>
        {/* AI Icon - using SVG from desktop */}
        <motion.div 
          className="flex justify-center py-4"
          style={{ color: textColor }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <svg className="w-[70px] h-[70px]" fill="none" preserveAspectRatio="none" viewBox="0 0 87 88">
            <g clipPath="url(#clip0_13_1299)">
              <path d={svgPaths.pad54680} fill={fillColor} />
              <path d={svgPaths.p2fb7f600} fill={fillColor} />
              <path d={svgPaths.p37282900} fill={fillColor} />
            </g>
            <defs>
              <clipPath id="clip0_13_1299">
                <rect fill="white" height="88" width="87" />
              </clipPath>
            </defs>
          </svg>
        </motion.div>

        {/* Title */}
        <div className="space-y-2 text-center">
          <h3 
            className="font-['Caladea',serif] text-[28px] leading-tight"
            style={{ color: textColor }}
          >
            {study.title}
          </h3>
          <p 
            className="font-['Cambay',sans-serif] font-bold text-[16px]"
            style={{ color: mutedColor }}
          >
            {study.subtitle}
          </p>
        </div>

        {/* Description (no "About" label) */}
        <p 
          className="font-['Cambay',sans-serif] text-[16px] leading-[26px] text-center"
          style={{ color: mutedColor }}
        >
          {study.about}
        </p>

        {/* CTA Button */}
        <motion.a
          href={study.prototypeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className="flex items-center justify-center gap-2 w-full h-[56px] rounded-2xl font-['Cambay',sans-serif] font-bold text-[16px] transition-all"
          style={{
            backgroundColor: cardBgSelected,
            color: cardTextSelected,
            boxShadow: theme === 'dark'
              ? '0px 8px 16px rgba(255, 255, 255, 0.1)'
              : '0px 8px 16px rgba(0, 0, 0, 0.1)',
          }}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
        >
          {study.ctaText}
          <ArrowUpRight className="w-5 h-5" />
        </motion.a>
      </>
    );
  };

  return (
    <div className="lg:hidden min-h-screen w-full pb-24 overflow-x-hidden" style={{ backgroundColor: bgColor }}>
      <MobileHeader />

      {/* Main Content */}
      <main className="px-6 space-y-10 pt-4">
        {/* Page Title */}
        <motion.section
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 
            className="font-['Caladea',serif] text-[36px] leading-tight"
            style={{ color: textColor }}
          >
            Case Studies
          </h2>
          <p 
            className="font-['Cambay',sans-serif] text-[16px] leading-[26px] max-w-[340px]"
            style={{ color: mutedColor }}
          >
            Deep dives into complex systems where decisions carry weight and clarity matters.
          </p>
        </motion.section>

        {/* Case Study Carousel */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Drag Instructions */}
          <p 
            className="text-center font-['Cambay',sans-serif] text-[14px]"
            style={{ color: mutedColor }}
          >
            ← Swipe to explore →
          </p>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="cursor-grab active:cursor-grabbing"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="p-8 rounded-3xl space-y-6"
                  style={{
                    backgroundColor: cardBgUnselected,
                    border: `1px solid ${cardBorder}`,
                    boxShadow: theme === 'dark'
                      ? '0px 12px 32px rgba(0, 0, 0, 0.4)'
                      : '0px 12px 32px rgba(0, 0, 0, 0.08)',
                    minHeight: '480px',
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {renderCaseStudyCard(caseStudies[currentIndex])}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 pt-2">
            {caseStudies.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className="rounded-full transition-all"
                style={{
                  width: currentIndex === index ? '32px' : '8px',
                  height: '8px',
                  backgroundColor: currentIndex === index ? cardBgSelected : borderColor,
                }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  width: currentIndex === index ? '32px' : '8px',
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-[1px]" style={{ backgroundColor: borderColor }} />

        {/* Exploratory Studies Section */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="space-y-3">
            <h3 
              className="font-['Caladea',serif] text-[32px] leading-tight"
              style={{ color: textColor }}
            >
              Exploratory studies
            </h3>
            <p 
              className="font-['Cambay',sans-serif] font-bold text-[16px] leading-[26px] max-w-[340px]"
              style={{ color: textColor }}
            >
              Explorations are used to test ideas, interaction patterns, and system behaviors before applying them to larger product work.
            </p>
          </div>

          {/* Exploratory Cards - Collapsible */}
          <div className="space-y-4">
            {exploratoryStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="rounded-2xl overflow-hidden transition-all cursor-pointer"
                style={{
                  backgroundColor: cardBgUnselected,
                  border: `1px solid ${cardBorder}`,
                  boxShadow: theme === 'dark'
                    ? '0px 4px 12px rgba(0, 0, 0, 0.3)'
                    : '0px 4px 12px rgba(0, 0, 0, 0.05)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
              >
                {/* Card Header - Always Visible */}
                <motion.button
                  onClick={() => toggleStudy(study.id)}
                  className="w-full p-5 flex items-center justify-between"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <div 
                      className="flex items-center justify-center w-10 h-10 rounded-full"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                        color: textColor,
                      }}
                    >
                      {study.icon}
                    </div>
                    
                    {/* Title */}
                    <h4 
                      className="font-['Cambay',sans-serif] font-bold text-[18px] leading-[26px] text-left"
                      style={{ color: textColor }}
                    >
                      {study.title}
                    </h4>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: expandedStudy === study.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" style={{ color: textColor }} />
                  </motion.div>
                </motion.button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedStudy === study.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p
                          className="font-['Cambay',sans-serif] text-[14px] leading-[22px] whitespace-pre-line"
                          style={{ color: mutedColor }}
                        >
                          {study.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Bottom Spacing */}
        <div className="h-8" />
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}