import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SanityDocument } from "next-sanity";

import { urlFor } from "@/sanity/lib/image";

type HeroBannerProps = {
  heroBanner: SanityDocument;
};

const HeroBanner: React.FC<HeroBannerProps> = ({
  heroBanner: {
    buttonText,
    desc,
    smallText,
    midText,
    largeText1,
    largeText2,
    prodName,
    prodImage,
    prodSlug,
  },
}) => {
  const imageUrl = urlFor(prodImage).url();

  return (
    <div className="relative h-[560px] leading-snug md:leading-[0.9] w-full py-[100px] px-[40px] bg-radial-gradient rounded-3xl md:h-[500px] overflow-hidden text-fg-1">
      <div>
        <p className="text-xl">{smallText}</p>
        <h3 className="text-[40px] md:text-6xl font-bold ">{midText}</h3>
        <h1 className="text-bg-4 text-[50px] md:text-[10em] uppercase font-bold z-0 absolute font-playfair">
          {largeText1} {largeText2}
        </h1>
        <Image
          src={imageUrl}
          alt={prodName}
          className="absolute -rotate-12 md:-top-[15%] md:-right-[10%] xl:right-[20%] md:h-[750px] h-[50%] top-[30%] right-0 dark:dark-image"
        />

        <Link href={`/products/${prodSlug.current}`}>
          <button
            type="button"
            className=" absolute py-[10px] px-4 text-bg-1 text-lg cursor-pointer mt-[160px] md:mt-[200px] md:py-4 md:px-8 rounded-sm bg-fg-6 hover:bg-fg-2 z-10"
          >
            {buttonText}
          </button>
        </Link>

        <div className="absolute right-[10%] w-[300px] leading-snug flex flex-col bottom-[60px] md:bottom-[5%] md:right-[3%] font-monts">
          <h5 className="mb-3 font-bold text-base self-end">Description</h5>
          <p className="text-end">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
