import { motion } from 'motion/react';
import { TrendingUp, Users, Target, Clock } from 'lucide-react';
import { useTheme } from '@/app/context/theme-context';
import { useSound } from '@/app/context/sound-context';
import MobileHeader from '@/app/components/mobile-header';
import MobileBottomNav from '@/app/components/mobile-bottom-nav';

export default function EvidenceMetricsMobile() {
  const { theme } = useTheme();

  // Theme colors
  const bgColor = theme === 'dark' ? '#000000' : '#ffffff';
  const textColor = theme === 'dark' ? '#ffffff' : '#0a0a0a';
  const mutedColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)';
  const borderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const cardBgUnselected = theme === 'dark' ? '#1a1a1a' : '#f5f5f5';
  const cardBorder = theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
  const accentColor = theme === 'dark' ? '#2a2a2a' : '#e8e8e8';

  const focusAreas = [
    {
      icon: <TrendingUp className="w-5 h-5" strokeWidth={2} />,
      title: 'Conversion rates and funnel optimization',
    },
    {
      icon: <Clock className="w-5 h-5" strokeWidth={2} />,
      title: 'Task completion time and error reduction',
    },
    {
      icon: <Users className="w-5 h-5" strokeWidth={2} />,
      title: 'User satisfaction and engagement metrics',
    },
    {
      icon: <Target className="w-5 h-5" strokeWidth={2} />,
      title: 'Revenue impact and cost savings',
    },
  ];

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
            Evidence & Metrics
          </h2>
          <p 
            className="font-['Cambay',sans-serif] text-[16px] leading-[26px]"
            style={{ color: mutedColor }}
          >
            Quantifying design impact through behavioral data, business metrics, and user research.
          </p>
        </motion.section>

        {/* Measuring Design Decisions Card */}
        <motion.section
          className="p-6 rounded-3xl space-y-4"
          style={{
            backgroundColor: cardBgUnselected,
            border: `1px solid ${cardBorder}`,
            boxShadow: theme === 'dark'
              ? '0px 8px 24px rgba(0, 0, 0, 0.3)'
              : '0px 8px 24px rgba(0, 0, 0, 0.06)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 
            className="font-['Caladea',serif] text-[24px] leading-tight"
            style={{ color: textColor }}
          >
            Measuring Design Decisions
          </h3>
          <p 
            className="font-['Cambay',sans-serif] text-[16px] leading-[26px]"
            style={{ color: mutedColor }}
          >
            Every design choice creates measurable change. This section tracks how interface decisions translate into user behavior, business outcomes, and operational efficiency.
          </p>
        </motion.section>

        {/* Key Focus Areas */}
        <motion.section
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 
            className="font-['Caladea',serif] text-[28px] leading-tight"
            style={{ color: textColor }}
          >
            Key Focus Areas
          </h3>

          {/* Focus Area Cards */}
          <div className="space-y-3">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{
                  backgroundColor: cardBgUnselected,
                  border: `1px solid ${cardBorder}`,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
              >
                {/* Icon Circle */}
                <div 
                  className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                  style={{
                    backgroundColor: accentColor,
                    color: textColor,
                  }}
                >
                  {area.icon}
                </div>

                {/* Title */}
                <p 
                  className="font-['Cambay',sans-serif] text-[16px] leading-[24px] pt-2"
                  style={{ color: textColor }}
                >
                  {area.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Coming Soon Card */}
        <motion.section
          className="p-6 rounded-3xl space-y-4"
          style={{
            backgroundColor: cardBgUnselected,
            border: `1px solid ${cardBorder}`,
            boxShadow: theme === 'dark'
              ? '0px 8px 24px rgba(0, 0, 0, 0.3)'
              : '0px 8px 24px rgba(0, 0, 0, 0.06)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 
            className="font-['Caladea',serif] text-[24px] leading-tight"
            style={{ color: textColor }}
          >
            Coming Soon
          </h3>
          <p 
            className="font-['Cambay',sans-serif] text-[16px] leading-[26px]"
            style={{ color: mutedColor }}
          >
            Detailed case study metrics, research findings, and longitudinal impact data will be added here.
          </p>
        </motion.section>

        {/* Bottom Spacing */}
        <div className="h-8" />
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}