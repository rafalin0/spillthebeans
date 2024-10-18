import { SanityDocument } from "next-sanity";

export type CartProduct = SanityDocument & { qty: number };
