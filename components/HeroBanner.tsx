import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SanityDocument } from "next-sanity";

import { urlFor } from "@/sanity/lib/image";
import BannerButton from "./BannerButton";

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
    <div className="relative overflow-hidden bg-radial-gradient rounded-3xl  h-[95svh] w-full p-[5%] md:py-[100px] md:px-10 md:h-[500px] text-fg-1 leading-[0.9]">
      <div className="mt-3 md:mt-0 flex flex-col justify-between">
        <div className="flex flex-col mt-2 md:mt-0 z-20 md:z-0">
          <p className=" text-base md:text-xl order-2 md:order-1 ">
            {smallText}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold md:order-2">
            {midText}
          </h2>
        </div>

        <h1 className="text-bg-4 text-[5em] md:text-[10em] uppercase font-bold z-0 absolute font-playfair bottom-[15%] md:bottom-[5%]">
          {largeText1} {largeText2}
        </h1>
        <Image
          src={imageUrl}
          alt={prodName}
          width={900}
          height={1200}
          className="max-w-[55%] md:max-w-[35%] absolute md:-rotate-12 md:-top-[15%] md:-right-[10%] xl:right-[20%] top-[16%] right-[22.5%] dark:dark-image"
        />

        <Link href={`/products/${prodSlug.current}`}>
          <BannerButton buttonText={buttonText} containerClasses="bg-fg-4 absolute bottom-[5%] right-[5%] md:bottom-[7%] md:right-[84%]" buttonClasses="bg-fg-6 z-10 text-bg-1 text-base md:text-lg border-fg-4"/>
        </Link>
      </div>
      <div className="absolute w-2/3 md:w-[300px] leading-snug flex flex-col bottom-[20%] md:bottom-[5%] right-[5%] md:right-[3%] font-monts">
        <h2 className="mb-3 font-bold text-sm md:text-base self-end">
          Description
        </h2>
        <p className="text-sm md:text-base text-end">{desc}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
