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

export async function getProduct(slug: string) {
  const product = await client.fetch(PRODUCT_QUERY, { slug });
  const relatedProducts = await client.fetch(PRODUCTS_QUERY);
  return { product, relatedProducts };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { product, relatedProducts } = await getProduct(params.slug);

  // Pass the product and related products as props to the client-side component
  return <ProductDetails product={product} products={relatedProducts} />;
}
