import ReviewDetailsSection from "./reviewPanelSections/ReviewDetailsSection";
import ReviewSummarySection from "./reviewPanelSections/ReviewSummarySection";

export default function ReviewPanel() {
  return (
    <div className="p-[20px] flex flex-col lg:flex-row gap-[52px]">
      <ReviewDetailsSection />
      <ReviewSummarySection />
    </div>
  );
}
