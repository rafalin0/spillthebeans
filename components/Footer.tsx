import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-fg-1 text-center mt-7 md:mt-20 2xl:mt-40 py-[30px] px-[10px] font-bold flex flex-col items-center gap-[10px] justify-center">
      <p>© 2024 Rafa Lin. All rights reserved.</p>
      <p className="text-3xl flex gap-[10px]">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </footer>
  );
};

export default Footer;
