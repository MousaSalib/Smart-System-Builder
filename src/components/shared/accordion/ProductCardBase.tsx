import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import type { Product } from "../../../types";
import type { RootState } from "../../../features/store";
import { updateQuantity } from "../../../features/bundleSlice";
import QuantityStepper from "../../shared/accordion/QuantityStepper";

interface ProductCardBaseProps {
  product: Product;
  disableDecrease?: boolean;
}

export default function ProductCardBase({
  product,
  disableDecrease = false,
}: ProductCardBaseProps) {
  const dispatch = useDispatch();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0]?.id,
  );

  const bundleItems = useSelector((state: RootState) => state.bundle.items);

  const itemKey = selectedVariant
    ? `${product.id}-${selectedVariant}`
    : product.id;

  const item = bundleItems[itemKey];

  const quantity = item?.quantity ?? 0;

  const currentVariant = product.variants?.find(
    (variant) => variant.id === selectedVariant,
  );

  const isSelected = Object.values(bundleItems).some(
    (bundleItem) =>
      bundleItem.productId === product.id && bundleItem.quantity > 0,
  );

  const increaseQuantity = () => {
    dispatch(
      updateQuantity({
        productId: product.id,
        variantId: selectedVariant,
        quantity: quantity + 1,
        productDetails: {
          productId: product.id,
          variantId: selectedVariant,
          price: product.basePrice,
          compareAtPrice: product.compareAtPrice,
          title: selectedVariant
            ? `${product.title} (${currentVariant?.name})`
            : product.title,
          image: currentVariant?.imageVariant ?? product.image,
          category: product.category,
          required: product.required,
        },
      }),
    );
  };

  const decreaseQuantity = () => {
    if (disableDecrease && quantity <= (product.minimumQuantity ?? 1)) {
      return;
    }

    dispatch(
      updateQuantity({
        productId: product.id,
        variantId: selectedVariant,
        quantity: quantity - 1,
        productDetails: {
          productId: product.id,
          variantId: selectedVariant,
          price: product.basePrice,
          compareAtPrice: product.compareAtPrice,
          title: selectedVariant
            ? `${product.title} (${currentVariant?.name})`
            : product.title,
          image: currentVariant?.imageVariant ?? product.image,
          category: product.category,
          required: product.required,
        },
      }),
    );
  };

  return (
    <div
      className={`
        w-full
        lg:h-[400px]
        md:h-[220px]
        rounded-[10px]
        bg-white
        p-[11px]
        transition-all
        duration-300
        ${
          isSelected
            ? "border-2 border-[#4E2FD2B2]"
            : "border border-transparent"
        }
      `}
    >
      <div
        className="
          flex 
          items-center
          flex-row
          gap-[16px]
          lg:flex-col
        "
      >
        {/* image */}
        <div
          className="
            shrink-0
            flex
            justify-center
            items-start
            w-[101px]
            lg:w-full
          "
        >
          <img
            src={currentVariant?.imageVariant ?? product.image}
            alt={product.title}
            className="
              w-[101px]
              h-[101px]
              object-contain
              lg:w-[152px]
              lg:h-[152px]
            "
          />
        </div>
        <div className="flex-1 min-w-0">
          <h2
            className="
              text-[16px]
              font-semibold
              tracking-[0.6px]
              text-[#1F1F1F]
              mt-[8px]
              leading-[120%]
            "
          >
            {product.title}
          </h2>
          <div className="mt-[8px] max-w-[210px] lg:max-w-full">
            <span
              className={`
                font-gilroy
                font-medium
                text-[14px]
                leading-[130%]
                tracking-[0.6px]
                text-[#1F1F1FBF]
                ${showFullDescription ? "" : "line-clamp-2"}
              `}
            >
              {product.description}
            </span>

            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="
                text-[12px]
                leading-[130%]
                tracking-[0.6px]
                underline
                text-blue-600
                ml-1
              "
            >
              {showFullDescription ? "Show Less" : "Learn More"}
            </button>
          </div>

          {product.variants && (
            <div
              className="
                flex
                flex-wrap
                gap-[4px]
                mt-[10px]
                max-w-[220px]
              "
            >
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`
                    flex
                    items-center
                    gap-1
                    rounded-[2px]
                    border-[0.5px]
                    px-[3px]
                    py-[1px]
                    transition-all
                    duration-200
                    ${
                      selectedVariant === variant.id
                        ? "border-[#4E2FD2] bg-[#F5F2FF]"
                        : "border-gray-300"
                    }
                  `}
                >
                  <img
                    src={variant.imageVariant}
                    alt={variant.name}
                    className="w-[25px] h-[25px] object-contain"
                  />

                  <span className="text-[10px] text-[#1F1F1F]">
                    {variant.name}
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="mt-[12px] flex justify-between items-end">
            <QuantityStepper
              quantity={quantity}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />

            <div
              className="
                flex
                flex-col
                lg:flex-row
                items-end
                gap-[3px]
              "
            >
              {product.compareAtPrice && (
                <div
                  className="
                    text-[16px]
                    tracking-[0.6px]
                    line-through
                    text-[#D8392B]
                  "
                >
                  ${product.compareAtPrice}
                </div>
              )}

              <div
                className="
                  text-[16px]
                  tracking-[0.6px]
                  text-[#575757]
                "
              >
                ${product.basePrice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
