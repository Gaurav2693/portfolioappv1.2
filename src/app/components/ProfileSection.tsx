import svgPaths from "@/imports/svg-g1u9vyb7vl";

function ProfileIllustration() {
  return (
    <div className="w-[179px] h-[250px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179 250">
        <g clipPath="url(#clip0_profile)">
          <path d={svgPaths.p28aeb680} fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_profile">
            <rect fill="white" height="250" width="179" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function ProfileSection() {
  return (
    <div className="px-[67px] py-[64px]">
      <div className="flex items-start gap-[46px] mb-[35px]">
        <ProfileIllustration />
        
        <div className="flex-1">
          <h2 className="font-['Caladea',sans-serif] text-[64px] text-white tracking-[0.64px] leading-[1] mb-[20px]">
            Gaurav Mishra
          </h2>
          <p className="font-['Cambay',sans-serif] font-bold text-[24px] text-white tracking-[0.24px] leading-[0.81]">
            Product Designer focused on<br />
            decision-driven and risk-sensitive systems
          </p>
        </div>
      </div>
      
      <div className="border-t border-white/50 pt-[35px]">
        <p className="font-['Cambay',sans-serif] text-[16px] text-white tracking-[0.16px] leading-[0.81]">
          I design complex systems where mistakes are costly and clarity matters. My work focuses on reducing decision friction, making trade-offs explicit, and helping users act with confidence—not just speed.
        </p>
      </div>
    </div>
  );
}
