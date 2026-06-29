import { updateQuantity } from "@/features/bundleSlice";
import type { RootState } from "@/features/store";
import type { Product } from "@/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useInitializeRequiredProducts(productsList: Product[]) {
  const dispatch = useDispatch();

  const bundleItems = useSelector((state: RootState) => state.bundle.items);

  useEffect(() => {
    productsList
      .filter((product) => product.required)
      .forEach((product) => {
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
  }, [dispatch, bundleItems, productsList]);
}
