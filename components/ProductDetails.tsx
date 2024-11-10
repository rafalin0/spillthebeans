"use client";

import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { useStore } from "@/store/store";
import { urlFor } from "@/sanity/lib/image";
import Product from "@/components/Product";
import BuyNowButton from "./BuyNowButton";

interface ProductDetailsProps {
  product: SanityDocument;
  products: SanityDocument[];
}

const ProductDetails = ({ product, products }: ProductDetailsProps) => {
  const { addProductToCart: handleAddToCart } = useStore((state) => state);

  const { name, image, description, price } = product;

  const productImageUrl = urlFor(image).url();

  const [qtyDisplay, setQtyDisplay] = useState(1);

  const handleIncrease = () => {
    if (qtyDisplay < 50) {
      setQtyDisplay((prevQty) => prevQty + 1);
    }
  };

  const handleDecrease = () =>
    setQtyDisplay((prevQty) => Math.max(prevQty - 1, 1));

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    const quantity = Math.min(Math.max(1, Number(numericValue)), 50);
    setQtyDisplay(quantity);
  };

  return (
    <div className="bg-bg-6 rounded-3xl md:mx-5">
      <div className="max-w-[1400px] mx-auto w-full p-5">
        <div className="flex flex-wrap md:flex-nowrap gap-10 md:py-10 text-fg-1">
          <div className="max-h-[55vh] w-full md:basis-[45%] cursor-pointer bg-radial-gradient transition duration-300 ease-in-out hover: hover:bg-rg-hover rounded-2xl">
            <Image
              src={productImageUrl}
              className="h-full w-auto p-10 m-auto dark:dark-image"
              alt={name}
              width={900}
              height={1200}
            />
          </div>
          <div className="basis-full md:basis-[55%]">
            <h1 className="text-2xl font-bold">{name}</h1>

            <div className="text-fg-5 mt-2.5 flex gap-1.5 items-center">
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p className="text-fg-1 font-medium">(20)</p>
            </div>

            <h4 className="mt-2.5 font-bold">Details: </h4>
            <p className="mt-2.5">{description}</p>
            <p className="mt-8 font-bold text-2xl md:text-3xl text-fg-5">
              Php {price}
            </p>
            <div className="flex gap-5 mt-2.5 items-center text-center">
              <h3 className=" font-bold">Quantity: </h3>
              <p className="border border-mg-3 flex rounded-md">
                <span
                  className={`${
                    qtyDisplay <= 1 ? "text-mg-3" : "text-mg-2"
                  } text-base py-1.5 px-3 cursor-pointer m-auto`}
                  onClick={handleDecrease}
                >
                  <AiOutlineMinus />
                </span>
                <input
                  onChange={handleInputChange}
                  className="border-x bg-bg-6 border-x-mg-3 text-base p-1.5 cursor-pointer w-10 text-center"
                  data-min="1"
                  type="text"
                  inputMode="numeric"
                  name="quantity"
                  value={qtyDisplay}
                />
                <span
                  className={`${
                    qtyDisplay >= 50 ? "text-mg-3" : "text-mg-1"
                  } text-base py-1.5 px-3 cursor-pointer m-auto`}
                  onClick={handleIncrease}
                >
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="flex gap-5">
              <button
                type="button"
                className="w-[150px] md:w-[200px] py-2.5 px-5 border border-fg-2 mt-10 text-[18px] font-medium bg-bg-4 text-fg-2  transform transition-transform duration-500 ease-linear hover:scale-110 cursor-pointer rounded-sm"
                onClick={() => {
                  handleAddToCart({ ...product, qty: qtyDisplay }, qtyDisplay);
                }}
              >
                Add to Cart
              </button>
              <BuyNowButton product={product} quantity={qtyDisplay} />
            </div>
          </div>
        </div>

        <div className="mt-[120px]">
          <h2 className="text-center m-[50px] text-[28px] font-semibold text-fg-1 font-playfair">
            You may also like
          </h2>
          <div className="relative h-[300px] w-full overflow-x-hidden">
            <div
              className="absolute whitespace-nowrap
          will-change-transform animate-marquee md:w-[200%] md:animate-marquee-fast flex justify-center gap-[15px] mt-5 w-[550%] running hover:paused"
            >
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
