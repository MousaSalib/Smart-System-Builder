import AccordionHeader from "../../shared/accordion/AccordionHeader";
import SensorIcon from "../../../assets/icons/sensor.svg";
import NextButton from "../../shared/accordion/NextButton";
import SensorCard from "../../childC/accordion/SensorCard";

interface SensorProps {
  isOpen: boolean;
  onToggle: () => void;
  onNext: () => void;
}
export default function Sensor({ isOpen, onToggle, onNext }: SensorProps) {
  return (
    <div
      className={`rounded-[10px] px-4 md:px-6 pt-[15px] transition-colors duration-300
        ${isOpen ? "pb-6 bg-bundle-bg" : "pb-0 bg-white"}`}
    >
      <AccordionHeader
        step={3}
        icon={SensorIcon}
        title="Choose your sensors"
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
        <SensorCard />
        <NextButton text={"Next: Choose your sensors"} onClick={onNext} />
      </div>
    </div>
  );
}
