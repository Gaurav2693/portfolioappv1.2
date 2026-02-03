import { useTheme } from '@/app/context/theme-context';
import svgPaths from '@/imports/svg-x5hogl0f88';

/**
 * Framing Decisions Icon - Clipboard with checklist and pen
 * Shows a clipboard with checkmarks and a pen illustration
 */
export default function FramingDecisionsIcon() {
  const { theme } = useTheme();
  const fillColor = theme === 'dark' ? 'white' : 'black';

  return (
    <div className="absolute left-[944px] top-[370px] w-[162.31px] h-[165px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 162.31 165">
        <g>
          <path d={svgPaths.p35b7af00} fill={fillColor} />
          <path d={svgPaths.p653c900} fill={fillColor} />
          <path d={svgPaths.p304c2980} fill={fillColor} />
          <path d={svgPaths.p548ae80} fill={fillColor} />
          <path d={svgPaths.p2026c680} fill={fillColor} />
          <path d={svgPaths.p264c8400} fill={fillColor} />
          <path d={svgPaths.p19195a80} fill={fillColor} />
          <path d={svgPaths.p20288200} fill={fillColor} />
          <path d={svgPaths.pa99bb80} fill={fillColor} />
        </g>
      </svg>
    </div>
  );
}
