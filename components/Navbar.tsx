"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { useStore } from "@/store/store";
import { ModeToggle } from "./ui/ModeToggle";
import Cart from "./Cart";

const Navbar = () => {
  const { count, setShowCart, showCart } = useStore((state) => state);
  return (
    <div className="flex justify-between my-2 mx-5 relative">
      <ModeToggle />
      <p className="text-color-8 text-lg">
        <Link href="/">Spill the Beans</Link>
      </p>
      <button
        onClick={() => setShowCart(true)}
        type="button"
        className="text-2xl text-color-8 cursor-pointer relative transition-transform duration-500 ease hover:transform hover:scale-110"
      >
        <AiOutlineShopping />
        <span className="absolute -right-2 top-2 text-xs text-[#eeeeee] bg-[#f02d34] w-[18px] h-[18px] rounded-full text-center font-semibold">
          {count}
        </span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
