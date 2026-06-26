import ShippingImage from "../../../../public/fast-shipping.svg";

export default function Shipping() {
  return (
    <div
      className="
        w-full
        flex
        items-center
        justify-between
        gap-[12px]
      "
    >
      <div className="flex items-center gap-[12px] flex-1 min-w-0">
        <img
          src={ShippingImage}
          alt="Fast Shipping"
          className="w-[41px] h-[41px] shrink-0"
        />
        <p
          className="
            text-[#0B0D10]
            font-medium
            text-[14px]
            leading-[16px]
            tracking-[0.5%]
            lg:text-[18px]
          "
        >
          Fast Shipping
        </p>
      </div>
      <div
        className="
          ml-auto
          flex
          flex-col
          items-end
          w-[33px]
          h-[32px]
          lg:flex-row
          lg:items-center
          lg:gap-[10px]
          lg:w-[84px]
          lg:h-[16px]
          shrink-0
        "
      >
        <p
          className="
            text-[#6F7882]
            line-through
            font-medium
            text-[14px]
            leading-[16px]
            tracking-[0.5%]
            text-right
            lg:text-[16px]
            lg:w-[38px]
          "
        >
          $5.99
        </p>

        <p
          className="
            text-[#4E2FD2]
            font-semibold
            text-[14px]
            leading-[16px]
            tracking-[0.5%]
            text-center
            lg:text-[16px]
            lg:w-[36px]
          "
        >
          FREE
        </p>
      </div>
    </div>
  );
}
