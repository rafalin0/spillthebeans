import React from "react";
import { SanityDocument } from "next-sanity";
import { toast } from "react-hot-toast";

import BuyNowButton from "./BuyNowButton";

interface ActionButtonsGroupProps {
  product: SanityDocument;
  quantity: number;
  onAddToCart: (product: SanityDocument, quantity: number) => void;
}

const ButtonsGroup: React.FC<ActionButtonsGroupProps> = ({
  product,
  quantity,
  onAddToCart,
}) => {
  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    toast.success(`${quantity} ${product.name} added to the cart.`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-5 md:mt-10">
      <button
        type="button"
        className="w-full md:w-[200px] py-2.5 px-5 border border-fg-2 text-sm md:text-lg font-medium bg-bg-4 text-fg-2 transform transition-transform duration-500 ease-linear hover:scale-110 cursor-pointer rounded-sm"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <BuyNowButton
        product={product}
        quantity={quantity}
        classes="w-full md:w-[200px] py-2.5 px-5 text-sm md:text-lg font-medium text-bg-6 bg-fg-2 transform transition-transform duration-500 ease-linear hover:scale-110 cursor-pointer rounded-sm"
      />
    </div>
  );
};

export default ButtonsGroup;
