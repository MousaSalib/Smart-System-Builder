import { useInitializeRequiredProducts } from "@/hooks/useInitializeRequiredProducts";
import { useProductsByCategory } from "@/hooks/useProductsByCategory";

export default function Accessories() {
  const accessoriesProducts = useProductsByCategory("ACCESSORIES");

  useInitializeRequiredProducts(accessoriesProducts);

  return null;
}
