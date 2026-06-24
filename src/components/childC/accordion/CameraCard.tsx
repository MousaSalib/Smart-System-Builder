import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../../../types";
import type { RootState } from "../../../features/store";
import { updateQuantity } from "../../../features/bundleSlice";
import QuantityStepper from "../../shared/accordion/QuantityStepper";

interface CameraCardProps {
  product: Product;
}

export default function CameraCard({ product }: CameraCardProps) {
  const dispatch = useDispatch();

  const item = useSelector(
    (state: RootState) => state.bundle.items[product.id],
  );

  const quantity = item?.quantity || 0;

  const increaseQuantity = () => {
    dispatch(
      updateQuantity({
        productId: product.id,
        quantity: quantity + 1,
        productDetails: {
          productId: product.id,
          price: product.basePrice,
          compareAtPrice: product.compareAtPrice,
          title: product.title,
          image: product.image,
          category: product.category,
        },
      }),
    );
  };

  const decreaseQuantity = () => {
    dispatch(
      updateQuantity({
        productId: product.id,
        quantity: quantity - 1,
        productDetails: {
          productId: product.id,
          price: product.basePrice,
          compareAtPrice: product.compareAtPrice,
          title: product.title,
          image: product.image,
          category: product.category,
        },
      }),
    );
  };

  const isSelected = quantity > 0;
  return (
    <div
      className={`rounded-[10px] bg-white p-[11px] transition-all duration-300 ${isSelected ? "border-2 border-[#4E2FD2B2]" : "border border-transparent"}`}
    >
      <div className="flex flex-row gap-4 lg:flex-col">
        <div className="flex justify-center">
          <img src={product.image} alt={product.title} />
        </div>
        <div>
          <h2 className="text-[16px] lg:text-[18px] font-semibold tracking-[0.6px] text-[#1F1F1F] mt-[19px]">
            {product.title}
          </h2>
          <div className="mt-[8px]">
            <span
              className="
                text-[12px]
                lg:text-[14px]
                leading-[130%]
                tracking-[0.6px]
              text-[#1F1F1FBF]
              "
            >
              {product.description}{" "}
            </span>

            <button
              className="
                text-[12px]
                lg:text-[14px]
                leading-[130%]
                tracking-[0.6px]
                underline
              text-blue-600
              "
            >
              Learn More
            </button>
          </div>
          <div className="flex flex-wrap gap-[6px] mt-[10px]">
            {product.variants?.map((variant) => (
              <button
                key={variant.id}
                className="
                  flex items-center gap-1
                  rounded-[2px]
                  border-[0.5px]
                border-gray-300
                  px-[3px]
                  py-[1px]
                "
              >
                <img
                  src={variant.imageVariant}
                  alt={variant.name}
                  className=" w-6 h-6 object-contain"
                />

                <span className="text-[12px] text-[#1F1F1F]">
                  {variant.name}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-[10px] flex justify-between items-center">
            <QuantityStepper
              quantity={quantity}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
            <div
              className="
                flex flex-col
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
