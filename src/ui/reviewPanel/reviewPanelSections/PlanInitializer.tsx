import { useInitializeRequiredProducts } from "@/hooks/useInitializeRequiredProducts";
import { useProductsByCategory } from "@/hooks/useProductsByCategory";

export default function PlanInitializer() {
  const plans = useProductsByCategory("PLAN");

  useInitializeRequiredProducts(plans);

  return null;
}
