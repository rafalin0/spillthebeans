import React from "react";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/lib/client";

import HeroBanner from "@/components/HeroBanner";
import FooterBanner from "@/components/FooterBanner";
import Product from "@/components/Product";

import { PRODUCTS_QUERY, BANNER_QUERY } from "@/sanity/queries";

const Home = async () => {
  const products = await client.fetch<SanityDocument[]>(PRODUCTS_QUERY, {});
  const bannerData = await client.fetch<SanityDocument[]>(BANNER_QUERY, {});
  const banner = bannerData[0];

  return (
    <div className="max-w-[1400px] mx-auto w-full p-5">
      <HeroBanner heroBanner={banner} />
      <div className="my-14">
        <div className="text-center my-10 mx-0 text-fg-1">
          <h2 className="text-xl md:text-3xl md:leading-normal font-bold font-playfair">
            Best Selling Products
          </h2>
          <p className="text-xs md:text-sm font-normal">
            Ducimus quos molestias labore omnis.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[15px] mt-5 w-full">
          {products.slice(0, 4).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>

      <FooterBanner footerBanner={banner} />
    </div>
  );
};

export default Home;
