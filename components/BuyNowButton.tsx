"use client";
import getStripe from "@/stripe/getStripe";

import { SanityDocument } from "next-sanity";

const BuyNowButton = ({
  product,
  quantity,
}: {
  product: SanityDocument;
  quantity: number;
}) => {
  const handleCheckout = async () => {
    const stripe = await getStripe();
    if (!stripe) return;

    const lineItems = [
      {
        quantity: quantity,
        price: product.priceId,
      },
    ];

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

      await stripe.redirectToCheckout({ sessionId: data.result.id });
    } catch (error) {
      console.error("Cart checkout failed:", error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-[150px] md:w-[200px] py-2.5 px-5 mt-10 text-[18px] font-medium text-white bg-fg-2  transform transition-transform duration-500 ease-linear hover:scale-110 cursor-pointer rounded-sm"
    >
      Buy Now
    </button>
  );
};

export default BuyNowButton;
