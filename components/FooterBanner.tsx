import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SanityDocument } from "next-sanity";

import { urlFor } from "@/sanity/lib/image";
import BannerButton from "./BannerButton";

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
    <div className="h-[560px] mt-20 bg-fg-3 rounded-3xl relative md:h-[400px] md:mt-[120px] w-full text-bg-1 overflow-hidden md:overflow-visible z-0 border-2 border-fg-1">
      <div className="flex flex-wrap gap-5 md:flex-nowrap md:gap-0 md:justify-between  overflow-hidden w-full h-full">
        <div className="relative z-0 p-8 h-1/2 md:h-full flex flex-col justify-start md:justify-between w-full overflow-hidden rounded-3xl">
          <p className="text-9xl wrap min-w-full md:text-8xl font-playfair text-end md:text-start text-bg-5 md:text-bg-6 font-black md:mt-6 order-last md:order-1">
            {discount}
          </p>
          <div className="font-black text-9xl md:text-[190px] p-5 bg-bg-5 md: uppercase text-fg-4 font-playfair absolute bottom-[50%] -left-[30%] md:bottom-[28%] md:-left-[7%] -rotate-[20deg] md:-rotate-[15deg] -z-10 opacity-20">
            <h3 className="font-playfair md:leading-[10rem] ">{largeText1}</h3>
            <h3 className="font-playfair md:leading-[10rem] ">{largeText2}</h3>
          </div>
          <div className="flex flex-col text-bg-6 order-1">
            <p className="text-lg font-semibold">{smallText}</p>
            <p className="hidden md:block text-base  font-medium leading-1 mt-5 mb-5 text-wrap w-[50%]">
              {desc}
            </p>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 h-auto gap-10 md:gap-0 md:h-full leading-snug text-bg-1 z-40 w-full md:w-1/2 p-8 flex flex-col justify-between align-bottom md:justify-around items-start md:items-end">
          <div className="flex flex-col items-start md:items-end md:justify-end gap-5 leading-none w-1/2 md:w-full">
            <h3 className="text-[45px] md:text-6xl font-bold">{midText}</h3>
            <p className="font-playfair md:text-4xl z-10">{saleTime}</p>
          </div>

          <Link href={`/products/${prodSlug.current}`}>
            <BannerButton buttonText={buttonText} containerClasses="bg-bg-1 md:mt-5" buttonClasses=" border-bg-1 text-bg-1 bg-fg-5 text-lg font-bold z-40"/>
          </Link>
        </div>

        <Image
          src={imageUrl}
          alt={prodName}
          width={900}
          height={1200}
          className="absolute max-w-[60%]  lg:rotate-0 md:max-w-[350px] md:min-w-[280px] md:w-[25%] -right-[8%] -rotate-12 top-[50%] md:right-[40%] md:-top-[10%] xl:-top-[18%] dark:dark-image z-50"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
