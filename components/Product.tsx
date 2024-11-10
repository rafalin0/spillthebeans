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
      <Link href={`/products/${slug.current}`}>
        <div className="cursor-pointer transform scale-100 transition-transform duration-500 ease text-fg-1 hover:scale-110">
          <div className="bg-bg-2 rounded-3xl transform scale-100 transition-transform duration-500 ease shadow-md">
            <img
              src={imageUrl}
              width={250}
              alt={name}
              className="mx-auto px-20 py-6 dark:dark-image"
            />
          </div>

          <p className="font-medium">{name}</p>
          <p className="font-extrabold mt-1">Php {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
