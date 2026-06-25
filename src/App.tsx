import { ToastContainer } from "react-toastify";
import Accordion from "./components/accordion/Accordion";
import ReviewPanel from "./components/reviewPanel/ReviewPanel";
import ReviewPanelHeader from "./components/shared/reviewPanel/ReviewPanelHeader";

export default function App() {
  return (
    <div className="min-h-screen py-6 px-4 antialiased font-sans flex justify-center">
      <ToastContainer position="top-center" autoClose={3000} theme="light" />
      <main className="w-full max-w-[1213px]">
        <div className="flex flex-col gap-[13px] md:hidden lg:flex">
          <section
            className="
              rounded-[10px]
              pt-[15px]
              px-[15px]
              pb-[15px]
            "
          >
            <Accordion />
          </section>
          <aside
            className="
              bg-bundle-bg
              rounded-[10px]
              pt-[15px]
              px-[15px]
              pb-[15px]
            "
          >
            <div className="rounded-xl">
              <ReviewPanel />
            </div>
          </aside>
        </div>
        <div className="hidden md:flex lg:hidden gap-[13px]">
          <section
            className="
              w-[768px]
              rounded-[10px]
              pt-[15px]
              px-[15px]
              pb-[15px]
            "
          >
            <Accordion />
          </section>
          <aside
            className="
              w-[399px]
            bg-bundle-bg
              rounded-[10px]
              pt-[15px]
              px-[15px]
              pb-[15px]
            "
          >
            <div className="rounded-xl">
              <ReviewPanel />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
