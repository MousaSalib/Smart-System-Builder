import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccordionHeader from "../../shared/accordion/AccordionHeader";
import SensorIcon from "../../../assets/icons/sensor.svg";
import NextButton from "../../shared/accordion/NextButton";
import ProductCardBase from "../../shared/accordion/ProductCardBase";
import { products } from "../../../data/products";
import { selectSelectedCountByCategory } from "../../../features/selectors";
import { updateQuantity } from "../../../features/bundleSlice";

interface SensorProps {
  isOpen: boolean;
  onToggle: () => void;
  onNext: () => void;
}

export default function Sensor({ isOpen, onToggle, onNext }: SensorProps) {
  const dispatch = useDispatch();

  const sensorProducts = products.filter(
    (product) => product.category === "SENSORS",
  );

  const selectedCount = useSelector(selectSelectedCountByCategory("SENSORS"));

  useEffect(() => {
    sensorProducts
      .filter((product) => product.required)
      .forEach((product) => {
        dispatch(
          updateQuantity({
            productId: product.id,
            quantity: product.minimumQuantity ?? 1,
            productDetails: {
              productId: product.id,
              price: product.basePrice,
              compareAtPrice: product.compareAtPrice,
              title: product.title,
              image: product.image,
              category: product.category,
              required: product.required,
            },
          }),
        );
      });
  }, [dispatch]);

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
        icon={SensorIcon}
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
            />
          ))}
        </div>

        <NextButton text="Next: Choose your accessories" onClick={onNext} />
      </div>
    </div>
  );
}
