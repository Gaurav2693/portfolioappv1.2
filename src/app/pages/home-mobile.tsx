import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Box, Zap, Users } from 'lucide-react';
import { useTheme } from '@/app/context/theme-context';
import { useSound } from '@/app/context/sound-context';
import MobileHeader from '@/app/components/mobile-header';
import MobileBottomNav from '@/app/components/mobile-bottom-nav';
import ProfileIllustration from '@/app/components/profile-illustration';

export type WorkMethod = "framing" | "constraints" | "prototyping" | "collaboration";

interface MethodContent {
  title: string;
  description: string[];
  icon: React.ReactNode;
}

export default function HomeMobile() {
  const [selectedMethod, setSelectedMethod] = useState<WorkMethod>("constraints");
  const { theme, toggleTheme } = useTheme();
  const { playClick, soundEnabled, toggleSound } = useSound();

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

  const methods: { id: WorkMethod; label: string }[] = [
    { id: 'framing', label: 'Framing Decisions' },
    { id: 'constraints', label: 'Designing under constraints' },
    { id: 'prototyping', label: 'Rapid Prototyping & Staging' },
    { id: 'collaboration', label: 'Collaboration & Handoff' },
  ];

  const methodContent: Record<WorkMethod, MethodContent> = {
    constraints: {
      title: 'Designing under constraints',
      description: [
        'I design with constraints in mind — technical, business, and operational.',
        'Rather than removing friction blindly, I decide where it protects users or the system.',
        'Every design choice involves a trade-off, and I aim to make those trade-offs intentional and visible.',
      ],
      icon: <Box className="w-16 h-16" strokeWidth={1.5} />,
    },
    framing: {
      title: 'Framing Decisions',
      description: [
        'I begin by identifying where users must make decisions and what\'s at stake if they get them wrong.',
        'Before designing, I clarify constraints, risks, and success metrics with product and engineering.',
        'This helps focus design effort on what actually matters.',
      ],
      icon: <Target className="w-16 h-16" strokeWidth={1.5} />,
    },
    prototyping: {
      title: 'Rapid Prototyping & Staging',
      description: [
        'I build quick prototypes to test assumptions and iterate rapidly.',
        'Staging environments allow me to validate designs with real data before production.',
        'This approach reduces risk and ensures designs work in practice, not just in theory.',
      ],
      icon: <Zap className="w-16 h-16" strokeWidth={1.5} />,
    },
    collaboration: {
      title: 'Collaboration & Handoff',
      description: [
        'I work closely with product managers, engineers, and leadership to align decisions and move forward confidently.',
        'I stay involved through implementation to ensure design intent carries through to production.',
      ],
      icon: <Users className="w-16 h-16" strokeWidth={1.5} />,
    },
  };

  const handleMethodSelect = (method: WorkMethod) => {
    playClick();
    setSelectedMethod(method);
    
    // Scroll to detail card
    setTimeout(() => {
      const detailCard = document.getElementById('method-detail');
      if (detailCard) {
        detailCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="lg:hidden min-h-screen w-full pb-24 overflow-x-hidden" style={{ backgroundColor: bgColor }}>
      <MobileHeader />

      {/* Main Content */}
      <main className="px-6 space-y-10">
        {/* Profile Section */}
        <motion.section
          className="flex flex-col items-center gap-5 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Profile Illustration */}
          <div className="w-[120px] h-[160px]">
            <ProfileIllustration />
          </div>

          {/* Name */}
          <h2 
            className="font-['Caladea',serif] text-[40px] leading-tight text-center"
            style={{ color: textColor }}
          >
            Gaurav Mishra
          </h2>

          {/* Subtitle */}
          <p 
            className="font-['Cambay',sans-serif] font-bold text-[17px] leading-[28px] text-center max-w-[320px]"
            style={{ color: textColor }}
          >
            Product Designer focused on decision-driven and risk-sensitive systems
          </p>
        </motion.section>

        {/* Bio */}
        <motion.section
          className="font-['Cambay',sans-serif] text-[16px] leading-[26px] max-w-[340px] mx-auto"
          style={{ color: mutedColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I design for systems where decisions carry weight and errors have consequences. My work focuses on making complex information clear, reducing decision friction, and building interfaces that help users act with confidence—not just speed.
          </p>
        </motion.section>

        {/* Divider */}
        <div className="h-[1px] max-w-[340px] mx-auto" style={{ backgroundColor: borderColor }} />

        {/* How I Work Section */}
        <motion.section
          className="space-y-6 max-w-[340px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 
            className="font-['Caladea',serif] text-[32px] leading-tight"
            style={{ color: textColor }}
          >
            How I work
          </h3>

          <p 
            className="font-['Cambay',sans-serif] text-[16px] leading-[26px]"
            style={{ color: mutedColor }}
          >
            I work on systems where decisions have downstream impact. Instead of removing friction everywhere, I design interfaces that guide attention, surface trade-offs, and protect users from costly errors.
          </p>

          {/* Method Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            {methods.map((method, index) => (
              <motion.button
                key={method.id}
                onClick={() => handleMethodSelect(method.id)}
                className="w-full h-[68px] rounded-2xl font-['Cambay',sans-serif] font-bold text-[16px] leading-[24px] tracking-[0.01em] transition-all duration-300"
                style={{
                  backgroundColor: selectedMethod === method.id ? cardBgSelected : cardBgUnselected,
                  color: selectedMethod === method.id ? cardTextSelected : cardTextUnselected,
                  border: `1px solid ${selectedMethod === method.id ? 'transparent' : cardBorder}`,
                  boxShadow: selectedMethod === method.id 
                    ? theme === 'dark' 
                      ? '0px 8px 16px rgba(255, 255, 255, 0.1), 0px 2px 8px rgba(255, 255, 255, 0.05)'
                      : '0px 8px 16px rgba(0, 0, 0, 0.08), 0px 2px 8px rgba(0, 0, 0, 0.04)'
                    : '0px 2px 8px rgba(0, 0, 0, 0.04)',
                }}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
              >
                {method.label}
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Method Detail Card */}
        <AnimatePresence mode="wait">
          <motion.section
            id="method-detail"
            key={selectedMethod}
            className="p-8 rounded-3xl space-y-6 max-w-[340px] mx-auto"
            style={{
              backgroundColor: cardBgUnselected,
              border: `1px solid ${cardBorder}`,
              boxShadow: theme === 'dark'
                ? '0px 8px 24px rgba(0, 0, 0, 0.3)'
                : '0px 8px 24px rgba(0, 0, 0, 0.06)',
            }}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Title */}
            <h4 
              className="font-['Caladea',serif] text-[26px] leading-tight text-center"
              style={{ color: textColor }}
            >
              {methodContent[selectedMethod].title}
            </h4>

            {/* Icon */}
            <motion.div 
              className="flex justify-center py-4"
              style={{ color: textColor }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {methodContent[selectedMethod].icon}
            </motion.div>

            {/* Description */}
            <div className="space-y-4">
              {methodContent[selectedMethod].description.map((text, i) => (
                <motion.p
                  key={i}
                  className="font-['Cambay',sans-serif] text-[16px] leading-[26px]"
                  style={{ color: mutedColor }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.section>
        </AnimatePresence>

        {/* Bottom Spacing */}
        <div className="h-8" />
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}
