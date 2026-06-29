import { useState } from "react";
import Camera from "@/ui/accordion/accordionSections/1-Camera";
import Plan from "@/ui/accordion/accordionSections/2-Plan";
import Sensor from "@/ui/accordion/accordionSections/3-Sensor";
import Protection from "@/ui/accordion/accordionSections/4-Protection";
import Accessories from "@/ui/reviewPanel/reviewPanelSections/Accessories";
import PlanInitializer from "@/ui/reviewPanel/reviewPanelSections/PlanInitializer";
export default function Accordion() {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <>
      <Accessories />
      <PlanInitializer />
      <div className="flex flex-col rounded-[10px] gap-[15px] pt-[15px] px-[15px] pb-[15px]">
        <Camera
          isOpen={activeStep === 1}
          onToggle={() => setActiveStep(activeStep === 1 ? 0 : 1)}
          onNext={() => setActiveStep(2)}
        />
        <Plan
          isOpen={activeStep === 2}
          onToggle={() => setActiveStep(activeStep === 2 ? 0 : 2)}
          onNext={() => setActiveStep(3)}
        />
        <Sensor
          isOpen={activeStep === 3}
          onToggle={() => setActiveStep(activeStep === 3 ? 0 : 3)}
          onNext={() => setActiveStep(4)}
        />
        <Protection
          isOpen={activeStep === 4}
          onToggle={() => setActiveStep(activeStep === 4 ? 0 : 4)}
        />
      </div>
    </>
  );
}
