import { useDispatch } from "react-redux";
import { updateQuantity } from "@/features/bundleSlice";

interface Params {
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

export function useReviewItemActions({
  productId,
  variantId,
  category,
  image,
  title,
  quantity,
  price,
  compareAtPrice,
  required = false,
}: Params) {
  const dispatch = useDispatch();

  const productDetails = {
    productId,
    variantId,
    price,
    compareAtPrice,
    title,
    image,
    category,
    required,
  };

  const handleIncrease = () => {
    dispatch(
      updateQuantity({
        productId,
        variantId,
        quantity: quantity + 1,
        productDetails,
      }),
    );
  };

  const handleDecrease = () => {
    dispatch(
      updateQuantity({
        productId,
        variantId,
        quantity: quantity - 1,
        productDetails,
      }),
    );
  };

  return {
    handleIncrease,
    handleDecrease,
  };
}
