import { useSelector } from "react-redux";
import type { RootState } from "../../../features/store";
import Shipping from "../../childC/reviewPanel/Shipping";
import Divider from "../../shared/reviewPanel/Divider";
import ReviewPanelHeader from "../../shared/reviewPanel/ReviewPanelHeader";
import ReviewCategorySection from "./ReviewCategorySection";

export default function ReviewDetailsSection() {
  const items = useSelector((state: RootState) => state.bundle.items);

  const hasCameraItems = Object.values(items).some(
    (item) => item.category === "CAMERAS",
  );

  const hasSensorItems = Object.values(items).some(
    (item) => item.category === "SENSORS",
  );

  const hasAccessoryItems = Object.values(items).some(
    (item) => item.category === "ACCESSORIES",
  );

  const hasPlanItems = Object.values(items).some(
    (item) => item.category === "PLAN",
  );

  const hasAnyItems =
    hasCameraItems || hasSensorItems || hasAccessoryItems || hasPlanItems;

  return (
    <div className="w-full max-w-[552px] flex flex-col gap-[10px] lg:px-0">
      <ReviewPanelHeader />
      <Divider />
      {hasCameraItems && (
        <>
          <ReviewCategorySection title="CAMERAS" />
          <Divider />
        </>
      )}

      {hasSensorItems && (
        <>
          <ReviewCategorySection title="SENSORS" />
          <Divider />
        </>
      )}

      {hasAccessoryItems && (
        <>
          <ReviewCategorySection title="ACCESSORIES" />
          <Divider />
        </>
      )}

      {hasPlanItems && (
        <>
          <ReviewCategorySection title="PLAN" />
          <Divider />
        </>
      )}

      <Shipping />
    </div>
  );
}
