"use client";

import Link from "next/link";

const Success = () => {
  return (
    <div className="text-center my-20">
      <h1 className="text-4xl font-bold">Payment Successful!</h1>
      <p className="text-lg my-4">Thank you for your purchase!</p>
      <Link href="/" className="text-fg-5">
        Go back to Home
      </Link>
    </div>
  );
};

export default Success;
