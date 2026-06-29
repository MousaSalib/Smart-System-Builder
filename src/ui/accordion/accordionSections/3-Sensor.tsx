import { useInitializeRequiredProducts } from "@/hooks/useInitializeRequiredProducts";
import { useProductsByCategory } from "@/hooks/useProductsByCategory";
import { useSelectedCount } from "@/hooks/useSelectedCount";
import AccordionHeader from "@/ui/shared/accordion/AccordionHeader";
import sensorIcon from "@/assets/icons/sensor.svg";
import ProductCardBase from "@/ui/shared/accordion/ProductCardBase";
import NextButton from "@/ui/shared/accordion/NextButton";

interface SensorProps {
  isOpen: boolean;
  onToggle: () => void;
  onNext: () => void;
}

export default function Sensor({ isOpen, onToggle, onNext }: SensorProps) {
  const sensorProducts = useProductsByCategory("SENSORS");

  const selectedCount = useSelectedCount("SENSORS");
  useInitializeRequiredProducts(sensorProducts);

  return (
    <div
      className={`
        rounded-[10px]
        px-4
        md:px-6
        pt-[15px]
        transition-colors
        duration-300
        ${isOpen ? "pb-6 bg-bundle-bg" : "pb-0 bg-white"}
      `}
    >
      <AccordionHeader
        step={3}
        icon={sensorIcon}
        title="Choose your sensors"
        selectedCount={selectedCount}
        isOpen={isOpen}
        onToggle={onToggle}
      />

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          ease-in-out
          ${isOpen ? "max-h-[3000px] opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-5
            gap-[15px]
            items-start
          "
        >
          {sensorProducts.map((product) => (
            <ProductCardBase
              key={product.id}
              product={product}
              disableDecrease={product.required}
              disableIncrease={product.required}
            />
          ))}
        </div>

        <NextButton text="Next: Choose your accessories" onClick={onNext} />
      </div>
    </div>
  );
}
