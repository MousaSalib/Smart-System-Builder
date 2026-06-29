import { useBundleItemsByCategory } from "@/hooks/useBundleItemsByCategory";
import Shipping from "@/ui/components/reviewPanel/Shipping";
import ReviewCategorySection from "@/ui/reviewPanel/reviewPanelSections/ReviewCategorySection";
import Divider from "@/ui/shared/reviewPanel/Divider";
import ReviewPanelHeader from "@/ui/shared/reviewPanel/ReviewPanelHeader";

export default function ReviewDetailsSection() {
  const hasCameraItems = useBundleItemsByCategory("CAMERAS").length > 0;
  const hasSensorItems = useBundleItemsByCategory("SENSORS").length > 0;
  const hasAccessoryItems = useBundleItemsByCategory("ACCESSORIES").length > 0;
  const hasPlanItems = useBundleItemsByCategory("PLAN").length > 0;

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
