export default function ReviewPanelHeader() {
  return (
    <div className="w-full max-w-[350px] flex flex-col gap-[5px]">
      <h3
        className="
          w-[217px]
          font-semibold
          text-[22px]
          leading-[100%]
          tracking-[0.6px]
          text-[#1F1F1F]
        "
      >
        Your security system
      </h3>

      <p
        className="
          text-[14px]
          font-medium
          leading-[130%]
          tracking-[0.6px]
          text-[#1F1F1FBF]
          break-words
        "
      >
        Review your personalized protection system designed to keep what matters
        most safe.
      </p>
    </div>
  );
}
