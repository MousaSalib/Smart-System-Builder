import { products } from "../data/products";

export function useProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
