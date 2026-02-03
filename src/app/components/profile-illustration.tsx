import svgPaths from "@/imports/svg-g1u9vyb7vl";
import { useTheme } from "@/app/context/theme-context";
import AnimatedSVG from "@/app/components/animated-svg";

export default function ProfileIllustration() {
  const { theme } = useTheme();
  const fillColor = theme === 'dark' ? 'white' : 'black';
  
  return (
    <AnimatedSVG 
      className="block size-full" 
      viewBox="0 0 179 250"
      enableStrokeAnimation={true}
      strokeDuration={700}
      fillDelay={120}
    >
      <g clipPath="url(#clip0_profile)">
        <path d={svgPaths.p28aeb680} fill={fillColor} />
      </g>
      <defs>
        <clipPath id="clip0_profile">
          <rect fill={fillColor} height="250" width="179" />
        </clipPath>
      </defs>
    </AnimatedSVG>
  );
}
