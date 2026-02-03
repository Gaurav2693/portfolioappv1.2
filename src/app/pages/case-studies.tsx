import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Header from '@/app/components/header';
import NavigationSidebar from '@/app/components/navigation-sidebar';
import HoverText from '@/app/components/hover-text';
import GlitchText from '@/app/components/glitch-text';
import CaseStudiesMobile from '@/app/pages/case-studies-mobile';
import { useTheme } from '@/app/context/theme-context';
import { useSound } from '@/app/context/sound-context';
import svgPaths from "@/imports/svg-e8tfrdyvlf";

export default function CaseStudies() {
  const [hoveredArrow, setHoveredArrow] = useState<string | null>(null);
  const { theme } = useTheme();
  const { playClick } = useSound();
  
  // Theme-aware colors
  const outerBg = theme === 'dark' ? 'bg-white' : 'bg-black';
  const cardBg = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const fillColor = theme === 'dark' ? 'white' : 'black';
  const strokeColor = theme === 'dark' ? 'white' : 'black';
  const buttonBg = theme === 'dark' ? 'bg-[#1e1e1e]' : 'bg-[#e1e1e1]';
  const buttonHoverBg = theme === 'dark' ? 'bg-[#2a2a2a]' : 'bg-[#d1d1d1]';
  const liquidFillBg = theme === 'dark' ? 'bg-white' : 'bg-black';
  const liquidFillText = theme === 'dark' ? 'text-white' : 'text-black';
  const liquidFillHoverText = theme === 'dark' ? 'text-[#1e1e1e]' : 'text-[#e1e1e1]';
  const arrowIconColor = theme === 'dark' ? 'text-white' : 'text-black';
  const exploratoryCardBg = theme === 'dark' ? 'bg-[#2a2a2a]' : 'bg-[#d5d5d5]';
  const exploratoryCardHover = theme === 'dark' ? 'hover:bg-[#333333]' : 'hover:bg-[#c5c5c5]';
  const verticalLineBg = theme === 'dark' ? 'bg-white/30' : 'bg-black/30';
  
  return (
    <>
      {/* Mobile View */}
      <CaseStudiesMobile />
      
      {/* Desktop View */}
      <div className={`hidden lg:flex ${outerBg} min-h-screen w-full items-start justify-center py-[74px]`}>
        <div className="relative w-[1315px] h-[893px]">
          {/* Main Black Card - Fixed size like Home page, NO ANIMATION */}
          <div className={`absolute ${cardBg} h-[893px] left-0 rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1315px] overflow-hidden`} />
          
          {/* Navigation Sidebar - Inside black card, stays fixed */}
          <NavigationSidebar />
          
          {/* Header - stays fixed */}
          <Header />
          
          {/* Scrollable content area */}
          <div className="absolute left-0 top-[135px] w-[1315px] h-[758px] overflow-y-auto overflow-x-hidden scrollbar-premium">
            {/* Content wrapper - NO page transition animation */}
            <div className="relative min-h-[1610px]">
              {/* Price Quotation Engine Icon */}
              <div className="absolute h-[79px] left-[110px] top-[30px] w-[103px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 79">
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
              </div>
              
              {/* Price Quotation Engine Title */}
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Caladea',sans-serif] justify-center leading-[0] left-[250px] not-italic text-[48px] ${textColor} top-[60px] tracking-[0.48px] w-[636px]`}>
                <p className="leading-[81.3550033569336%]">
                  <HoverText><span className="interactive-text">Price Quotation Engine</span></HoverText>
                </p>
              </div>
              
              {/* Price Quotation Engine Subtitle */}
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[250px] not-italic text-[24px] ${textColor} top-[106px] tracking-[0.24px] w-[525px]`}>
                <p className="leading-[81.3550033569336%]">
                  <GlitchText>Decision-heavy pricing & approval system</GlitchText>
                </p>
              </div>
              
              {/* Price Quotation Engine - Buttons */}
              {/* Interactive Prototype Button with Liquid Fill */}
              <motion.a
                href="https://cpq-dashboard-v2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="absolute h-[54px] left-[931px] rounded-[8px] top-[28px] w-[220px] overflow-hidden group"
                onMouseEnter={() => setHoveredArrow("pqe-prototype")}
                onMouseLeave={() => setHoveredArrow(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-[#1e1e1e] group-hover:bg-[#2a2a2a] transition-colors" />
                <div className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                <div className="relative flex items-center justify-center h-full font-['Cambay',sans-serif] font-bold text-[16px] tracking-[0.16px]">
                  <span className="text-white group-hover:text-[#1e1e1e] transition-colors duration-300 delay-100">Interactive Prototype</span>
                </div>
              </motion.a>
              
              {/* Arrow Circle Button */}
              <motion.a
                href="https://cpq-dashboard-v2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="absolute h-[54px] w-[54px] left-[1167px] rounded-full top-[28px] bg-[#1e1e1e] hover:bg-[#2a2a2a] transition-colors flex items-center justify-center group"
                onMouseEnter={() => setHoveredArrow("pqe-open")}
                onMouseLeave={() => setHoveredArrow(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUpRight 
                  className={`w-6 h-6 ${arrowIconColor} transition-transform duration-300 ${
                    hoveredArrow === "pqe-open" ? "translate-x-1 -translate-y-1" : ""
                  }`} 
                />
              </motion.a>
              
              {/* Section Headers */}
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[110px] not-italic text-[24px] ${textColor} top-[190px] tracking-[0.24px] w-[89px]`}>
                <p className="leading-[81.3550033569336%]">About</p>
              </div>
              
              {/* Vertical line after About */}
              <div className="absolute h-[138px] left-[540px] top-[163px] w-[2px]">
                <div className={`absolute inset-0 ${verticalLineBg}`} />
              </div>
              
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[590px] not-italic text-[24px] ${textColor} top-[190px] tracking-[0.24px] w-[187px]`}>
                <p className="leading-[81.3550033569336%]">Focus Areas</p>
              </div>
              
              {/* Vertical line after Focus Areas */}
              <div className="absolute h-[138px] left-[939px] top-[163px] w-[2px]">
                <div className={`absolute inset-0 ${verticalLineBg}`} />
              </div>
              
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[989px] not-italic text-[24px] ${textColor} top-[190px] tracking-[0.24px] w-[185px]`}>
                <p className="leading-[81.3550033569336%]">Outcomes</p>
              </div>
              
              {/* Price Quotation Engine - About */}
              <div className={`absolute flex flex-col font-['Cambay',sans-serif] justify-start leading-[0] left-[110px] not-italic text-[16px] ${textColor} top-[225px] tracking-[0.16px] w-[440px]`}>
                <p className="leading-[1.3]">
                  I designed a Price Quotation Engine used to configure complex offers, pricing rules, and approval flows.<br />
                  The core challenge was reducing pricing errors while maintaining speed and flexibility for enterprise users.
                </p>
              </div>
              
              {/* Price Quotation Engine - Focus Areas */}
              <div className={`absolute flex flex-col font-['Cambay',sans-serif] justify-start leading-[0] left-[581px] not-italic text-[16px] ${textColor} top-[225px] tracking-[0.16px] w-[340px]`}>
                <ul className="list-disc space-y-1 ml-6">
                  <li className="leading-[1.3]">Decision density & pricing logic</li>
                  <li className="leading-[1.3]">Risk mitigation & guardrails</li>
                  <li className="leading-[1.3]">Performance under operational constraints</li>
                </ul>
              </div>
              
              {/* Price Quotation Engine - Outcomes */}
              <div className={`absolute flex flex-col font-['Cambay',sans-serif] justify-start leading-[0] left-[989px] not-italic text-[16px] ${textColor} top-[225px] tracking-[0.16px] w-[277px]`}>
                <ul className="list-disc space-y-1 ml-6">
                  <li className="leading-[1.3]">Pricing errors reduced by ~65%</li>
                  <li className="leading-[1.3]">Quote completion time improved by ~30%</li>
                </ul>
              </div>
              
              {/* Horizontal Line 1 */}
              <div className="absolute h-0 left-[100px] top-[350px] w-[1115px]">
                <div className="absolute inset-[-0.5px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1115 0.5">
                    <line stroke={strokeColor} strokeWidth="0.5" x2="1115" y1="0.25" y2="0.25" />
                  </svg>
                </div>
              </div>
              
              {/* Exiro AI Icon */}
              <div className="absolute h-[88px] left-[110px] top-[388px] w-[87px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87 88">
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
              </div>
              
              {/* Exiro AI Title */}
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Caladea',sans-serif] h-[73px] justify-center leading-[0] left-[250px] not-italic text-[48px] ${textColor} top-[414.5px] tracking-[0.48px] w-[491px]`}>
                <p className="leading-[92.81999969482422%]"><HoverText><span className="interactive-text">Exiro AI</span></HoverText></p>
              </div>
              
              {/* Exiro AI Subtitle */}
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[250px] not-italic text-[24px] ${textColor} top-[467px] tracking-[0.24px] w-[491px]`}>
                <p className="leading-[81.3550033569336%]">
                  <GlitchText>Human-in-the-loop AI automation platform</GlitchText>
                </p>
              </div>
              
              {/* Exiro AI - Buttons */}
              {/* Live Site Button with Liquid Fill */}
              <motion.a
                href="https://exiro.ai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="absolute h-[54px] left-[931px] rounded-[8px] top-[413px] w-[220px] overflow-hidden group"
                onMouseEnter={() => setHoveredArrow("exiro-live")}
                onMouseLeave={() => setHoveredArrow(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-[#1e1e1e] group-hover:bg-[#2a2a2a] transition-colors" />
                <div className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                <div className="relative flex items-center justify-center h-full font-['Cambay',sans-serif] font-bold text-[16px] tracking-[0.16px]">
                  <span className="text-white group-hover:text-[#1e1e1e] transition-colors duration-300 delay-100">Live Site</span>
                </div>
              </motion.a>
              
              {/* Arrow Circle Button */}
              <motion.a
                href="https://exiro.ai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="absolute h-[54px] w-[54px] left-[1167px] rounded-full top-[413px] bg-[#1e1e1e] hover:bg-[#2a2a2a] transition-colors flex items-center justify-center group"
                onMouseEnter={() => setHoveredArrow("exiro-open")}
                onMouseLeave={() => setHoveredArrow(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUpRight 
                  className={`w-6 h-6 ${arrowIconColor} transition-transform duration-300 ${
                    hoveredArrow === "exiro-open" ? "translate-x-1 -translate-y-1" : ""
                  }`} 
                />
              </motion.a>
              
              {/* Exiro AI Section Headers */}
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[110px] not-italic text-[24px] ${textColor} top-[551px] tracking-[0.24px] w-[89px]`}>
                <p className="leading-[81.3550033569336%]">About</p>
              </div>
              
              {/* Vertical line after About */}
              <div className="absolute h-[138px] left-[540px] top-[524px] w-[2px]">
                <div className={`absolute inset-0 ${verticalLineBg}`} />
              </div>
              
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[590px] not-italic text-[24px] ${textColor} top-[551px] tracking-[0.24px] w-[187px]`}>
                <p className="leading-[81.3550033569336%]">Focus Areas</p>
              </div>
              
              {/* Vertical line after Focus Areas */}
              <div className="absolute h-[138px] left-[939px] top-[524px] w-[2px]">
                <div className={`absolute inset-0 ${verticalLineBg}`} />
              </div>
              
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[989px] not-italic text-[24px] ${textColor} top-[551px] tracking-[0.24px] w-[185px]`}>
                <p className="leading-[81.3550033569336%]">Outcomes</p>
              </div>
              
              {/* Exiro AI - About */}
              <div className={`absolute flex flex-col font-['Cambay',sans-serif] justify-start leading-[0] left-[110px] not-italic text-[16px] ${textColor} top-[586px] tracking-[0.16px] w-[397px]`}>
                <p className="leading-[1.3]">
                  Exiro AI is an automation system where AI assists operational decisions while humans retain control.<br />
                  My work focused on making AI behavior transparent, predictable, and safe to act upon.
                </p>
              </div>
              
              {/* Exiro AI - Focus Areas */}
              <div className={`absolute flex flex-col font-['Cambay',sans-serif] justify-start leading-[0] left-[581px] not-italic text-[16px] ${textColor} top-[586px] tracking-[0.16px] w-[340px]`}>
                <ul className="list-disc space-y-1 ml-6">
                  <li className="leading-[1.3]">Trust & explainability in AI workflows</li>
                  <li className="leading-[1.3]">Failure handling & fallback states</li>
                  <li className="leading-[1.3]">Reducing cognitive load during automation</li>
                </ul>
              </div>
              
              {/* Exiro AI - Outcomes */}
              <div className={`absolute flex flex-col font-['Cambay',sans-serif] justify-start leading-[0] left-[989px] not-italic text-[16px] ${textColor} top-[586px] tracking-[0.16px] w-[277px]`}>
                <ul className="list-disc space-y-1 ml-6">
                  <li className="leading-[1.3]">Operator intervention confidence increased by ~40%</li>
                  <li className="leading-[1.3]">Manual handling time reduced by ~35%</li>
                </ul>
              </div>
              
              {/* Horizontal Line 2 */}
              <div className="absolute h-0 left-[100px] top-[731px] w-[1115px]">
                <div className="absolute inset-[-0.5px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1115 0.5">
                    <line stroke={strokeColor} strokeWidth="0.5" x2="1115" y1="0.25" y2="0.25" />
                  </svg>
                </div>
              </div>
              
              {/* PlotSync Icon - Complex SVG with multiple path elements */}
              <div className="absolute h-[57px] left-[110px] top-[769px] w-[78px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.1066 53.8212">
                  <g>
                    <g>
                      <path d={svgPaths.p289d1170} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p3dfeb100} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                    <path d={svgPaths.p1ce7a480} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.pdf2f0c0} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p13121a00} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <g>
                      <path d={svgPaths.p4e31640} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p20fbc40} stroke={strokeColor} strokeDasharray="35.01 50.38 0.85 35.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p1ab17500} stroke={strokeColor} strokeDasharray="50.38 0.85 35.01 50.38 0.85 35.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p3b42a700} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                    <g>
                      <path d={svgPaths.p29592780} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p3b8bd980} stroke={strokeColor} strokeDasharray="39.65 57.06 0.97 39.65" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p3fecba00} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                    <path d={svgPaths.p212f5300} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
              
              {/* PlotSync Title */}
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Caladea',sans-serif] h-[73px] justify-center leading-[0] left-[250px] not-italic text-[48px] ${textColor} top-[802.5px] tracking-[0.48px] w-[491px]`}>
                <p className="leading-[92.81999969482422%]"><HoverText><span className="interactive-text">PlotSync</span></HoverText></p>
              </div>
              
              {/* PlotSync Subtitle */}
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[250px] not-italic text-[24px] ${textColor} top-[857px] tracking-[0.24px] w-[689px]`}>
                <p className="leading-[81.3550033569336%]">
                  <GlitchText>Decision support Platform for real estate sales</GlitchText>
                </p>
              </div>
              
              {/* PlotSync - Buttons */}
              {/* Interactive Prototype Button with Liquid Fill */}
              <motion.a
                onClick={playClick}
                className="absolute h-[54px] left-[931px] rounded-[8px] top-[767px] w-[220px] overflow-hidden group"
                onMouseEnter={() => setHoveredArrow("plot-prototype")}
                onMouseLeave={() => setHoveredArrow(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-[#1e1e1e] group-hover:bg-[#2a2a2a] transition-colors" />
                <div className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                <div className="relative flex items-center justify-center h-full font-['Cambay',sans-serif] font-bold text-[16px] tracking-[0.16px]">
                  <span className="text-white group-hover:text-[#1e1e1e] transition-colors duration-300 delay-100">Interactive Prototype</span>
                </div>
              </motion.a>
              
              {/* Arrow Circle Button */}
              <motion.a
                onClick={playClick}
                className="absolute h-[54px] w-[54px] left-[1167px] rounded-full top-[767px] bg-[#1e1e1e] hover:bg-[#2a2a2a] transition-colors flex items-center justify-center group"
                onMouseEnter={() => setHoveredArrow("plot-open")}
                onMouseLeave={() => setHoveredArrow(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUpRight 
                  className={`w-6 h-6 ${arrowIconColor} transition-transform duration-300 ${
                    hoveredArrow === "plot-open" ? "translate-x-1 -translate-y-1" : ""
                  }`} 
                />
              </motion.a>
              
              {/* PlotSync Section Headers */}
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[110px] not-italic text-[24px] ${textColor} top-[941px] tracking-[0.24px] w-[89px]`}>
                <p className="leading-[81.3550033569336%]">About</p>
              </div>
              
              {/* Vertical line after About */}
              <div className="absolute h-[138px] left-[540px] top-[914px] w-[2px]">
                <div className={`absolute inset-0 ${verticalLineBg}`} />
              </div>
              
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[590px] not-italic text-[24px] ${textColor} top-[941px] tracking-[0.24px] w-[187px]`}>
                <p className="leading-[81.3550033569336%]">Focus Areas</p>
              </div>
              
              {/* Vertical line after Focus Areas */}
              <div className="absolute h-[138px] left-[939px] top-[914px] w-[2px]">
                <div className={`absolute inset-0 ${verticalLineBg}`} />
              </div>
              
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[989px] not-italic text-[24px] ${textColor} top-[941px] tracking-[0.24px] w-[185px]`}>
                <p className="leading-[81.3550033569336%]">Outcomes</p>
              </div>
              
              {/* PlotSync - About */}
              <div className={`absolute flex flex-col font-['Cambay',sans-serif] justify-start leading-[0] left-[110px] not-italic text-[16px] ${textColor} top-[976px] tracking-[0.16px] w-[386px]`}>
                <p className="leading-[1.3]">
                  A platform to help users evaluate, verify, and compare land parcels across multiple parameters such as location, ownership, zoning, and feasibility.
                </p>
              </div>
              
              {/* PlotSync - Focus Areas */}
              <div className={`absolute flex flex-col font-['Cambay',sans-serif] justify-start leading-[0] left-[581px] not-italic text-[16px] ${textColor} top-[976px] tracking-[0.16px] w-[340px]`}>
                <ul className="list-disc space-y-1 ml-6">
                  <li className="leading-[1.3]">Spatial decision-making & comparison</li>
                  <li className="leading-[1.3]">Trust, verification, and data clarity</li>
                  <li className="leading-[1.3]">Multi-criteria evaluation under uncertainty</li>
                </ul>
              </div>
              
              {/* PlotSync - Outcomes */}
              <div className={`absolute flex flex-col font-['Cambay',sans-serif] justify-start leading-[0] left-[989px] not-italic text-[16px] ${textColor} top-[976px] tracking-[0.16px] w-[277px]`}>
                <ul className="list-disc space-y-1 ml-6">
                  <li className="leading-[1.3]">Decision time reduced by ~45% through structured comparison</li>
                  <li className="leading-[1.3]">Fewer abandoned evaluations due to clearer information hierarchy</li>
                </ul>
              </div>
              
              {/* Horizontal Line 3 */}
              <div className="absolute h-0 left-[100px] top-[1120px] w-[1115px]">
                <div className="absolute inset-[-0.5px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1115 0.5">
                    <line stroke={strokeColor} strokeWidth="0.5" x2="1115" y1="0.25" y2="0.25" />
                  </svg>
                </div>
              </div>
              
              {/* Exploratory Studies Section */}
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Caladea',sans-serif] h-[73px] justify-center leading-[0] left-[110px] not-italic text-[48px] ${textColor} top-[1171.5px] tracking-[0.48px] w-[491px]`}>
                <p className="leading-[92.81999969482422%]">Exploratory studies</p>
              </div>
              
              <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[110px] not-italic text-[16px] ${textColor} top-[1250px] tracking-[0.16px] w-[825px]`}>
                <p className="leading-[1.3]">
                  Explorations are used to test ideas, interaction patterns, and system behaviors before applying them to larger product work.
                </p>
              </div>
              
              {/* Exploratory Study Cards */}
              {/* Ayuryuj Card */}
              <div 
                onClick={playClick}
                className={`absolute ${exploratoryCardBg} h-[230px] left-[100px] rounded-[12px] top-[1312px] w-[257px] transition-colors ${exploratoryCardHover} group cursor-pointer p-[20px] flex flex-col`}
                onMouseEnter={() => setHoveredArrow("ayuryuj")}
                onMouseLeave={() => setHoveredArrow(null)}
              >
                <div className="flex items-start justify-between mb-[16px]">
                  <h3 className={`font-['Cambay',sans-serif] font-bold text-[18px] ${textColor} leading-[1.3] pr-[8px]`}>
                    Ayuryuj
                  </h3>
                  <ArrowUpRight 
                    className={`w-5 h-5 ${textColor} flex-shrink-0 transition-transform duration-300 ${
                      hoveredArrow === "ayuryuj" ? "translate-x-1 -translate-y-1" : ""
                    }`} 
                  />
                </div>
                <p className={`font-['Cambay',sans-serif] text-[12px] ${textColor} opacity-80 leading-[1.6] overflow-hidden`}>
                  Ayuryuj explores how trust, security, and commerce intersect in traditional wellness products.
                  <br/><br/>
                  It focused on helping users understand ingredients, sourcing, and certifications before purchase—without overwhelming them with technical details.
                </p>
              </div>
              
              {/* Stillroom Card */}
              <div 
                onClick={playClick}
                className={`absolute ${exploratoryCardBg} h-[230px] left-[382px] rounded-[12px] top-[1312px] w-[257px] transition-colors ${exploratoryCardHover} group cursor-pointer p-[20px] flex flex-col`}
                onMouseEnter={() => setHoveredArrow("stillroom")}
                onMouseLeave={() => setHoveredArrow(null)}
              >
                <div className="flex items-start justify-between mb-[16px]">
                  <h3 className={`font-['Cambay',sans-serif] font-bold text-[18px] ${textColor} leading-[1.3] pr-[8px]`}>
                    Stillroom
                  </h3>
                  <ArrowUpRight 
                    className={`w-5 h-5 ${textColor} flex-shrink-0 transition-transform duration-300 ${
                      hoveredArrow === "stillroom" ? "translate-x-1 -translate-y-1" : ""
                    }`} 
                  />
                </div>
                <p className={`font-['Cambay',sans-serif] text-[12px] ${textColor} opacity-80 leading-[1.6] overflow-hidden`}>
                  Stillroom began as an exploration into how interfaces can support deep thinking without forcing users to break flow.
                  <br/><br/>
                  The work focused on layout, pacing, and information hierarchy rather than features.
                </p>
              </div>
              
              {/* Rive Projects Card */}
              <div 
                onClick={playClick}
                className={`absolute ${exploratoryCardBg} h-[230px] left-[664px] rounded-[12px] top-[1312px] w-[257px] transition-colors ${exploratoryCardHover} group cursor-pointer p-[20px] flex flex-col`}
                onMouseEnter={() => setHoveredArrow("rive")}
                onMouseLeave={() => setHoveredArrow(null)}
              >
                <div className="flex items-start justify-between mb-[16px]">
                  <h3 className={`font-['Cambay',sans-serif] font-bold text-[18px] ${textColor} leading-[1.3] pr-[8px]`}>
                    Rive Projects
                  </h3>
                  <ArrowUpRight 
                    className={`w-5 h-5 ${textColor} flex-shrink-0 transition-transform duration-300 ${
                      hoveredArrow === "rive" ? "translate-x-1 -translate-y-1" : ""
                    }`} 
                  />
                </div>
                <p className={`font-['Cambay',sans-serif] text-[12px] ${textColor} opacity-80 leading-[1.6] overflow-hidden`}>
                  A series of interaction experiments using Rive to explore how motion can communicate system state, orientation, and feedback—without visual noise.
                  <br/><br/>
                  The goal was to use animation as information, not decoration.
                </p>
              </div>
              
              {/* Rapid Staging Card */}
              <div 
                onClick={playClick}
                className={`absolute ${exploratoryCardBg} h-[230px] left-[946px] rounded-[12px] top-[1312px] w-[257px] transition-colors ${exploratoryCardHover} group cursor-pointer p-[20px] flex flex-col`}
                onMouseEnter={() => setHoveredArrow("rapid")}
                onMouseLeave={() => setHoveredArrow(null)}
              >
                <div className="flex items-start justify-between mb-[16px]">
                  <h3 className={`font-['Cambay',sans-serif] font-bold text-[18px] ${textColor} leading-[1.3] pr-[8px]`}>
                    Rapid Staging
                  </h3>
                  <ArrowUpRight 
                    className={`w-5 h-5 ${textColor} flex-shrink-0 transition-transform duration-300 ${
                      hoveredArrow === "rapid" ? "translate-x-1 -translate-y-1" : ""
                    }`} 
                  />
                </div>
                <p className={`font-['Cambay',sans-serif] text-[12px] ${textColor} opacity-80 leading-[1.6] overflow-hidden`}>
                  Explorations focused on staging product ideas using lightweight builds and prototypes to understand edge cases early.
                  <br/><br/>
                  This work informed how I approach validation and testing—how to know if a design will work before committing to larger projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}