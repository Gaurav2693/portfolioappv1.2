import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "@/app/components/header";
import ProfileIllustration from "@/app/components/profile-illustration";
import FramingDecisionsIcon from "@/app/components/framing-decisions-icon";
import HoverText from "@/app/components/hover-text";
import GlitchText from "@/app/components/glitch-text";
import NavigationSidebar from "@/app/components/navigation-sidebar";
import MobileBottomNav from "@/app/components/mobile-bottom-nav";
import HomeMobile from "@/app/pages/home-mobile";
import { useTheme } from "@/app/context/theme-context";
import { useSound } from "@/app/context/sound-context";
import { ParallaxContainer, ParallaxLayer } from "@/app/components/parallax-container";
import svgPaths from "@/imports/svg-ajnkqmig7j";

export type WorkMethod = "framing" | "constraints" | "prototyping" | "collaboration";

interface MobileCardButtonProps {
  method: WorkMethod;
  label: string;
  isSelected: boolean;
  onSelect: (method: WorkMethod) => void;
}

function MobileCardButton({ method, label, isSelected, onSelect }: MobileCardButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const { theme } = useTheme();
  const { playClick } = useSound();

  const handleClick = () => {
    setIsPressed(true);
    playClick();
    onSelect(method);
    setTimeout(() => setIsPressed(false), 150);
  };

  const bgColor = theme === 'dark'
    ? (isSelected ? "bg-white" : "bg-[#1e1e1e]")
    : (isSelected ? "bg-black" : "bg-[#e1e1e1]");
  const textColor = theme === 'dark'
    ? (isSelected ? "text-[#1e1e1e]" : "text-white")
    : (isSelected ? "text-[#e1e1e1]" : "text-black");

  return (
    <motion.button
      onClick={handleClick}
      className={`w-full h-[64px] rounded-xl transition-all duration-200 ${bgColor} ${textColor} font-['Cambay',sans-serif] font-bold text-base tracking-[0.16px] shadow-lg active:shadow-sm`}
      whileTap={{ scale: 0.98 }}
      animate={{ scale: isPressed ? 0.95 : 1 }}
    >
      {label}
    </motion.button>
  );
}

interface CardButtonProps {
  method: WorkMethod;
  label: string;
  isSelected: boolean;
  onSelect: (method: WorkMethod) => void;
  position: { left: number; top: number };
  delay: number;
}

