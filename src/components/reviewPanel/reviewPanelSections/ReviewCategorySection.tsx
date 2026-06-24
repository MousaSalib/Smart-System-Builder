import { useSelector } from "react-redux";
import ReviewItem from "../../childC/reviewPanel/ReviewItem";
import type { RootState } from "../../../features/store";

interface ReviewCategorySectionProps {
  title: "CAMERAS" | "SENSORS" | "ACCESSORIES" | "PLAN";
}

export default function ReviewCategorySection({
  title,
}: ReviewCategorySectionProps) {
  const items = useSelector((state: RootState) => state.bundle.items);

  const categoryItems = Object.values(items).filter(
    (item) => item.category === title,
  );

  if (categoryItems.length === 0) return null;

  return (
    <div className="flex flex-col">
      <h3 className="text-[12px] font-normal uppercase tracking-[0.03em] text-[#7B8794]">
        {title}
      </h3>

      <div className="mt-[8px] flex flex-col gap-[12px]">
        {categoryItems.map((item) => (
          <ReviewItem
            key={`${item.productId}-${item.variantId ?? "default"}`}
            productId={item.productId}
            variantId={item.variantId}
            category={item.category}
            image={item.image}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            compareAtPrice={item.compareAtPrice}
          />
        ))}
      </div>
    </div>
  );
}
