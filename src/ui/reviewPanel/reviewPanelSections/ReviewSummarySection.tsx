import Checkout from "@/ui/components/reviewPanel/Checkout";
import SatisfactionGuarantee from "@/ui/components/reviewPanel/SatisfactionGuarantee";
import TotalPrice from "@/ui/components/reviewPanel/TotalPrice";

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
