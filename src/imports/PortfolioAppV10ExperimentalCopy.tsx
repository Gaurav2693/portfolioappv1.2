import svgPaths from "./svg-hoeow9zycy";
import { imgVector } from "./svg-5ulei";

function Group() {
  return (
    <div className="absolute contents inset-[0_-0.01%_0_0]" data-name="Group">
      <div className="absolute inset-[0_-0.01%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.001px_0px] mask-size-[119.997px_159.993px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120.01 159.995">
          <path d={svgPaths.p24453280} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function AnimatedSvg() {
  return (
    <div className="h-[159.993px] overflow-clip relative shrink-0 w-full" data-name="AnimatedSVG">
      <ClipPathGroup />
    </div>
  );
}

function Home() {
  return (
    <div className="h-[159.993px] relative shrink-0 w-[119.997px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <AnimatedSvg />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[39.996px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Caladea:Regular',sans-serif] leading-[40px] left-[163.35px] not-italic text-[36px] text-black text-center top-[-1.33px]">Gaurav Mishra</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Cambay:Bold',sans-serif] leading-[28px] left-[163.41px] not-italic text-[18px] text-black text-center top-[0.34px] w-[316px] whitespace-pre-wrap">Product Designer focused on decision-driven and risk-sensitive systems</p>
    </div>
  );
}

function Home1() {
  return (
    <div className="h-[103.993px] relative shrink-0 w-[325.932px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.997px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[279.98px] items-center left-[23.99px] top-[131px] w-[325.932px]" data-name="Container">
      <Home />
      <Home1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[156.005px] left-[23.99px] top-[442.98px] w-[325.932px]" data-name="Paragraph">
      <p className="absolute font-['Cambay:Regular',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-black top-0 w-[318px] whitespace-pre-wrap">I design for systems where decisions carry weight and errors have consequences. My work focuses on making complex information clear, reducing decision friction, and building interfaces that help users act with confidence—not just speed.</p>
    </div>
  );
}

function Home2() {
  return (
    <div className="h-[35.997px] relative shrink-0 w-full" data-name="Home">
      <p className="absolute font-['Caladea:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-black top-[-0.34px]">How I work</p>
    </div>
  );
}

function Home3() {
  return (
    <div className="h-[130.004px] relative shrink-0 w-full" data-name="Home">
      <p className="absolute font-['Cambay:Regular',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-black top-0 w-[304px] whitespace-pre-wrap">I work on systems where decisions have downstream impact. Instead of removing friction everywhere, I design interfaces that guide attention, surface trade-offs, and protect users from costly errors.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[63.997px] left-0 rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[325.932px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Cambay:Bold',sans-serif] leading-[24px] left-[163.07px] not-italic text-[16px] text-black text-center top-[19.67px] tracking-[0.16px]">Framing Decisions</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-black h-[63.997px] left-0 rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[75.99px] w-[325.932px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Cambay:Bold',sans-serif] leading-[24px] left-[163.1px] not-italic text-[#e1e1e1] text-[16px] text-center top-[19.67px] tracking-[0.16px]">Designing under constraints</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[63.997px] left-0 rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[151.99px] w-[325.932px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Cambay:Bold',sans-serif] leading-[24px] left-[163.37px] not-italic text-[16px] text-black text-center top-[19.67px] tracking-[0.16px]">{`Rapid Prototyping & Staging`}</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white h-[63.997px] left-0 rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[227.98px] w-[325.932px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Cambay:Bold',sans-serif] leading-[24px] left-[163.31px] not-italic text-[16px] text-black text-center top-[19.67px] tracking-[0.16px]">{`Collaboration & Handoff`}</p>
    </div>
  );
}

function Home4() {
  return (
    <div className="h-[291.975px] relative shrink-0 w-full" data-name="Home">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.991px] h-[505.959px] items-start left-[23.99px] top-[663.64px] w-[325.932px]" data-name="Container">
      <Home2 />
      <Home3 />
      <Home4 />
    </div>
  );
}

function Home5() {
  return (
    <div className="h-[31.999px] relative shrink-0 w-full" data-name="Home">
      <p className="absolute font-['Caladea:Regular',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-black top-[-0.01px]">Designing under constraints</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[1.56%_17.02%]" data-name="Group">
      <div className="absolute inset-[86.33%_34.78%_1.56%_34.78%]" data-name="Vector">
        <div className="absolute inset-[-12.9%_-3.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.1031 16.7564">
            <path d={svgPaths.p2fbb7800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.65%_46.19%_30.97%_46.19%]" data-name="Vector">
        <div className="absolute inset-[-15.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8536 14.8538">
            <path d={svgPaths.p24ebd780} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[19.44%_30.16%_20.59%_30.16%]" data-name="Vector">
        <div className="absolute inset-[-2.61%_-2.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.9638 69.4008">
            <path d={svgPaths.p1755e580} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.56%_46.19%_88.06%_46.19%]" data-name="Vector">
        <div className="absolute inset-[-15.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8536 14.8537">
            <path d={svgPaths.p25c75600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.56%_17.02%_88.06%_75.37%]" data-name="Vector">
        <div className="absolute inset-[-15.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8536 14.8537">
            <path d={svgPaths.pc4ea300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[75.37%] right-[17.02%] top-[39.62%]" data-name="Vector">
        <div className="absolute inset-[-15.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8536 14.8538">
            <path d={svgPaths.p28896340} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[17.02%] right-[75.37%] top-[39.62%]" data-name="Vector">
        <div className="absolute inset-[-15.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8537 14.8538">
            <path d={svgPaths.p32cd6880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.56%_75.37%_88.06%_17.02%]" data-name="Vector">
        <div className="absolute inset-[-15.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8537 14.8537">
            <path d={svgPaths.p36fb5b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.75%_24.63%_93.25%_53.81%]" data-name="Vector">
        <div className="absolute inset-[-1.72px_-5.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.784 3.4372">
            <path d="M1.7186 1.7186H34.0654" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.75%_53.81%_93.25%_24.63%]" data-name="Vector">
        <div className="absolute inset-[-1.72px_-5.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7839 3.4372">
            <path d="M1.7186 1.7186H34.0653" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[7.08%_21.28%_60.38%_53.81%]" data-name="Vector">
        <div className="absolute inset-[-4.8%_-4.6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.8076 39.2283">
            <path d={svgPaths.p2dee5680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[7.08%_53.81%_60.38%_21.28%]" data-name="Vector">
        <div className="absolute inset-[-4.8%_-4.6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.8077 39.2283">
            <path d={svgPaths.p1711ff80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.35%] left-1/2 right-1/2 top-[19.43%]" data-name="Vector">
        <div className="absolute inset-[-3.98%_-1.72px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.4372 46.5726">
            <path d="M1.7186 44.854V1.7186" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4372" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[109.991px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group1 />
    </div>
  );
}

function AnimatedSvg1() {
  return (
    <div className="h-[109.991px] relative shrink-0 w-[149.997px]" data-name="AnimatedSVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Home6() {
  return (
    <div className="h-[141.979px] relative shrink-0 w-full" data-name="Home">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pt-[15.994px] relative size-full">
          <AnimatedSvg1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[52.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cambay:Regular',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-black top-0 w-[252px] whitespace-pre-wrap">I design with constraints in mind — technical, business, and operational.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[78.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cambay:Regular',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-black top-0 w-[269px] whitespace-pre-wrap">Rather than removing friction blindly, I decide where it protects users or the system.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[78.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cambay:Regular',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-black top-0 w-[272px] whitespace-pre-wrap">Every design choice involves a trade-off, and I aim to make those trade-offs intentional and visible.</p>
    </div>
  );
}

function Home7() {
  return (
    <div className="content-stretch flex flex-col gap-[15.994px] h-[239.994px] items-start relative shrink-0 w-full" data-name="Home">
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.991px] h-[511.262px] items-start left-[23.99px] pb-[0.663px] pt-[24.654px] px-[24.654px] rounded-[16px] top-[1201.6px] w-[325.932px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.663px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Home5 />
      <Home6 />
      <Home7 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[0.497px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="-translate-x-1/2 absolute bottom-1/2 left-[calc(50%-0.01px)] top-1/2 w-[1203.99px]" data-name="Vector">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1203.99 0.498609">
            <path d="M0 0.249305H1203.99" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.498609" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col h-px items-start left-[24px] top-[80px] w-[326px]" data-name="Header">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[0.497px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="-translate-x-1/2 absolute bottom-1/2 left-[calc(50%-0.01px)] top-1/2 w-[1203.99px]" data-name="Vector">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1203.99 0.498609">
            <path d="M0 0.249305H1203.99" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.498609" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute content-stretch flex flex-col h-px items-start left-[24px] top-[631px] w-[326px]" data-name="Header">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[0.497px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="-translate-x-1/2 absolute bottom-1/2 left-[calc(50%-0.01px)] top-1/2 w-[1203.99px]" data-name="Vector">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1203.99 0.498609">
            <path d="M0 0.249305H1203.99" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.498609" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="absolute content-stretch flex flex-col h-px items-start left-[24px] top-[80px] w-[326px]" data-name="Header">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[0.497px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="-translate-x-1/2 absolute bottom-1/2 left-[calc(50%-0.01px)] top-1/2 w-[1203.99px]" data-name="Vector">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1203.99 0.498609">
            <path d="M0 0.249305H1203.99" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.498609" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="absolute content-stretch flex flex-col h-px items-start left-[24px] top-[631px] w-[326px]" data-name="Header">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[26.39px] relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.3903 26.3903">
        <g id="Icon">
          <path d={svgPaths.p2982dea0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.74899" />
          <path d={svgPaths.p2779af00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.74899" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30.789px] items-start left-[29.55px] top-[2.35px] w-[26.39px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function MobileBottomNav1() {
  return (
    <div className="absolute h-[16.502px] left-[28.59px] top-[33.74px] w-[28.3px]" data-name="MobileBottomNav">
      <p className="absolute font-['Cambay:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] text-black top-[-0.33px]">Home</p>
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-black h-[2.994px] left-[22.74px] rounded-[22245500px] top-0 w-[39.996px]" data-name="Container" />;
}

function Link() {
  return (
    <div className="absolute h-[55.99px] left-[15.99px] top-[7.33px] w-[85.481px]" data-name="Link">
      <Container3 />
      <MobileBottomNav1 />
      <Container4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[23.991px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_33.33%_16.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99632 19.9926">
            <path d={svgPaths.p17a3ed80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.99926" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9919 15.9941">
            <path d={svgPaths.p1b840e00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.99926" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[23.991px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function MobileBottomNav2() {
  return (
    <div className="h-[16.502px] relative shrink-0 w-[26.363px]" data-name="MobileBottomNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Cambay:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(0,0,0,0.5)] top-[-0.33px]">Work</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[55.99px] items-center justify-center left-[101.48px] top-[7.33px] w-[85.481px]" data-name="Link">
      <Container5 />
      <MobileBottomNav2 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[23.991px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[51.73%_10.06%_10.06%_51.73%]" data-name="Vector">
        <div className="absolute inset-[-10.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1675 11.1675">
            <path d={svgPaths.p28437100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.99926" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[8.33%] right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9936 17.9936">
            <path d={svgPaths.p309a1480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.99926" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[9.58%_60.06%_60.06%_9.58%]" data-name="Vector">
        <div className="absolute inset-[-13.72%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.28258 9.28258">
            <path d={svgPaths.p1e9b5b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.99926" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_45.83%_45.83%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99779 5.99779">
            <path d={svgPaths.p24cdb00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.99926" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[23.991px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function MobileBottomNav3() {
  return (
    <div className="h-[16.502px] relative shrink-0 w-[35.686px]" data-name="MobileBottomNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Cambay:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(0,0,0,0.5)] top-[-0.33px]">Writing</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[55.99px] items-center justify-center left-[186.96px] top-[7.33px] w-[85.481px]" data-name="Link">
      <Container6 />
      <MobileBottomNav3 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[23.991px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9941 7.99705">
            <path d={svgPaths.peab7300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.99926" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99632 9.99632">
            <path d={svgPaths.p1c27d900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.99926" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[23.991px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function MobileBottomNav4() {
  return (
    <div className="h-[16.502px] relative shrink-0 w-[28.891px]" data-name="MobileBottomNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Cambay:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(0,0,0,0.5)] top-[-0.33px]">About</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[55.99px] items-center justify-center left-[272.44px] top-[7.33px] w-[85.481px]" data-name="Link">
      <Container7 />
      <MobileBottomNav4 />
    </div>
  );
}

function MobileBottomNav() {
  return (
    <div className="absolute bg-white border-black border-solid border-t-[0.663px] h-[71.994px] left-0 shadow-[0px_-4px_16px_0px_rgba(0,0,0,0.08)] top-[1791px] w-[373.914px]" data-name="MobileBottomNav">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9926 19.9926">
        <g clipPath="url(#clip0_11002_131)" id="Icon">
          <path d={svgPaths.p5294480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66605" />
          <path d={svgPaths.p33e76680} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66605" />
          <path d={svgPaths.p32ef1600} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66605" />
        </g>
        <defs>
          <clipPath id="clip0_11002_131">
            <rect fill="white" height="19.9926" width="19.9926" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[147.99px] pr-[0.01px] rounded-[22245500px] size-[31.999px] top-0" data-name="SlotClone">
      <Icon9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[31.999px] left-[122px] top-[32px] w-[179.985px]" data-name="Container">
      <SlotClone />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9926 19.9926">
        <g id="Icon">
          <path d={svgPaths.p21268e00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66605" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[317.98px] pr-[0.01px] rounded-[22245500px] size-[31.999px] top-[32px]" data-name="SlotClone">
      <Icon10 />
    </div>
  );
}

function Header4() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[24px] top-[21px] w-[71px]" data-name="Header">
      <p className="bg-clip-text font-['Coiny:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[0.32px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(74, 74, 74) 25%, rgb(0, 0, 0) 50%, rgb(74, 74, 74) 75%, rgb(0, 0, 0) 100%)", WebkitTextFillColor: "transparent" }}>
        Gd.
      </p>
    </div>
  );
}

export default function PortfolioAppV10ExperimentalCopy() {
  return (
    <div className="bg-white relative size-full" data-name="portfolio app v1.0 experimental (Copy)">
      <Container />
      <Paragraph1 />
      <Container1 />
      <Container2 />
      <Header />
      <Header1 />
      <Header2 />
      <Header3 />
      <MobileBottomNav />
      <Container8 />
      <SlotClone1 />
      <Header4 />
    </div>
  );
}