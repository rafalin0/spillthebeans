"use client";

import React from "react";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { urlFor } from "@/sanity/lib/image";
import Product from "@/components/Product";
import ProductDescription from "./ProductDescription";
import ActionButtons from "./ActionButtons";

interface ProductDetailsProps {
  product: SanityDocument;
  products: SanityDocument[];
}

const ProductDetails = ({ product, products }: ProductDetailsProps) => {
  const { name, image, description, price } = product;
  const productImageUrl = urlFor(image).url();

  return (
    <div className="bg-bg-6 rounded-3xl md:mx-5 md:mt-3">
      <div className="max-w-[1400px] mx-auto w-full p-5">
        <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-10 md:py-10 text-fg-1">
          <div className="mx-auto max-h-[40vh] md:max-h-[55vh] w-full md:basis-[45%] cursor-pointer bg-radial-gradient transition duration-300 ease-in-out hover: hover:bg-rg-hover rounded-2xl">
            <Image
              src={productImageUrl}
              alt={name}
              width={900}
              height={1200}
              className="h-full w-auto p-10 m-auto dark:dark-image"
            />
          </div>
          <div className="basis-full md:basis-[55%]">
            <div className="flex flex-col">
              <h1 className="text-lg md:text-2xl font-bold">{name}</h1>

              <div className="text-fg-5 mt-2.5 flex gap-1.5 items-center">
                <div className="flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <p className="text-fg-1 font-medium text-sm md:text-base">
                  (20)
                </p>
              </div>

              <h3 className="mt-2.5 font-bold text-sm md:text-base">
                Details:
              </h3>
              <ProductDescription
                description={description}
                classes="mt-2.5 text-sm md:text-base"
              />
              <p className="md:mt-8 order-first mb-6 md:order-last font-bold text-2xl text-fg-5 items-center">
                ₱ {price}{" "}
                <span className="text-xs md:text-sm  text-fg-1 font-light">
                  / 250 grams
                </span>
              </p>
            </div>
            <ActionButtons product={product} />
          </div>
        </div>

        <div className="mt-16 md:mt-[120px]">
          <h2 className="text-center md:m-[50px] text-lg md:text-2xl font-bold text-fg-1 font-playfair">
            You may also like
          </h2>
          <div className="relative h-[300px] w-full overflow-x-hidden mt-5 md:mt-0">
            <div className="absolute whitespace-nowrap will-change-transform animate-marquee md:w-[200%] md:animate-marquee-fast flex justify-center gap-[15px] mt-5 w-[650%] running hover:paused">
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
