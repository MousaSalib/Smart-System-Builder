import AccordionHeader from "../../shared/accordion/AccordionHeader";
import planIcon from "../../../assets/icons/plan.svg";
import PlanCard from "../../childC/accordion/PlanCard";
import NextButton from "../../shared/accordion/NextButton";

interface PlanProps {
  isOpen: boolean;
  onToggle: () => void;
  onNext: () => void;
}
export default function Plan({ isOpen, onToggle, onNext }: PlanProps) {
  return (
    <div
      className={`rounded-[10px] px-4 md:px-6 pt-[15px] transition-colors duration-300
        ${isOpen ? "pb-6 bg-bundle-bg" : "pb-0 bg-white"}`}
    >
      <AccordionHeader
        step={2}
        icon={planIcon}
        title="Choose your plan"
        selectedCount={1}
        isOpen={isOpen}
        onToggle={onToggle}
      />

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          ease-in-out
          ${isOpen ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <PlanCard />
        <NextButton text={"Next: Choose your sensors"} onClick={onNext} />
      </div>
    </div>
  );
}
