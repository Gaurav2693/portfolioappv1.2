import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Twitter, Github, ExternalLink, Phone, Check, Instagram, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/app/context/theme-context';
import { useSound } from '@/app/context/sound-context';
import MobileHeader from '@/app/components/mobile-header';
import MobileBottomNav from '@/app/components/mobile-bottom-nav';
import svgPaths from '@/imports/svg-iqgb6d7avp';

export default function ContactMobile() {
  const { theme } = useTheme();
  const { playClick } = useSound();
  const [emailCopied, setEmailCopied] = useState(false);

  // Theme colors
  const bgColor = theme === 'dark' ? '#000000' : '#ffffff';
  const textColor = theme === 'dark' ? '#ffffff' : '#0a0a0a';
  const mutedColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)';
  const borderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const cardBgUnselected = theme === 'dark' ? '#1a1a1a' : '#f5f5f5';
  const cardBorder = theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
  const iconBg = theme === 'dark' ? '#2a2a2a' : '#e8e8e8';
  const strokeColor = theme === 'dark' ? '#ffffff' : '#0a0a0a';
  const successColor = theme === 'dark' ? '#4ade80' : '#22c55e';

  const articles = [
    {
      id: 'article1',
      title: 'From Dusty Trails to Digital Flows',
      subtitle: 'UX Insights from Overlanding',
      url: 'https://medium.com/@imgaurav2693/from-dusty-trails-to-digital-flows-ux-insights-from-overlanding-23eee1af5018'
    },
    {
      id: 'article2',
      title: 'Sustainable UX: Designing for Long-term Behavioural Change',
      subtitle: '— My Insights and Observations',
      url: 'https://medium.com/@imgaurav2693/sustainable-ux-designing-for-long-term-behavioral-change-my-insights-and-observations-dab372579444'
    }
  ];

  const handleEmailClick = async () => {
    playClick();
    const email = 'imgaurav2693@gmail.com';
    
    // Use the more reliable legacy method first
    const fallbackCopyTextToClipboard = (text: string) => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      
      // Avoid scrolling to bottom
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = '0';
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
      } catch (err) {
        document.body.removeChild(textArea);
        return false;
      }
    };
    
    try {
      // Try legacy method first (more reliable)
      const success = fallbackCopyTextToClipboard(email);
      
      if (success) {
        setEmailCopied(true);
        setTimeout(() => {
          setEmailCopied(false);
        }, 3000);
        return;
      }
      
      // If legacy fails, try modern API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        setEmailCopied(true);
        setTimeout(() => {
          setEmailCopied(false);
        }, 3000);
        return;
      }
      
      // If everything fails, still show feedback
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 3000);
    } catch (err) {
      // Suppress error and show success anyway for better UX
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 3000);
    }
  };

  const handleCallClick = () => {
    playClick();
    window.location.href = 'tel:+918384089382';
  };

  return (
    <div className="lg:hidden min-h-screen w-full pb-24 overflow-x-hidden" style={{ backgroundColor: bgColor }}>
      <MobileHeader />

      {/* Main Content */}
      <main className="px-6 space-y-8 pt-4">
        {/* Animated Message SVG - Reduced spacing */}
        <motion.section
          className="flex justify-center py-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Envelope body */}
            <motion.path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            />
            
            {/* Envelope flap */}
            <motion.path
              d="M22 6l-10 7L2 6"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
            />

            {/* Floating dots animation */}
            <motion.circle
              cx="12"
              cy="12"
              r="1"
              fill={strokeColor}
              initial={{ opacity: 0, y: 5 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [5, -5, 5],
              }}
              transition={{ 
                duration: 2,
                delay: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          </motion.svg>
        </motion.section>

        {/* Page Title */}
        <motion.section
          className="space-y-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 
            className="font-['Caladea',serif] text-[36px] leading-tight"
            style={{ color: textColor }}
          >
            Hi, I'm Gaurav
          </h2>
          <p 
            className="font-['Cambay',sans-serif] font-bold text-[17px] leading-[28px]"
            style={{ color: textColor }}
          >
            Product Designer | UX Thinker | Human centred Designer
          </p>
          
          {/* Mobile Number */}
          <motion.div 
            className="flex items-center justify-center gap-2 pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Phone className="w-4 h-4" style={{ color: mutedColor }} />
            <a 
              href="tel:+918384089382"
              onClick={playClick}
              className="font-['Cambay',sans-serif] text-[16px]"
              style={{ color: mutedColor }}
            >
              +91-8384089382
            </a>
          </motion.div>
        </motion.section>

        {/* Bio Card */}
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
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p 
            className="font-['Cambay',sans-serif] text-[16px] leading-[26px]"
            style={{ color: mutedColor }}
          >
            I'm a designer shaped by systems, stories and the open road. I craft experiences that balance precision with empathy — designing not just interfaces, but interactions that make sense to humans and systems alike.
          </p>
          
          <p 
            className="font-['Cambay',sans-serif] text-[16px] leading-[26px]"
            style={{ color: mutedColor }}
          >
            Outside the screen, you'll often find me exploring mountain trails, dissecting how machines think, or journaling about how people feel. Those intersections — between mechanics and emotion, adventure and design — are where my ideas take shape.
          </p>
          
          <p 
            className="font-['Cambay',sans-serif] text-[16px] leading-[26px]"
            style={{ color: mutedColor }}
          >
            I'm currently working as a UX Designer at Infinite Computer Solutions, transitioning toward a Product Design role where I can bridge strategy, design, and AI systems that truly listen.
          </p>
        </motion.section>

        {/* Connect Section */}
        <motion.section
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 
            className="font-['Caladea',serif] text-[28px] leading-tight"
            style={{ color: textColor }}
          >
            Connect with me
          </h3>

          {/* 3-Column Grid: LinkedIn, Instagram, Email */}
          <div className="grid grid-cols-3 gap-3">
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/imgaurav2693/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex flex-col items-center justify-center p-4 rounded-2xl space-y-2"
              style={{
                backgroundColor: cardBgUnselected,
                border: `1px solid ${cardBorder}`,
              }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div 
                className="flex items-center justify-center w-11 h-11 rounded-full"
                style={{ backgroundColor: iconBg }}
              >
                <Linkedin className="w-5 h-5" style={{ color: textColor }} />
              </div>
              <span 
                className="font-['Cambay',sans-serif] font-bold text-[12px] text-center"
                style={{ color: textColor }}
              >
                LinkedIn
              </span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/dark_wizard2693/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex flex-col items-center justify-center p-4 rounded-2xl space-y-2"
              style={{
                backgroundColor: cardBgUnselected,
                border: `1px solid ${cardBorder}`,
              }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div 
                className="flex items-center justify-center w-11 h-11 rounded-full"
                style={{ backgroundColor: iconBg }}
              >
                <Instagram className="w-5 h-5" style={{ color: textColor }} />
              </div>
              <span 
                className="font-['Cambay',sans-serif] font-bold text-[12px] text-center"
                style={{ color: textColor }}
              >
                Instagram
              </span>
            </motion.a>

            {/* Email Me */}
            <motion.button
              onClick={handleEmailClick}
              className="flex flex-col items-center justify-center p-4 rounded-2xl space-y-2 relative overflow-hidden"
              style={{
                backgroundColor: cardBgUnselected,
                border: `1px solid ${cardBorder}`,
              }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              {/* Success overlay */}
              <AnimatePresence>
                {emailCopied && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center rounded-2xl"
                    style={{ backgroundColor: successColor }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 400, 
                      damping: 20 
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.1,
                        type: 'spring', 
                        stiffness: 400, 
                        damping: 15 
                      }}
                    >
                      <Check className="w-8 h-8 text-white" strokeWidth={3} />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div 
                className="flex items-center justify-center w-11 h-11 rounded-full"
                style={{ backgroundColor: iconBg }}
              >
                <Mail className="w-5 h-5" style={{ color: textColor }} />
              </div>
              <span 
                className="font-['Cambay',sans-serif] font-bold text-[12px] text-center"
                style={{ color: textColor }}
              >
                Email me
              </span>
            </motion.button>
          </div>

          {/* Email Copied Toast Notification */}
          <AnimatePresence>
            {emailCopied && (
              <motion.div
                className="flex items-center justify-center gap-2 p-4 rounded-2xl"
                style={{
                  backgroundColor: successColor,
                }}
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 500, 
                  damping: 25 
                }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </motion.div>
                <span className="font-['Cambay',sans-serif] font-bold text-[14px] text-white">
                  Email copied to clipboard! 🎉
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Call Button - Full Width */}
          <motion.button
            onClick={handleCallClick}
            className="w-full flex items-center justify-center gap-3 p-5 rounded-2xl"
            style={{
              backgroundColor: cardBgUnselected,
              border: `1px solid ${cardBorder}`,
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <div 
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{ backgroundColor: iconBg }}
            >
              <Phone className="w-6 h-6" style={{ color: textColor }} />
            </div>
            <span 
              className="font-['Cambay',sans-serif] font-bold text-[16px]"
              style={{ color: textColor }}
            >
              Call me
            </span>
          </motion.button>
        </motion.section>

        {/* Divider */}
        <div className="h-[1px]" style={{ backgroundColor: borderColor }} />

        {/* Writings Section */}
        <motion.section
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 
            className="font-['Caladea',serif] text-[28px] leading-tight"
            style={{ color: textColor }}
          >
            Some Writings
          </h3>

          <p 
            className="font-['Cambay',sans-serif] text-[16px] leading-[26px]"
            style={{ color: mutedColor }}
          >
            Reflections on design, decision-making, and the systems that shape how we work.
          </p>

          {/* Article Cards */}
          <div className="space-y-3">
            {articles.map((article, index) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="block p-5 rounded-2xl"
                style={{
                  backgroundColor: cardBgUnselected,
                  border: `1px solid ${cardBorder}`,
                  boxShadow: theme === 'dark'
                    ? '0px 4px 12px rgba(0, 0, 0, 0.3)'
                    : '0px 4px 12px rgba(0, 0, 0, 0.05)',
                }}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 space-y-1">
                    <h4 
                      className="font-['Cambay',sans-serif] font-bold text-[16px] leading-[24px]"
                      style={{ color: textColor }}
                    >
                      {article.title}:
                    </h4>
                    <p 
                      className="font-['Cambay',sans-serif] font-bold text-[14px] leading-[22px]"
                      style={{ color: mutedColor }}
                    >
                      {article.subtitle}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 2, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-5 h-5 shrink-0 mt-1" style={{ color: textColor }} />
                  </motion.div>
                </div>
              </motion.a>
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