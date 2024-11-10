import Link from "next/link";

const Canceled = () => (
  <div className="text-center my-20">
    <h1 className="text-4xl font-bold">Payment Canceled</h1>
    <p className="text-lg my-4">
      You canceled your payment. You can try again later.
    </p>
    <Link href="/" className="text-fg-5">
      Go back to Home
    </Link>
  </div>
);

export default Canceled;
