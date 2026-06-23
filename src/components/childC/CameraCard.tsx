import type { Product } from "../../types";

interface CameraCardProps {
  product: Product;
}

export default function CameraCard({ product }: CameraCardProps) {
  return (
    <div className="rounded-[10px] bg-white p-[11px]">
      <div className="flex flex-row gap-4 lg:flex-col">
        <div className="flex justify-center">
          <img src={product.image} alt={product.title} />
        </div>
        <div>
          <h2 className="text-[16px] lg:text-[18px] font-semibold tracking-[0.6px] text-[#1F1F1F] mt-[19px]">
            {product.title}
          </h2>
          <div className="mt-[8px]">
            <span
              className="
      text-[12px]
      lg:text-[14px]
      leading-[130%]
      tracking-[0.6px]
      text-[#1F1F1FBF]
    "
            >
              {product.description}{" "}
            </span>

            <button
              className="
      text-[12px]
      lg:text-[14px]
      leading-[130%]
      tracking-[0.6px]
      underline
      text-blue-600
    "
            >
              Learn More
            </button>
          </div>
          <div className="flex flex-wrap gap-[6px] mt-[10px]">
            {product.variants?.map((variant) => (
              <button
                key={variant.id}
                className="
        flex items-center gap-1
        rounded-[2px]
        border-[0.5px]
        border-gray-300
        px-[3px]
        py-[1px]
      "
              >
                <img
                  src={variant.imageVariant}
                  alt={variant.name}
                  className=" w-6 h-6 object-contain"
                />

                <span className="text-[12px] text-[#1F1F1F]">
                  {variant.name}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-[10px] flex justify-between items-center">
            <div className="flex items-center justify-between w-[80px] h-[28px] py-[4px] gap-[10px] rounded-[4px]">
              <button className="w-[20px] h-[20px] rounded-[4px] border-2 border-[#E6EBF0] bg-white flex items-center justify-center">
                -
              </button>
              <span
                className="
      text-[16px]
      leading-[20px]
      font-medium
    "
              >
                0
              </span>
              <button
                className="
      w-[20px]
      h-[20px]
      rounded-[4px]
      bg-[#F0F4F7]
      flex
      items-center
      justify-center
    "
              >
                +
              </button>
            </div>
            <div
              className="
    flex flex-col
    lg:flex-row
    items-end
    gap-[3px]
  "
            >
              {product.compareAtPrice && (
                <div
                  className="
        text-[16px]
        tracking-[0.6px]
        line-through
        text-[#D8392B]
      "
                >
                  ${product.compareAtPrice}
                </div>
              )}

              <div
                className="
      text-[16px]
      tracking-[0.6px]
      text-[#575757]
    "
              >
                ${product.basePrice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