function CardButton({ method, label, isSelected, onSelect, position, delay }: CardButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const { theme } = useTheme();
  const { playClick } = useSound();

  const handleClick = () => {
    setIsClicking(true);
    playClick();
    onSelect(method);
    setTimeout(() => setIsClicking(false), 150);
  };

  const bgColor = theme === 'dark'
    ? (isSelected ? "bg-white" : isHovered ? "bg-white" : "bg-[#1e1e1e]")
    : (isSelected ? "bg-black" : isHovered ? "bg-black" : "bg-[#e1e1e1]");
  const textColor = theme === 'dark'
    ? (isSelected ? "text-[#1e1e1e]" : isHovered ? "text-[#1e1e1e]" : "text-white")
    : (isSelected ? "text-[#e1e1e1]" : isHovered ? "text-[#e1e1e1]" : "text-black");
  const scale = isClicking ? "scale-95" : "scale-100";
  const delayClass = `delay-${delay}`;

  return (
    <>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`absolute h-[76px] rounded-[8px] w-[202px] transition-all duration-200 ${bgColor} ${scale} animate-scaleIn ${delayClass}`}
        style={{ left: `${position.left}px`, top: `${position.top}px` }}
      />
      <div 
        className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] not-italic text-[16px] text-center tracking-[0.16px] w-[120px] pointer-events-none animate-fadeIn ${delayClass}`}
        style={{ 
          left: `${position.left + 101}px`, 
          top: `${position.top + 41}px` 
        }}
      >
        <p className={`leading-[81.3550033569336%] transition-colors duration-200 ${textColor}`}>
          {label}
        </p>
      </div>
    </>
  );
}

interface AnimatedSVGProps {
  selectedMethod: WorkMethod;
  isMobile?: boolean;
}

function AnimatedSVG({ selectedMethod, isMobile = false }: AnimatedSVGProps) {
  const [key, setKey] = useState(0);
  const { theme } = useTheme();
  const strokeColor = theme === 'dark' ? 'white' : 'black';

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [selectedMethod]);

  if (selectedMethod === "framing") {
    return <FramingDecisionsIcon key={key} />;
  }

  const containerClass = isMobile ? "w-[150px] h-[110px] mx-auto" : "absolute left-[944px] top-[370px] w-[231px] h-[165px]";

  return (
    <div key={key} className={containerClass}>
      {selectedMethod === "constraints" && (
        <svg className="block size-full animate-drawPath" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 59.5714 64">
          <g>
            <path d={svgPaths.p1aeba80} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p26cbc880} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3b102e00} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2fc27700} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p37da9a00} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p23c7b780} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3863b780} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2dd85200} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M33.1071 4.32143H51.9286" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M7.64286 4.32143H26.4643" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p354e700} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p32505d80} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M29.7857 37.5357V12.4367" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      )}
      {selectedMethod === "prototyping" && (
        <svg className="block size-full animate-drawPath" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 53 53">
          <g>
            <path d={svgPaths.p749e200} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p34507c00} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M35.6072 33.7857H52" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M35.6072 22.8572H52" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M35.6072 11.9285H52" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pe145180} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M33.7857 52V50.1058" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M22.8572 52V45.37" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M11.9285 52V39.0587" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p23016800} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p56f5180} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2a1b6d00} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p22736780} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p27e95540} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2b98c290} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      )}
      {selectedMethod === "collaboration" && (
        <svg className="block size-full animate-drawPath" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 54.0015 54.0042">
          <g>
            <path d={svgPaths.p1f518c80} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1622ce80} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3369d900} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2408aa40} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1f445a70} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1f108260} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p20135580} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1c475c00} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p240b80} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p31b61600} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p334ecbe0} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1634c680} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      )}
    </div>
  );
}

export default function Home() {
  const [selectedMethod, setSelectedMethod] = useState<WorkMethod>("constraints");
  const { theme } = useTheme();

  // Theme-aware colors
  const outerBg = theme === 'dark' ? 'bg-white' : 'bg-black';
  const cardBg = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const strokeColor = theme === 'dark' ? 'white' : 'black';
  const borderColor = theme === 'dark' ? 'border-white/10' : 'border-black/10';

  const methodContent = {
    constraints: [
      "I design with constraints in mind — technical, business, and operational.",
      "Rather than removing friction blindly, I decide where it protects users or the system.",
      "Every design choice involves a trade-off, and I aim to make those trade-offs intentional and visible."
    ],
    framing: [
      "I begin by identifying where users must make decisions and what's at stake if they get them wrong.",
      "Before designing, I clarify constraints, risks, and success metrics with product and engineering.",
      "This helps focus design effort on what actually matters."
    ],
    prototyping: [
      "I build quick prototypes to test assumptions and iterate rapidly.",
      "Staging environments allow me to validate designs with real data before production.",
      "This approach reduces risk and ensures designs work in practice, not just in theory."
    ],
    collaboration: [
      "I work closely with product managers, engineers, and leadership to align decisions and move forward confidently.",
      "I stay involved through implementation to ensure design intent carries through to production."
    ]
  };

  const methodTitles = {
    framing: "Framing Decisions",
    constraints: "Designing under constraints",
    prototyping: "Rapid Prototyping & Staging",
    collaboration: "Collaboration & Handoff"
  };

  return (
    <>
      {/* Mobile Layout - Pixel Perfect from Figma */}
      <HomeMobile />

      {/* Desktop Layout */}
      <div className={`hidden lg:flex ${outerBg} min-h-screen w-full items-start justify-center py-[74px] overflow-auto`}>
        <div className="relative w-[1315px] h-[893px]">
          {/* Main Black Card - NO ANIMATION */}
          <div className={`absolute ${cardBg} h-[893px] left-0 rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1315px]`} />
          
          {/* Navigation Sidebar - NO ANIMATION */}
          <NavigationSidebar />
          
          {/* Header - NO ANIMATION */}
          <Header />
          
          {/* Content - Can have animations */}
          <div className="animate-fadeIn">
            {/* PARALLAX DEMO - Introduction Section */}
            <ParallaxContainer className="absolute left-[69px] top-[186px] w-[658px] h-[294px]">
              {({ mouseX, mouseY }: any) => (
                <>
                  {/* Profile Illustration - Depth Layer 1 (background, moves more) */}
                  <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={1.5} className="absolute h-[250px] left-0 top-0 w-[179px] delay-400">
                    <ProfileIllustration />
                  </ParallaxLayer>
                  
                  {/* Name Text - Depth Layer 2 (foreground, moves less) */}
                  <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={0.5} className={`-translate-y-1/2 absolute flex flex-col font-['Caladea',serif] h-[100px] justify-center leading-[0] left-[225px] not-italic text-[64px] ${textColor} top-[40px] tracking-[0.64px] w-[433px] delay-500`}>
                    <p className="leading-[normal]"><HoverText><span className="interactive-text">Gaurav Mishra</span></HoverText></p>
                  </ParallaxLayer>
                  
                  {/* Subtitle - Depth Layer 3 (mid-ground) */}
                  <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={1} className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] font-bold justify-center leading-[0] left-[230px] not-italic text-[24px] ${textColor} top-[115px] tracking-[0.24px] w-[482px] delay-600`}>
                    <p className="leading-[1.2]">
                      <GlitchText>Product Designer focused on</GlitchText><br />
                      <GlitchText>decision-driven and risk-sensitive systems</GlitchText>
                    </p>
                  </ParallaxLayer>
                  
                  {/* Description - Depth Layer 4 (foreground) */}
                  <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={0.3} className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] justify-center leading-[0] left-[230px] not-italic text-[16px] ${textColor} top-[206px] tracking-[0.16px] w-[482px] delay-700`}>
                    <p className="leading-[1.3]">I design for systems where decisions carry weight and errors have consequences. My work focuses on making complex information clear, reducing decision friction, and building interfaces that help users act with confidence—not just speed</p>
                  </ParallaxLayer>
                </>
              )}
            </ParallaxContainer>
            
            <div className={`-translate-y-1/2 absolute flex flex-col font-['Caladea',serif] h-[206px] justify-center leading-[0] left-[944px] not-italic text-[48px] ${textColor} top-[246px] tracking-[0.48px] w-[272px] delay-700`}>
              <p className="leading-[92.81999969482422%]">
                <HoverText><span className="interactive-text">{methodTitles[selectedMethod]}</span></HoverText>
              </p>
            </div>
            
            <div className={`-translate-y-1/2 absolute flex flex-col font-['Caladea',serif] h-[100px] justify-center leading-[0] left-[82px] not-italic text-[64px] ${textColor} top-[555px] tracking-[0.64px] w-[331px] delay-1000`}>
              <p className="leading-[normal]"><HoverText><span className="interactive-text">How I work</span></HoverText></p>
            </div>
            
            <CardButton method="framing" label="Framing Decisions" isSelected={selectedMethod === "framing"} onSelect={setSelectedMethod} position={{ left: 405, top: 630 }} delay={1100} />
            <CardButton method="constraints" label="Designing under constraints" isSelected={selectedMethod === "constraints"} onSelect={setSelectedMethod} position={{ left: 625, top: 630 }} delay={1200} />
            <CardButton method="prototyping" label="Rapid Prototyping & Staging" isSelected={selectedMethod === "prototyping"} onSelect={setSelectedMethod} position={{ left: 405, top: 723 }} delay={1300} />
            <CardButton method="collaboration" label="Collaboration & Handoff" isSelected={selectedMethod === "collaboration"} onSelect={setSelectedMethod} position={{ left: 625, top: 723 }} delay={1400} />
            
            <div className={`-translate-y-1/2 absolute flex flex-col font-['Cambay',sans-serif] justify-center leading-[0] left-[85px] not-italic text-[16px] ${textColor} top-[714px] tracking-[0.16px] w-[244px] delay-1100`}>
              <p className="leading-[1.3]">I work on systems where decisions have downstream impact. Instead of removing friction everywhere, I design interfaces that guide attention, surface trade-offs, and protect users from costly errors</p>
            </div>
            
            <AnimatedSVG selectedMethod={selectedMethod} />

            <div className="absolute left-[944px] top-[564px] w-[262px]">
              <div className={`font-['Cambay',sans-serif] text-[16px] ${textColor} tracking-[0.16px] space-y-5 delay-900`}>
                {methodContent[selectedMethod].map((text, i) => (
                  <p key={i} className="leading-[1.5]">{text}</p>
                ))}
              </div>
            </div>
            
            <div className="absolute h-0 left-[56px] top-[488px] w-[801px] delay-900">
              <div className="absolute inset-[-0.5px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 801 0.5">
                  <line className="animate-drawLine" stroke={strokeColor} strokeWidth="0.5" x2="801" y1="0.25" y2="0.25" />
                </svg>
              </div>
            </div>
            
            <div className="absolute flex h-[649px] items-center justify-center left-[893px] top-[186px] w-0 delay-600">
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[649px]">
                  <div className="absolute inset-[-0.5px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 649 0.5">
                      <line className="animate-drawLine" stroke={strokeColor} strokeWidth="0.5" x2="649" y1="0.25" y2="0.25" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}