import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../../data/products";
import { updateQuantity } from "../../../features/bundleSlice";
import type { RootState } from "../../../features/store";

export default function Accessories() {
  const dispatch = useDispatch();

  const bundleItems = useSelector((state: RootState) => state.bundle.items);

  useEffect(() => {
    const requiredAccessories = products.filter(
      (product) => product.category === "ACCESSORIES" && product.required,
    );

    requiredAccessories.forEach((product) => {
      const existingItem = bundleItems[product.id];

      if (!existingItem) {
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
      }
    });
  }, [dispatch, bundleItems]);

  return null;
}
