import ReviewDetailsSection from "./reviewPanelSections/ReviewDetailsSection";
import ReviewSummarySection from "./reviewPanelSections/ReviewSummarySection";

export default function ReviewPanel() {
  return (
    <>
      <div className="mt-[15px] ml-[15px] lg:hidden w-full h-[12px] text-[#484848] text-[12px] tracking-[1.6px] uppercase leading-[100%] font-normal">
        REVIEW
      </div>
      <div className="mt-[5px] p-[20px] flex flex-col lg:flex-row gap-[52px]">
        <ReviewDetailsSection />
        <ReviewSummarySection />
      </div>
    </>
  );
}
