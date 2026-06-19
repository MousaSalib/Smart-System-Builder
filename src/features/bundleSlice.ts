import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BundleState, CartItem } from "../types";

const loadInitialState = (): BundleState => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("smart_builder_system");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error("Error loading saved bundle", err);
      }
    }
  }
  return {
    items: {},
    activeStep: 1,
  };
};

const initialState: BundleState = loadInitialState();
const saveStateToStorage = (state: BundleState) => {
  localStorage.setItem("smart_builder_system", JSON.stringify(state));
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
      saveStateToStorage(state);
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload;
      saveStateToStorage(state);
    },
    saveSystem: (state) => {
      saveStateToStorage(state);
      alert("Configuration saved successfully!");
    },
  },
});

export const { updateQuantity, setStep, saveSystem } = bundleSlice.actions;
export default bundleSlice.reducer;
