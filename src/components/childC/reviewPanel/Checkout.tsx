import { useDispatch, useSelector } from "react-redux";
import { selectSavings } from "../../../features/selectors";
import { saveSystem } from "../../../features/bundleSlice";
import { toast } from "react-toastify";

export default function Checkout() {
  const dispatch = useDispatch();
  const savings = useSelector(selectSavings);

  const handleSaveSystem = () => {
    dispatch(saveSystem());

    toast.success("Your security system has been saved successfully!");
  };

  const handleCheckout = () => {
    toast.info("Checkout flow is not implemented in this prototype.");
  };

  return (
    <div className="flex flex-col items-center gap-[4px] text-center">
      <p
        className="
            text-[#0AA288]
            text-center
            font-semibold
            text-[12px]
            leading-[100%]
            tracking-[-0.06px]
            lg:text-[14px]
          "
      >
        Congrats! You’re saving ${savings.toFixed(2)} on your security bundle!
      </p>
      <button
        onClick={handleCheckout}
        className="
            w-full
            max-w-[350px]
            h-[48px]
            rounded-[4px]
            py-[13px]
            px-[16px]
            flex
            items-center
            justify-center
            gap-[8px]
            bg-[#4E2FD2]
            text-white
            lg:max-w-none
        "
      >
        Checkout
      </button>
      <button
        onClick={handleSaveSystem}
        className="
                w-[350px]
                h-[17px]
                text-[#484848]
                text-center
                italic
                underline
                text-[14px]
                leading-[120%]
                tracking-[-0.02px]
                lg:w-[486px]
                cursor-pointer
                mt-[4px]
            "
      >
        Save my system for later
      </button>
    </div>
  );
}
