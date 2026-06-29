import type { RootState } from "@/features/store";

export const selectSelectedCountByCategory =
  (category: string) => (state: RootState) => {
    const uniqueProducts = new Set(
      Object.values(state.bundle.items)
        .filter((item) => item.category === category && item.quantity > 0)
        .map((item) => item.productId),
    );

    return uniqueProducts.size;
  };
export const selectCartItems = (state: RootState) =>
  Object.values(state.bundle.items);

export const selectSubtotal = (state: RootState) =>
  Object.values(state.bundle.items).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

export const selectCompareSubtotal = (state: RootState) =>
  Object.values(state.bundle.items).reduce(
    (sum, item) => sum + (item.compareAtPrice ?? item.price) * item.quantity,
    0,
  );

export const selectSavings = (state: RootState) =>
  selectCompareSubtotal(state) - selectSubtotal(state);
