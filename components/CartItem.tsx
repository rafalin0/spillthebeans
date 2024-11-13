"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { urlFor } from "@/sanity/lib/image";
import { useStore } from "@/store/store";
import { CartProduct } from "@/types/cartProduct";

const CartItem = ({ product }: { product: CartProduct }) => {
  const { editCartProduct, clearProduct } = useStore((state) => state);

  const imageUrl = urlFor(product.image).url();

  const [qtyDisplay, setQtyDisplay] = useState(product.qty);

  useEffect(() => {
    setQtyDisplay(product.qty);
  }, [product.qty]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setQtyDisplay(Number(numericValue));
  };

  const updateQuantity = () => {
    const quantity = Math.min(Math.max(1, qtyDisplay), 50); // Clamp between 1 and 50
    setQtyDisplay(quantity);
    editCartProduct({ ...product, qty: quantity }, quantity);
  };

  return (
    <div className="py-5 px-[5px] flex gap-8 justify-between md:p-5 border-t border-bg-6">
      <div className="w-1/5 bg-bg-2 rounded-xl">
        <Image
          src={imageUrl}
          width={900}
          height={1200}
          className="p-3 md:p-5 md:py-2 dark:dark-image m-auto"
          alt={product.name}
        />
      </div>

      <div className="w-4/5 flex flex-col justify-between">
        <div className=" flex-wrap gap-2.5 md:flex-nowrap w-auto text-fg-2 flex justify-between">
          <h5 className="text-base md:text-xl font-semibold truncate w-[70%] md:w-full">
            {product.name}
          </h5>
          <h4 className="text-base md:text-xl text-fg-1 font-medium">
            ₱{product.price}
          </h4>
        </div>

        <div className=" mt-[20px] w-auto flex justify-between md:mt-[60px]">
          <p className="border border-mg-3 inline-flex w-min rounded-md">
            <span
              className={`${
                product.qty <= 1 ? "text-mg-3" : "text-mg-2"
              } text-xs md:text-base md:py-1.5 md:px-3 px-1.5 cursor-pointer m-auto`}
              onClick={() => editCartProduct({ ...product }, qtyDisplay - 1)}
            >
              <AiOutlineMinus />
            </span>
            <input
              onChange={handleInputChange}
              className="border-x border-x-mg-3 text-xs md:text-base p-1 cursor-pointer w-10 text-center"
              data-min="1"
              type="text"
              inputMode="numeric"
              name="quantity"
              value={qtyDisplay}
              onBlur={updateQuantity}
            />
            <span
              className={`${
                product.qty >= 50 ? "text-mg-3" : "text-mg-1"
              } text-xs md:text-base md:py-1.5 md:px-3 px-1.5 cursor-pointer m-auto`}
              onClick={() => editCartProduct({ ...product }, qtyDisplay + 1)}
            >
              <AiOutlinePlus />
            </span>
          </p>

          <button
            type="button"
            className="text-xs md:text-base font-code text-mg-2 cursor-pointer bg-transparent decoration-dotted decoration-4 hover:underline underline-offset-4 lowercase"
            onClick={() => clearProduct(product._id)}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
