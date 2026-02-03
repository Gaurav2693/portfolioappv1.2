import type { WorkMethod } from "@/app/App";

interface WorkMethodsSectionProps {
  selectedMethod: WorkMethod;
  onSelectMethod: (method: WorkMethod) => void;
}

export default function WorkMethodsSection({ selectedMethod, onSelectMethod }: WorkMethodsSectionProps) {
  const methods = [
    { id: "framing" as WorkMethod, label: "Framing Decisions" },
    { id: "constraints" as WorkMethod, label: "Designing under constraints" },
    { id: "prototyping" as WorkMethod, label: "Rapid Prototyping & Staging" },
    { id: "collaboration" as WorkMethod, label: "Collaboration & Handoff" },
  ];

  return (
    <div className="absolute top-[366px] left-[67px] right-[67px] bottom-[58px]">
      <h2 className="font-['Caladea',sans-serif] text-[64px] text-white tracking-[0.64px] leading-[1] mb-[40px]">
        How I work
      </h2>
      
      <p className="font-['Cambay',sans-serif] text-[16px] text-white tracking-[0.16px] leading-[0.81] mb-[55px] max-w-[244px]">
        I work on systems where decisions have downstream impact. Instead of removing friction everywhere, I design interfaces that guide attention, surface trade-offs, and protect users from costly errors.
      </p>

      {/* Method Cards Grid */}
      <div className="grid grid-cols-2 gap-[18px]">
        {methods.map((method) => {
          const isSelected = selectedMethod === method.id;
          return (
            <button
              key={method.id}
              onClick={() => onSelectMethod(method.id)}
              className={`
                rounded-[8px] h-[76px] flex items-center justify-center px-4
                transition-colors duration-200
                ${isSelected 
                  ? "bg-white text-[#1e1e1e]" 
                  : "bg-[#1e1e1e] text-white hover:bg-[#2a2a2a]"
                }
              `}
            >
              <span className="font-['Cambay',sans-serif] font-bold text-[16px] tracking-[0.16px] leading-[0.81] text-center">
                {method.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
