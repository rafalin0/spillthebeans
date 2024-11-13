import React, { ChangeEvent } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxQuantity: number;
  minQuantity: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  onInputChange,
  maxQuantity,
  minQuantity,
}) => {
  // Conditional button classes based on quantity
  const getDecreaseClass = () =>
    quantity <= minQuantity ? "text-mg-3" : "text-mg-2";
  const getIncreaseClass = () =>
    quantity >= maxQuantity ? "text-mg-3" : "text-mg-1";

  return (
    <div className="flex gap-2 items-center text-center text-sm md:text-base">
      <h3 className="font-bold hidden md:block">Quantity:</h3>
      <h3 className="font-semibold text-xs md:hidden">Qty:</h3>
      <div className="border border-mg-3 flex rounded-md">
        <span
          className={`${getDecreaseClass()} text-xs md:text-base md:py-1.5 md:px-3 px-1.5 cursor-pointer m-auto`}
          onClick={onDecrease}
        >
          <AiOutlineMinus />
        </span>
        <input
          type="text"
          name="quantity"
          value={quantity}
          aria-label="quantity"
          inputMode="numeric"
          className="border-x border-x-mg-3 text-xs md:text-base p-1 cursor-pointer w-10 text-center"
          onChange={onInputChange}
        />
        <span
          className={`${getIncreaseClass()} text-xs md:text-base md:py-1.5 md:px-3 px-1.5 cursor-pointer m-auto`}
          onClick={onIncrease}
        >
          <AiOutlinePlus />
        </span>
      </div>
    </div>
  );
};

export default QuantitySelector;
