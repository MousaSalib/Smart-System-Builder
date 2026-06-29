import TotalPrice from "@/ui/components/reviewPanel/TotalPrice";
export default function SatisfactionGuarantee() {
  return (
    <div className="flex items-center justify-between gap-[25px]">
      <img
        src="/Satisfaction Badge-05 1.svg"
        alt="Satisfaction Badge"
        className="
          w-[78px]
          h-[78px]
          lg:w-[131px]
          lg:h-[131px]
          shrink-0
        "
      />

      <div className="flex lg:hidden flex-1 justify-end">
        <TotalPrice />
      </div>

      <div
        className="
          hidden
          lg:flex
          flex-col
          gap-[12px]
          max-w-[330px]
        "
      >
        <h6
          className="
            text-[18px]
            font-semibold
            leading-[110%]
            tracking-[0.6px]
            text-[#1F1F1F]
          "
        >
          30-day hassle-free returns
        </h6>

        <p
          className="
            text-[16px]
            font-medium
            leading-[130%]
            tracking-[0.6px]
            text-[#1F1F1FBF]
          "
        >
          If you're not totally in love with the product, we will refund you
          100%.
        </p>
      </div>
    </div>
  );
}
