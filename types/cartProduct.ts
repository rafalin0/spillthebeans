import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";

export interface CartProduct extends SanityDocument {
  _id: string;
  name: string;
  slug: string;
  priceId: string;
  price: number;
  image: SanityImageSource;
  qty: number;
}
