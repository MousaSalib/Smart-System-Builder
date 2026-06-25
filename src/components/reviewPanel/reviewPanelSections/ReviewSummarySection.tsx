import Checkout from "../../childC/reviewPanel/Checkout";
import SatisfactionGuarantee from "../../childC/reviewPanel/SatisfactionGuarantee";
import TotalPrice from "../../childC/reviewPanel/TotalPrice";

export default function ReviewSummarySection() {
  return (
    <div className="flex flex-col gap-[16px]">
      <SatisfactionGuarantee />
      <div className="hidden lg:block">
        <TotalPrice />
      </div>
      <Checkout />
    </div>
  );
}
