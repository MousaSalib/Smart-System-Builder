import upIcon from "../../../assets/icons/arrow-up.svg";
import downIcon from "../../../assets/icons/arrow-down.svg";

interface AccordionHeaderProps {
  step: number;
  icon: string;
  title: string;
  selectedCount: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionHeader({
  step,
  icon,
  title,
  selectedCount,
  isOpen,
  onToggle,
}: AccordionHeaderProps) {
  return (
    <div className="flex flex-col">
      <span
        className="
          text-[12px]
          font-normal
          uppercase
          tracking-[1.6px]
          text-[#484848]
          leading-none
          mb-[5px]
        "
      >
        Step {step} of 4
      </span>
      <div className="h-px bg-[#484848] -mx-4 md:-mx-6" />
      <div className="pt-[25px] lg:pt-[20px] flex items-center justify-between">
        <div className="flex items-center gap-[2px] lg:gap-[1px]">
          <img
            src={icon}
            alt=""
            className={`w-[26px] h-[26px] lg:w-[30px] lg:h-[30px]
             ${isOpen ? "" : "opacity-50"}
    `}
          />

          <h1
            className={`font-semibold text-[22px] lg:text-[28px] leading-none tracking-[0px]
            ${isOpen ? "text-[#1F1F1F]" : "text-[#5E5E5E]"}
            `}
          >
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-[2px] text-[#4E2FD2]">
          {isOpen && (
            <span className="text-[14px] leading-[16px] font-medium text-[#4E2FD2]">
              {selectedCount} selected
            </span>
          )}

          <button onClick={onToggle} className="cursor-pointer">
            <img
              src={isOpen ? upIcon : downIcon}
              alt=""
              className="w-[12px] h-[12px]"
            />
          </button>
        </div>
      </div>
      {!isOpen && (
        <div className="h-px bg-[#484848] -mx-4 md:-mx-6 mt-[20px]" />
      )}
    </div>
  );
}
