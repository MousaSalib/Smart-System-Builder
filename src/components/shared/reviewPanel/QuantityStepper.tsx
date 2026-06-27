interface QuantityStepperProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  isRequired?: boolean;
  category?: string;
}

export default function QuantityStepper({
  quantity,
  onIncrease,
  onDecrease,
  isRequired = false,
  category,
}: QuantityStepperProps) {
  const disabledButtons = isRequired && category === "SENSORS";

  return (
    <div
      className="
        flex
        items-center
        justify-between
        w-[72px]
        h-[28px]
        py-[4px]
        rounded-[4px]
        lg:w-[80px]
      "
    >
      <button
        onClick={onDecrease}
        disabled={disabledButtons}
        className={`
          w-[20px]
          h-[20px]
          rounded-[4px]
          flex
          items-center
          justify-center
          transition-all
          ${
            disabledButtons
              ? "bg-[#F1F1F2] border border-[#CED6DE] text-[#A0A0A0] cursor-not-allowed"
              : "bg-[#FFFFFF] cursor-pointer hover:bg-gray-100"
          }
        `}
      >
        -
      </button>

      <span className="text-[16px] leading-[20px] font-medium">{quantity}</span>

      <button
        onClick={onIncrease}
        disabled={disabledButtons}
        className={`
          w-[20px]
          h-[20px]
          rounded-[4px]
          flex
          items-center
          justify-center
          transition-all
          ${
            disabledButtons
              ? "bg-[#F1F1F2] border border-[#CED6DE] text-[#A0A0A0] cursor-not-allowed"
              : "bg-[#FFFFFF] cursor-pointer hover:bg-gray-100"
          }
        `}
      >
        +
      </button>
    </div>
  );
}
