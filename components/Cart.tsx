import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";

import { useStore } from "@/store/store";
import CheckoutBtn from "./CheckoutBtn";
import CartItem from "./CartItem";

const Cart = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { cart, count, setShowCart, total } = useStore((state) => state);

  return (
    <div
      className="w-screen bg-black text-fg-1 bg-opacity-50 fixed right-0 top-0 z-[2000] transition-all duration-100 ease-in-out"
      ref={cartRef}
    >
      <div className="w-full p-4 h-screen md:w-[600px] bg-bg-4 float-right md:py-5 md:px-[10px] relative flex flex-col justify-between">
        <button
          type="button"
          className="basis-[10%] mt-0 flex items-center text-base md:text-lg font-medium cursor-pointer gap-0.5 ml-[10px] bg-transparent "
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="ml-[10px]">Your Cart</span>
          <span className="ml-[10px] text-fg-5">( {count} items )</span>
        </button>

        {cart.length < 1 && (
          <div className="basis-[90%] m-10 text-center text-mg-3 flex flex-col align-center justify-center">
            <div>
              <AiOutlineShopping size={100} className="m-auto " />
              <h3 className="font-semibold text-base md:text-xl mb-5">
                Your shopping bag is empty
              </h3>
            </div>
            <Link href="/products">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="w-full max-w-[400px] py-[10px] px-3 rounded-sm text-sm md:text-lg mt-[10px] uppercase bg-fg-3 text-bg-4 cursor-pointer transform scale-100 transition-transform duration-500 ease-in-out hover:scale-110"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        {cart.length >= 1 && (
          <div className="mt-2.5 md:mt-[15px] overflow-auto h-full pt-7.5 pb-15 md:mb-2 gap-1 basis-auto">
            {cart.map((item) => (
              <CartItem product={item} key={item._id} />
            ))}
          </div>
        )}

        {cart.length >= 1 && (
          <div className="p-4 md:pt-5 w-full  gap-3 flex flex-col border-t bg-bg-4 border-mg-3">
            <div className="text-lg flex justify-between md:justify-end gap-3">
              <h3>Subtotal:</h3>
              <h3 className="font-bold md:text-xl">₱ {total}</h3>
            </div>

            <CheckoutBtn />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
