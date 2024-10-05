import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React from "react";

import { urlFor } from "@/sanity/lib/image";

type HeroBannerProps = {
  heroBanner: SanityDocument;
};

const HeroBanner: React.FC<HeroBannerProps> = ({ heroBanner }) => {
  const heroImageUrl = urlFor(heroBanner.image)?.width(550).url();

  return (
    <div className="relative h-[560px] leading-snug md:leading-[0.9] w-full py-[100px] px-[40px] bg-color-10 rounded-2xl md:h-[500px] overflow-hidden">
      <div>
        <p className="text-xl">{heroBanner.smallText}</p>
        <h3 className="text-[40px] md:text-6xl font-bold">
          {heroBanner.midText}
        </h3>
        <h1 className="text-color-9 text-[50px] md:text-[10em] uppercase font-bold z-0 absolute">
          {heroBanner.largeText1} {heroBanner.largeText2}
        </h1>
        <img
          src={heroImageUrl}
          alt={heroBanner.product}
          className="absolute -rotate-12 md:-top-[15%] md:-right-[10%] xl:right-[20%] md:h-[750px] h-[50%] top-[30%] right-0"
        />

        <Link href={`/product/${heroBanner.product}`}>
          <button
            type="button"
            className="absolute py-[10px] px-4 text-white text-lg font-medium cursor-pointer mt-[190px] md:mt-[200px] rounded-sm bg-color-8 z-[1000]"
          >
            {heroBanner.buttonText}
          </button>
        </Link>

        <div className="absolute right-[10%] w-[300px] leading-snug flex flex-col text-color-7 bottom-[60px] md:bottom-[5%] md:right-[3%]">
          <h5 className="mb-3 font-bold text-base self-end">Description</h5>
          <p className="text-end">{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
