import Header from "@/app/components/header";
import NavigationSidebar from "@/app/components/navigation-sidebar";
import GlitchText from "@/app/components/glitch-text";
import EvidenceMetricsMobile from "@/app/pages/evidence-metrics-mobile";
import { useTheme } from "@/app/context/theme-context";

export default function EvidenceMetrics() {
  const { theme } = useTheme();
  
  // Theme-aware colors
  const outerBg = theme === 'dark' ? 'bg-white' : 'bg-black';
  const cardBg = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  
  return (
    <>
      {/* Mobile View */}
      <EvidenceMetricsMobile />
      
      {/* Desktop View */}
      <div className={`hidden lg:flex ${outerBg} min-h-screen w-full items-start justify-center py-[74px] overflow-auto`}>
        <div className="relative w-[1315px] h-[893px]">
          {/* Main Card - Fixed dimensions like other pages */}
          <div className={`absolute ${cardBg} h-[893px] left-0 rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1315px]`} />
          
          {/* Navigation Sidebar */}
          <NavigationSidebar />
          
          {/* Header */}
          <Header />
          
          {/* Content wrapper - NO page transition animation */}
          <div>
            {/* Page Title */}
            <div className={`absolute font-['Caladea',serif] font-bold left-[110px] text-[40px] ${textColor} top-[180px] tracking-[0.4px]`}>
              <h1>
                <GlitchText>Evidence & Metrics</GlitchText>
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className={`absolute flex flex-col font-['Cambay',sans-serif] justify-start leading-[0] left-[110px] not-italic text-[20px] ${textColor} top-[240px] tracking-[0.2px] w-[1095px]`}>
              <p className="leading-[1.4] opacity-80">
                Quantifying design impact through behavioral data, business metrics, and user research.
              </p>
            </div>
            
            {/* Content Section */}
            <div className={`absolute flex flex-col font-['Cambay',sans-serif] justify-start left-[110px] text-[16px] ${textColor} top-[340px] tracking-[0.16px] w-[1095px] animate-fadeInUp delay-500`}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-bold text-[24px] mb-4">Measuring Design Decisions</h2>
                  <p className="leading-[1.6] opacity-90">
                    Every design choice creates measurable change. This section tracks how interface decisions translate into user behavior, 
                    business outcomes, and operational efficiency.
                  </p>
                </div>
                
                <div>
                  <h2 className="font-bold text-[24px] mb-4">Key Focus Areas</h2>
                  <ul className="list-disc ml-6 space-y-2 leading-[1.6] opacity-90">
                    <li>Conversion rates and funnel optimization</li>
                    <li>Task completion time and error reduction</li>
                    <li>User satisfaction and engagement metrics</li>
                    <li>Revenue impact and cost savings</li>
                    <li>A/B test results and iterative improvements</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="font-bold text-[24px] mb-4">Coming Soon</h2>
                  <p className="leading-[1.6] opacity-90">
                    Detailed case study metrics, research findings, and longitudinal impact data will be added here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}