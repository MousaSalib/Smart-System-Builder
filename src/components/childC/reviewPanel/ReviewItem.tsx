import { useDispatch } from "react-redux";
import QuantityStepper from "../../shared/reviewPanel/QuantityStepper";
import { updateQuantity } from "../../../features/bundleSlice";

interface ReviewItemProps {
  productId: string;
  variantId?: string;
  category: string;
  image: string;
  title: string;
  quantity: number;
  price: number;
  compareAtPrice: number | null;
}

export default function ReviewItem({
  productId,
  variantId,
  category,
  image,
  title,
  quantity,
  price,
  compareAtPrice,
}: ReviewItemProps) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(
      updateQuantity({
        productId,
        variantId,
        quantity: quantity + 1,
        productDetails: {
          productId,
          variantId,
          price,
          compareAtPrice,
          title,
          image,
          category,
        },
      }),
    );
  };

  const handleDecrease = () => {
    dispatch(
      updateQuantity({
        productId,
        variantId,
        quantity: quantity - 1,
        productDetails: {
          productId,
          variantId,
          price,
          compareAtPrice,
          title,
          image,
          category,
        },
      }),
    );
  };

  return (
    <div className="flex items-center gap-[10px] w-full">
      <div className="flex items-center gap-[10px]">
        <img
          src={image}
          alt={title}
          className="
            w-[41px]
            h-[41px]
            rounded-[5px]
            shrink-0
          "
        />
        <h4
          className="
            font-medium
            text-[14px]
            lg:text-[18px]
            leading-[16px]
            tracking-[0.5%]
            text-[#0B0D10]
            truncate
          "
        >
          {title}
        </h4>
      </div>
      <div className="ml-auto md:ml-[60px] lg:ml-auto flex items-center gap-[16px]">
        <QuantityStepper
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-end
            gap-[6px]
            lg:gap-[10px]
          "
        >
          {compareAtPrice && (
            <span
              className="
                text-[16px]
                font-semibold
                leading-[16px]
                line-through
                text-[#A8B2BD]
              "
            >
              ${compareAtPrice}
            </span>
          )}
          <span
            className="
              text-[16px]
              font-semibold
              leading-[16px]
              text-[#4E2FD2]
            "
          >
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
}
