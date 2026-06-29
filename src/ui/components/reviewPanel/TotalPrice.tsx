import { selectCompareSubtotal, selectSubtotal } from "@/features/selectors";
import { useSelector } from "react-redux";

function TotalPrice() {
  const subtotal = useSelector(selectSubtotal);
  const compareSubtotal = useSelector(selectCompareSubtotal);

  return (
    <div className="flex flex-col gap-[10px] lg:flex-row lg:items-center lg:justify-between">
      <div
        className="
          bg-[#4E2FD2]
          text-white
          w-[113px]
          h-[18px]
          px-[8px]
          py-[5px]
          rounded-[3px]
          flex
          items-center
          justify-center
          text-[12px]
          font-medium
          leading-[100%]
          tracking-[-0.05em]

          lg:w-[145px]
          lg:h-[27px]
          lg:p-[8px]
          lg:text-[16px]
        "
      >
        as low as $19.19/mo
      </div>

      <div className="flex items-center gap-[8px]">
        <h6
          className="
            w-[60px]
            h-[20px]
            text-center
            line-through
            text-[#6F7882]
            font-medium
            text-[18px]
            leading-[20px]
            tracking-[0.25%]

            lg:w-[73px]
            lg:text-[22px]
          "
        >
          ${compareSubtotal.toFixed(2)}
        </h6>

        <h4
          className="
            w-[77px]
            h-[32px]
            text-right
            align-middle
            font-bold
            text-[24px]
            leading-[32px]
            tracking-[-0.13%]
            text-[#4E2FD2]

            lg:w-[90px]
            lg:text-[28px]
          "
        >
          ${subtotal.toFixed(2)}
        </h4>
      </div>
    </div>
  );
}

export default TotalPrice;
