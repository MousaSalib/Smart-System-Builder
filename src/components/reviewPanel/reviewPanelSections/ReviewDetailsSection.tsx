import Divider from "../../shared/reviewPanel/Divider";
import ReviewPanelHeader from "../../shared/reviewPanel/ReviewPanelHeader";
import ReviewCategorySection from "./ReviewCategorySection";

export default function ReviewDetailsSection() {
  return (
    <div className="w-full max-w-[552px] flex flex-col gap-[10px]">
      <ReviewPanelHeader />
      <Divider />
      <ReviewCategorySection title="CAMERAS" />
      <Divider />
    </div>
  );
}
