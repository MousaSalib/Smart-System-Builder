import QuantityStepper from "../../shared/reviewPanel/QuantityStepper";
import { useReviewItemActions } from "../../../hooks/useReviewItemActions";

interface ReviewItemProps {
  productId: string;
  variantId?: string;
  category: string;
  image: string;
  title: string;
  quantity: number;
  price: number;
  compareAtPrice: number | null;
  required?: boolean;
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
  required = false,
}: ReviewItemProps) {
  const { handleIncrease, handleDecrease } = useReviewItemActions({
    productId,
    variantId,
    category,
    image,
    title,
    quantity,
    price,
    compareAtPrice,
    required,
  });

  return (
    <>
      <div className="flex items-center gap-[10px] w-full min-w-0">
        <div className="flex items-center gap-[10px] flex-1 min-w-0">
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
            flex-1
            min-w-0
            truncate
            font-medium
            text-[14px]
            lg:text-[18px]
            leading-[16px]
            tracking-[0.5%]
            text-[#0B0D10]
          "
          >
            {title}
          </h4>
        </div>
        <div
          className="
          ml-auto
          shrink-0
          flex
          items-center
          gap-[8px]
          lg:gap-[16px]
        "
        >
          {category !== "PLAN" && (
            <QuantityStepper
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              isRequired={required}
              category={category}
            />
          )}

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
                text-[14px] 
                lg:text-[16px]
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
              text-[14px] uppercase
              lg:text-[16px]
              font-semibold
              leading-[16px]
              text-[#4E2FD2]
            "
            >
              {required && price === 0 ? "Free" : `$${price}`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
