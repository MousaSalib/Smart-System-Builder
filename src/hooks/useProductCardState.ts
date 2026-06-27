import { useState } from "react";
import type { Product } from "../types";

export function useProductCardState(product: Product) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0]?.id,
  );

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return {
    showFullDescription,
    toggleDescription,
    selectedVariant,
    setSelectedVariant,
  };
}
