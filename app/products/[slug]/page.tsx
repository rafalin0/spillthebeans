import { type SanityDocument } from "next-sanity";
import ProductDetails from "@/components/ProductDetails";
import { client } from "@/sanity/lib/client";
import { PRODUCTS_QUERY, PRODUCT_QUERY } from "@/sanity/queries";

// Fetch product data from Sanity based on the slug
export async function generateStaticParams() {
  const products: SanityDocument[] = await client.fetch(PRODUCTS_QUERY);
  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

interface PageProps {
  params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
  // Fetch product and related products using async functions
  const { slug } = params;
  const product = await client.fetch(PRODUCT_QUERY, { slug });
  const relatedProducts = await client.fetch(PRODUCTS_QUERY);

  return <ProductDetails product={product} products={relatedProducts} />;
};

export default Page;
