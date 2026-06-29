interface QuantityStepperProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantityStepper({
  quantity,
  onIncrease,
  onDecrease,
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
          ${quantity > 1 ? "bg-[#F0F4F7] border border-[#F0F4F7]" : "bg-[#FFFFFF] border border-[#E6EBF0]"}
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
          bg-[#F0F4F7]
        `}
      >
        +
      </button>
    </div>
  );
}
