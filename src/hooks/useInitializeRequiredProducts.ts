import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../features/bundleSlice";
import type { Product } from "../types";

export function useInitializeRequiredProducts(productsList: Product[]) {
  const dispatch = useDispatch();

  useEffect(() => {
    productsList
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
  }, [dispatch, productsList]);
}
