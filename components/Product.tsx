import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SanityDocument } from "next-sanity";

import { urlFor } from "@/sanity/lib/image";

type ProductProps = {
  product: SanityDocument;
  width?: string; // Accept width as a prop
};

const Product: React.FC<ProductProps> = ({
  product: { image, name, slug, price },
  width = "w-[150px] md:w-[250px]", // Default width if not provided
}) => {
  const imageUrl = urlFor(image).url();

  return (
    <Link href={`/products/${slug.current}`}>
      <div
        className={`cursor-pointer transform scale-100 transition-transform duration-500 ease text-fg-1 hover:scale-110 ${width}`}
      >
        <div
          className={`bg-bg-2 flex h-44 rounded-3xl transform scale-100 transition-transform duration-500 ease shadow-md  ${width}`}
        >
          <Image
            src={imageUrl}
            width={250}
            height={700}
            alt={name}
            className="m-auto h-2/3 dark:dark-image object-contain"
          />
        </div>

        <p className="font-medium truncate w-full">{name}</p>
        <p className="font-extrabold mt-1">Php {price}</p>
      </div>
    </Link>
  );
};

export default Product;
