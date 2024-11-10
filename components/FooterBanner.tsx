import { SanityDocument } from "next-sanity";
import React from "react";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

type FooterBannerProps = {
  footerBanner: SanityDocument;
};

const FooterBanner: React.FC<FooterBannerProps> = ({
  footerBanner: {
    buttonText,
    desc,
    smallText,
    midText,
    largeText1,
    largeText2,
    discount,
    saleTime,
    prodName,
    prodImage,
    prodSlug,
  },
}) => {
  const imageUrl = urlFor(prodImage).url();

  return (
    <div className="h-[560px] mt-20 py-[80px] md:py-[15px] lg:py-[50px] px-10 bg-fg-3 rounded-3xl relative md:h-[400px] md:mt-[120px] w-full text-bg-1 overflow-hidden md:overflow-visible">
      <div className="flex flex-wrap gap-5 md:flex-nowrap md:gap-0 md:justify-between">
        <div>
          <p className="font-playfair text-lg">{discount}</p>
          <h3 className="font-black text-[50px] md:text-[80px] uppercase text-bg-4 font-playfair">
            {largeText1}
          </h3>
          <h3 className="font-black text-[50px] md:text-[80px] uppercase leading-4 text-bg-4 font-playfair">
            {largeText2}
          </h3>
          <p className="leading-10 mt-6 md:mt-12 font-playfair text-lg">
            {saleTime}
          </p>
        </div>
        <div className="leading-snug text-color-bg2">
          <p className="text-lg">{smallText}</p>
          <h3 className="text-[45px] md:text-6xl font-extrabold">{midText}</h3>
          <p className="text-sm font-light leading-1 mt-5 mb-5">{desc}</p>
          <Link href={`/products/${prodSlug.current}`}>
            <button className="rounded-sm py-[10px] px-4 bg-bg-5 text-fg-2 hover:text-bg-6 text-lg font-bold cursor-pointer ">
              {buttonText}
            </button>
          </Link>
        </div>

        <img
          src={imageUrl}
          alt={prodName}
          className="absolute w-[35%] max-w-[350px] md:min-w-[280px] md:w-[25%] right-[5%] top-[6%] md:right-[40%] md:-top-[10%] xl:-top-[18%] dark:dark-image "
        />
      </div>
    </div>
  );
};

export default FooterBanner;
