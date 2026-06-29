import type { RootState } from "@/features/store";
import { useSelector } from "react-redux";

export function useBundleItemsByCategory(category: string) {
  const items = useSelector((state: RootState) => state.bundle.items);

  return Object.values(items).filter((item) => item.category === category);
}
