interface NextButtonProps {
  text: string;
  onClick: () => void;
}

export default function NextButton({ text, onClick }: NextButtonProps) {
  return (
    <div className="flex justify-center mt-[15px]">
      <button
        onClick={onClick}
        className="
          group
          w-[242px] lg:w-[266px]
          h-[39px]
          rounded-[7px]
          border border-[#4E2FD2]
          flex items-center justify-center gap-[10px]
          transition-all duration-300
          hover:bg-[#4E2FD2]
          cursor-pointer
        "
      >
        <span className="font-semibold text-[18px] leading-[24px] text-[#4E2FD2] group-hover:text-white transition-colors duration-300">
          {text}
        </span>
      </button>
    </div>
  );
}
