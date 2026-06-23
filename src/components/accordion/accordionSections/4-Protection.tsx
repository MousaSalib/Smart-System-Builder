import AccordionHeader from "../../shared/AccordionHeader";
import ProtectionIcon from "../../../assets/icons/protection.svg";
import ProtectionCard from "../../childC/ProtectionCard";

interface ProtectionProps {
  isOpen: boolean;
  onToggle: () => void;
}
export default function Protection({ isOpen, onToggle }: ProtectionProps) {
  return (
    <div
      className={`rounded-[10px] px-4 md:px-6 pt-[15px] transition-colors duration-300
        ${isOpen ? "pb-6 bg-bundle-bg" : "pb-0 bg-white"}`}
    >
      <AccordionHeader
        step={4}
        icon={ProtectionIcon}
        title="Add extra protection"
        selectedCount={3}
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
        <ProtectionCard />
      </div>
    </div>
  );
}
