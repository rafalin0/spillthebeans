"use client";

import React, { useState } from "react";
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

interface ProductDetailsProps {
  product: SanityDocument;
  products: SanityDocument[];
}

const ProductDetails = ({ product, products }: ProductDetailsProps) => {
  const { addProduct: handleAddToCart } = useStore((state) => state);
  const { name, image, description, price } = product;

  const productImageUrl = urlFor(image).url();

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prevQty) => prevQty + 1);
  const handleDecrease = () =>
    setQuantity((prevQty) => Math.max(prevQty - 1, 1));

  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap gap-10 m-5 md:m-10 mt-14 text-[#324d67]">
        <div className="image-container h-96 w-96  md:h-[420px] md:w-[420px] xl:h-[600px] xl:w-[600px] cursor-pointer bg-[#ebebeb] transition duration-300 ease-in-out hover:bg-[#f02d34] rounded-sm">
          <img
            src={productImageUrl}
            className="h-[350px]  md:h-[400px] xl:h-[560px] w-auto p-5 mx-auto"
            alt={name}
          />
        </div>
        <div className="basis-1/2">
          <h1 className="text-[#324d67] text-[28px] font-bold">{name}</h1>

          <div className="text-[#f02d34] mt-2.5 flex gap-1.5 items-center">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-[#324d67]">(20)</p>
          </div>

          <h4 className="mt-2.5 font-bold">Details: </h4>
          <p className="mt-2.5">{description}</p>
          <p className="mt-8 font-bold text-[26px] text-[#f02d34]">
            Php {price}
          </p>
          <div className="flex gap-5 mt-2.5 items-center text-center">
            <h3 className=" font-bold">Quantity: </h3>
            <p className="border border-gray-300 flex rounded-md">
              <span
                className=" text-[#f02d34] text-base py-1.5 px-3 m-auto cursor-pointer"
                onClick={handleDecrease}
              >
                <AiOutlineMinus />
              </span>
              <span className="border-x border-x-gray-300 text-xl py-1.5 px-3">
                {quantity}
              </span>
              <span
                className="text-[#31a831] text-base py-1.5 px-3 m-auto cursor-pointer"
                onClick={handleIncrease}
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="flex gap-7">
            <button
              type="button"
              className="w-[150px] md:w-[200px] py-2.5 px-5 border border-[#f02d34] mt-10 text-[18px] font-medium bg-white text-[#f02d34]  transform transition-transform duration-500 ease-linear hover:scale-110 cursor-pointer"
              onClick={() => {
                handleAddToCart({ ...product, qty: quantity });
              }}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="w-[150px] md:w-[200px] py-2.5 px-5 mt-10 text-[18px] font-medium text-white bg-[#f02d34]  transform transition-transform duration-500 ease-linear hover:scale-110 cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[120px]">
        <h2 className="text-center m-[50px] text-[#324d67] text-[28px] font-semibold">
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
  );
};

export default ProductDetails;
