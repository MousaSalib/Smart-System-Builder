import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectSavings } from "../features/selectors";
import { saveSystem } from "../features/bundleSlice";

export function useCheckoutActions() {
  const dispatch = useDispatch();

  const savings = useSelector(selectSavings);

  const handleSaveSystem = () => {
    dispatch(saveSystem());

    toast.success("Your security system has been saved successfully!");
  };

  const handleCheckout = () => {
    toast.info("Checkout flow is not implemented in this prototype.");
  };

  return {
    savings,
    handleSaveSystem,
    handleCheckout,
  };
}
