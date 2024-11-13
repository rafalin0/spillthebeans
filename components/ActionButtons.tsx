import React, { ChangeEvent, useState } from "react";
import { SanityDocument } from "next-sanity";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import { MdShoppingCartCheckout } from "react-icons/md";

import { useStore } from "@/store/store";
import QuantitySelector from "./QuantitySelector";
import ButtonsGroup from "./ButtonsGroup";

const MAX_QUANTITY = 50;
const MIN_QUANTITY = 1;

const ActionButtons = ({ product }: { product: SanityDocument }) => {
  const { addProductToCart: handleAddToCart } = useStore((state) => state);
  const [isVisible, setIsVisible] = useState(false);
  const [qtyDisplay, setQtyDisplay] = useState(1);

  // Toggle visibility of the sliding cart menu (mobile view)
  const toggleDiv = () => setIsVisible(!isVisible);

  // Handle quantity changes (increase, decrease, or direct input)
  const handleQuantityChange = (
    operation: "increase" | "decrease",
    value?: number
  ) => {
    setQtyDisplay((prevQty) => {
      const newQty =
        value ?? (operation === "increase" ? prevQty + 1 : prevQty - 1);
      return Math.min(Math.max(newQty, MIN_QUANTITY), MAX_QUANTITY);
    });
  };

  // Handle direct input for quantity
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    handleQuantityChange("increase", Number(numericValue));
  };

  return (
    <div>
      {/* Mobile Sliding Menu */}
      <div className="bg-bg-1 h-44 shadow-sm rounded-tl-3xl rounded-bl-3xl md:rounded-none mt-2 md:mt-0 fixed bottom-[15%] right-0 z-10 md:hidden flex">
        <button
          onClick={toggleDiv}
          className={`md:hidden h-full ${isVisible ? "border-r border-bg-6" : "p-2"}`}
        >
          {isVisible ? (
            <div className="p-4">
              <AiOutlineRight />
            </div>
          ) : (
            <div className="flex h-full items-center gap-1">
              <AiOutlineLeft />
              <div className="flex flex-col justify-center gap-3">
                <div className="p-2 border border-bg-6 rounded-lg">
                  <LuShoppingCart />
                </div>
                <div className="p-2 border border-bg-6 rounded-lg">
                  <MdShoppingCartCheckout />
                </div>
              </div>
            </div>
          )}
        </button>
        {isVisible && (
          <div className="p-3.5 transform transition-transform duration-800">
            <QuantitySelector
              quantity={qtyDisplay}
              onIncrease={() => handleQuantityChange("increase")}
              onDecrease={() => handleQuantityChange("decrease")}
              onInputChange={handleInputChange}
              maxQuantity={MAX_QUANTITY}
              minQuantity={MIN_QUANTITY}
            />
            <ButtonsGroup
              product={product}
              quantity={qtyDisplay}
              onAddToCart={handleAddToCart}
            />
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <QuantitySelector
          quantity={qtyDisplay}
          onIncrease={() => handleQuantityChange("increase")}
          onDecrease={() => handleQuantityChange("decrease")}
          onInputChange={handleInputChange}
          maxQuantity={MAX_QUANTITY}
          minQuantity={MIN_QUANTITY}
        />
        <ButtonsGroup
          product={product}
          quantity={qtyDisplay}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ActionButtons;
