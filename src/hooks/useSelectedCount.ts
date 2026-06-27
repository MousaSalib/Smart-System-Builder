import { useSelector } from "react-redux";
import { selectSelectedCountByCategory } from "../features/selectors";

export function useSelectedCount(category: string) {
  return useSelector(selectSelectedCountByCategory(category));
}
