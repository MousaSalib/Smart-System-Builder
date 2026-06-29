import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BundleState, CartItem } from "@/types";

const initialState: BundleState = {
  items: {},
  activeStep: 1,
};

const bundleSlice = createSlice({
  name: "bundle",
  initialState,

  reducers: {
    updateQuantity: (
      state,
      action: PayloadAction<{
        productId: string;
        variantId?: string;
        quantity: number;
        productDetails: Omit<CartItem, "quantity">;
      }>,
    ) => {
      const { productId, variantId, quantity, productDetails } = action.payload;

      const itemKey = variantId ? `${productId}-${variantId}` : productId;

      if (quantity <= 0) {
        delete state.items[itemKey];
      } else {
        state.items[itemKey] = {
          ...productDetails,
          quantity,
        };
      }
    },

    setStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload;
    },
  },
});

export const { updateQuantity, setStep } = bundleSlice.actions;

export default bundleSlice.reducer;
