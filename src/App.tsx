import { ToastContainer } from "react-toastify";
import Accordion from "./components/accordion/Accordion";
import ReviewPanel from "./components/reviewPanel/ReviewPanel";

export default function App() {
  return (
    <div className="min-h-screen py-6 px-4 antialiased font-sans">
      <ToastContainer position="top-center" autoClose={3000} theme="light" />
      <div className="block md:hidden">
        <main className="w-full max-w-[1213px] mx-auto">
          <div className="lg:hidden w-full max-w-[348px] h-[35px] mx-auto text-center text-[#1F1F1F] text-[31.88px] leading-[110%] tracking-[-0.06px] font-bold">
            Let's get started!
          </div>
          <div className="flex flex-col gap-[13px]">
            <section className="rounded-[10px] pt-[15px] px-[15px] pb-[15px]">
              <Accordion />
            </section>

            <aside className="bg-bundle-bg rounded-[10px] pt-[15px] px-[15px] pb-[15px]">
              <ReviewPanel />
            </aside>
          </div>
        </main>
      </div>
      <div className="hidden md:block lg:hidden overflow-x-auto">
        <main className="w-[1213px] mx-auto">
          <div className="flex gap-[29px] items-start">
            <section className="w-[768px] rounded-[10px] px-[15px] pb-[15px] shrink-0">
              <Accordion />
            </section>
            <aside className="w-[399px] bg-bundle-bg rounded-[10px] pt-[15px] px-[15px] pb-[15px] shrink-0">
              <ReviewPanel />
            </aside>
          </div>
        </main>
      </div>
      <div className="hidden lg:block">
        <main className="w-full max-w-[1213px] mx-auto">
          <div className="flex flex-col gap-[13px]">
            <section className="rounded-[10px] pt-[15px] px-[15px] pb-[15px]">
              <Accordion />
            </section>
            <aside className="bg-bundle-bg rounded-[10px] pt-[15px] px-[15px] pb-[15px]">
              <ReviewPanel />
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
