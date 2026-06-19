export interface Variant {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  step: number;
  category: "Cameras" | "Sensors" | "Accessories" | "Plan";
  title: string;
  description?: string;
  basePrice: number;
  compareAtPrice?: number;
  badge?: string;
  image: string;
  variants: Variant[];
}

export interface CartItem {
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
  compareAtPrice?: number;
  title: string;
  image: string;
  category: string;
}

export interface BundleState {
  items: Record<string, CartItem>;
  activeStep: number;
}
