import Accordion from "./components/accordion/Accordion";

export default function App() {
  return (
    <div className="min-h-screen py-6 px-4 antialiased font-sans flex justify-center">
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
            <h3 className="text-sm font-bold text-gray-900 mb-3">
              Your security system
            </h3>
            <div className="rounded-xl p-12 text-center text-gray-400 font-bold">
              [هنا سيتم بناء لوحة الفاتورة والمراجعة بالكامل]
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
            <h3 className="text-sm font-bold text-gray-900 mb-3">
              Your security system
            </h3>

            <div className="rounded-xl p-12 text-center text-gray-400 font-bold">
              [هنا سيتم بناء لوحة الفاتورة والمراجعة بالكامل]
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
