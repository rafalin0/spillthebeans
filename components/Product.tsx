import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React from "react";

import { urlFor } from "@/sanity/lib/image";

type ProductProps = {
  product: SanityDocument;
};

const Product: React.FC<ProductProps> = ({
  product: { image, name, slug, price },
}) => {
  const imageUrl = urlFor(image).url();
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="cursor-pointer transform scale-100 transition-transform duration-500 ease text-color-7 hover:scale-110">
          <img
            src={imageUrl}
            width={250}
            height={250}
            alt={name}
            className="rounded-lg bg-color-10 transform scale-100 transition-transform duration-500 ease mx-auto px-20 py-6"
          />
          <p className="font-medium">{name}</p>
          <p className="font-extrabold mt-1">Php {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
