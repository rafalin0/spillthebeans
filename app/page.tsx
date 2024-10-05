import React from "react";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/lib/client";

import HeroBanner from "@/components/HeroBanner";
import FooterBanner from "@/components/FooterBanner";
import Product from "@/components/Product";

const PRODUCTS_QUERY = '*[_type == "product"]';
const BANNER_QUERY = '*[_type == "banner"]';

const options = { next: { revalidate: 30 } };

const Home = async () => {
  const products = await client.fetch<SanityDocument[]>(
    PRODUCTS_QUERY,
    {},
    options
  );
  const bannerData = await client.fetch<SanityDocument[]>(
    BANNER_QUERY,
    {},
    options
  );
  const banner = bannerData[0];

  return (
    <div>
      <HeroBanner heroBanner={banner} />
      <div className="text-center my-10 mx-0 text-color-1">
        <h2 className="text-[40px] font-extrabold">Best Selling Products</h2>
        <p className="text-base font-extralight">
          Ducimus quos molestias labore omnis.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[15px] mt-5 w-full">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={banner} />
    </div>
  );
};

export default Home;
