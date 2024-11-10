"use client";
import getStripe from "@/stripe/getStripe";

import { useStore } from "@/store/store";
import { CartProduct } from "@/types/cartProduct";

const CheckoutButton = () => {
  const { cart, setShowCart, clearCart } = useStore((state) => state);

  const handleCheckout = async () => {
    const stripe = await getStripe();
    if (!stripe || cart.length === 0) return;

    const lineItems = cart.map((item: CartProduct) => ({
      quantity: item.qty,
      price: item.priceId,
    }));

    console.log("line items:", lineItems);
    try {
      const response = await fetch("/api/stripe/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineItems }),
      });

      const data = await response.json();
      if (!response.ok || !data.result?.id) {
        throw new Error("Failed to create checkout session");
      }
      setShowCart(false);
      clearCart();
      await stripe.redirectToCheckout({ sessionId: data.result.id });
    } catch (error) {
      console.error("Cart checkout failed:", error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="mx-auto w-full max-w-[350px] py-[10px] px-3 rounded-sm text-xl mt-[10px] uppercase bg-fg-1 text-bg-4 cursor-pointer hover:bg-fg-2"
    >
      Check Out
    </button>
  );
};

export default CheckoutButton;
