import { useProductsByCategory } from "@/hooks/useProductsByCategory";
import { useSelectedCount } from "@/hooks/useSelectedCount";
import AccordionHeader from "@/ui/shared/accordion/AccordionHeader";
import cameraIcon from "@/assets/icons/camera.svg";
import ProductCardBase from "@/ui/shared/accordion/ProductCardBase";
import NextButton from "@/ui/shared/accordion/NextButton";

interface CameraProps {
  isOpen: boolean;
  onToggle: () => void;
  onNext: () => void;
}

export default function Camera({ isOpen, onToggle, onNext }: CameraProps) {
  const cameraProducts = useProductsByCategory("CAMERAS");
  const selectedCount = useSelectedCount("CAMERAS");

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
        step={1}
        icon={cameraIcon}
        title="Choose your cameras"
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
          {cameraProducts.map((product) => (
            <ProductCardBase
              key={product.id}
              product={product}
              disableDecrease={false}
            />
          ))}
        </div>

        <NextButton text="Next: Choose your plan" onClick={onNext} />
      </div>
    </div>
  );
}
