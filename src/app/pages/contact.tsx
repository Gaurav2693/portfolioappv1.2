import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import Header from '@/app/components/header';
import NavigationSidebar from '@/app/components/navigation-sidebar';
import ContactMobile from '@/app/pages/contact-mobile';
import { useTheme } from '@/app/context/theme-context';
import svgPaths from '@/imports/svg-i8ik4jofl4';
import svgPathsContact from '@/imports/svg-vtpqpams3a';
import svgPathsSocial from '@/imports/svg-5yq4mdfc74';

export default function Contact() {
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  
  // Theme-aware colors
  const outerBg = theme === 'dark' ? 'bg-white' : 'bg-black';
  const cardBg = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const fillColor = theme === 'dark' ? 'white' : 'black';
  const strokeColor = theme === 'dark' ? 'white' : 'black';
  const footerBg = theme === 'dark' ? 'bg-[#171717]' : 'bg-[#e8e8e8]';
  const articleBg = theme === 'dark' ? 'bg-[#3a3a3a]' : 'bg-[#d0d0d0]';
  const socialCircleFill = theme === 'dark' ? '#1E1E1E' : '#e1e1e1';
  const borderColor = theme === 'dark' ? 'border-white/10' : 'border-black/10';
  
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

  const handleEmailClick = () => {
    const email = 'imgaurav2693@gmail.com';
    
    // Use the reliable legacy method
    const fallbackCopyTextToClipboard = (text: string) => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
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
      const success = fallbackCopyTextToClipboard(email);
      if (success) {
        console.log('Email copied to clipboard');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      {/* Desktop Layout */}
      <div className={`hidden lg:flex ${outerBg} min-h-screen w-full items-start justify-center py-[74px]`}>
        <div className="relative w-[1315px] h-[893px]">
          {/* Main Black Card - Fixed dimensions */}
          <div className={`absolute ${cardBg} h-[893px] left-0 rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1315px]`}>
            {/* Footer Section */}
            <div className={`absolute ${footerBg} h-[156px] left-0 rounded-bl-[30px] rounded-br-[29px] top-[737px] w-[1315px]`} />
            
            {/* Article Card 1 */}
            <motion.a
              href={articles[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute border border-[rgba(0,0,0,0)] border-solid h-[73px] left-[510px] overflow-hidden rounded-[8px] top-[778px] w-[291px] group cursor-pointer"
              onMouseEnter={() => setHoveredArticle("article1")}
              onMouseLeave={() => setHoveredArticle(null)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`absolute ${articleBg} h-[71px] left-0 shadow-[0px_16px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[289px]`} />
              
              {/* Liquid fill effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  borderRadius: '8px',
                }}
                initial={{ y: '100%' }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : hoveredArticle === "article1"
                    ? {
                        y: '0%',
                        transition: {
                          duration: 0.5,
                          ease: [0.65, 0, 0.35, 1],
                        },
                      }
                    : {
                        y: '100%',
                        transition: {
                          duration: 0.3,
                          ease: [0.65, 0, 0.35, 1],
                        },
                      }
                }
              />
              
              <div className="absolute content-stretch flex h-[71px] items-center justify-between left-0 px-[17px] top-0 w-[289px] z-10">
                <div className="h-[33.594px] w-[229.063px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="h-[16.797px] relative shrink-0 w-[229.063px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className={`absolute font-['Cambay',sans-serif] font-bold leading-[16.8px] left-0 not-italic text-[14px] ${textColor} top-[-1px] tracking-[0.14px]`}>{articles[0].title}:</p>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[229.063px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className={`absolute font-['Cambay',sans-serif] font-bold leading-[16.8px] left-0 not-italic text-[14px] ${textColor} top-[-1px] tracking-[0.14px]`}>{articles[0].subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="relative shrink-0 size-[20px]"
                  animate={
                    shouldReduceMotion
                      ? {}
                      : hoveredArticle === "article1"
                      ? { x: 2, y: -2 }
                      : { x: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p3e47bd00} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p3610fb80} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </motion.div>
              </div>
            </motion.a>
            
            {/* Article Card 2 */}
            <motion.a
              href={articles[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute border border-[rgba(0,0,0,0)] border-solid h-[73px] left-[824px] overflow-hidden rounded-[8px] top-[778px] w-[289px] group cursor-pointer"
              onMouseEnter={() => setHoveredArticle("article2")}
              onMouseLeave={() => setHoveredArticle(null)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`absolute ${articleBg} h-[71px] left-0 shadow-[0px_16px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[287px]`} />
              
              {/* Liquid fill effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  borderRadius: '8px',
                }}
                initial={{ y: '100%' }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : hoveredArticle === "article2"
                    ? {
                        y: '0%',
                        transition: {
                          duration: 0.5,
                          ease: [0.65, 0, 0.35, 1],
                        },
                      }
                    : {
                        y: '100%',
                        transition: {
                          duration: 0.3,
                          ease: [0.65, 0, 0.35, 1],
                        },
                      }
                }
              />
              
              <div className="absolute content-stretch flex h-[71px] items-center justify-between left-0 px-[19px] top-0 w-[287px] z-10">
                <div className="h-[50.391px] w-[207.563px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <p className={`font-['Cambay',sans-serif] font-bold leading-[16.8px] not-italic text-[14px] ${textColor} tracking-[0.14px]`}>{articles[1].title}</p>
                    <p className={`font-['Cambay',sans-serif] font-bold leading-[16.8px] not-italic text-[14px] ${textColor} tracking-[0.14px] mt-1`}>{articles[1].subtitle}</p>
                  </div>
                </div>
                <motion.div 
                  className="relative shrink-0 size-[20px]"
                  animate={
                    shouldReduceMotion
                      ? {}
                      : hoveredArticle === "article2"
                      ? { x: 2, y: -2 }
                      : { x: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p3e47bd00} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p3610fb80} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </motion.div>
              </div>
            </motion.a>
            
            {/* Lightbulb - Bottom Right with Glow */}
            <div className="absolute h-[122px] left-[1153px] top-[744px] w-[102px]">
              <div className="absolute inset-[12.3%_8.82%_4.38%_7.84%]">
                <svg className="block size-full lightbulb-svg" fill="none" preserveAspectRatio="none" viewBox="0 0 85.0002 101.659">
                  <g>
                    <path d={svgPaths.p5cd4c00} fill={fillColor} />
                    <path d={svgPaths.p33c58240} fill={fillColor} />
                    <path d={svgPaths.p135e4200} fill={fillColor} />
                    <path d={svgPaths.p334b8570} fill={fillColor} />
                    <path d={svgPaths.p1ed1bc00} fill={fillColor} />
                    <path d={svgPaths.p3daa07f0} fill={fillColor} />
                    <path d={svgPaths.p282ce600} fill={fillColor} />
                    <path d={svgPaths.p1baf8400} fill={fillColor} />
                    <path d={svgPaths.pf2b7480} fill={fillColor} />
                    <path d={svgPaths.p38751f00} fill={fillColor} />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Navigation Sidebar */}
          <NavigationSidebar />
          
          {/* Header */}
          <Header />
          
          {/* Top Horizontal Line */}
          <div className="absolute content-stretch flex flex-col h-[0.5px] items-start left-[56px] top-[121.5px] w-[1204px]">
            <div className="h-[0.5px] overflow-clip relative shrink-0 w-full">
              <div className="absolute bottom-1/2 left-0 right-0 top-1/2">
                <div className="absolute inset-[-0.25px_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1204 0.5">
                    <path d="M0 0.25H1204" stroke={strokeColor} strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Title */}
          <div className="absolute h-[74px] left-[64px] top-[174px] w-[426px]">
            <div className="absolute content-stretch flex h-[74px] items-start left-[-3px] px-[3px] rounded-[3px] top-0 w-[388.406px]">
              <p className={`font-['Caladea',serif] leading-[normal] not-italic relative shrink-0 text-[64px] ${textColor} tracking-[0.64px]`}>{`Hi, I'm Gaurav`}</p>
            </div>
          </div>
          
          {/* Subtitle */}
          <div className="absolute content-stretch flex flex-col h-[57.594px] items-start left-[69px] pr-[8px] pt-[-1px] top-[257.19px] w-[349px]">
            <div className="h-[57.594px] relative shrink-0 w-full">
              <p className={`absolute font-['Cambay',sans-serif] font-bold leading-[28.8px] left-0 not-italic text-[24px] ${textColor} top-[-1px] tracking-[0.24px] w-[348px] whitespace-pre-wrap`}>Product Designer | UX Thinker | Human centred Designer</p>
            </div>
          </div>
          
          {/* Contact Information - Premium Theme Design */}
          <div className="absolute h-[66.5px] left-[754px] top-[652px] w-[502.508px]">
            {/* Phone Number Card */}
            <a
              href="tel:+918384089382"
              className={`absolute content-stretch flex gap-[12px] h-[66.5px] items-center left-0 px-[21px] py-px rounded-[14px] top-0 w-[203.164px] cursor-pointer transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-[#1e1e1e] border border-white/20 hover:bg-[#2a2a2a] hover:border-white/30' 
                  : 'bg-[#f5f5f5] border border-black/20 hover:bg-[#e8e8e8] hover:border-black/30'
              } hover:scale-[1.02] hover:-translate-y-0.5`}
            >
              {/* Phone Icon Container */}
              <div className={`relative rounded-full shrink-0 size-[40px] transition-all duration-300 ${
                theme === 'dark' ? 'bg-[#2a2a2a]' : 'bg-[#e0e0e0]'
              }`}>
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPathsContact.p24fdbe80} stroke={fillColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Phone Text Container */}
              <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="h-[16.5px] opacity-50 relative shrink-0 w-[109.164px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className={`absolute font-['Cambay',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] ${textColor} top-0 tracking-[0.11px]`}>Phone</p>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-[109.164px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className={`absolute font-['Cambay',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] ${textColor} top-0 tracking-[0.16px]`}>+91-8384089382</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Email Copy Button */}
            <button
              onClick={handleEmailClick}
              className={`absolute h-[66.5px] left-[219.16px] rounded-[14px] top-0 w-[283.344px] cursor-pointer transition-all duration-300 overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-[#1e1e1e] border border-white/20 hover:bg-[#2a2a2a] hover:border-white/30' 
                  : 'bg-[#f5f5f5] border border-black/20 hover:bg-[#e8e8e8] hover:border-black/30'
              } hover:scale-[1.02] hover:-translate-y-0.5`}
            >
              <div className="content-stretch flex gap-[12px] items-center px-[21px] py-px relative rounded-[inherit] size-full">
                {/* Email Icon Container */}
                <div className={`relative rounded-full shrink-0 size-[40px] transition-all duration-300 ${
                  theme === 'dark' ? 'bg-[#2a2a2a]' : 'bg-[#e0e0e0]'
                }`}>
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPathsContact.pd919a80} stroke={fillColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPathsContact.p189c1170} stroke={fillColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Email Text Container */}
                <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="h-[16.5px] opacity-50 relative shrink-0 w-[189.344px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className={`-translate-x-1/2 absolute font-['Cambay',sans-serif] leading-[16.5px] left-[94.81px] not-italic text-[11px] text-center ${textColor} top-0 tracking-[0.11px] whitespace-nowrap`}>Email (Click to copy)</p>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[189.344px]">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className={`-translate-x-1/2 absolute font-['Cambay',sans-serif] font-bold leading-[24px] left-[95px] not-italic text-[16px] text-center ${textColor} top-0 tracking-[0.16px]`}>imgaurav2693@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Success overlay */}
              <AnimatePresence>
                {emailCopied && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center rounded-[14px]"
                    style={{ backgroundColor: theme === 'dark' ? '#4ade80' : '#22c55e' }}
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
                      className="flex items-center gap-2"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.1,
                        type: 'spring', 
                        stiffness: 400, 
                        damping: 15 
                      }}
                    >
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      <span className="font-['Cambay',sans-serif] font-bold text-[14px] text-white">
                        Email Copied!
                      </span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
          
          {/* Biography Text */}
          <div className="absolute h-[274.313px] left-[69px] top-[331.83px] w-[376px]">
            <div className="absolute h-[19.594px] left-0 top-0 w-[212.516px]">
              <p className={`absolute font-['Cambay',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] ${textColor} top-0 tracking-[0.14px]`}>{`I'm a designer shaped by systems,`}</p>
            </div>
            <div className="absolute h-[19.594px] left-0 top-[19.58px] w-[163.625px]">
              <p className={`absolute font-['Cambay',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] ${textColor} top-0 tracking-[0.14px]`}>stories and the open road.</p>
            </div>
            <div className="absolute h-[19.594px] left-0 top-[39.19px] w-[343.938px]">
              <p className={`absolute font-['Cambay',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] ${textColor} top-0 tracking-[0.14px]`}>I craft experiences that balance precision with empathy</p>
            </div>
            <div className="absolute h-[39.188px] left-0 top-[58.77px] w-[364px]">
              <p className={`absolute font-['Cambay',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] ${textColor} top-0 tracking-[0.14px] w-[368px] whitespace-pre-wrap`}>— designing not just interfaces, but interactions that make sense to humans and systems alike</p>
            </div>
            <div className="absolute h-[19.594px] left-0 top-[97.97px] w-[371.078px]">
              <p className={`absolute font-['Cambay',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] ${textColor} top-0 tracking-[0.14px]`}>{`Outside the screen, you'll often find me exploring mountain`}</p>
            </div>
            <div className="absolute h-[39.188px] left-0 top-[117.55px] w-[356px]">
              <p className={`absolute font-['Cambay',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] ${textColor} top-0 tracking-[0.14px] w-[360px] whitespace-pre-wrap`}>trails, dissecting how machines think, or journaling about how people feel.</p>
            </div>
            <div className="absolute h-[19.594px] left-0 top-[156.75px] w-[347.313px]">
              <p className={`absolute font-['Cambay',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] ${textColor} top-0 tracking-[0.14px]`}>Those intersections — between mechanics and emotion,</p>
            </div>
            <div className="absolute h-[19.594px] left-0 top-[176.33px] w-[348.375px]">
              <p className={`absolute font-['Cambay',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] ${textColor} top-0 tracking-[0.14px]`}>adventure and design — are where my ideas take shape.</p>
            </div>
            <div className="absolute h-[19.594px] left-0 top-[195.94px] w-[243.031px]">
              <p className={`absolute font-['Cambay',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] ${textColor} top-0 tracking-[0.14px]`}>{`I'm currently working as a UX Designer`}</p>
            </div>
            <div className="absolute h-[19.594px] left-0 top-[215.52px] w-[323.156px]">
              <p className={`absolute font-['Cambay',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] ${textColor} top-0 tracking-[0.14px]`}>at Infinite Computer Solutions, transitioning toward</p>
            </div>
            <div className="absolute h-[19.594px] left-0 top-[235.13px] w-[313.719px]">
              <p className={`absolute font-['Cambay',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] ${textColor} top-0 tracking-[0.14px]`}>a Product Design role where I can bridge strategy,</p>
            </div>
            <div className="absolute h-[19.594px] left-0 top-[254.72px] w-[247.406px]">
              <p className={`absolute font-['Cambay',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] ${textColor} top-0 tracking-[0.14px]`}>design, and AI systems that truly listen.</p>
            </div>
          </div>
          
          {/* Email Envelope Illustrations */}
          <div className="absolute content-stretch flex flex-col h-[378.469px] items-start left-[171.73px] top-[248.52px] w-[1164.297px]">
            <div className="h-[378.468px] overflow-clip relative shrink-0 w-full">
              <div className="absolute contents inset-[1.71%_3.07%_21.01%_31.8%]">
                <div className="absolute inset-[1.71%_3.07%_38.57%_56.39%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 226">
                    <path d={svgPaths.p292c48a0} fill={fillColor} />
                  </svg>
                </div>
                <div className="absolute inset-[3.93%_40.8%_77.47%_49.9%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.373 70.3769">
                    <path d={svgPaths.p4945600} fill={fillColor} />
                  </svg>
                </div>
                <div className="absolute inset-[28.48%_43.73%_30.11%_31.8%]">
                  <div className="absolute inset-[-1.32%_-0.75%_-0.74%_-0.96%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 289.828 159.94">
                      <path d={svgPaths.p37219670} stroke={strokeColor} strokeWidth="1.78482" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[31.64%_18.91%_51.29%_74.31%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.0045 64.6142">
                    <path d={svgPaths.p3b85bd80} fill={fillColor} />
                  </svg>
                </div>
                <div className="absolute inset-[53.09%_36.04%_21.01%_52.38%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.735 98.0263">
                    <path d={svgPaths.p11d44200} fill={fillColor} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media Icons */}
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/imgaurav2693/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute content-stretch flex flex-col items-start left-[69px] size-[34px] top-[627px] cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-[34px] overflow-clip relative shrink-0 w-full">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                <path d={svgPathsSocial.p2c011100} fill={socialCircleFill} />
              </svg>
              <div className="absolute contents inset-[24.58%_26.66%_29.41%_27.51%]">
                <div className="absolute inset-[40.01%_62.24%_29.41%_28.17%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.26074 10.3976">
                    <path d={svgPaths.p1a5b9600} fill={fillColor} />
                  </svg>
                </div>
                <div className="absolute inset-[24.58%_61.45%_64.31%_27.51%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75384 3.77648">
                    <path d={svgPaths.p21b78200} fill={fillColor} />
                  </svg>
                </div>
                <div className="absolute inset-[39.1%_26.66%_29.41%_43.73%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.069 10.7074">
                    <path d={svgPaths.p2fff7e00} fill={fillColor} />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/dark_wizard2693/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute content-stretch flex flex-col items-start left-[111px] size-[34px] top-[627px] cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-[34px] overflow-clip relative shrink-0 w-full">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                <path d={svgPathsSocial.p2c011100} fill={socialCircleFill} />
              </svg>
              <div className="absolute contents inset-[23.53%_23.53%_23.21%_23.53%]">
                <div className="absolute inset-[23.53%_23.53%_23.21%_23.53%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.1081">
                    <path d={svgPaths.p187cd280} fill={fillColor} />
                  </svg>
                </div>
                <div className="absolute inset-[36.68%_36.6%_36.36%_36.6%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1109 9.1659">
                    <path d={svgPaths.p3ff08e00} fill={fillColor} />
                  </svg>
                </div>
                <div className="absolute inset-[32.87%_33.22%_60.85%_60.54%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.1238 2.1366">
                    <path d={svgPaths.p20fdf500} fill={fillColor} />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          
          {/* WhatsApp */}
          <button 
            className="absolute content-stretch flex flex-col items-start left-[153px] size-[34px] top-[627px] cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-[34px] overflow-clip relative shrink-0 w-full">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                <path d={svgPathsSocial.p2c011100} fill={socialCircleFill} />
              </svg>
              <div className="absolute contents inset-[23.53%_23.53%_25.81%_26.47%]">
                <div className="absolute inset-[23.53%_23.53%_25.81%_26.47%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17.226">
                    <path d={svgPaths.p29733780} fill={fillColor} />
                  </svg>
                </div>
                <div className="absolute inset-[37.06%_35.98%_39.33%_39.19%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.43979 8.02697">
                    <path d={svgPaths.p235a60c0} fill={fillColor} />
                  </svg>
                </div>
              </div>
            </div>
          </button>
          
          {/* Some Writings Title */}
          <div className="absolute h-[100px] left-[67px] top-[758px] w-[414px]">
            <div className="absolute content-stretch flex h-[74px] items-start left-[-3px] px-[3px] rounded-[3px] top-[13px] w-[395.516px]">
              <p className={`font-['Caladea',serif] leading-[normal] not-italic relative shrink-0 text-[64px] ${textColor} tracking-[0.64px]`}>Some Writings</p>
            </div>
          </div>
        </div>
        
        {/* Lightbulb Glow Animation CSS */}
        <style>{`
          @keyframes lightbulbGlow {
            0%, 100% {
              filter: drop-shadow(0 0 2px ${fillColor === 'white' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.3)'});
            }
            50% {
              filter: drop-shadow(0 0 8px ${fillColor === 'white' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.5)'}) 
                      drop-shadow(0 0 16px ${fillColor === 'white' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.3)'});
            }
          }
          
          .lightbulb-svg {
            animation: lightbulbGlow 2.5s ease-in-out infinite;
          }
        `}</style>
      </div>

      {/* Mobile Layout */}
      <ContactMobile />
    </>
  );
}
