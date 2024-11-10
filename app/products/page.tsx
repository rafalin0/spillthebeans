import Product from "@/components/Product";
import { client } from "@/sanity/lib/client";
import { PRODUCTS_QUERY } from "@/sanity/queries";
import { SanityDocument } from "next-sanity";
import React from "react";

const Products = async () => {
  const products = await client.fetch<SanityDocument[]>(
    PRODUCTS_QUERY,
    {},
    { next: { revalidate: 30 } }
  );

  return (
    <div className="md:mx-5 flex flex-col gap-10">
      <div className="basis-1/3 pt-10">
        <h1 className="font-playfair text-fg-2 text-3xl font-semibold text-center">
          Highest Quality Beans
        </h1>
      </div>

      <div className="basis-2/3 bg-bg-6 rounded-3xl flex flex-wrap gap-10 justify-center p-20">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;