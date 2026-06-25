import type { RootState } from "./store";

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
