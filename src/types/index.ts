export interface Variant {
  id: string;
  name: string;
  imageVariant: string;
}

export interface Product {
  id: string;
  step: number;
  category: "CAMERAS" | "SENSORS" | "ACCESSORIES" | "PLAN";
  title: string;
  description?: string;
  basePrice: number;
  compareAtPrice: number | null;
  badge?: string;
  image: string;
  required?: boolean;
  minimumQuantity?: number;
  variants?: Variant[];
}

export interface CartItem {
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
  compareAtPrice: number | null;
  title: string;
  image: string;
  category: string;
  required?: boolean;
}

export interface BundleState {
  items: Record<string, CartItem>;
  activeStep: number;
}
