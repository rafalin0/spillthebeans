"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FiCoffee } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

import { useStore } from "@/store/store";
import { ModeToggle } from "./ui/ModeToggle";
import Cart from "./Cart";

import logo from "/public/assets/logo.png";
import type { IconType } from "react-icons";
import { usePathname } from "next/navigation";

interface NavbarIconProps {
  href: string;
  icon: IconType;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({ href, icon: Icon }) => {
  const alt=`${href === "/" ? "Home" : "Products"}`;
  
  return (
    <Link
      href={href}
      className="scale-hover hover:text-fg-5 cursor-pointer my-auto "
      aria-label={`Go to ${alt}`}
    >
      <Icon
        className={`text-2xl ${href === usePathname() ? "scale-120 md:scale-125 text-fg-5" : ""}`}
        alt={alt}
      />
    </Link>
)};

const Navbar = () => {
  const { count, setShowCart, showCart } = useStore((state) => state);

  return (
    <div className="flex justify-evenly md:justify-center md:gap-16 py-2 md:pt-5 md:mx-5 text-fg-1 text-lg fixed bottom-0 bg-bg-1 md:bg-transparent rounded-tl-2xl rounded-tr-2xl w-full md:relative z-50">
      {/* Left section */}

      <NavbarIcon href="/" icon={IoHomeOutline} />
      <NavbarIcon href="/products" icon={FiCoffee} />

      {/* Center section */}

      <Link href="/" className="flex items-center">
        <Image
          src={logo}
          alt="Logo"
          width={45}
          height={45}
          className="hover:rotate-90 transition-transform duration-500"
        />
      </Link>
      <span className="sr-only">Go to Home</span>

      {/* Right section */}

      <button
        onClick={() => setShowCart(true)}
        type="button"
        className="text-2xl relative scale-hover hover:text-fg-5"
        aria-label="Toggle Cart"
      >
        <LuShoppingCart />
        {count > 0 && (
          <span className="absolute -right-5 top-0 text-xs text-bg-6 bg-[#f0642d] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
            {count}
          </span>
        )}
      </button>
      <ModeToggle />

      {/* Cart overlay */}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
