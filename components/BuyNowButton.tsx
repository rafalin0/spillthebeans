"use client";
import getStripe from "@/stripe/getStripe";

import { SanityDocument } from "next-sanity";

const BuyNowButton = ({
  product,
  quantity,
  classes,
}: {
  product: SanityDocument;
  quantity: number;
  classes: string;
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
    <button onClick={handleCheckout} className={classes}>
      Buy Now
    </button>
  );
};

export default BuyNowButton;
