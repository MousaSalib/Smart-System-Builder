interface QuantityStepperProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  isRequired?: boolean;
}

export default function QuantityStepper({
  quantity,
  onIncrease,
  onDecrease,
  isRequired = false,
}: QuantityStepperProps) {
  return (
    <div className="flex items-center justify-between w-[80px] h-[28px] py-[4px] gap-[10px] rounded-[4px]">
      <button
        onClick={onDecrease}
        className={`
          w-[20px]
          h-[20px]
          rounded-[4px]
          flex
          items-center
          justify-center
          cursor-pointer
          ${isRequired ? "bg-[#F1F1F2] border border-[#CED6DE]" : "bg-[#FFFFFF]"}
        `}
      >
        -
      </button>

      <span className="text-[16px] leading-[20px] font-medium">{quantity}</span>

      <button
        onClick={onIncrease}
        className={`
          w-[20px]
          h-[20px]
          rounded-[4px]
          flex
          items-center
          justify-center 
          cursor-pointer
          ${isRequired ? "bg-[#F1F1F2] border border-[#CED6DE]" : "bg-[#FFFFFF]"}
        `}
      >
        +
      </button>
    </div>
  );
}
