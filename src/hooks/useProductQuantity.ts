import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../types";
import type { RootState } from "../features/store";
import { updateQuantity } from "../features/bundleSlice";

interface UseProductQuantityProps {
  product: Product;
  selectedVariant?: string;
  disableDecrease?: boolean;
  disableIncrease?: boolean;
}

export function useProductQuantity({
  product,
  selectedVariant,
  disableDecrease = false,
  disableIncrease = false,
}: UseProductQuantityProps) {
  const dispatch = useDispatch();

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
    if (disableIncrease) return;

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

  return {
    quantity,
    currentVariant,
    isSelected,
    increaseQuantity,
    decreaseQuantity,
  };
}
